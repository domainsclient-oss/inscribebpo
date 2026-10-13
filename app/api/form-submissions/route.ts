import {
  appendSubmissionToSheet,
  emailSubmission,
  type FormSubmission,
} from "@/lib/form-submissions";

const maxRequestBytes = 12_000;

function readField(
  data: Record<string, unknown>,
  name: string,
  maxLength: number
): string | null {
  const value = data[name];
  if (value === undefined) return "";
  if (typeof value !== "string") return null;

  const normalized = value
    .replace(/[\u0000-\u0008\u000B\u000C\u000E-\u001F\u007F]/g, "")
    .trim();
  return normalized.length <= maxLength ? normalized : null;
}

function validateSubmission(
  value: unknown
): { submission: FormSubmission } | { error: string } {
  if (typeof value !== "object" || value === null || Array.isArray(value)) {
    return { error: "Please check the form fields and try again." };
  }

  const data = value as Record<string, unknown>;
  if (data.formType !== "proposal" && data.formType !== "case-study") {
    return { error: "This form could not be identified. Please refresh and try again." };
  }

  const honeypot = readField(data, "fax", 200);
  if (honeypot === null || honeypot.length > 0) {
    return { error: "This submission could not be accepted." };
  }

  const name = readField(data, "name", 120);
  const email = readField(data, "email", 254);
  const company = readField(data, "company", 200);
  const phone = readField(data, "phone", 50);
  const website = readField(data, "website", 500);
  const message = readField(data, "message", 5000);

  if (
    name === null ||
    email === null ||
    company === null ||
    phone === null ||
    website === null ||
    message === null
  ) {
    return { error: "Please check the form fields and try again." };
  }
  if (!name || !email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return { error: "Please provide your name and a valid email address." };
  }
  if (data.formType === "case-study" && !company) {
    return { error: "Please provide your company name." };
  }
  if (website) {
    try {
      const parsedWebsite = new URL(website);
      if (parsedWebsite.protocol !== "http:" && parsedWebsite.protocol !== "https:") {
        return { error: "Please provide a valid website address." };
      }
    } catch {
      return { error: "Please provide a valid website address." };
    }
  }

  return {
    submission: {
      formType: data.formType,
      name,
      email,
      company,
      phone,
      website,
      message,
    },
  };
}

export async function POST(request: Request) {
  const contentType = request.headers.get("content-type") ?? "";
  if (contentType.split(";")[0]?.trim().toLowerCase() !== "application/json") {
    return Response.json(
      { message: "Please submit the form using the website form." },
      { status: 415 }
    );
  }

  const contentLength = Number(request.headers.get("content-length") ?? 0);
  if (contentLength > maxRequestBytes) {
    return Response.json(
      { message: "The form submission is too large." },
      { status: 413 }
    );
  }

  const body = await request.text();
  if (Buffer.byteLength(body, "utf8") > maxRequestBytes) {
    return Response.json(
      { message: "The form submission is too large." },
      { status: 413 }
    );
  }

  let parsedBody: unknown;
  try {
    parsedBody = JSON.parse(body);
  } catch {
    return Response.json(
      { message: "The form submission could not be read. Please try again." },
      { status: 400 }
    );
  }

  const validation = validateSubmission(parsedBody);
  if ("error" in validation) {
    return Response.json({ message: validation.error }, { status: 400 });
  }

  const results = await Promise.allSettled([
    appendSubmissionToSheet(validation.submission),
    emailSubmission(validation.submission),
  ]);
  const spreadsheetSaved = results[0].status === "fulfilled";
  const emailSent = results[1].status === "fulfilled";

  if (!spreadsheetSaved) {
    const reason = results[0].status === "rejected" ? results[0].reason : null;
    console.error(
      "[form-submissions] Google Sheets delivery failed.",
      reason instanceof Error ? reason.message : "Unknown error"
    );
  }
  if (!emailSent) {
    const reason = results[1].status === "rejected" ? results[1].reason : null;
    console.error(
      "[form-submissions] Email delivery failed.",
      reason instanceof Error ? reason.message : "Unknown error"
    );
  }

  if (spreadsheetSaved && emailSent) {
    return Response.json({
      message: "Your request was submitted successfully.",
      spreadsheetSaved,
      emailSent,
    });
  }

  if (spreadsheetSaved || emailSent) {
    const message = spreadsheetSaved
      ? "Your request was recorded, but the email notification could not be sent. Please do not submit it again; contact sales@inscribebpo.com if needed."
      : "The email notification was sent, but the spreadsheet could not be updated. Please do not submit it again; contact sales@inscribebpo.com if needed.";
    return Response.json(
      { message, spreadsheetSaved, emailSent },
      { status: 502 }
    );
  }

  return Response.json(
    {
      message:
        "We could not submit your request. Please try again or contact sales@inscribebpo.com.",
      spreadsheetSaved,
      emailSent,
    },
    { status: 502 }
  );
}

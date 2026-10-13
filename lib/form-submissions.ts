import { createSign } from "node:crypto";
import { contact } from "@/lib/site";

export type FormSubmission = {
  formType: "proposal" | "case-study";
  name: string;
  email: string;
  company: string;
  phone: string;
  website: string;
  message: string;
};

const proposalSheetHeaders = [
  "Timestamp",
  "Name",
  "Email",
  "Phone number",
  "Your website",
  "Your Message Here",
];

const caseStudySheetHeaders = [
  "Timestamp",
  "Your Name",
  "Your Email",
  "Company",
];

const serviceRequestTimeoutMs = 15_000;

function requiredEnvironmentVariable(name: string) {
  const value = process.env[name]?.trim();
  if (!value) {
    throw new Error(`Missing required environment variable: ${name}`);
  }
  return value;
}

function encodeBase64Url(value: string | Buffer) {
  return Buffer.from(value).toString("base64url");
}

async function googleRequestError(response: Response, operation: string) {
  const body = await response.text();
  let details = "";

  try {
    const result: unknown = JSON.parse(body);
    if (typeof result === "object" && result !== null) {
      const error = "error" in result ? result.error : null;
      if (typeof error === "object" && error !== null && "message" in error) {
        const message =
          typeof error.message === "string" ? error.message : "";
        const status =
          "status" in error && typeof error.status === "string"
            ? error.status
            : "";
        details = [status, message].filter(Boolean).join(": ");
      } else if (
        typeof result === "object" &&
        "error_description" in result &&
        typeof result.error_description === "string"
      ) {
        details = result.error_description;
      }
    }
  } catch {
    // Keep the HTTP status as the diagnostic when Google returns non-JSON.
  }

  const safeDetails = details
    .replace(/[\u0000-\u001F\u007F]/g, " ")
    .slice(0, 500);
  return new Error(
    `${operation} failed (${response.status})${safeDetails ? `: ${safeDetails}` : ""}`
  );
}

async function getGoogleAccessToken() {
  const clientEmail = requiredEnvironmentVariable(
    "GOOGLE_SHEETS_CLIENT_EMAIL"
  );
  const privateKey = requiredEnvironmentVariable(
    "GOOGLE_SHEETS_PRIVATE_KEY"
  ).replace(/\\n/g, "\n");
  const now = Math.floor(Date.now() / 1000);
  const unsignedToken = [
    encodeBase64Url(JSON.stringify({ alg: "RS256", typ: "JWT" })),
    encodeBase64Url(
      JSON.stringify({
        iss: clientEmail,
        scope: "https://www.googleapis.com/auth/spreadsheets",
        aud: "https://oauth2.googleapis.com/token",
        iat: now,
        exp: now + 3600,
      })
    ),
  ].join(".");
  const signer = createSign("RSA-SHA256");
  signer.update(unsignedToken);
  const assertion = `${unsignedToken}.${signer.sign(privateKey).toString("base64url")}`;

  const response = await fetch("https://oauth2.googleapis.com/token", {
    method: "POST",
    headers: { "Content-Type": "application/x-www-form-urlencoded" },
    body: new URLSearchParams({
      grant_type: "urn:ietf:params:oauth:grant-type:jwt-bearer",
      assertion,
    }),
    signal: AbortSignal.timeout(serviceRequestTimeoutMs),
  });

  if (!response.ok) {
    throw await googleRequestError(response, "Google OAuth request");
  }

  const result: unknown = await response.json();
  if (
    typeof result !== "object" ||
    result === null ||
    !("access_token" in result) ||
    typeof result.access_token !== "string"
  ) {
    throw new Error("Google OAuth response did not contain an access token");
  }

  return result.access_token;
}

export async function appendSubmissionToSheet(submission: FormSubmission) {
  const spreadsheetId = requiredEnvironmentVariable("GOOGLE_SHEET_ID");
  const isCaseStudy = submission.formType === "case-study";
  const tabName = requiredEnvironmentVariable(
    isCaseStudy ? "GOOGLE_SHEET_TAB_NAME_2" : "GOOGLE_SHEET_TAB_NAME"
  );
  const headersForTab = isCaseStudy
    ? caseStudySheetHeaders
    : proposalSheetHeaders;
  const lastColumn = isCaseStudy ? "D" : "F";
  const accessToken = await getGoogleAccessToken();
  const sheetRange = `'${tabName.replace(/'/g, "''")}'`;
  const baseUrl =
    `https://sheets.googleapis.com/v4/spreadsheets/` +
    `${encodeURIComponent(spreadsheetId)}/values`;
  const headers = { Authorization: `Bearer ${accessToken}` };
  const headerRange = `${sheetRange}!A1:${lastColumn}1`;

  const existingHeaders = await fetch(
    `${baseUrl}/${encodeURIComponent(headerRange)}`,
    { headers, signal: AbortSignal.timeout(serviceRequestTimeoutMs) }
  );
  if (!existingHeaders.ok) {
    throw await googleRequestError(existingHeaders, "Google Sheets header lookup");
  }

  const headerResult: unknown = await existingHeaders.json();
  const currentHeaderRow =
    typeof headerResult === "object" &&
    headerResult !== null &&
    "values" in headerResult &&
    Array.isArray(headerResult.values) &&
    Array.isArray(headerResult.values[0])
      ? headerResult.values[0]
      : [];
  const hasExpectedHeaders = headersForTab.every(
    (header, index) => currentHeaderRow[index] === header
  );

  if (!hasExpectedHeaders) {
    const writeHeaders = await fetch(
      `${baseUrl}/${encodeURIComponent(headerRange)}?valueInputOption=RAW`,
      {
        method: "PUT",
        headers: {
          ...headers,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ values: [headersForTab] }),
        signal: AbortSignal.timeout(serviceRequestTimeoutMs),
      }
    );
    if (!writeHeaders.ok) {
      throw await googleRequestError(writeHeaders, "Google Sheets header write");
    }
  }

  const values = isCaseStudy
    ? [
        new Date().toISOString(),
        submission.name,
        submission.email,
        submission.company,
      ]
    : [
        new Date().toISOString(),
        submission.name,
        submission.email,
        submission.phone,
        submission.website,
        submission.message,
      ];
  const appendResponse = await fetch(
    `${baseUrl}/${encodeURIComponent(`${sheetRange}!A:${lastColumn}`)}:append?valueInputOption=RAW&insertDataOption=INSERT_ROWS`,
    {
      method: "POST",
      headers: {
        ...headers,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ values: [values] }),
      signal: AbortSignal.timeout(serviceRequestTimeoutMs),
    }
  );

  if (!appendResponse.ok) {
    throw await googleRequestError(appendResponse, "Google Sheets append");
  }
}

export async function emailSubmission(submission: FormSubmission) {
  const apiKey = requiredEnvironmentVariable("RESEND_API_KEY");
  const formLabel =
    submission.formType === "case-study" ? "Case study request" : "Proposal request";
  const fields = [
    ["Name", submission.name],
    ["Email", submission.email],
    ["Company", submission.company],
    ["Phone", submission.phone],
    ["Website", submission.website],
    ["Message", submission.message],
  ] as const;
  const text = [
    `New ${formLabel.toLowerCase()} submitted on inscribebpo.com`,
    "",
    ...fields.flatMap(([label, value]) =>
      value ? [`${label}: ${value}`] : []
    ),
  ].join("\n");

  const response = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${apiKey}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      from: "Inscribe BPO Website <sales@updates.inscribebpo.com>",
      to: [contact.email],
      reply_to: submission.email,
      subject: `Website ${formLabel}`,
      text,
    }),
    signal: AbortSignal.timeout(serviceRequestTimeoutMs),
  });

  if (!response.ok) {
    throw new Error(`Resend email request failed (${response.status})`);
  }
}

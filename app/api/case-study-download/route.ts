import { readFile } from "node:fs/promises";
import { join } from "node:path";

const fileName = "APS_Innovations_Case_Study.pdf";

export async function GET() {
  const filePath = join(process.cwd(), "public", "PDF", fileName);
  const file = await readFile(filePath);

  return new Response(file, {
    headers: {
      "Content-Type": "application/pdf",
      "Content-Disposition": `attachment; filename="${fileName}"`,
      "Cache-Control": "private, max-age=3600",
      "X-Content-Type-Options": "nosniff",
    },
  });
}

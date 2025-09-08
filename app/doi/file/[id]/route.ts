import { createOjsClient } from "@/lib/ojs";
import { NextResponse } from "next/server";

export async function GET(
  request: Request,
  { params }: { params: { id: string } },
) {
  const { id } = await params;

  try {
    // Fetch article data using the OJS client
    const article = await createOjsClient().submissions.get(
      Number(id),
      Number(id),
    );

    // Get the PDF file URL from the article's galleys
    const pdfUrl =
      article.galleys[0]?.file?.url ||
      article.galleys[0]?.file?.revisions?.[0]?.url;

    if (!pdfUrl) {
      return NextResponse.json({ error: "File not found" }, { status: 404 });
    }

    // Redirect to the actual file URL
    return NextResponse.redirect(pdfUrl);
  } catch (error) {
    console.error("Error fetching file:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 },
    );
  }
}

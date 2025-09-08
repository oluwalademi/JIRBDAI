import { createOjsClient } from "@/lib/ojs";
import { NextResponse } from "next/server";
import { ojsConfig } from "@/lib/ojs/config";

export async function GET(
  request: Request,
  { params }: { params: { id: string } },
) {
  const { id } = params;

  try {
    // Fetch article data using the OJS client
    const article = await createOjsClient().submissions.get(
      Number(id),
      Number(id),
    );

    const res = await fetch(
      `https://admin.universityjournals.com.ng/jigd/article/download/3/4/14`,
      {
        headers: {
          Authorization: `Bearer ${ojsConfig.ojsToken}`,
        },
      },
    );

    // Get the PDF file URL from the article's galleys
    const pdfUrl =
      article.galleys[0]?.urlPublished ||
      article.galleys[0]?.file?.revisions?.[0]?.url;

    if (!res) {
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

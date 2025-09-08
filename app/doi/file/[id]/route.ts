import { NextRequest, NextResponse } from "next/server";
import { ojsConfig } from "@/lib/ojs/config";

export async function GET(
  _req: NextRequest,
  { params }: { params: { id: string } },
) {
  try {
    const { id } = await params;

    // 1. Fetch submission details (to get its current publicationId)
    const submissionUrl = `${ojsConfig.ojsUrl}/submissions/${id}`;
    const submissionRes = await fetch(submissionUrl, {
      headers: {
        Authorization: `Bearer ${ojsConfig.ojsToken}`,
      },
    });

    if (!submissionRes.ok) {
      return NextResponse.json(
        { error: "Failed to fetch submission metadata" },
        { status: submissionRes.status },
      );
    }

    const submission = await submissionRes.json();
    const publicationId = submission?.currentPublicationId;
    if (!publicationId) {
      return NextResponse.json(
        { error: "No publication found for this submission" },
        { status: 404 },
      );
    }

    // 2. Fetch publication details
    const pubUrl = `${ojsConfig.ojsUrl}/submissions/${id}/publications/${publicationId}`;
    const pubRes = await fetch(pubUrl, {
      headers: {
        Authorization: `Bearer ${ojsConfig.ojsToken}`,
      },
    });

    if (!pubRes.ok) {
      return NextResponse.json(
        { error: "Failed to fetch publication metadata" },
        { status: pubRes.status },
      );
    }

    const article = await pubRes.json();
    console.log(article, "article");

    const fileUrl = article?.galleys[0]?.file?.url;

    if (!fileUrl) {
      return NextResponse.json(
        { error: "No PDF file found in galleys" },
        { status: 404 },
      );
    }

    // 4. Fetch the actual PDF file
    const fileRes = await fetch(fileUrl, {
      headers: {
        Authorization: `Bearer ${ojsConfig.ojsToken}`,
      },
    });

    if (!fileRes.ok) {
      return NextResponse.json(
        { error: "Failed to fetch PDF file from OJS" },
        { status: fileRes.status },
      );
    }

    // 5. Stream the file back to the client
    const fileBuffer = await fileRes.arrayBuffer();
    const contentType =
      fileRes.headers.get("Content-Type") || "application/pdf";

    return new NextResponse(fileBuffer, {
      headers: {
        "Content-Type": contentType,
        "Content-Disposition": `inline; filename="article-${id}.pdf"`,
        "Cache-Control": "private, max-age=0, must-revalidate",
      },
    });
  } catch (error) {
    console.error("Download error:", error);
    return NextResponse.json({ error: "Server error" }, { status: 500 });
  }
}

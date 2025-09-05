import { NextRequest, NextResponse } from "next/server";
import { ojsConfig } from "@/lib/ojs/config";

export async function GET(
  req: NextRequest,
  { params }: { params: { id: string } },
) {
  try {
    const { id } = params;

    // Example: map your "id" to actual submission/file info.
    // In practice, you’d query your DB or OJS API for these values.
    // For now, I'll hardcode like in your example.
    const submissionId = 4;
    const stageId = 5;

    // Build OJS download URL
    const ojsUrl = `https://admin.universityjournals.com.ng/jigd/$$$call$$$/api/file/file-api/download-file?submissionFileId=${id}&submissionId=${submissionId}&stageId=${stageId}`;

    // Fetch file from OJS
    const response = await fetch(ojsUrl, {
      method: "GET",
      headers: {
        Authorization: `Bearer ${ojsConfig.ojsToken}`,
      },
    });

    if (!response.ok) {
      return NextResponse.json(
        { error: "Failed to fetch file from OJS" },
        { status: response.status },
      );
    }

    // Get the file buffer
    const fileBuffer = await response.arrayBuffer();

    // Pass file back to client
    return new NextResponse(fileBuffer, {
      headers: {
        "Content-Type":
          response.headers.get("Content-Type") || "application/pdf",
        "Content-Disposition": `inline; filename="file-${id}.pdf"`,
      },
    });
  } catch (error) {
    console.error("Download error:", error);
    return NextResponse.json({ error: "Server error" }, { status: 500 });
  }
}

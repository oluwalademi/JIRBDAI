import { createOjsClient } from "@/lib/ojs";
import { NextResponse } from "next/server";

export async function GET(
  request: Request,
  { params }: { params: { id: string } },
) {
  const { id } = params;

  try {
    const article = await createOjsClient().submissions.get(
      Number(id),
      Number(id),
    );
    const pdfUrl =
      article.galleys[0]?.file?.url ||
      article.galleys[0]?.file?.revisions?.[0]?.url;

    if (!pdfUrl) {
      return NextResponse.json({ error: "File not found" }, { status: 404 });
    }

    // Fetch the file server-side to bypass client-side auth
    const response = await fetch(pdfUrl);
    if (!response.ok) {
      return NextResponse.json(
        { error: "Failed to fetch file" },
        { status: 404 },
      );
    }

    const fileBuffer = await response.arrayBuffer();

    // Stream the file as a download
    return new NextResponse(fileBuffer, {
      headers: {
        "Content-Type": "application/pdf",
        "Content-Disposition": `attachment; filename="article-${id}.pdf"`,
      },
    });
  } catch (error) {
    console.error("Error fetching file:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 },
    );
  }
}

import { createOjsClient } from "@/lib/ojs";
import { stripHtml } from "string-strip-html";
import type { Metadata } from "next";
import Header from "@/components/Header";
import React from "react";
import Offset from "@/components/header/Offset";
import Image from "next/image";
import TopBar from "@/components/TopBar";
import Footer from "@/components/Footer";
// import { router } from "next/client";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ id: number }>;
}): Promise<Metadata> {
  const { id } = await params;
  const article = await createOjsClient().submissions.get(id, id);

  const cleanAbstract = stripHtml(article.abstract?.en || "").result;

  // build dynamic meta tags
  return {
    title: `${article.fullTitle.en} | ${article.copyrightHolder?.en}`,
    description: cleanAbstract,
    openGraph: {
      type: "article",
      url: article.urlPublished,
      title: article.fullTitle.en,
      description: cleanAbstract,
      siteName: article.copyrightHolder?.en,
      images: [article.coverImage?.en || "/default-cover.jpg"],
    },
    twitter: {
      card: "summary_large_image",
      title: article.fullTitle.en,
      description: cleanAbstract,
      images: [article.coverImage?.en || "/default-cover.jpg"],
    },
    other: {
      // Google Scholar citation_* metadata
      citation_journal_title: article.copyrightHolder?.en,
      citation_title: article.fullTitle.en,
      citation_date: article.datePublished,
      citation_firstpage: article.pages?.split("-")[0],
      citation_lastpage: article.pages?.split("-")[1],
      citation_pdf_url: article.galleys[0]?.file?.revisions[0]?.url,
      citation_language: article.locale,

      // multiple authors
      ...Object.fromEntries(
        article.authors.map((a: any, i: number) => [
          `citation_author[${i}]`,
          a.fullName,
        ]),
      ),

      // Dublin Core
      "DC.Title": article.fullTitle.en,
      "DC.Description": cleanAbstract,
      "DC.Subject": article.keywords?.en?.join("; "),
      "DC.Publisher": article.copyrightHolder?.en,
      "DC.Date.issued": article.datePublished,
      "DC.Language": article.locale,
      "DC.Identifier": article.urlPublished,
      "DC.Rights": `© ${article.copyrightYear} ${article.copyrightHolder?.en}`,

      // multiple authors as DC.Creator
      ...Object.fromEntries(
        article.authors.map((a: any, i: number) => [
          `DC.Creator[${i}]`,
          a.fullName,
        ]),
      ),
    },
  };
}

export default async function Page({ params }: { params: { id: number } }) {
  const { id } = await params;
  const article = await createOjsClient().submissions.get(id, id);
  const cleanAbstract = stripHtml(article.abstract?.en || "").result;

  return (
    <main className="!default-layout container !mx-0 w-full !px-0 text-black">
      <div className="default-layout !mb-5 w-full !px-0">
        <Header />
        <Offset height={160} color={"brand-white"} />
        <div className="bg-black px-24 py-1 text-left text-white">
          <span>
            <span>Help shape the future of</span>
            <span className="font-bold"> JIRBDAI</span>
            <span>. Join as a</span>
            <span className="font-bold"> VOLUNTEER writer </span>
            <span>and share your voice with a growing audience.</span>
          </span>
        </div>
      </div>
      <section className={"container !m-auto"}>
        <h1 className={"font-inter text-4xl font-extrabold"}>
          {article.fullTitle.en}
        </h1>
        <div
          className={"mt-5 flex self-stretch border-2 border-black/10"}
        ></div>
        {/* Button */}
        <div className={"my-2 flex gap-2"}>
          {/* 1st Button */}
          <div className="relative flex h-10 items-center justify-center gap-2.5 rounded-[20px] bg-[#48c7af] px-2.5 py-3">
            <Image src="/icon0.png" alt="icon" width={25} height={25} />
            <div className="font-inter text-[14px] font-bold text-white">
              Open Access
            </div>
          </div>
          {/* 2nd Button */}
          <div className="relative  flex h-10 items-center justify-center gap-2.5 rounded-[20px] border-2 border-black/10 px-2.5 py-3 shadow">
            <Image src="/icon0.png" alt="icon" width={25} height={25} />
            <div className="font-inter text-[14px] font-bold text-black">
              Research Article
            </div>
          </div>
        </div>
        {/* Button */}

        {/* 2nd */}
        <div className="flex gap-3 self-stretch rounded-[1.25rem] border-2 border-black/10 px-5 py-4">
          {article.authors.map((author: any, i: number) => (
            <div
              key={i}
              className="flex flex-row items-center gap-x-2 text-nowrap font-inter text-sm font-medium text-gray-700"
            >
              <Image
                src="/assets/images/no-user-pics.svg"
                alt="Author"
                width={32}
                height={32}
                className="object-contain"
              />
              {author.fullName ??
                author.preferredPublicName ??
                "Unknown Author"}
            </div>
          ))}
        </div>
        {/* 2nd */}
        <div className="flex gap-3 self-stretch rounded-[1.25rem] border-2 border-black/10 px-5 py-4">
          <div className={"flex flex-row items-center gap-2"}>
            <div className="flex items-center justify-center gap-2.5 overflow-hidden rounded-[0.875rem] border border-black/100 shadow-[0_0.25rem_0.25rem_rgba(0,0,0,0.25)]">
              <Image
                src="/rectangle-60.png"
                alt="Rectangle"
                width={45} // 2.8125rem ≈ 45px
                height={45}
                className="aspect-square object-cover shadow-[0_0.125rem_0.25rem_rgba(0,0,0,0.75)]"
              />
            </div>
            <div className="flex items-center justify-center gap-2.5 overflow-hidden rounded-[0.875rem] border border-black/100 shadow-[0_0.25rem_0.25rem_rgba(0,0,0,0.25)]">
              <Image
                src="/rectangle-60.png"
                alt="Rectangle"
                width={45} // 2.8125rem ≈ 45px
                height={45}
                className="aspect-square object-cover shadow-[0_0.125rem_0.25rem_rgba(0,0,0,0.75)]"
              />
            </div>
          </div>
          <div className={"h-1/2 bg-black px-1"}></div>
          <div className={"flex flex-col items-center gap-1"}>
            <div className="flex w-[21.625rem] items-center justify-start font-roboto text-base font-semibold text-[#202837]">
              JIRBDAI, Volume 1, Issue 4
            </div>
            <div className="flex w-[21.625rem] items-center justify-start font-inter text-sm text-[#161f32]">
              https://doi.org/10.5281/zenodo.15669953
            </div>
          </div>
          <div className={"h-1/2 bg-black px-1"}></div>
          <div className="r-ctn">
            <div className="view-container">
              <div className="stat-value">{article.datePublished}</div>
              <div className="stat-label">Published</div>
            </div>
            <div className="view-container">
              <div className="stat-value">{article.pages}</div>
              <div className="stat-label">Pages</div>
            </div>
            <div className="view-container">
              <div className="stat-value">98K</div>
              <div className="stat-label">Cites</div>
            </div>
            <div className="view-container">
              <div className="stat-value">98K</div>
              <div className="stat-label">Downloads</div>
            </div>
          </div>
        </div>
        <Offset height={40} color={"brand-white"} />
        <div>
          <TopBar titleHeader={"Abstract"} />
          <p className={"mt-4 text-xl text-black/70"}>{cleanAbstract}</p>
        </div>
        {/* <a href={`${article.galleys[0].file .url}`}>download</a> */}
        <a
          className="mt-4 inline-block text-blue-600 underline hover:text-blue-800"
          href={`/doi/file/${article.galleys[0].file.submissionFileId}`}
        >
          download PDF
        </a>
      </section>
      <Footer />
    </main>
  );
}

import { createOjsClient } from "@/lib/ojs";
import { stripHtml } from "string-strip-html";
import type { Metadata } from "next";
import Header from "@/components/Header";
import Offset from "@/components/header/Offset";
import Image from "next/image";
import TopBar from "@/components/TopBar";
import Footer from "@/components/Footer";
import CitationComponent from "@/components/CitationComponent";
import CiteAndRead from "@/components/article/CiteAndRead";
import Link from "next/link";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ id: number }>;
}): Promise<Metadata> {
  const { id } = await params;
  const article = await createOjsClient().submissions.get(id, id);

  const cleanAbstract = stripHtml(article.abstract?.en || "").result;

  const issue = await createOjsClient().issues.get(article.issueId);

  const volume = issue.volume;
  const issueNumber = issue.number;

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
      citation_volume: volume,
      citation_issue: issueNumber,
      citation_publication_date: article.datePublished,
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

  const issue = await createOjsClient().issues.get(article.issueId);

  const volume = issue.volume;

  return (
    <main className="!default-layout container !mx-0 w-full !px-0 text-black">
      <div className="default-layout !mb-5 w-full !px-0">
        <Header />
        <Offset height={160} color={"brand-white"} />
        <div className="bg-black px-10 py-1 text-left text-white">
          <span className="text-justify text-white">
            <Link href="/" className="hover:underline">
              Home
            </Link>{" "}
            {"> "}
            <Link href={`/publications`} className="hover:underline">
              Volume {volume}
            </Link>{" "}
            {"> "}
            <Link
              href={`/browse?issueIds=${article.issueId}`}
              className="hover:underline"
            >
              Issue {article.issueId}
              http://localhost:3000/doi/4
            </Link>{" "}
            {"> "}
            <Link
              className="font-bold text-white/100 underline decoration-brand-100 decoration-2 underline-offset-4"
              href={`/doi/${article.id}`}
            >
              {article.fullTitle.en}
            </Link>
          </span>
        </div>
      </div>
      <section className={"container !m-auto !px-6"}>
        <h1 className={"font-inter text-4xl font-extrabold"}>
          {article.fullTitle.en}
        </h1>
        <div
          className={"mt-5 flex self-stretch border-2 border-black/10"}
        ></div>
        {/* Button */}
        <div className={"my-2 flex justify-between"}>
          <div className={"flex flex-row gap-2"}>
            {/* 1st Button */}
            <div className="relative flex h-10 items-center justify-center gap-2.5 rounded-[20px] bg-[#48c7af] px-2.5">
              <Image
                src="/assets/icons/open-access.svg"
                alt="Open access"
                width={22}
                height={22}
              />
              <div className="font-inter text-[14px] font-bold text-white">
                Open Access
              </div>
            </div>
            {/* 2nd Button */}
            <div className="relative  flex h-10 items-center justify-center gap-2.5 rounded-[20px] border-2 border-black/20 px-4 py-3 shadow">
              <div className="font-inter text-[14px] font-bold text-black">
                Research Article
              </div>
            </div>
          </div>
          {/* 3rd Button */}
          <a href={`/doi/file/${article.id}`}>
            <div
              className="relative flex h-10 items-center justify-center gap-2.5 rounded-[20px] bg-[#fb5431] px-4
                  transition-all duration-200 hover:-translate-y-0.5 hover:bg-orange-950 hover:shadow-lg active:translate-y-0"
            >
              <Image
                src="/assets/icons/download-article-btn.svg"
                alt="Open access"
                width={22}
                height={22}
              />
              <div className="font-inter text-[14px] font-bold text-white">
                Download PDF
              </div>
            </div>
          </a>
        </div>
        {/* Button */}

        {/* 2nd */}
        <div className="flex flex-wrap gap-3 self-stretch rounded-[1.25rem] border-2 border-black/10 px-5 py-4">
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
        <div className="flex flex-row flex-wrap items-center justify-between gap-3 self-stretch rounded-[1.25rem] border-2 border-black/10 px-5 py-4">
          <CiteAndRead mainarticle={article} />
          <div className={"sticks"}></div>
          <div className={"flex flex-col items-start gap-1"}>
            <div className="flex items-center justify-start font-roboto text-base font-semibold text-[#202837] ">
              JIRBDAI, Volume {volume}, Issue {article.issueId}
            </div>
            <div className="flex items-center justify-start font-inter text-sm text-[#161f32]">
              https://doi.org/10.5281/zenodo.15669953
            </div>
          </div>
          <div className={"sticks"}></div>
          <div className="r-ctn">
            <div className="view-container">
              <div className="stat-value">{article.datePublished}</div>
              <div className="stat-label">Published</div>
            </div>
            <div className="view-container">
              <div className="stat-value">{article.pages}</div>
              <div className="stat-label">Pages</div>
            </div>
            {/*
            <div className="view-container">
              <div className="stat-value">98K</div>
              <div className="stat-label">Cites</div>
            </div>
            <div className="view-container">
              <div className="stat-value">98K</div>
              <div className="stat-label">Downloads</div>
            </div>
            */}
          </div>
        </div>
        <Offset height={40} color={"brand-white"} />
        <div>
          <TopBar titleHeader={"Abstract"} />
          <p className={"mt-4 px-2 text-xl !font-light text-black/70"}>
            {cleanAbstract}
          </p>
        </div>
      </section>
      <Footer />
    </main>
  );
}

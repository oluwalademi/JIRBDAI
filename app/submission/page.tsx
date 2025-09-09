"use client";

import React from "react";
import Header from "@/components/Header";
import Offset from "@/components/header/Offset";
import TopBar from "@/components/TopBar";
import Image from "next/image";
import Footer from "@/components/Footer";

const page = () => {
  return (
    <div className="default-layout ">
      <header>{/* <Header /> */}</header>
      <Offset height={160} color={"brand-white"} />
      <div className={"container mb-20"}>
        <TopBar titleHeader={"Submission"} />
        <div className="flex h-24 w-full items-center">
          <Image
            src="/assets/images/random-images/tech-journal-policies-one.svg"
            alt="Scientist conducting research in laboratory"
            width={900}
            height={900}
            className="h-full w-auto object-cover"
          />
        </div>
      </div>
      <div className={"container !px-12 text-black"}>
        <h3>Submissions Portal</h3>
        <p>
          Use the options below to begin a new submission or check the status of
          your current/pending submissions.
        </p>
      </div>
      <div className="container mb-8 mt-2 flex w-full flex-row flex-wrap gap-x-4 bg-gray-400 px-4 py-2 font-bold underline-offset-1 hover:text-brand-100">
        <button
          className="flex flex-1 rounded bg-curiousblue px-6 py-2 text-white transition hover:bg-blue-700 hover:underline"
          onClick={() =>
            (window.location.href =
              "https://jirbdai.com.ng/index.php/jirbdai/submission/wizard")
          }
        >
          Make a New Submission
        </button>
        <br />
        <button
          className="flex flex-1 rounded bg-gray-700 px-6 py-2 text-white transition hover:bg-gray-900 hover:underline"
          onClick={() =>
            (window.location.href =
              "https://jirbdai.com.ng/index.php/jirbdai/submissions")
          }
        >
          View Your Pending Submissions
        </button>
      </div>
      <div className={"container px-4 text-black"}>
        <h3>Submission Preparation Checklist</h3>
        <p>
          As part of the submission process, authors are required to check off
          their submission&#39;s compliance with all of the following items.
          Submissions may be returned to authors that do not adhere to these
          guidelines:
        </p>
        <ul className="list-none space-y-1 font-semibold">
          <li className="flex items-start">
            <span
              className="fa fa-check mr-2 mt-1 text-green-600"
              aria-hidden="true"
            ></span>
            <span>
              The submission has not been previously published, nor is it before
              another journal for consideration (or an explanation has been
              provided in Comments to the Editor).
            </span>
          </li>
          <li className="flex items-start">
            <span
              className="fa fa-check mr-2 mt-1 text-green-600"
              aria-hidden="true"
            ></span>
            <span>
              The submission file is in OpenOffice, Microsoft Word, or RTF
              document file format.
            </span>
          </li>
          <li className="flex items-start">
            <span
              className="fa fa-check mr-2 mt-1 text-green-600"
              aria-hidden="true"
            ></span>
            <span>
              Where available, URLs for the references have been provided.
            </span>
          </li>
          <li className="flex items-start">
            <span
              className="fa fa-check mr-2 mt-1 text-green-600"
              aria-hidden="true"
            ></span>
            <span>
              The text is single-spaced; uses a 12-point font; employs italics,
              rather than underlining (except with URL addresses); and all
              illustrations, figures, and tables are placed within the text at
              the appropriate points, rather than at the end.
            </span>
          </li>
          <li className="flex items-start">
            <span
              className="fa fa-check mr-2 mt-1 text-green-600"
              aria-hidden="true"
            ></span>
            <span>
              The text adheres to the stylistic and bibliographic requirements
              outlined in the Author Guidelines.
            </span>
          </li>
        </ul>
        <br />
        <br />

        <h3>Articles</h3>
        <p>Section default policy</p>
        <p>
          Authors should make a new submission under the{" "}
          <strong>Articles</strong> section.
        </p>
        <br />
        <br />

        <h3>Privacy Statement</h3>
        <p>
          The names and email addresses entered in this journal site will be
          used exclusively for the stated purposes of this journal and will not
          be made available for any other purpose or to any other party.
        </p>
        <br />
        <br />
      </div>

      <Footer />
    </div>
  );
};

export default page;

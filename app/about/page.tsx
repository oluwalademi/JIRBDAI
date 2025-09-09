"use client";

import React from "react";
import TopBar from "@/components/TopBar";
import Header from "@/components/Header";
import Offset from "@/components/header/Offset";
import Footer from "@/components/Footer";
import Image from "next/image";
import SidebarSection from "@/components/SidebarSection";
import SubTopBar from "@/components/SubTopBar";
import { useSmoothHashScroll } from "@/hooks/useSmoothHashScroll";

const Page = () => {
  useSmoothHashScroll(-160);

  const information = [
    { name: "For Readers", url: "about#for-readers" },
    { name: "For Authors", url: "about#for-authors" },
    { name: "For Librarians", url: "about#for-librarians" },
  ];

  return (
    <div className="default-layout">
      <header></header>

      <Offset height={160} color={"brand-white"} />

      <section className="container flex flex-wrap justify-between gap-8 text-black">
        <div className="w-full">
          <TopBar titleHeader={"About the Journal (JIRBDAI)"} />
          <div className="flex h-24 w-full items-center overflow-hidden">
            <Image
              src="/assets/images/random-images/man-in-a-laboratory-doing-a-research-work-one.svg"
              alt="man in a Laboratory doing a research Work"
              width={900}
              height={900}
              className="h-auto w-full"
            />
          </div>
        </div>

        <div className="flex w-full flex-row flex-wrap justify-between gap-10">
          <div className="min-w-[420px] flex-1 px-4 pt-4 text-black">
            <p className="indent-8">
              <strong>JIRBDAI</strong> is a new academic multidisciplinary
              journal covering a range of subjects in Information and
              Communications Technologies, Computing, Innovative Technologies,
              Management Sciences, Big Data Analytics, Enterprise and Management
              Innovation and eBusiness, Decision Science, and Financial
              Management. The main objective of <strong>JIRBDAI</strong> is to
              provide an intellectual platform for Baze University, regional and
              international scholars. <strong>JIRBDAI</strong> aims to promote
              interdisciplinary studies in science and technology and become one
              of the leading journals in the area. Because its multidisciplinary
              framework covers a large research community in an innovative
              public peer review process, thus accessing top-quality papers
              across disciplines. In addition, the regional coverage of the
              journal extends beyond one geographical region, which further
              enhances its reach in terms of attracting high-quality
              contributions. The journal will publish original research and
              papers discussing, analysing, or evaluating policies or disclosing
              relevant gaps in existing research.
            </p>

            <p className="mt-6">
              <strong>The JIRBDAI</strong> is designed as an open access,
              peer-reviewed, and referenced journal co-hosted by Baze University
              Big Data Analytics and Innovation Research Group, American
              University Yola, and Sule Lamido University.{" "}
              <strong>JIRBDAI</strong> publishes original papers, review papers,
              conceptual frameworks, case studies, empirical research, technical
              notes, and book reviews. Special Issues devoted to important
              topics in IT, Computing, Innovative technologies, Big Data
              Analytics, etc., will occasionally be published.{" "}
              <strong>JIRBDAI</strong> is published 2 times a year; those two
              issues constitute a volume.
            </p>
          </div>
        </div>

        <section className="container flex w-full flex-row flex-wrap justify-between gap-10">
          <SidebarSection item={information} title="Section" />

          <div
            id="for-readers"
            className="flex min-w-[320px] flex-1 flex-col gap-8 text-black"
          >
            <div className="flex flex-col gap-6">
              <SubTopBar titleHeader="For Readers" />
              <div className="prose max-w-none">
                <p>
                  Welcome to the{" "}
                  <strong>
                    Journal of Institutional Research, Big Data Analytics and
                    Innovation (JIRBDAI)
                  </strong>
                  .
                </p>
                <p>
                  We are delighted to have you explore our collection of
                  peer-reviewed articles that reflect the latest advancements,
                  innovations, and discoveries in the physical sciences. Our
                  mission is to promote scientific excellence and provide a
                  credible platform for researchers across Nigeria, Africa, and
                  the global community to share their findings.
                </p>
                <p>
                  We invite you to engage with our publications, cite relevant
                  works, and contribute to the growing body of scientific
                  knowledge through your readership and submissions. See the
                  journal&#39;s{" "}
                  <a
                    href="/privacy-statement"
                    className="text-blue-600 underline hover:text-blue-800"
                  >
                    Privacy Statement
                  </a>
                  , which assures readers that their name and email address will
                  not be used for other purposes.
                </p>
              </div>
            </div>

            <div id="for-authors" className="flex flex-col gap-6">
              <SubTopBar titleHeader="For Authors" />
              <div className="prose max-w-none">
                <p>
                  We are pleased to offer you a reputable and inclusive platform
                  to publish your research in the physical sciences. At{" "}
                  <strong>JIRBDAI</strong>, we are committed to upholding
                  rigorous peer-review standards, promoting academic integrity,
                  and ensuring timely publication of high-quality research.
                </p>
                <p>
                  Whether you are an early-career researcher or an established
                  scholar, we value your contributions and are dedicated to
                  supporting you throughout the submission, review, and
                  publication process. Our goal is to amplify your work and
                  enhance its impact within the scientific community and beyond.
                </p>
                <p>
                  We adopt a paid review system to ensure that manuscripts are
                  reviewed on time and published immediately once the
                  publication fee is paid.
                </p>
                <p>
                  Interested in submitting to this journal? We recommend that
                  you review the About the Journal page for the journal&#39;s
                  section policies, as well as the Author Guidelines. Authors
                  need to register with the journal prior to submitting or, if
                  already registered, can simply log in and begin the five-step
                  process.
                </p>
                <p>We therefore look forward to working with you.</p>
              </div>
            </div>

            <div id="for-librarians" className="flex flex-col gap-6">
              <SubTopBar titleHeader="For Librarians" />
              <div className="prose max-w-none">
                <p>
                  We are pleased to offer librarians a reputable and inclusive
                  platform to support access to cutting-edge research in the
                  physical sciences. At <strong>JIRBDAI</strong>, we understand
                  the vital role librarians play in facilitating discovery,
                  academic integrity, and timely dissemination of high-quality
                  research.
                </p>
                <p>
                  Whether you manage a small academic collection or a large
                  institutional library, we value your contributions and are
                  dedicated to providing you with reliable resources and
                  seamless access to our publications.
                </p>
                <p>
                  Our journal adopts a paid review system to ensure manuscripts
                  are reviewed promptly and published immediately upon payment
                  of the publication fee, ensuring up-to-date content for your
                  patrons.
                </p>
                <p>
                  We encourage librarians to familiarize themselves with the
                  About the Journal page and Author Guidelines to better assist
                  researchers and patrons in the submission and publication
                  process.
                </p>
                <p>
                  We look forward to collaborating with librarians in advancing
                  scientific knowledge and access.
                </p>
              </div>
            </div>
          </div>
        </section>

        <div className={"w-full flex-row pr-10 pt-20 text-right"}>
          Warm regards,
          <br /> <div className={"font-bold"}>Editor-in-Chief</div> Journal of
          Institutional Research, Big Data Analytics and Innovation (JIRBDAI).
        </div>
      </section>

      <Offset height={40} color={"brand-white"} />
      <Footer />
    </div>
  );
};

export default Page;

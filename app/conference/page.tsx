import React from "react";
import Header from "@/components/Header";
import Offset from "@/components/header/Offset";
import TopBar from "@/components/TopBar";
import Image from "next/image";
import Footer from "@/components/Footer";

const page = () => {
  return (
    <div className="default-layout">
      <header></header>
      <Offset height={160} color={"brand-white"} />
      <section
        className={
          "container flex h-auto flex-row flex-wrap justify-between gap-10"
        }
      >
        <TopBar titleHeader={"New Conference Proceedings"} />
        <div className={"flex flex-col flex-wrap justify-between gap-10"}>
          <div className="min-w-[420px] flex-1 px-4 pt-4 text-black">
            <span>
              The{" "}
              <span className={"font-bold"}>
                {" "}
                Journal of Institutional Research, Big Data Analytics and
                Innovations (JIRBDAI)
              </span>{" "}
              is pleased to announce the launch of a{" "}
              <span className={"font-bold"}>
                dedicated Conference Proceedings section
              </span>{" "}
              on our website.
              <br />
              <br />
              This section provides a formal platform for the{" "}
              <span className={"font-bold"}>
                {" "}
                publication of high-quality conference papers
              </span>{" "}
              across all areas of physical sciences. It is designed to support
              academic and professional conferences in disseminating
              peer-reviewed research to a broader audience, ensuring permanent
              visibility and global accessibility.
              <br />
              <br />
              We invite{" "}
              <span className={"font-bold"}>
                {" "}
                conference organizers and contributors
              </span>{" "}
              to submit their proceedings for consideration. All submissions
              will undergo a streamlined peer-review process to maintain our
              journal’s commitment to scientific integrity and editorial
              excellence. <br />
              <br />
              To learn more or to submit your conference proceedings, please
              contact us at{" "}
              <span className="font-semibold text-curiousblue underline">
                editorial.office@jirbdai.com.ng
              </span>
              . We look forward to supporting your scientific events and helping
              extend their impact beyond the conference venue.
            </span>
          </div>
          <div className="left-container w-full min-w-[420px] flex-1">
            <div className="w-full">
              <Image
                src={
                  "/assets/images/random-images/an_academic_conference-two.png"
                }
                alt={"an_academic_conference JIRBDAI"}
                width={900}
                height={900}
                className={"h-auto w-full"}
              />
            </div>
          </div>
        </div>
      </section>
      <Offset height={40} color={"brand-white"} />
      <Footer />
    </div>
  );
};

export default page;

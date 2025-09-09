import React from "react";
import PublicationIssue from "@/components/PublicationIssue";
import Header from "@/components/Header";
import Offset from "@/components/header/Offset";
import Footer from "@/components/Footer";

const page = () => {
  return (
    <div className="default-layout">
      <header></header>
      <Offset height={160} color={"brand-white"} />
      <section className={"paper-issues !gap-6 !gap-y-10 !bg-white !bg-none"}>
        <div className={"flex flex-1 bg-black shadow-custom-2"}>
          <PublicationIssue
            link={"/browse?issueIds=2"}
            txtColor={"text-white"}
            defaultTextClr={"text-white"}
            longColor={"bg-brand-100/50"}
            tnyColor={"bg-brand-100"}
            title={"Current / Maiden Issue"}
            imgSrc={"issue-1-flyer.svg"}
            description={"Volume 1 No. 1 (2024)"}
            date={"September 1 - December 31st, 2025"}
          />
        </div>{" "}
        <PublicationIssue
          title={"Issue 2"}
          imgSrc={"issue-1-flyer.svg"}
          description={"Volume 1 No. 2 (2025)"}
          date={"September 1 - December 31st, 2025"}
        />{" "}
        <PublicationIssue
          title={"Issue 3"}
          imgSrc={"issue-1-flyer.svg"}
          description={"Volume 1 No. 3 (2025)"}
          date={"September 1 - December 31st, 2025"}
        />
      </section>
      <Offset height={40} color={"brand-white"} />
      <Footer />
    </div>
  );
};

export default page;

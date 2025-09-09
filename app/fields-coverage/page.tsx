"use client";

import React from "react";
import Header from "@/components/Header";
import Offset from "@/components/header/Offset";
import Footer from "@/components/Footer";

import { useSmoothHashScroll } from "@/hooks/useSmoothHashScroll";
import ArticleTypeButton from "@/app/fields-coverage/ArticleTypeButton";
import { fieldsCovering } from "@/constants";
import TopBar from "@/components/TopBar";

const Page = () => {
  useSmoothHashScroll(-100);

  return (
    <div className="default-layout">
      <header></header>
      <Offset height={160} color={"brand-white"} />

      <div className={"container flex-col text-black"}>
        <TopBar titleHeader={"Fields Coverage"} />
        <Offset height={20} color={"brand-white"} />
        {fieldsCovering.map(({ srcLabel, heading, description }) => (
          <div key={srcLabel} className={"py-2"}>
            <ArticleTypeButton
              srcLabel={srcLabel}
              heading={heading}
              description={description}
            />
          </div>
        ))}
      </div>
      <Footer />
    </div>
  );
};

export default Page;

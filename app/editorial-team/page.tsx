"use client";

import React from "react";
import Header from "@/components/Header";
import Offset from "@/components/header/Offset";
import Footer from "@/components/Footer";
import BoardTeamProfile from "@/components/BoardTeamProfile";
import SidebarSection from "@/components/SidebarSection";
import { navBoardTeam, navBoardTeamPerson } from "@/constants";
import TopBar from "@/components/TopBar";
import { useSmoothHashScroll } from "@/hooks/useSmoothHashScroll";

const Page = () => {
  useSmoothHashScroll(-100);

  return (
    <div className="default-layout">
      <header></header>
      <Offset height={160} color={"brand-white"} />
      <section className="container flex h-auto flex-row flex-wrap justify-between gap-10">
        <SidebarSection item={navBoardTeam} title="Section" />

        <div className="flex flex-1 flex-col">
          <TopBar titleHeader={"Board of Editors"} />
          <div className="background-ash-100 background-ash-200 mb-20 flex flex-row flex-wrap bg-gradient-to-b !px-5">
            {navBoardTeamPerson.map((section, sectionIndex) => {
              const sectionId = section.name.toLowerCase().replace(/\s+/g, "-");
              return (
                <div
                  className="flex w-full grow flex-col"
                  key={sectionIndex}
                  id={sectionId}
                >
                  <div className="mx-4 flex self-stretch border-b-2 border-gray-400"></div>
                  <h2 className="mb-2 mt-3 flex items-center gap-2 pl-9 text-xl font-bold text-black">
                    {section.name}
                    <a
                      href={`#${sectionId}`}
                      className="text-sm font-normal text-blue-600 underline hover:text-blue-800"
                      title={`Jump to ${section.name}`}
                    ></a>
                  </h2>
                  <div className="flex flex-row flex-wrap">
                    {section.members.map((member, memberIndex) => (
                      <BoardTeamProfile
                        key={memberIndex}
                        name={member.name}
                        img={member.img}
                        university={member.university}
                        country={member.country}
                      />
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default Page;

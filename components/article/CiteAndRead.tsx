"use client";

import React, { useState } from "react";
import Image from "next/image";
import CitationComponent from "@/components/CitationComponent";

const CiteAndRead = ({ mainarticle }: any) => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <CitationComponent
        article={mainarticle}
        show={open}
        onClose={() => setOpen(false)}
      />
      <div className={"flex flex-row items-center gap-2"}>
        <button onClick={() => setOpen(!open)}>
          <div
            className="flex items-center justify-center gap-2.5 overflow-hidden rounded-xl border border-black/20
                  bg-white shadow-md transition-all duration-200
                  hover:-translate-y-0.5 hover:bg-indigo-500 hover:shadow-lg active:translate-y-0"
          >
            <Image
              src="/assets/icons/cite.svg"
              alt="Cite btn"
              width={45}
              height={45}
              className="aspect-square object-contain drop-shadow-sm transition-transform duration-200 group-hover:scale-110"
            />
          </div>
        </button>

        {/*
        <div className="flex items-center justify-center gap-2.5 overflow-hidden rounded-[0.875rem] border border-black/100 shadow-[0_0.25rem_0.25rem_rgba(0,0,0,0.25)]">
          <Image
            src="/assets/icons/scan.svg"
            alt="Read via reader"
            width={45} // 2.8125rem ≈ 45px
            height={45}
            className="aspect-square object-cover shadow-[0_0.125rem_0.25rem_rgba(0,0,0,0.75)]"
          />
        </div>
        */}
      </div>
    </>
  );
};

export default CiteAndRead;

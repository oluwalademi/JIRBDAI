"use client";

import React from "react";
import Link from "next/link";

type Props = {
  justify?: string; // made optional, defaults to flex-end
  inputText: string;
  href?: string;
};

const ViewAllBar = ({
  justify = "justify-end",
  inputText,
  href = "#",
}: Props) => {
  return (
    <div
      className={`${justify} flex w-full items-end border-t border-[#797979] bg-[#e4e2e2] px-[60px] py-3`}
      style={{ alignSelf: "stretch" }}
    >
      <Link
        href={href}
        className="group text-lg font-semibold text-[#2c86fc] transition-colors hover:text-[#1a5fcc]"
      >
        {inputText}
        <span className="ml-1 inline-block transition-transform group-hover:translate-x-2">
          →
        </span>
      </Link>
    </div>
  );
};

export default ViewAllBar;

"use client";

import React, { useState } from "react";
import Link from "next/link";
import Search from "@/components/Search";
// import Image from "next/image";
import { navItems } from "@/constants";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import DropMenu from "@/components/DropdownMenu";

const Subheader = () => {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [userActive, setUserActive] = useState(false);

  return (
    <div
      className={
        "flex h-16 w-full flex-row items-center justify-between gap-x-20 border-b-2 px-14 py-2 mol:gap-x-10 mol:px-10"
      }
    >
      {!userActive && (
        <div>
          <div className={"hidden px-2 md:flex"}>
            <ul className="flex flex-1 flex-row items-center gap-4 lg:gap-6">
              {navItems.slice(4, 9).map(({ url, name, subUrl }) => (
                <li key={name} className="header-text lg:p-1">
                  {subUrl ? (
                    <DropMenu dropname={name} subUrl={subUrl} />
                  ) : (
                    <Link href={url} passHref legacyBehavior>
                      <a
                        className={cn(
                          "header-text",
                          pathname === url && "text-brand-100 font-extrabold",
                        )}
                      >
                        {name}
                      </a>
                    </Link>
                  )}
                </li>
              ))}
            </ul>
          </div>
          {/* Mobile Dropdown Menu */}
          <div className={"hamburger flex px-2 md:hidden"}>
            <div
              className={cn("hamburger", open && "hamburger-active")}
              onClick={() => setOpen(!open)}
            >
              <span className={"nav-dash"}></span>
              <span className={"nav-dash"}></span>
              <span className={"nav-dash"}></span>
            </div>

            {open && (
              <nav className="sub-header-nav-link hidden px-2 md:flex">
                <ul className="flex flex-1 flex-wrap items-center gap-4 lg:gap-6">
                  {navItems.slice(4, 9).map(({ url, name, subUrl }) => (
                    <li
                      key={name}
                      className="robotoflex-semibold-16 whitespace-nowrap text-[1rem] lg:p-1 lg:text-sm"
                    >
                      {subUrl ? (
                        <DropMenu dropname={name} subUrl={subUrl} />
                      ) : (
                        <Link href={url} passHref legacyBehavior>
                          <a
                            className={cn(
                              "robotoflex-semibold-16 text-[1rem] lg:text-sm whitespace-nowrap hover:text-brand-100",
                              pathname === url &&
                                "text-brand-100 font-extrabold",
                            )}
                          >
                            {name}
                          </a>
                        </Link>
                      )}
                    </li>
                  ))}
                </ul>
              </nav>
            )}
          </div>
        </div>
      )}
      <Search onUserActive={setUserActive} />
    </div>
  );
};

export default Subheader;

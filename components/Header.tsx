"use client";
// https://www.youtube.com/watch?v=CUsCMKXpBGE&ab_channel=CodeWithYousaf
// https://www.youtube.com/watch?v=mJ3bGvy0WAY&pp=ygUoYnVpbGRpbmcgcmVzZWFyY2ggam91cm5hbCB1c2luZyByZWFjdCBqcw%3D%3D

import React, { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { navItems } from "@/constants";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import MobileNavigation from "@/components/MobileNavigation";
import Subheader from "@/components/Subheader";

type Props = {
  children?: React.ReactNode;
};

const Header = ({ children }: Props) => {
  const pathname = usePathname();
  const [showHeader, setShowHeader] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const aspectRatio = 573 / 93; // width/height
  const dynamicHeight = Math.round(560 / aspectRatio);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY > lastScrollY && currentScrollY > 50) {
        setShowHeader(false);
      } else {
        setShowHeader(true);
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  return (
    <div
      className={cn(
        "fixed top-0 left-0 right-0 z-50 flex flex-col bg-white shadow-header transition-transform duration-300 ease-in-out",
        showHeader ? "translate-y-0" : "-translate-y-20",
      )}
    >
      <div className={"border-b-2 border-gray-200"}>
        <div className={"header h-20"}>
          <Link href="/">
            <Image
              src="/assets/images/jirbdai.png"
              alt="logo"
              width={450}
              height={dynamicHeight}
              className="jirbdai-header-logo hidden md:block"
              priority
            />
            <Image
              src="/assets/images/jirbdai-small.svg"
              alt="logo"
              width={200}
              height={10}
              className="jirbdai-miniheader-logo md:hidden"
              priority
            />
          </Link>
          <nav className="header-nav">
            <ul className="flex flex-1 items-center gap-6">
              {navItems.slice(0, 4).map(({ url, name }) => (
                <li key={name} className="lg:p-1">
                  <Link href={url} passHref legacyBehavior>
                    <a
                      className={cn(
                        "text-black font-medium text-[0.65rem] lg:text-sm whitespace-nowrap hover:text-brand-100",
                        pathname === url && "text-brand-100 font-extrabold",
                        name === "Register" &&
                          "rounded-[32px] bg-[#2c526f] px-8 py-3 text-white",
                      )}
                    >
                      {name}
                    </a>
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>
        <MobileNavigation />
      </div>

      <Subheader />
      {children}
    </div>
  );
};

export default Header;

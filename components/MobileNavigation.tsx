"use client";

import React, { useState } from "react";
import {
  Sheet,
  SheetContent,
  //  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { navItems } from "@/constants";
import Link from "next/link";
import { cn } from "@/lib/utils";
// import { Button } from "@/components/ui/button";

const MobileNavigation = () => {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  return (
    <header
      className={
        "mobile-header flex h-20 flex-row justify-between fill-white px-14 sm:hidden mol:px-10"
      }
    >
      <Link href="/" passHref legacyBehavior>
        <a>
          <Image
            src="/assets/images/jirbdai-small.svg"
            alt="logo"
            width={184}
            height={30}
            className="h-full w-[150px]"
          />
        </a>
      </Link>
      <Sheet open={open} onOpenChange={setOpen}>
        <SheetTrigger>
          <Image
            src={"/assets/icons/menu.svg"}
            alt={"Search"}
            width={30}
            height={30}
          />
        </SheetTrigger>
        <SheetContent className={"h-full bg-white fill-white px-0 text-brand"}>
          <SheetHeader>
            <SheetTitle className={"flex flex-col justify-items-end"}>
              <div className={"px-4"}>
                <Image
                  src={"/assets/images/user-pics.png"}
                  alt={"user avatar"}
                  width={40}
                  height={40}
                  className={"mb-4"}
                />
              </div>
            </SheetTitle>
            <nav className={"my-1 flex flex-col border-y-2"}>
              <ul className={"mobile-nav__list"}>
                {navItems.slice(0, 4).map(({ url, name }) => (
                  <Link key={name} href={url} className={"lg:p-1"}>
                    <li
                      className={cn(
                        "border-b-2 py-2",
                        pathname === url && "shad-active ",
                      )}
                    >
                      <p
                        className={
                          " robotoflex-semibold-16 text-2xl hover:text-[#00C8FF]"
                        }
                      >
                        {name}
                      </p>
                    </li>
                  </Link>
                ))}
              </ul>
            </nav>
          </SheetHeader>
        </SheetContent>
      </Sheet>
    </header>
  );
};

export default MobileNavigation;

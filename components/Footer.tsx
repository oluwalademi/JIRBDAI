import React from "react";
import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  return (
    <>
      <div className={"h-12"} />
      <footer className="flex flex-row items-center justify-between border-t border-black px-8 py-10">
        {/* Left: Text container */}
        <div className="flex flex-1 flex-col gap-1">
          <div className="text-left font-robotoflex text-base font-semibold text-[#4d4d4f]">
            <span>
              Journal of Institutional Research, Big Data Analytics and
              Innovation.
            </span>
            <br />
            <span>Copyright © 2025 JIRBDAI.</span>
          </div>

          <div className="flex flex-row gap-1 text-left font-robotoflex text-base font-semibold text-[#4d4d4f]">
            <Link className={"header-text"} href="/terms-of-usage">
              Terms of Usage
            </Link>
            <span> | </span>
            <Link className={"header-text"} href="/privacy-policy">
              Privacy Policy
            </Link>
            <span> | </span>
            <Link className={"header-text"} href="/code-of-ethics">
              Code of Ethics
            </Link>
          </div>
        </div>

        {/* Right: Icon container */}
        <div className="flex flex-1 justify-end">
          <div className="flex aspect-square size-24 items-center justify-center rounded-[8px] bg-brand p-1">
            <Image
              src="/assets/images/jirbdai-icon.png"
              alt="JIRBDAI Icon"
              width={95}
              height={95}
              className="object-cover"
            />
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;

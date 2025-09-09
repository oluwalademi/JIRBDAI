"use client";

import Image from "next/image";
import Link from "next/link";
import { useRef, useEffect, useState } from "react";

export default function SubmitPaperSection() {
  // Row 1 images
  const row1Images = [
    "innovation-in-digital-tech.png",
    "big-data-analytics.png",
    "management-business-and-entre.png",
    "egovernment-ebusiness-ehealth.png",
  ];
  // Row 2 images
  const row2Images = [
    "students-success-wellbeing.png",
    "computing-information-communications.png",
    "information-systems-software.png",
    "graduate-employability.png",
  ];

  // Duplicate arrays for infinite scroll
  const row1AllImages = [...row1Images, ...row1Images];
  const row2AllImages = [...row2Images, ...row2Images];

  const [isSmallScreen, setIsSmallScreen] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsSmallScreen(window.innerWidth <= 1300);
    };
    handleResize(); // Run on mount
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const row1Ref = useRef<HTMLDivElement>(null);
  const row2Ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!isSmallScreen) return;

    const el1 = row1Ref.current;
    const el2 = row2Ref.current;

    const scrollHandler = (el: HTMLDivElement) => () => {
      if (el.scrollLeft >= el.scrollWidth / 2) {
        el.scrollLeft = 0;
      }
    };

    const handler1 = el1 ? scrollHandler(el1) : undefined;
    const handler2 = el2 ? scrollHandler(el2) : undefined;

    el1?.addEventListener("scroll", handler1!);
    el2?.addEventListener("scroll", handler2!);

    return () => {
      if (handler1) el1?.removeEventListener("scroll", handler1);
      if (handler2) el2?.removeEventListener("scroll", handler2);
    };
  }, [isSmallScreen]);

  return (
    <section className="flex w-full flex-col items-center py-20">
      {/* Header Text */}
      <div className="flex w-full flex-col items-center gap-0 pb-5 text-center">
        <h2 className="font-inter text-sm font-extrabold text-black">
          Empowering your Publication Journey
        </h2>
        <a
          href="https://jirbdai.com.ng/index.php/jirbdai/about/submissions"
          className="inline-block"
        >
          <h1
            className="h1 animate-attention cursor-pointer leading-tight text-black
               underline-offset-4 hover:text-indigo-600
               hover:underline"
          >
            Submit Your Paper
          </h1>
        </a>
      </div>

      {/* Paper Categories */}
      <div className="flex w-full flex-col gap-0 px-20">
        <div className="relative flex flex-col content-start justify-items-start gap-3 overflow-hidden bg-[#f0f0f0] px-[60px] py-[40px]">
          {/* Row 1 */}
          {isSmallScreen ? (
            <div
              ref={row1Ref}
              className="flex gap-5 overflow-x-auto scroll-smooth whitespace-nowrap"
              style={{
                scrollbarWidth: "thin",
                WebkitOverflowScrolling: "touch",
              }}
            >
              {row1AllImages.map((src, i) => (
                <Image
                  key={`${src}-${i}`}
                  src={`/assets/images/papertypes/${src}`}
                  alt={src}
                  width={258}
                  height={274}
                  className="flex aspect-[258/274] w-[258px] min-w-[235px] max-w-[258px] object-cover"
                  draggable={false}
                  loading="lazy"
                />
              ))}
            </div>
          ) : (
            <div className="flex justify-center gap-5">
              {row1Images.map((src) => (
                <Image
                  key={src}
                  src={`/assets/images/papertypes/${src}`}
                  alt={src}
                  width={258}
                  height={274}
                  className="flex aspect-[258/274] w-[258px] min-w-[235px] max-w-[258px] object-cover"
                  draggable={false}
                  loading="lazy"
                />
              ))}
            </div>
          )}

          {/* Row 2 */}
          {isSmallScreen ? (
            <div
              ref={row2Ref}
              className="flex gap-5 overflow-x-auto scroll-smooth whitespace-nowrap"
              style={{
                scrollbarWidth: "thin",
                WebkitOverflowScrolling: "touch",
              }}
            >
              {row2AllImages.map((src, i) => (
                <Image
                  key={`${src}-${i}`}
                  src={`/assets/images/papertypes/${src}`}
                  alt={src}
                  width={258}
                  height={274}
                  className="flex aspect-[258/274] w-[258px] min-w-[235px] max-w-[258px] object-cover"
                  draggable={false}
                  loading="lazy"
                />
              ))}
            </div>
          ) : (
            <div className="flex justify-center gap-5">
              {row2Images.map((src) => (
                <Image
                  key={src}
                  src={`/assets/images/papertypes/${src}`}
                  alt={src}
                  width={258}
                  height={274}
                  className="flex aspect-[258/274] w-[258px] min-w-[235px] max-w-[258px] object-cover"
                  draggable={false}
                  loading="lazy"
                />
              ))}
            </div>
          )}
        </div>

        {/* Bottom Bar */}
        <div className="flex w-full justify-end border-t border-[#797979] bg-[#e4e2e2] px-[60px] py-3">
          <Link href="/fields-coverage">
            <span className="cursor-pointer text-sm font-semibold text-[#2c86fc]">
              View all Fields Coverage --&gt;
            </span>
          </Link>
        </div>
      </div>
    </section>
  );
}

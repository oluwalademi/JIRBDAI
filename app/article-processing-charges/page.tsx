import React from "react";
import TopBar from "@/components/TopBar";
import Header from "@/components/Header";
import Offset from "@/components/header/Offset";
import Footer from "@/components/Footer";
import Image from "next/image";
const page = () => {
  return (
    <div className="default-layout w-full self-stretch">
      <header></header>
      <Offset height={160} color={"brand-white"} />
      <section
        className={
          "container flex h-auto flex-row flex-wrap justify-between gap-10"
        }
      >
        <TopBar titleHeader={"Article Processing Charge (APC)"} />
        <div className={"flex flex-row flex-wrap justify-between gap-10"}>
          <div className="min-w-[420px] flex-1 px-4 pt-4 text-black">
            <span>
              <span className="">The </span>
              <span className="font-bold">
                Journal of Institutional Research, Big Data Analytics and
                Innovation
              </span>
              <span className=""> wishes to inform authors that the</span>
              <span className="font-bold">Article Processing Charge (APC)</span>
              <span className=""> for accepted manuscripts is</span>
              <span className="font-bold"> ₦10,000</span>
              <span className="">
                .
                <br />
                <br />
                This
              </span>
              <span className=""> modest fee </span>
              <span className="">
                is not a reflection of the quality or standards of our journal.
                On the contrary,
              </span>
              <span className="font-bold"> JIRBDAI</span>
              <span className=""> is firmly committed to maintaining</span>
              <span className="font-bold"> rigorous peer-review</span>
              <span className="">,</span>
              <span className="font-bold"> high editorial standards</span>
              <span className="">, and ethical publishing practices. The</span>
              <span className="font-bold"> low APC </span>
              <span className="">
                is a deliberate effort to encourage wide participation from
                researchers, especially
              </span>
              <span className="font-bold">
                {" "}
                early-career scientists and scholars across Africa
              </span>
              <span className="">
                , and to reduce financial barriers to publishing quality
                research.
                <br />
                <br />
                We firmly believe that access to knowledge creation and
                dissemination should not be hindered by high costs. Our goal is
                to
              </span>
              <span className="font-bold">
                {" "}
                support the growth of scientific research in our region
              </span>
              <span className=""> while maintaining </span>
              <span className="font-bold">
                global standards of academic excellence
              </span>
              <span className="">
                .
                <br />
                <br />
                If you have any questions regarding the APC, please contact the
                editorial office at:
              </span>
              <span className="pr-3"></span>
              <span className="font-semibold text-curiousblue underline">
                editorial.office@jirbdai.com.ng
              </span>
            </span>
          </div>
          <div className="left-container w-full min-w-[420px] flex-1">
            <div className="w-full">
              <Image
                src={
                  "/assets/images/random-images/man-in-a-laboratory-doing-a-research-work.svg"
                }
                alt={"man in a Laboratory doing a research Work"}
                width={900}
                height={900}
                className={"h-auto w-full"}
              />
            </div>
          </div>
        </div>
      </section>
      <Offset height={40} color={"brand-white"} />
      <Footer />
    </div>
  );
};

export default page;

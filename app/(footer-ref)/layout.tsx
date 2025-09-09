import React from "react";
import Header from "@/components/Header";
import Offset from "@/components/header/Offset";
import Footer from "@/components/Footer";

const layout = async ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="default-layout">
      <header></header>
      <Offset height={164} color={"brand-white"} />
      <div className="container">{children}</div>
      <Footer />
    </div>
  );
};
export default layout;

import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import JournalHighlight from "@/components/JournalHighlight";
import BibliometricsData from "@/components/BibliometricsData";
import Footer from "@/components/Footer";
import SubmitPaperSection from "@/components/SubmitPaperSection";
import LatestIssueSection from "@/components/LatestIssueSection";
import Offset from "@/components/header/Offset";

export default function Home() {
  return (
    <div className="default-layout">
      <header></header>
      <Offset height={150} color={"brand-gradient"} />
      <HeroSection />
      <BibliometricsData />
      <SubmitPaperSection />
      {<LatestIssueSection />}
      <Footer />
    </div>
  );
}

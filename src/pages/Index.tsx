import HeroSection from "@/components/HeroSection";
import ByTheNumbers from "@/components/ByTheNumbers";
import SnackReport from "@/components/SnackReport";
import WhereInTheWorld from "@/components/WhereInTheWorld";
import WhatWeDo from "@/components/WhatWeDo";
import ToolStack from "@/components/ToolStack";
import MemberSuperlatives from "@/components/MemberSuperlatives";
import VibeCheck from "@/components/VibeCheck";
import FooterSection from "@/components/FooterSection";

const Index = () => {
  return (
    <main className="overflow-x-hidden">
      <HeroSection />
      <ByTheNumbers />
      <SnackReport />
      <WhereInTheWorld />
      <WhatWeDo />
      <ToolStack />
      <MemberSuperlatives />
      <VibeCheck />
      <FooterSection />
    </main>
  );
};

export default Index;

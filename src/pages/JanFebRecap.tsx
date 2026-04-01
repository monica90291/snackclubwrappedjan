import ByTheNumbers from "@/components/ByTheNumbers";
import SnackReport from "@/components/SnackReport";
import WhereInTheWorld from "@/components/WhereInTheWorld";
import WhatWeDo from "@/components/WhatWeDo";
import ToolStack from "@/components/ToolStack";
import MemberSuperlatives from "@/components/MemberSuperlatives";
import VibeCheck from "@/components/VibeCheck";
import FooterSection from "@/components/FooterSection";

const JanFebRecap = () => {
  return (
    <main className="overflow-x-hidden">
      <section
        className="py-20 sm:py-28 px-6 flex items-center justify-center"
        style={{
          background: "linear-gradient(135deg, hsl(266 38% 13%) 0%, hsl(315 40% 30%) 50%, hsl(0 100% 71%) 100%)",
        }}
      >
        <div className="text-center">
          <div className="inline-block mb-6 px-5 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20">
            <span className="text-cream font-sans text-sm font-medium tracking-wide">🍿 Jan + Feb 2026 Recap</span>
          </div>
          <h1 className="text-5xl sm:text-7xl font-bold text-cream leading-tight">
            Jan + Feb <em className="text-peach">Wrapped</em>
          </h1>
        </div>
      </section>
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

export default JanFebRecap;

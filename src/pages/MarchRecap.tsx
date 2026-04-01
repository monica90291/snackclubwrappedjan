import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import FooterSection from "@/components/FooterSection";

const MarchRecap = () => {
  return (
    <main className="overflow-x-hidden">
      <Link to="/" className="fixed top-6 left-6 z-50 flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 text-cream font-sans text-sm hover:bg-white/20 transition-all duration-200">
        <ArrowLeft className="w-4 h-4" /> Home
      </Link>
      <section
        className="py-20 sm:py-28 px-6 flex items-center justify-center min-h-[50vh]"
        style={{
          background: "linear-gradient(135deg, hsl(266 38% 13%) 0%, hsl(315 40% 30%) 50%, hsl(150 57% 78%) 100%)",
        }}
      >
        <div className="text-center">
          <div className="inline-block mb-6 px-5 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20">
            <span className="text-cream font-sans text-sm font-medium tracking-wide">🍿 March 2026 Recap</span>
          </div>
          <h1 className="text-5xl sm:text-7xl font-bold text-cream leading-tight">
            March <em className="text-peach">Wrapped</em>
          </h1>
          <p className="text-cream/60 font-sans text-lg mt-6">Coming soon... 🚀</p>
        </div>
      </section>
      <FooterSection />
    </main>
  );
};

export default MarchRecap;

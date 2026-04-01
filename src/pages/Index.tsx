import { Link } from "react-router-dom";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import FooterSection from "@/components/FooterSection";

const Index = () => {
  const ref = useScrollAnimation();

  return (
    <main className="overflow-x-hidden">
      <section
        ref={ref}
        className="relative min-h-screen flex items-center justify-center overflow-hidden"
        style={{
          background: "linear-gradient(135deg, hsl(266 38% 13%) 0%, hsl(315 40% 30%) 50%, hsl(0 100% 71%) 100%)",
        }}
      >
        {/* Floating blobs */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div
            className="blob absolute w-[500px] h-[500px] rounded-full opacity-20 blur-3xl"
            style={{ background: "radial-gradient(circle, hsl(0 100% 71%), transparent)", top: "10%", left: "10%" }}
          />
          <div
            className="blob blob-delay-1 absolute w-[400px] h-[400px] rounded-full opacity-15 blur-3xl"
            style={{ background: "radial-gradient(circle, hsl(27 100% 82%), transparent)", top: "50%", right: "10%" }}
          />
          <div
            className="blob blob-delay-2 absolute w-[600px] h-[600px] rounded-full opacity-10 blur-3xl"
            style={{ background: "radial-gradient(circle, hsl(150 57% 78%), transparent)", bottom: "0%", left: "30%" }}
          />
        </div>

        <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
          <div className="scroll-fade-up inline-block mb-6 px-5 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20">
            <span className="text-cream font-sans text-sm font-medium tracking-wide">🍿 Community Recaps</span>
          </div>

          <h1 className="scroll-fade-up text-5xl sm:text-7xl md:text-8xl font-bold text-cream leading-tight mb-6">
            AI Snack Club{" "}
            <em className="text-peach">Wrapped</em>
          </h1>

          <p className="scroll-fade-up text-cream/80 font-sans text-lg sm:text-xl max-w-2xl mx-auto mb-16 leading-relaxed">
            Two months. One hundred+ incredible women. Infinite snacks.
            <br className="hidden sm:block" />
            Here's your community by the numbers.
          </p>

          <div className="scroll-fade-up flex flex-col sm:flex-row gap-6 justify-center items-center">
            <Link
              to="/jan-feb"
              className="group relative px-8 py-4 rounded-2xl bg-white/10 backdrop-blur-sm border border-white/20 hover:bg-white/20 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
            >
              <span className="font-serif text-2xl font-bold text-peach block mb-1">Jan + Feb 2026</span>
              <span className="font-sans text-sm text-cream/70">130+ members · 12 countries</span>
            </Link>
            <Link
              to="/march"
              className="group relative px-8 py-4 rounded-2xl bg-white/10 backdrop-blur-sm border border-white/20 hover:bg-white/20 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
            >
              <span className="font-serif text-2xl font-bold text-mint block mb-1">March 2026</span>
              <span className="font-sans text-sm text-cream/70">Coming soon 🚀</span>
            </Link>
          </div>
        </div>
      </section>
      <FooterSection />
    </main>
  );
};

export default Index;

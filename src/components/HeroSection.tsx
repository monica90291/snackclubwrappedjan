import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const HeroSection = () => {
  const ref = useScrollAnimation();

  return (
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
          <span className="text-cream font-sans text-sm font-medium tracking-wide">🍿 Jan + Feb 2026 Recap</span>
        </div>

        <h1 className="scroll-fade-up text-5xl sm:text-7xl md:text-8xl font-bold text-cream leading-tight mb-6">
          AI Snack Club{" "}
          <em className="text-peach">Wrapped</em>
        </h1>

        <p className="scroll-fade-up text-cream/80 font-sans text-lg sm:text-xl max-w-2xl mx-auto mb-12 leading-relaxed">
          Two months. One hundred+ incredible women. Infinite snacks.
          <br className="hidden sm:block" />
          Here's your community by the numbers.
        </p>

        <div className="scroll-fade-up">
          <span className="font-serif text-8xl sm:text-9xl font-bold text-peach">130+</span>
          <p className="text-cream/70 font-sans text-lg mt-2 tracking-wide">Members Introduced Themselves</p>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;

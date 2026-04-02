import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const MarchFooter = () => {
  const ref = useScrollAnimation();

  return (
    <section
      ref={ref}
      className="py-20 sm:py-28 px-6"
      style={{ background: "linear-gradient(180deg, hsl(266 38% 13%) 0%, hsl(315 40% 30%) 100%)" }}
    >
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="scroll-fade-up text-4xl sm:text-5xl md:text-6xl font-bold text-cream leading-tight mb-8">
          And We're Just <em className="text-peach">Getting Started</em> 🧡
        </h2>
        <p className="scroll-fade-up font-sans text-cream/70 text-lg leading-relaxed mb-16 max-w-2xl mx-auto">
          630+ women across 20+ countries, building with AI, launching apps, automating
          financial reports, handling wedding day dogs, deadlifting 245 lbs, breaking up with
          ChatGPT, and eating a truly alarming amount of dark chocolate.
        </p>
        <p className="scroll-fade-up font-sans text-cream/40 text-xs tracking-[0.3em] uppercase">
          AI Snack Club · Est. January 2026
        </p>
      </div>
    </section>
  );
};

export default MarchFooter;

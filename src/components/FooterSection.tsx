import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const FooterSection = () => {
  const ref = useScrollAnimation();

  return (
    <section
      ref={ref}
      className="py-20 sm:py-28 px-6"
      style={{ background: "linear-gradient(180deg, hsl(266 38% 13%) 0%, hsl(315 40% 30%) 100%)" }}
    >
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="scroll-fade-up text-4xl sm:text-5xl md:text-6xl font-bold text-cream leading-tight mb-8">
          Here's to <em className="text-peach">Snacking</em> Together 🧡
        </h2>
        <p className="scroll-fade-up font-sans text-cream/70 text-lg leading-relaxed mb-16 max-w-2xl mx-auto">
          130+ women across 12 countries, building with AI, breaking into new careers,
          launching startups, raising kids, showing dairy goats, and eating a truly alarming
          amount of peanut butter. This is just the beginning.
        </p>
        <p className="scroll-fade-up font-sans text-cream/40 text-xs tracking-[0.3em] uppercase">
          AI Snack Club · Est. January 2026
        </p>
      </div>
    </section>
  );
};

export default FooterSection;

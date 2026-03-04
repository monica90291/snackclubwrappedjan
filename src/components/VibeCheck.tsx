import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const vibes = [
  { stat: "#1", label: "Top AI Goal: Automate Repetitive Tasks", detail: "85%+ of members want to free up time for high-leverage, strategic, or creative work" },
  { stat: "#2", label: "Runner-Up: Vibe Code Something Real", detail: "From personal CRMs to health apps to pet travel flight finders — members are building" },
  { stat: "~35%", label: "Switching from ChatGPT → Claude", detail: "'Claude is that girl' was said many times. A quiet migration is underway." },
  { stat: "23%", label: "Also Parents of Twins or 3+ Kids", detail: "Carly, Ashley C, Megan Bozzuto, Erica Bailey, Sophia... supermoms in the house" },
  { stat: "6+", label: "Members Who Speak 4+ Languages", detail: "Holly Higgins (5!), Nicole Lee (6!), Grace Tran, Romina Corella, and more" },
  { stat: "🧶", label: "Grandma Hobby Club", detail: "Knitting, quilting, embroidery, sewing — Jordan Voigt made her entire outfit including the socks" },
];

const VibeCheck = () => {
  const ref = useScrollAnimation();

  return (
    <section
      ref={ref}
      className="py-20 sm:py-28 px-6"
      style={{ background: "hsl(266 38% 13%)" }}
    >
      <div className="max-w-6xl mx-auto">
        <h2 className="scroll-fade-up text-4xl sm:text-5xl font-bold text-cream text-center mb-16">
          Vibe Check 🔮
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 stagger-children">
          {vibes.map((v, i) => (
            <div
              key={i}
              className="scroll-fade-up rounded-xl border border-white/10 bg-white/5 p-6 hover:bg-white/10 transition-all duration-300 hover:-translate-y-1"
            >
              <span className="font-serif text-4xl font-bold text-coral block mb-2">{v.stat}</span>
              <h3 className="font-sans font-semibold text-peach text-base mb-2">{v.label}</h3>
              <p className="font-sans text-sm text-cream/60 leading-relaxed">{v.detail}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default VibeCheck;

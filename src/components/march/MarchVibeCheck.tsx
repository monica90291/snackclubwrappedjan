import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const vibes = [
  { stat: "5x", label: "Community Growth", detail: "From 130+ to 630+ members in under 3 months. Nearly 5x growth." },
  { stat: "🔄", label: "The Great Claude Migration", detail: "Claude went from #2 to #1. Multiple members said 'I broke up with ChatGPT.' The vibes have officially shifted." },
  { stat: "70+", label: "Women Who Showed Up to Build on IWD", detail: "The Lovable Build Night was standing room only. The energy was electric and members are STILL shipping projects from it." },
  { stat: "45min", label: "Fastest First App", detail: "Allie Dono built Tried & Tasted in a single 45-minute co-working session. Several members shipped their first-ever app this month." },
  { stat: "9", label: "City Channels Launched", detail: "Austin, Boston, Chicago, London, LA, NYC, SF, Seattle, and DC. The IRL meetups are spreading." },
  { stat: "🧶", label: "Grandma Hobby Club Growing", detail: "Embroidering Trader Joe's bags, knitwear degrees, miniature dollhouse furniture, ceramics, and mini painting studios. We contain multitudes." },
];

const MarchVibeCheck = () => {
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

export default MarchVibeCheck;

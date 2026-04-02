import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { useEffect, useState } from "react";

const snacks = [
  { emoji: "🍫", name: "Dark Chocolate (any form)", mentions: 22, width: 100, gradient: "linear-gradient(90deg, hsl(0 100% 71%), hsl(27 100% 82%))" },
  { emoji: "🍟", name: "French Fries", mentions: 14, width: 64, gradient: "linear-gradient(90deg, hsl(51 100% 50%), hsl(40 90% 45%))" },
  { emoji: "🍿", name: "Popcorn", mentions: 11, width: 50, gradient: "linear-gradient(90deg, hsl(150 57% 78%), hsl(150 40% 60%))" },
  { emoji: "🥔", name: "Chips (jalapeño, salt & vinegar, kettle)", mentions: 11, width: 50, gradient: "linear-gradient(90deg, hsl(270 50% 70%), hsl(270 40% 55%))" },
  { emoji: "🥜", name: "Peanut Butter (any form)", mentions: 9, width: 41, gradient: "linear-gradient(90deg, hsl(200 70% 65%), hsl(200 55% 50%))" },
  { emoji: "🥨", name: "Pretzels", mentions: 7, width: 32, gradient: "linear-gradient(90deg, hsl(30 80% 60%), hsl(30 60% 45%))" },
  { emoji: "🧀", name: "Cheese (any form)", mentions: 7, width: 32, gradient: "linear-gradient(90deg, hsl(45 90% 55%), hsl(45 70% 40%))" },
];

const runnersUp = [
  { emoji: "🍟🍸", name: "Ava Kreismer", snack: "French fries and a martini", quote: "girl dinner 😂" },
  { emoji: "🥔", name: "Pamesha Pande", snack: "Hardbite Black Sea Salt chips dipped in Greek yogurt", quote: "I know. I KNOW. But don't knock it till you've tried it." },
  { emoji: "☕", name: "Ikuska", snack: "Coffee, always coffee", quote: "Every morning is just an excuse to drink coffee again" },
  { emoji: "🍿", name: "Sophia Deluz-Bhan", snack: "Popcorn with nutritional yeast", quote: "IYKYK" },
];

const MarchSnackReport = () => {
  const ref = useScrollAnimation();
  const [animateBars, setAnimateBars] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setAnimateBars(true);
      },
      { threshold: 0.3 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={ref}
      className="py-20 sm:py-28 px-6"
      style={{ background: "linear-gradient(180deg, hsl(315 40% 30%) 0%, hsl(266 38% 13%) 100%)" }}
    >
      <div className="max-w-4xl mx-auto">
        <h2 className="scroll-fade-up text-4xl sm:text-5xl font-bold text-cream text-center mb-16">
          The Snack Report 🍿
        </h2>

        <div className="space-y-5 mb-16">
          {snacks.map((snack, i) => (
            <div key={i} className="scroll-fade-up">
              <div className="flex items-center justify-between mb-2">
                <span className="text-cream font-sans text-sm sm:text-base">
                  {snack.emoji} {snack.name}
                </span>
                <span className="text-peach font-serif font-bold text-lg">{snack.mentions}</span>
              </div>
              <div className="w-full h-8 rounded-full bg-white/10 overflow-hidden">
                <div
                  className="h-full rounded-full transition-all duration-[1200ms] ease-out"
                  style={{
                    width: animateBars ? `${snack.width}%` : "0%",
                    background: snack.gradient,
                    transitionDelay: `${i * 150}ms`,
                  }}
                />
              </div>
            </div>
          ))}
        </div>

        {/* Winner */}
        <div className="scroll-fade-up glass-card rounded-2xl p-8 text-center mb-8">
          <span className="text-4xl mb-3 block">🏆</span>
          <h3 className="text-2xl font-bold text-gold mb-4">Most Unique Snack Award</h3>
          <p className="text-cream font-sans font-semibold text-lg">
            Shara Felix — "Pinot Noir"
          </p>
          <p className="text-cream/50 font-sans text-sm mt-1">(when asked for her favorite snack)</p>
        </div>

        {/* Runners-up as individual cards */}
        <div className="scroll-fade-up">
          <p className="text-center text-cream/50 font-sans text-sm mb-4 uppercase tracking-widest">Runners-up</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {runnersUp.map((r, i) => (
              <div
                key={i}
                className="glass-card rounded-xl p-5 hover:-translate-y-1 transition-all duration-300"
              >
                <span className="text-2xl block mb-2">{r.emoji}</span>
                <p className="font-sans font-semibold text-cream text-sm mb-1">{r.name}</p>
                <p className="font-sans text-peach text-sm font-medium mb-2">{r.snack}</p>
                <p className="font-sans text-cream/50 text-xs italic">"{r.quote}"</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default MarchSnackReport;

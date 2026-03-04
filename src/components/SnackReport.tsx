import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { useEffect, useState } from "react";

const snacks = [
  { emoji: "🥜", name: "Peanut Butter (any form)", mentions: 18, width: 100, gradient: "linear-gradient(90deg, hsl(0 100% 71%), hsl(27 100% 82%))" },
  { emoji: "🍿", name: "Popcorn", mentions: 13, width: 72, gradient: "linear-gradient(90deg, hsl(150 57% 78%), hsl(150 40% 60%))" },
  { emoji: "🍫", name: "Chocolate (any kind)", mentions: 12, width: 67, gradient: "linear-gradient(90deg, hsl(270 50% 70%), hsl(270 40% 55%))" },
  { emoji: "🧀", name: "Cheese + crackers", mentions: 10, width: 56, gradient: "linear-gradient(90deg, hsl(200 70% 65%), hsl(200 55% 50%))" },
  { emoji: "🥕", name: "Chips & salsa / hummus", mentions: 9, width: 50, gradient: "linear-gradient(90deg, hsl(51 100% 50%), hsl(40 90% 45%))" },
];

const SnackReport = () => {
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

        <div className="scroll-fade-up glass-card rounded-2xl p-8 text-center">
          <span className="text-4xl mb-3 block">🏆</span>
          <h3 className="text-2xl font-bold text-gold mb-4">Most Unique Snack Award</h3>
          <p className="text-cream font-sans font-semibold text-lg mb-3">
            Shay — salted egg salmon skin chips from the Asian grocery store
          </p>
          <p className="text-cream/60 font-sans text-sm leading-relaxed">
            Runners-up: Summer Singletary Novoa's Wasa cracker + PB + sliced pickles,
            Kate Chapman's "is sushi a snack?", and Tina Yip who ate 8 string cheeses in a single day
          </p>
        </div>
      </div>
    </section>
  );
};

export default SnackReport;

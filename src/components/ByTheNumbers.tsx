import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const stats = [
  { emoji: "🌎", number: "12", label: "Countries represented" },
  { emoji: "🐕", number: "20+", label: "Pets mentioned by name (Frida, Marble, Lola, Biff, Lemon, Blue Starler...)" },
  { emoji: "👶", number: "30+", label: "Members who are moms" },
  { emoji: "🚀", number: "40+", label: "Founders & solo entrepreneurs" },
  { emoji: "🎙️", number: "10+", label: "Podcast hosts & Substack writers" },
  { emoji: "🌐", number: "4.2", label: "Avg. languages spoken by our polyglots (top: Holly Higgins with 5!)" },
  { emoji: "💼", number: "13.2", label: "Avg. years of professional experience" },
  { emoji: "🤖", number: "85%", label: "Want to automate tasks & build workflows with AI" },
];

const ByTheNumbers = () => {
  const ref = useScrollAnimation();

  return (
    <section ref={ref} className="py-20 sm:py-28 px-6 bg-cream">
      <div className="max-w-6xl mx-auto">
        <h2 className="scroll-fade-up text-4xl sm:text-5xl font-bold text-foreground text-center mb-16">
          By the Numbers 📊
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 stagger-children">
          {stats.map((stat, i) => (
            <div
              key={i}
              className="scroll-fade-up bg-card rounded-xl p-6 shadow-md hover:shadow-xl hover:-translate-y-1 transition-all duration-300 border border-border"
            >
              <span className="text-3xl mb-3 block">{stat.emoji}</span>
              <span className="font-serif text-4xl font-bold text-plum">{stat.number}</span>
              <p className="font-sans text-sm text-muted-foreground mt-2 leading-relaxed">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ByTheNumbers;

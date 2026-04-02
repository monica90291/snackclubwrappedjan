import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const stats = [
  { emoji: "🚀", number: "630+", label: "Members and counting (up from 130+ in January!)" },
  { emoji: "🌎", number: "20+", label: "Countries represented" },
  { emoji: "🏙️", number: "9", label: "City channels launched (Austin, Boston, Chicago, London, LA, NYC, SF, Seattle, DC)" },
  { emoji: "👩‍💻", number: "70+", label: "Women at the IWD Build Night with Lovable" },
  { emoji: "🐶", number: "30+", label: "Pets mentioned by name (Frida, Fergus, Minky, Chinny, Biff, Duck, Dash, Marie Curie the donkey...)" },
  { emoji: "💼", number: "14.1", label: "Avg. years of professional experience" },
  { emoji: "🤖", number: "60%+", label: "Of new members named Claude as a top AI tool" },
  { emoji: "📚", number: "120+", label: "Books/year read by our most voracious reader (Anna TM)" },
];

const MarchByTheNumbers = () => {
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

export default MarchByTheNumbers;

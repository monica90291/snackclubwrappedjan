import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const industries = [
  { pct: "~25%", name: "Marketing / Brand / Content", desc: "PMMs, content strategists, social leads, brand builders — still the largest crew" },
  { pct: "~25%", name: "Founders & Solo Entrepreneurs", desc: "From AI agencies to postcard subscriptions to women's health apps — the founder energy is OFF the charts" },
  { pct: "~15%", name: "Operations / Chief of Staff", desc: "The systems thinkers and workflow architects. Several now automating entire financial reporting pipelines with AI." },
  { pct: "~12%", name: "Product / Design / UX Research", desc: "Product managers, UX researchers, conversation designers — now vibe coding their own tools" },
  { pct: "~8%", name: "Consulting & Professional Services", desc: "Management consulting, fractional leaders, executive coaches, and legal" },
  { pct: "~5%", name: "Healthcare / Health Tech", desc: "New cluster! From registered nurses to healthcare product managers to sustainability compliance" },
  { pct: "~10%", name: "Other Awesome Things", desc: "Gaming ops (2K Games!), NFL strategy, Red Bull sales, animal rescue, recruiting, finance, education, nonprofits, competitive jump rope alumni" },
];

const MarchWhatWeDo = () => {
  const ref = useScrollAnimation();

  return (
    <section
      ref={ref}
      className="py-20 sm:py-28 px-6"
      style={{ background: "hsl(266 38% 13%)" }}
    >
      <div className="max-w-6xl mx-auto">
        <h2 className="scroll-fade-up text-4xl sm:text-5xl font-bold text-cream text-center mb-16">
          What We Do 💼
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 stagger-children">
          {industries.map((ind, i) => (
            <div
              key={i}
              className="scroll-fade-up rounded-xl p-6 border border-white/10 bg-white/5 hover:bg-white/10 transition-all duration-300 hover:-translate-y-1"
            >
              <span className="font-serif text-4xl font-bold text-coral block mb-2">{ind.pct}</span>
              <h3 className="font-serif text-xl font-semibold text-peach mb-2">{ind.name}</h3>
              <p className="font-sans text-sm text-cream/60 leading-relaxed">{ind.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MarchWhatWeDo;

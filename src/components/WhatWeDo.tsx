import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const industries = [
  { pct: "~30%", name: "Marketing / Brand / Content", desc: "PMMs, content writers, social leads, brand strategists — the storytellers" },
  { pct: "~25%", name: "Founders & Solo Entrepreneurs", desc: "Building AI tools, coaching platforms, consultancies, apps, and more" },
  { pct: "~15%", name: "Operations / Chief of Staff", desc: "The systems thinkers, process nerds, and workflow obsessives" },
  { pct: "~10%", name: "Product / Design / Engineering", desc: "PMs, UX researchers, conversation designers, and developers" },
  { pct: "~8%", name: "Consulting & Professional Services", desc: "Management consulting, legal, compliance, and advisory" },
  { pct: "~12%", name: "Other Awesome Things", desc: "Healthcare, recruiting, finance, community building, nonprofits, investment, real estate" },
];

const WhatWeDo = () => {
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

export default WhatWeDo;

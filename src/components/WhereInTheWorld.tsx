import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const cities = [
  { name: "San Francisco / Bay Area", count: "25+", top: true },
  { name: "Los Angeles", count: "12" },
  { name: "New York City", count: "11" },
  { name: "Seattle", count: "6" },
  { name: "San Diego", count: "5" },
  { name: "Denver / CO", count: "4" },
  { name: "Boston", count: "4" },
  { name: "Austin", count: "3" },
  { name: "Washington DC", count: "3" },
  { name: "Barcelona", count: "3" },
  { name: "Chicago", count: "3" },
  { name: "London", count: "2" },
  { name: "Cincinnati", count: "2" },
];

const WhereInTheWorld = () => {
  const ref = useScrollAnimation();

  return (
    <section ref={ref} className="py-20 sm:py-28 px-6 bg-cream">
      <div className="max-w-5xl mx-auto">
        <h2 className="scroll-fade-up text-4xl sm:text-5xl font-bold text-foreground text-center mb-16">
          Where in the World 🗺️
        </h2>

        <div className="scroll-fade-up flex flex-wrap justify-center gap-3 mb-16">
          {cities.map((city, i) => (
            <span
              key={i}
              className={`inline-flex items-center gap-2 rounded-full font-sans font-medium transition-all duration-300 hover:-translate-y-0.5 ${
                city.top
                  ? "bg-plum text-cream px-6 py-3 text-base shadow-lg"
                  : "bg-card text-foreground px-4 py-2 text-sm border border-border shadow-sm"
              }`}
            >
              {city.top && <span>📍</span>}
              {city.name} — {city.count}
            </span>
          ))}
        </div>

        <div className="scroll-fade-up grid grid-cols-1 sm:grid-cols-3 gap-6">
          <div
            className="rounded-xl p-6 text-center text-cream"
            style={{ background: "linear-gradient(135deg, hsl(315 40% 30%), hsl(0 100% 71%))" }}
          >
            <span className="font-serif text-4xl font-bold block">12</span>
            <p className="font-sans text-sm mt-1 text-cream/80">Countries</p>
          </div>
          <div
            className="rounded-xl p-6 text-center text-cream"
            style={{ background: "linear-gradient(135deg, hsl(0 100% 71%), hsl(27 100% 82%))" }}
          >
            <span className="font-serif text-4xl font-bold block">6</span>
            <p className="font-sans text-sm mt-1 text-cream/80">Continents members have lived on</p>
          </div>
          <div
            className="rounded-xl p-6 text-center text-cream"
            style={{ background: "linear-gradient(135deg, hsl(27 100% 82%), hsl(51 100% 50%))" }}
          >
            <span className="text-2xl block mb-1">🌍</span>
            <p className="font-sans text-xs leading-relaxed text-cream/90">
              Farthest members: Mawada in Barcelona, Emily Stanger in Ghana, Sabina from Abu Dhabi, Jeanette in Oslo, Norway
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhereInTheWorld;

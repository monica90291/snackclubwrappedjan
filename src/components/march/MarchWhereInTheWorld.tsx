import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const cities = [
  { name: "San Francisco / Bay Area", count: "50+", top: true },
  { name: "New York City", count: "25+" },
  { name: "Los Angeles", count: "18+" },
  { name: "Austin", count: "10+" },
  { name: "London", count: "10+" },
  { name: "Seattle", count: "8+" },
  { name: "Washington DC", count: "8+" },
  { name: "Chicago", count: "6+" },
  { name: "Boston", count: "5+" },
  { name: "San Diego", count: "5+" },
  { name: "Denver / CO", count: "4+" },
  { name: "Barcelona", count: "3+" },
  { name: "Toronto", count: "3+" },
  { name: "Houston", count: "3+" },
  { name: "Miami", count: "3+" },
  { name: "Atlanta", count: "2+" },
  { name: "Portland", count: "2+" },
];

const farthestMembers = [
  { name: "Marina", location: "Thessaloniki, Greece", flag: "🇬🇷" },
  { name: "Ikuska", location: "Barcelona, Spain", flag: "🇪🇸" },
  { name: "Caroline", location: "Berlin, Germany", flag: "🇩🇪" },
  { name: "Jeanette", location: "Oslo, Norway", flag: "🇳🇴" },
  { name: "Mary Alice", location: "Montpellier, France", flag: "🇫🇷" },
  { name: "Yasmin", location: "Porto Alegre, Brazil", flag: "🇧🇷" },
];

const MarchWhereInTheWorld = () => {
  const ref = useScrollAnimation();

  return (
    <section
      ref={ref}
      className="py-20 sm:py-28 px-6"
      style={{ background: "linear-gradient(135deg, hsl(150 57% 78%) 0%, hsl(150 40% 40%) 50%, hsl(266 38% 13%) 100%)" }}
    >
      <div className="max-w-5xl mx-auto">
        <h2 className="scroll-fade-up text-4xl sm:text-5xl font-bold text-cream text-center mb-16">
          Where in the World 🌍
        </h2>

        <div className="scroll-fade-up flex flex-wrap justify-center gap-3 mb-12">
          {cities.map((city, i) => (
            <span
              key={i}
              className={`px-4 py-2 rounded-full font-sans text-sm font-medium border transition-all duration-200 hover:-translate-y-0.5 ${
                city.top
                  ? "bg-gold/20 border-gold text-gold text-base px-5 py-2.5"
                  : "bg-white/10 border-white/20 text-cream"
              }`}
            >
              {city.name} <span className="font-serif font-bold ml-1">{city.count}</span>
            </span>
          ))}
        </div>

        <div className="scroll-fade-up grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
          <div className="glass-card rounded-xl p-6 text-center">
            <span className="font-serif text-3xl font-bold text-gold block">20+</span>
            <p className="font-sans text-sm text-cream/70 mt-1">Countries</p>
          </div>
          <div className="glass-card rounded-xl p-6 text-center">
            <span className="font-serif text-3xl font-bold text-gold block">6</span>
            <p className="font-sans text-sm text-cream/70 mt-1">Continents members have lived on</p>
          </div>
        </div>

        {/* Farthest members standout */}
        <div className="scroll-fade-up rounded-2xl p-8 border-2 border-gold/30 bg-white/10 backdrop-blur-sm">
          <div className="text-center mb-6">
            <span className="text-3xl block mb-2">✈️</span>
            <h3 className="font-serif text-xl font-bold text-gold">Our Farthest-Flung Members</h3>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
            {farthestMembers.map((m, i) => (
              <div key={i} className="text-center p-3 rounded-xl bg-white/5 hover:bg-white/10 transition-colors">
                <span className="text-2xl block mb-1">{m.flag}</span>
                <p className="font-sans font-semibold text-cream text-sm">{m.name}</p>
                <p className="font-sans text-cream/50 text-xs">{m.location}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default MarchWhereInTheWorld;

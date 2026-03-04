import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const cities = [
  { name: "San Francisco / Bay Area", count: "25+", top: true, x: 15, y: 42 },
  { name: "Los Angeles", count: "12", x: 14, y: 45 },
  { name: "New York City", count: "11", x: 27, y: 41 },
  { name: "Seattle", count: "6", x: 14, y: 35 },
  { name: "San Diego", count: "5", x: 14, y: 47 },
  { name: "Denver / CO", count: "4", x: 18, y: 41 },
  { name: "Boston", count: "4", x: 28, y: 39 },
  { name: "Austin", count: "3", x: 19, y: 50 },
  { name: "Washington DC", count: "3", x: 26, y: 42 },
  { name: "Barcelona", count: "3", x: 48, y: 40 },
  { name: "Chicago", count: "3", x: 23, y: 39 },
  { name: "London", count: "2", x: 47, y: 34 },
  { name: "Cincinnati", count: "2", x: 24, y: 42 },
];

const extraPins = [
  { name: "Ghana", x: 47, y: 57 },
  { name: "Abu Dhabi", x: 60, y: 48 },
  { name: "Oslo", x: 49, y: 28 },
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

        {/* Map View */}
        <div className="scroll-fade-up mb-16 rounded-2xl bg-card border border-border shadow-sm overflow-hidden p-4 sm:p-8">
          <svg viewBox="0 0 100 70" className="w-full h-auto" xmlns="http://www.w3.org/2000/svg">
            {/* Simplified world map continents */}
            <defs>
              <radialGradient id="pinGlow" cx="50%" cy="50%" r="50%">
                <stop offset="0%" stopColor="hsl(0 100% 71%)" stopOpacity="0.4" />
                <stop offset="100%" stopColor="hsl(0 100% 71%)" stopOpacity="0" />
              </radialGradient>
            </defs>
            {/* North America */}
            <path d="M8,25 Q12,20 20,22 Q25,20 30,25 Q32,30 30,38 Q28,42 25,48 Q22,52 18,54 Q14,52 12,48 Q8,42 6,35 Q5,30 8,25Z" fill="hsl(var(--muted))" opacity="0.5" />
            {/* South America */}
            <path d="M22,56 Q25,54 27,58 Q28,64 26,68 Q23,70 21,68 Q19,64 20,60Z" fill="hsl(var(--muted))" opacity="0.5" />
            {/* Europe */}
            <path d="M44,22 Q48,20 52,22 Q54,26 52,32 Q50,36 48,38 Q45,40 43,36 Q42,30 44,22Z" fill="hsl(var(--muted))" opacity="0.5" />
            {/* Africa */}
            <path d="M45,42 Q50,40 54,44 Q56,50 55,58 Q52,64 48,66 Q44,64 43,58 Q42,50 45,42Z" fill="hsl(var(--muted))" opacity="0.5" />
            {/* Asia */}
            <path d="M55,20 Q62,18 70,20 Q78,22 82,28 Q84,34 80,40 Q75,45 68,48 Q62,50 58,46 Q54,40 54,34 Q53,28 55,20Z" fill="hsl(var(--muted))" opacity="0.5" />
            {/* Australia */}
            <path d="M78,54 Q82,52 86,54 Q88,58 86,62 Q82,64 78,62 Q76,58 78,54Z" fill="hsl(var(--muted))" opacity="0.5" />

            {/* City pins */}
            {cities.map((city, i) => (
              <g key={i}>
                <circle cx={city.x} cy={city.y} r={city.top ? 2.5 : 1.2} fill="url(#pinGlow)" />
                <circle
                  cx={city.x}
                  cy={city.y}
                  r={city.top ? 1 : 0.6}
                  fill="hsl(var(--coral))"
                  stroke="hsl(var(--cream))"
                  strokeWidth="0.2"
                />
                {city.top && (
                  <text x={city.x} y={city.y - 2} textAnchor="middle" fill="hsl(var(--foreground))" fontSize="1.8" fontFamily="sans-serif" fontWeight="600">
                    SF
                  </text>
                )}
              </g>
            ))}
            {/* Extra international pins */}
            {extraPins.map((pin, i) => (
              <g key={`extra-${i}`}>
                <circle cx={pin.x} cy={pin.y} r={1.2} fill="url(#pinGlow)" />
                <circle cx={pin.x} cy={pin.y} r={0.5} fill="hsl(var(--gold))" stroke="hsl(var(--cream))" strokeWidth="0.2" />
              </g>
            ))}
          </svg>
          <p className="text-center text-muted-foreground text-xs mt-2 font-sans">
            📍 <span className="text-coral">Coral</span> = member cities &nbsp; <span className="text-gold">●</span> = farthest members
          </p>
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

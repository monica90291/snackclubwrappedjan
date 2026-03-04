import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { useEffect, useState } from "react";

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

// Mercator projection helper
const toMercator = (lng: number, lat: number, width: number, height: number) => {
  const x = ((lng + 180) / 360) * width;
  const latRad = (lat * Math.PI) / 180;
  const mercN = Math.log(Math.tan(Math.PI / 4 + latRad / 2));
  const y = height / 2 - (mercN / Math.PI) * (height / 2);
  return { x, y };
};

interface MapPin {
  name: string;
  count?: string;
  lat: number;
  lng: number;
  labelSide: "left" | "right";
  region: string;
  top?: boolean;
}

const mapPins: MapPin[] = [
  { name: "San Francisco", count: "25+", lat: 37.77, lng: -122.42, labelSide: "left", region: "North America", top: true },
  { name: "Los Angeles", count: "12", lat: 34.05, lng: -118.24, labelSide: "left", region: "North America" },
  { name: "New York City", count: "11", lat: 40.71, lng: -74.01, labelSide: "left", region: "North America" },
  { name: "Seattle", count: "6", lat: 47.61, lng: -122.33, labelSide: "left", region: "North America" },
  { name: "San Diego", count: "5", lat: 32.72, lng: -117.16, labelSide: "left", region: "North America" },
  { name: "Denver", count: "4", lat: 39.74, lng: -104.99, labelSide: "left", region: "North America" },
  { name: "Boston", count: "4", lat: 42.36, lng: -71.06, labelSide: "left", region: "North America" },
  { name: "Austin", count: "3", lat: 30.27, lng: -97.74, labelSide: "left", region: "North America" },
  { name: "Washington DC", count: "3", lat: 38.91, lng: -77.04, labelSide: "left", region: "North America" },
  { name: "Chicago", count: "3", lat: 41.88, lng: -87.63, labelSide: "left", region: "North America" },
  { name: "Cincinnati", count: "2", lat: 39.10, lng: -84.51, labelSide: "left", region: "North America" },
  { name: "Barcelona", count: "3", lat: 41.39, lng: 2.17, labelSide: "right", region: "Europe" },
  { name: "London", count: "2", lat: 51.51, lng: -0.13, labelSide: "right", region: "Europe" },
  { name: "Oslo, Norway", lat: 59.91, lng: 10.75, labelSide: "right", region: "Europe" },
  { name: "Accra, Ghana", lat: 5.60, lng: -0.19, labelSide: "right", region: "Africa" },
  { name: "Abu Dhabi", lat: 24.45, lng: 54.65, labelSide: "right", region: "Middle East" },
];

const WorldMap = () => {
  const [paths, setPaths] = useState<string[]>([]);
  const W = 960;
  const H = 500;

  useEffect(() => {
    // Fetch a lightweight world map GeoJSON
    fetch("https://cdn.jsdelivr.net/npm/world-atlas@2/land-110m.json")
      .then((r) => r.json())
      .then((topology) => {
        // Convert TopoJSON to simple paths
        const land = topology.objects.land;
        const arcs = topology.arcs;

        // Decode arcs
        const decodedArcs = arcs.map((arc: number[][]) => {
          let x = 0, y = 0;
          return arc.map((point: number[]) => {
            x += point[0];
            y += point[1];
            return [x, y];
          });
        });

        const transform = topology.transform;
        const transformPoint = (p: number[]) => [
          p[0] * transform.scale[0] + transform.translate[0],
          p[1] * transform.scale[1] + transform.translate[1],
        ];

        // Convert arc indices to coordinates
        const arcToCoords = (arcIdx: number) => {
          const reverse = arcIdx < 0;
          const idx = reverse ? ~arcIdx : arcIdx;
          const coords = decodedArcs[idx].map(transformPoint);
          return reverse ? coords.slice().reverse() : coords;
        };

        const ringToPath = (ring: number[]) => {
          const coords = ring.flatMap((arcIdx) => arcToCoords(arcIdx));
          return coords
            .map((c, i) => {
              const p = toMercator(c[0], c[1], W, H);
              return `${i === 0 ? "M" : "L"}${p.x.toFixed(1)},${p.y.toFixed(1)}`;
            })
            .join("") + "Z";
        };

        const geoToPath = (geo: any): string[] => {
          if (geo.type === "Polygon") {
            return [geo.arcs.map(ringToPath).join("")];
          }
          if (geo.type === "MultiPolygon") {
            return geo.arcs.map((polygon: number[][]) =>
              polygon.map(ringToPath).join("")
            );
          }
          return [];
        };

        const geometries = land.geometries || [land];
        const allPaths = geometries.flatMap((g: any) => geoToPath(g));
        setPaths(allPaths);
      })
      .catch(() => {
        // Fallback: no map paths
      });
  }, []);

  const pinPositions = mapPins.map((pin) => ({
    ...pin,
    ...toMercator(pin.lng, pin.lat, W, H),
  }));

  // Group labels by side
  const leftLabels = pinPositions.filter((p) => p.labelSide === "left");
  const rightLabels = pinPositions.filter((p) => p.labelSide === "right");

  const leftX = 30;
  const rightX = W - 30;

  return (
    <div className="scroll-fade-up mb-16 rounded-2xl bg-midnight overflow-hidden">
      <svg viewBox={`0 0 ${W} ${H}`} className="w-full h-auto" xmlns="http://www.w3.org/2000/svg">
        {/* Map land */}
        {paths.map((d, i) => (
          <path key={i} d={d} fill="hsl(var(--muted))" stroke="hsl(var(--border))" strokeWidth="0.5" opacity="0.3" />
        ))}

        {/* Leader lines + labels — Left side */}
        {leftLabels.map((pin, i) => {
          const labelY = 80 + i * 28;
          return (
            <g key={`left-${i}`}>
              <line x1={pin.x} y1={pin.y} x2={leftX + 140} y2={labelY} stroke="hsl(var(--muted-foreground))" strokeWidth="0.5" opacity="0.5" />
              <text x={leftX + 135} y={labelY + 4} textAnchor="end" fill="hsl(var(--cream))" fontSize="11" fontFamily="'DM Sans', sans-serif">
                {pin.name}{pin.count ? ` — ${pin.count}` : ""}
              </text>
            </g>
          );
        })}

        {/* Leader lines + labels — Right side */}
        {rightLabels.map((pin, i) => {
          const labelY = 100 + i * 32;
          return (
            <g key={`right-${i}`}>
              <line x1={pin.x} y1={pin.y} x2={rightX - 140} y2={labelY} stroke="hsl(var(--muted-foreground))" strokeWidth="0.5" opacity="0.5" />
              <text x={rightX - 135} y={labelY + 4} textAnchor="start" fill="hsl(var(--cream))" fontSize="11" fontFamily="'DM Sans', sans-serif">
                {pin.name}{pin.count ? ` — ${pin.count}` : ""}
              </text>
            </g>
          );
        })}

        {/* Region headers */}
        <text x={leftX} y={60} fill="hsl(var(--cream))" fontSize="14" fontWeight="700" fontFamily="'DM Sans', sans-serif">North America</text>
        <text x={rightX - 50} y={80} fill="hsl(var(--cream))" fontSize="14" fontWeight="700" fontFamily="'DM Sans', sans-serif" textAnchor="end">International</text>

        {/* Pins */}
        {pinPositions.map((pin, i) => (
          <g key={`pin-${i}`}>
            <circle cx={pin.x} cy={pin.y} r={pin.top ? 7 : 5} fill="hsl(var(--coral))" opacity="0.9" />
            <circle cx={pin.x} cy={pin.y} r={pin.top ? 3 : 2} fill="hsl(var(--cream))" opacity="0.6" />
          </g>
        ))}
      </svg>
    </div>
  );
};

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

        <WorldMap />

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

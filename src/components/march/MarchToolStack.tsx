import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { ArrowUp, ArrowDown, TrendingUp } from "lucide-react";

const otherTools = [
  "Gemini", "Granola", "Wispr Flow", "Cursor", "Claude Code",
  "NotebookLM", "Perplexity", "Replit", "v0/Vercel", "Make",
  "Gamma", "Notion AI", "Copilot", "n8n", "Stitch by Google",
  "Base44", "Bolt.new", "Figma Make", "Obsidian", "Anything",
  "Claude Cowork", "Codex", "Zapier",
];

const MarchToolStack = () => {
  const ref = useScrollAnimation();

  return (
    <section ref={ref} className="py-20 sm:py-28 px-6 bg-cream">
      <div className="max-w-5xl mx-auto">
        <h2 className="scroll-fade-up text-4xl sm:text-5xl font-bold text-foreground text-center mb-4">
          The Tool Stack 🛠️
        </h2>
        <p className="scroll-fade-up text-center text-muted-foreground font-sans text-lg mb-16">
          The Great Migration
        </p>

        {/* Podium */}
        <div className="scroll-fade-up flex items-end justify-center gap-4 sm:gap-8 mb-8 max-w-lg mx-auto">
          {/* Silver - 2nd */}
          <div className="flex flex-col items-center flex-1">
            <span className="text-3xl mb-2">🥈</span>
            <span className="font-serif font-bold text-lg text-foreground">ChatGPT</span>
            <span className="font-sans text-sm text-muted-foreground mb-1">~35%</span>
            <span className="inline-flex items-center gap-1 text-xs font-sans text-red-500 mb-2">
              <ArrowDown className="w-3 h-3" /> from 55%
            </span>
            <div
              className="w-full rounded-t-xl"
              style={{
                height: "120px",
                background: "linear-gradient(180deg, #C0C0C0, #A0A0A0)",
              }}
            />
          </div>
          {/* Gold - 1st */}
          <div className="flex flex-col items-center flex-1">
            <span className="text-4xl mb-2">🥇</span>
            <span className="font-serif font-bold text-xl text-foreground">Claude</span>
            <span className="font-sans text-sm text-muted-foreground mb-1">~60%</span>
            <span className="inline-flex items-center gap-1 text-xs font-sans text-green-600 mb-2">
              <ArrowUp className="w-3 h-3" /> from 42%
            </span>
            <div
              className="w-full rounded-t-xl"
              style={{
                height: "180px",
                background: "linear-gradient(180deg, hsl(51 100% 50%), hsl(40 90% 45%))",
              }}
            />
          </div>
          {/* Bronze - 3rd */}
          <div className="flex flex-col items-center flex-1">
            <span className="text-3xl mb-2">🥉</span>
            <span className="font-serif font-bold text-lg text-foreground">Lovable</span>
            <span className="font-sans text-sm text-muted-foreground mb-1">~30%</span>
            <span className="inline-flex items-center gap-1 text-xs font-sans text-green-600 mb-2">
              <TrendingUp className="w-3 h-3" /> NEW
            </span>
            <div
              className="w-full rounded-t-xl"
              style={{
                height: "80px",
                background: "linear-gradient(180deg, #CD7F32, #A0652A)",
              }}
            />
          </div>
        </div>

        {/* Migration callout */}
        <div className="scroll-fade-up max-w-lg mx-auto mb-16 rounded-xl border border-plum/30 bg-plum/10 p-5 text-center">
          <span className="text-2xl block mb-2">🔄</span>
          <h3 className="font-serif font-bold text-lg text-foreground mb-2">The Great Migration</h3>
          <p className="font-sans text-sm text-muted-foreground leading-relaxed">
            "I broke up with ChatGPT" was said in at least 5 different intros this month.
            Claude went from silver to gold. The vibes have shifted.
          </p>
        </div>

        {/* Other tools */}
        <div className="scroll-fade-up">
          <p className="text-center text-muted-foreground font-sans text-sm mb-4">Also spotted in the wild:</p>
          <div className="flex flex-wrap justify-center gap-2">
            {otherTools.map((tool, i) => (
              <span
                key={i}
                className="px-3 py-1.5 rounded-full text-xs font-sans font-medium bg-card border border-border text-foreground hover:bg-plum hover:text-cream transition-colors duration-200"
              >
                {tool}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default MarchToolStack;

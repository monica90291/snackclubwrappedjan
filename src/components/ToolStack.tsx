import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const otherTools = [
  "Lovable", "Cursor", "Perplexity", "Granola", "Claude Code", "NotebookLM",
  "Gamma", "Notion AI", "Midjourney", "Copilot", "Wispr Flow", "Zapier",
  "Fireflies.ai", "v0.dev", "Gumloop", "Base44", "Otter.ai", "Conductor",
];

const ToolStack = () => {
  const ref = useScrollAnimation();

  return (
    <section ref={ref} className="py-20 sm:py-28 px-6 bg-cream">
      <div className="max-w-5xl mx-auto">
        <h2 className="scroll-fade-up text-4xl sm:text-5xl font-bold text-foreground text-center mb-16">
          The Tool Stack 🛠️
        </h2>

        {/* Podium */}
        <div className="scroll-fade-up flex items-end justify-center gap-4 sm:gap-8 mb-16 max-w-lg mx-auto">
          {/* Silver - 2nd */}
          <div className="flex flex-col items-center flex-1">
            <span className="text-3xl mb-2">🥈</span>
            <span className="font-serif font-bold text-lg text-foreground">Claude</span>
            <span className="font-sans text-sm text-muted-foreground mb-2">~42%</span>
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
            <span className="font-serif font-bold text-xl text-foreground">ChatGPT</span>
            <span className="font-sans text-sm text-muted-foreground mb-2">~55%</span>
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
            <span className="font-serif font-bold text-lg text-foreground">Gemini</span>
            <span className="font-sans text-sm text-muted-foreground mb-2">~18%</span>
            <div
              className="w-full rounded-t-xl"
              style={{
                height: "80px",
                background: "linear-gradient(180deg, #CD7F32, #A0652A)",
              }}
            />
          </div>
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

export default ToolStack;

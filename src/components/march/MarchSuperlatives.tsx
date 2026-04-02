import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const superlatives = [
  { emoji: "🧊", title: "Brain Freeze Immunity Award", winner: "Leila Moussaoui", desc: "Opera-trained. Badminton vice-champion in Morocco. Speaks 5 languages. Sold everything during COVID and lived out of 2 suitcases. AND is physically incapable of getting a brain freeze. 'I genuinely thought it was just an expression people used when their mouth got cold.'" },
  { emoji: "🌿", title: "Most Badass Bush", winner: "Hannah Dopico", desc: "Was bush #68 in Bad Bunny's Super Bowl halftime show." },
  { emoji: "⚖️", title: "Unstoppable Pregnant Legend", winner: "Natascia", desc: "Took the LSAT pregnant with her first. The Bar exam pregnant with her second. Launched her own law firm pregnant with her third." },
  
  { emoji: "🫧", title: "Zigzag Career Award", winner: "Pamesha Pande", desc: "Hairdresser → tattoo artist → dance instructor → event manager → classical Indian dancer for 20+ years with her own dance company → now in strategy ops. 'Zigzag is a valid trajectory.'" },
  { emoji: "🫏", title: "Best Pet Name", winner: "Sophia Deluz-Bhan", desc: "Bootstrapped a company to $35M ARR. Runs an animal rescue with 20+ animals. Including a baby donkey named Marie Curie." },
  { emoji: "💪", title: "Strongest Snacker", winner: "eeya mendoza", desc: "Can deadlift 245 lbs for 5 reps. Favorite snack? Miss Vickie's kettle chips and Kinder Bueno." },
  { emoji: "🏈", title: "Coolest Day Job", winner: "Priyanka Javlekar", desc: "Director at the NFL (Global Events & Strategy). Inaugural AI Captain. Co-founded a Women's Sports Summit at Columbia Business School." },
  { emoji: "🇫🇷", title: "Most Fearless Relocation", winner: "Mary Alice", desc: "Moved to France without ever visiting the country, with no French language skills and zero French network. Now eligible for citizenship. Also makes an epic carrot cake." },
  { emoji: "🎸", title: "Most Metal", winner: "Ikuska", desc: "Avid Metallica fan (6 concerts, next one Budapest June 2026). Learning electric guitar from scratch. Speaks 5 languages, learning the 6th. Favorite place on Earth: Torres del Paine, Patagonia." },
  { emoji: "🐕", title: "Best Side Hustle", winner: "Kierstin Geary", desc: "Runs 'Must Love Dogs SoCal' — a wedding day dog handling service. Because every couple deserves their dog in the ceremony photos." },
  { emoji: "🧶", title: "Grandma Hobby Club Expands", winner: "Liana Steir, Hilary Owen, Lillian Barclay, Yasmin Stivelman & more", desc: "Liana embroiders Trader Joe's bags. Hilary has a degree in knitwear design. Lillian builds miniature dollhouse furniture. Yasmin is a ceramist. Gabriela has a mini painting studio in the corner of her room." },
  { emoji: "🧠", title: "Most Languages in One Human", winner: "Nicole Lee", desc: "Speaks 6 languages fluently. Holly Higgins close behind with 5. The polyglot energy in this community is unmatched." },
  { emoji: "🎯", title: "Fastest Career Pivot", winner: "Melissa Murphy", desc: "Went from zero coding knowledge to fixing bugs on a law firm's platform using Claude Code. 'I can't believe how fun this is!!'" },
  { emoji: "🏋️‍♀️", title: "Most Impressive Double Life", winner: "Amy Sussman", desc: "Single mom of 2, busy sales role, AND training for Hyrox competitions. Built her own custom training platform that adjusts around her custody schedule." },
];

const MarchSuperlatives = () => {
  const ref = useScrollAnimation();

  return (
    <section
      ref={ref}
      className="py-20 sm:py-28 px-6"
      style={{ background: "linear-gradient(135deg, hsl(315 40% 30%) 0%, hsl(0 100% 71%) 50%, hsl(27 100% 82%) 100%)" }}
    >
      <div className="max-w-6xl mx-auto">
        <h2 className="scroll-fade-up text-4xl sm:text-5xl font-bold text-cream text-center mb-16">
          Member Superlatives ✨
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 stagger-children">
          {superlatives.map((s, i) => (
            <div
              key={i}
              className="scroll-fade-up glass-card rounded-2xl p-6 hover:-translate-y-1 hover:bg-white/20 transition-all duration-300"
            >
              <span className="text-3xl block mb-2">{s.emoji}</span>
              <h3 className="font-serif text-lg font-bold text-gold mb-1">{s.title}</h3>
              <p className="font-sans font-semibold text-foreground text-base mb-2">{s.winner}</p>
              <p className="font-sans text-sm text-foreground/70 leading-relaxed">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MarchSuperlatives;

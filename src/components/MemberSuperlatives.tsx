import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const superlatives = [
  { emoji: "🌍", title: "Most Countries Lived In", winner: "Evelyn Cools", desc: "Belgium, USA (6 cities!), Germany, Hungary, Hong Kong & the UK" },
  { emoji: "🎤", title: "Coolest Career Plot Twist", winner: "Mikayla Stewart", desc: "Designed the Academy Awards Digital Ticket transition in 2022. Got to go to the Oscars." },
  { emoji: "🐐", title: "Most Unexpected Side Hustle", winner: "Kate Chapman", desc: "Breeds and shows dairy goats. Hauled them from Washington to Nebraska for Nationals. Records voice memos while driving goats." },
  { emoji: "💡", title: "ChatGPT Literally Saved My Life", winner: "Bethany Crystal", desc: "Featured in NPR. Also has 2 apps live in the iOS App Store via vibe coding." },
  { emoji: "🎬", title: "Closest Brush with Fame", winner: "Diana Olympia", desc: "Her dog Biff won \"Best Couch Potato\" on ABC's American Rescue Dog Show. Was wheeled onstage on a couch. Biff kissed Paula Abdul." },
  { emoji: "🏃‍♀️", title: "Biggest Transformation", winner: "Stephanie Serrano", desc: "Lost 100+ lbs through metabolic health research. Now channeling that energy into health tech." },
  { emoji: "🧩", title: "Niche Competition Champion", winner: "Kim H", desc: "Participated in the USA Jigsaw Puzzle Nationals." },
  { emoji: "🎵", title: "Wildest Teen Side Quest", winner: "Alex Chung", desc: "Ran a Maroon 5 fan Twitter at 13. Adam Levine sent her a guitar." },
  { emoji: "🕵️‍♀️", title: "Most Mysterious Background", winner: "Jen Wan", desc: "Has no fingerprints. Disney Lightning Lane and Trusted Traveler were nightmares." },
  { emoji: "🐔", title: "Most Literal Industry Expert", winner: "Ashley Caudill", desc: 'Background: "everything poultry" 🐓' },
  { emoji: "🧡", title: "OG Babysitter Award", winner: "Stephanie Marie Ivanick", desc: "Once babysat our very own Monica Abrams. Full circle moment." },
  { emoji: "🥕", title: "Most Committed Snacker", winner: "Elysia Mann", desc: '"I ate so many carrots I turned orange."' },
];

const MemberSuperlatives = () => {
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
              <p className="font-sans font-semibold text-cream text-base mb-2">{s.winner}</p>
              <p className="font-sans text-sm text-cream/70 leading-relaxed">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MemberSuperlatives;

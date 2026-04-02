import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const builds = [
  { emoji: "🏆", name: "Jamari Snipes", project: "AI Chief of Staff", desc: "Built an AI system that reviews her entire business every morning — pulls calendars, tasks, bottlenecks, and emails into Notion, then sends a briefing newsletter to her inbox." },
  { emoji: "📊", name: "Kathy", project: "Financial Report Automation", desc: "Automating one financial report per week with Claude. Sales → AR Aging → ARR → Board reporting. 'I think I blew my VP of Finance's mind.'" },
  { emoji: "📱", name: "Jenia Zimmerman", project: "Atta — Women's Health App", desc: "Launched on the App Store after 5 months of building with Lovable. 118 users in the first 3 days." },
  { emoji: "🍽️", name: "Allie Dono", project: "Tried & Tasted", desc: "A personal restaurant diary app built during a 45-min co-working session. First vibe coding project built without any help." },
  { emoji: "🎵", name: "Swati Sachdeva", project: "Personal Music Player", desc: "Discovered hundreds of pre-Spotify MP3s on her laptop and built an app on Lovable to play them. 'Wishing for something and having it delivered the next moment is such a powerful feeling.'" },
  { emoji: "💰", name: "Erica Bailey", project: "Sales Tax Calculator", desc: "Built a tool on Lovable to auto-calculate taxable sales from DoorDash, GrubHub, UberEats, EZCater, and POS reports. For her 'most pain in the ass' client." },
  { emoji: "🎤", name: "Shayna", project: "AI in Mental Health Keynote", desc: "Stepped up and gave a keynote on AI in the mental health space at a conference. 'I couldn't have done it without this community.'" },
  { emoji: "👶", name: "Antarika Sen", project: "tinyfingersmash.com", desc: "Built a website so her toddler can safely smash the keyboard. Educational letter cards pop up with soothing sounds. No more screaming 'NoOoO!'" },
  { emoji: "🏋️", name: "Amy Sussman", project: "Hyrox Training Platform", desc: "Single mom of 2 in a busy sales role. Built a custom training platform that adjusts around her custody schedule and how she's feeling." },
  { emoji: "🏢", name: "Mikayla Stewart", project: "Full Company OS", desc: "Built an internal operating system in 5 hours. Auth0, Granola integration, invoices, commission payouts, analytics, and client portals. Killed HubSpot, ClickUp, and Google Drive in the process." },
  { emoji: "🌸", name: "Jennie Salas", project: "Rise & Post", desc: "A LinkedIn content studio to capture ideas, craft posts, and stay consistent. Built by someone who joined the community to overcome imposter syndrome." },
  { emoji: "⚖️", name: "Melissa Murphy", project: "Legal Platform Bug Fixes", desc: "Learned to code using Claude Code and Claude Cowork — now creating bug fixes for a law firm's platform. 'I can't believe how fun this is!!'" },
];

const WhatWeBuilt = () => {
  const ref = useScrollAnimation();

  return (
    <section
      ref={ref}
      className="py-20 sm:py-28 px-6"
      style={{ background: "linear-gradient(180deg, hsl(266 38% 13%) 0%, hsl(315 40% 20%) 100%)" }}
    >
      <div className="max-w-6xl mx-auto">
        <h2 className="scroll-fade-up text-4xl sm:text-5xl font-bold text-cream text-center mb-4">
          What We Built 🛠️
        </h2>
        <p className="scroll-fade-up text-center text-cream/60 font-sans text-lg mb-16">
          From using AI to <em className="text-peach">building</em> with AI
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 stagger-children">
          {builds.map((b, i) => (
            <div
              key={i}
              className="scroll-fade-up rounded-2xl p-6 border border-white/10 bg-white/5 hover:bg-white/10 transition-all duration-300 hover:-translate-y-1 relative overflow-hidden"
            >
              <div className="absolute top-3 right-3 text-white/5 font-mono text-5xl font-bold select-none">
                {`</>`}
              </div>
              <span className="text-3xl block mb-3">{b.emoji}</span>
              <p className="font-sans font-semibold text-cream text-base mb-1">{b.name}</p>
              <h3 className="font-serif text-lg font-bold text-gold mb-2">{b.project}</h3>
              <p className="font-sans text-sm text-cream/60 leading-relaxed">{b.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhatWeBuilt;

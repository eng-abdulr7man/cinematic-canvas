import { motion } from "framer-motion";

const awards = [
  { year: "2024", title: "Best Student Editor — Cairo Media Arts", category: "Short Film" },
  { year: "2024", title: "Official Selection", category: "Independent Film Festival" },
  { year: "2023", title: "Adobe Certified Professional", category: "Video Design" },
  { year: "2023", title: "Top Emerging Creator — Creative Hub", category: "Social Content" },
];

const equipment = [
  { category: "EDITING", items: ["MacBook Pro M3 Max", "Studio Display 5K", "Adobe Premiere Pro", "After Effects"] },
  { category: "COLOR", items: ["DaVinci Resolve Studio", "Blackmagic Design Micro Panel", "Asus ProArt Monitor"] },
  { category: "AUDIO", items: ["Adobe Audition", "Beyerdynamic DT 770 Pro", "Focusrite Scarlett Interface", "Yamaha HS5 Monitors"] },
];

const AwardsAndEquipment = () => {
  return (
    <>
      {/* Awards */}
      <section className="py-24 md:py-32 border-t border-border">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-16"
          >
            <p className="font-mono text-xs text-primary tracking-[0.3em] mb-2">RECOGNITION</p>
            <h2 className="text-4xl md:text-6xl font-display font-bold tracking-tight text-foreground">
              Milestones & Certs
            </h2>
          </motion.div>

          <div className="space-y-0">
            {awards.map((award, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                className="group flex flex-col md:flex-row md:items-center gap-2 md:gap-8 py-6 border-b border-border hover:border-primary/30 transition-colors "
              >
                <span className="font-mono text-sm text-primary w-16 shrink-0">{award.year}</span>
                <h3 className="font-display text-lg md:text-xl font-semibold text-foreground group-hover:text-gradient-neon transition-colors flex-1">
                  {award.title}
                </h3>
                <span className="font-mono text-xs text-muted-foreground tracking-wider">
                  {award.category.toUpperCase()}
                </span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Equipment / Setup */}
      <section className="py-24 md:py-32 border-t border-border relative">
        <div className="absolute inset-0 bg-gradient-to-b from-primary/[0.01] via-transparent to-transparent pointer-events-none" />
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-16"
          >
            <p className="font-mono text-xs text-primary tracking-[0.3em] mb-2">THE STUDIO</p>
            <h2 className="text-4xl md:text-6xl font-display font-bold tracking-tight text-foreground">
              My Setup
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {equipment.map((group, i) => (
              <motion.div
                key={group.category}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.15 }}
                className="bg-card border border-border p-8 hover:border-primary/20 transition-colors group"
              >
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-2 h-2 rounded-full bg-primary animate-pulse-neon" />
                  <span className="font-mono text-xs text-primary tracking-[0.3em]">
                    {group.category}
                  </span>
                </div>

                <ul className="space-y-3">
                  {group.items.map((item) => (
                    <li key={item} className="flex items-center gap-3">
                      <span className="w-px h-3 bg-primary/30" />
                      <span className="font-display text-sm text-muted-foreground group-hover:text-foreground/80 transition-colors">
                        {item}
                      </span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default AwardsAndEquipment;

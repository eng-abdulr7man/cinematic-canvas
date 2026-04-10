import { motion } from "framer-motion";

const skills = [
  { name: "Premiere Pro", level: 85, color: "#9999ff", category: "Editing" },
  { name: "DaVinci Resolve", level: 75, color: "#ff6b6b", category: "Color" },
  { name: "After Effects", level: 65, color: "#cf9fff", category: "VFX" },
  { name: "CapCut Desktop", level: 90, color: "#00b4ff", category: "Social Media" },
  { name: "Sound Design", level: 70, color: "#4ade80", category: "Audio" },
  { name: "Color Grading", level: 72, color: "#f59e0b", category: "Color" },
];

const SkillsTimeline = () => {
  return (
    <section id="skills" className="py-24 md:py-32 bg-background/50">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <p className="font-mono text-xs text-primary tracking-[0.3em] mb-2 uppercase">Core Stack</p>
          <h2 className="text-4xl md:text-6xl font-display font-bold tracking-tight text-foreground">
            Skills & <span className="text-muted-foreground/50">Timeline</span>
          </h2>
        </motion.div>

        {/* NLE Timeline UI */}
        <div className="relative border border-border/50 bg-card/30 p-4 rounded-lg backdrop-blur-sm">
          {/* Timeline header - resembling NLE */}
          <div className="flex items-center gap-4 mb-2 px-2">
            <span className="font-mono text-[10px] text-primary/60 w-32 shrink-0 italic">SEQUENCE_01</span>
            <div className="flex-1 flex justify-between">
              {Array.from({ length: 11 }).map((_, i) => (
                <span key={i} className="font-mono text-[9px] text-muted-foreground/40">
                  00:00:{i < 10 ? `0${i}` : i}
                </span>
              ))}
            </div>
          </div>

          {/* Ruler line */}
          <div className="h-[2px] bg-gradient-to-r from-primary/40 via-border to-transparent mb-6" />

          {/* Tracks */}
          <div className="space-y-3">
            {skills.map((skill, i) => (
              <motion.div
                key={skill.name}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08, duration: 0.5 }}
                className="flex items-center gap-4 group"
              >
                {/* Track label */}
                <div className="w-32 shrink-0 px-2 py-2 bg-secondary/30 border-l-2 flex items-center gap-2" style={{ borderColor: skill.color }}>
                  <span className="font-mono text-[11px] text-foreground truncate uppercase">{skill.name}</span>
                </div>

                {/* Track bar (The Clip) */}
                <div className="flex-1 relative h-12 bg-secondary/20 border border-border/30 group-hover:border-primary/20 transition-all overflow-hidden">
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: `${skill.level}%` }}
                    viewport={{ once: true }}
                    transition={{ duration: 1.2, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
                    className="absolute inset-y-0 left-0 flex items-center"
                    style={{
                      background: `linear-gradient(90deg, ${skill.color}22, ${skill.color}55)`,
                      borderRight: `3px solid ${skill.color}`,
                    }}
                  >
                    <div className="flex items-center px-4 overflow-hidden">
                      <div className="w-1 h-4 bg-white/20 mr-2 rounded-full" />
                      <span className="font-mono text-[10px] text-white/80 tracking-tighter whitespace-nowrap">
                        {skill.category}.mp4
                      </span>
                    </div>
                  </motion.div>

                  {/* Grid lines inside track */}
                  <div className="absolute inset-0 flex pointer-events-none">
                    {Array.from({ length: 10 }).map((_, j) => (
                      <div key={j} className="flex-1 border-r border-white/[0.03]" />
                    ))}
                  </div>
                </div>

                {/* Percentage */}
                <span className="w-12 font-mono text-[10px] text-primary/60 text-right group-hover:text-primary transition-colors">
                  {skill.level}%
                </span>
              </motion.div>
            ))}
          </div>

          {/* Playhead (The Red Line) */}
          <motion.div
            className="absolute top-0 bottom-0 w-[1.5px] bg-red-500 shadow-[0_0_10px_rgba(239,68,68,0.5)] z-20 pointer-events-none"
            style={{ left: "155px" }} // تم ضبطه ليبدأ من بعد الـ Labels
            animate={{ x: [0, 200, 0] }}
            transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
          >
            <div className="absolute -top-1 left-1/2 -translate-x-1/2 w-4 h-4 bg-red-500" style={{ clipPath: "polygon(0% 0%, 100% 0%, 50% 100%)" }} />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default SkillsTimeline;

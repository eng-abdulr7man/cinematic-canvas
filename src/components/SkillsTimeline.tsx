import { motion } from "framer-motion";

const skills = [
  { name: "Premiere Pro", level: 95, color: "#9999ff", category: "Editing" },
  { name: "DaVinci Resolve", level: 90, color: "#ff6b6b", category: "Color" },
  { name: "After Effects", level: 88, color: "#cf9fff", category: "VFX" },
  { name: "Cinema 4D", level: 75, color: "#00b4ff", category: "3D" },
  { name: "Sound Design", level: 82, color: "#4ade80", category: "Audio" },
  { name: "Color Grading", level: 92, color: "#f59e0b", category: "Color" },
];

const SkillsTimeline = () => {
  return (
    <section id="skills" className="py-24 md:py-32">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <p className="font-mono text-xs text-primary tracking-[0.3em] mb-2">EXPERTISE</p>
          <h2 className="text-4xl md:text-6xl font-display font-bold tracking-tight text-foreground">
            Skills & Tools
          </h2>
        </motion.div>

        {/* NLE Timeline UI */}
        <div className="relative">
          {/* Timeline header - resembling NLE */}
          <div className="flex items-center gap-4 mb-2 px-2">
            <span className="font-mono text-[10px] text-muted-foreground w-32 shrink-0">TRACK</span>
            <div className="flex-1 flex justify-between">
              {Array.from({ length: 11 }).map((_, i) => (
                <span key={i} className="font-mono text-[10px] text-muted-foreground/50">
                  {i * 10}%
                </span>
              ))}
            </div>
          </div>

          {/* Ruler line */}
          <div className="h-px bg-border mb-4" />

          {/* Tracks */}
          <div className="space-y-2">
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
                <div className="w-32 shrink-0 px-2 py-3 flex items-center gap-2">
                  <span className="w-2 h-2 rounded-sm" style={{ backgroundColor: skill.color }} />
                  <span className="font-mono text-xs text-foreground truncate">{skill.name}</span>
                </div>

                {/* Track bar */}
                <div className="flex-1 relative h-10 bg-secondary/50 border border-border/50 group-hover:border-border transition-colors overflow-hidden">
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: `${skill.level}%` }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, delay: 0.3 + i * 0.1, ease: [0.16, 1, 0.3, 1] }}
                    className="absolute inset-y-0 left-0 flex items-center"
                    style={{
                      background: `linear-gradient(90deg, ${skill.color}33, ${skill.color}66)`,
                      borderRight: `2px solid ${skill.color}`,
                    }}
                  >
                    <span className="ml-3 font-mono text-[10px] text-foreground/80 tracking-wider whitespace-nowrap">
                      {skill.category}
                    </span>
                  </motion.div>

                  {/* Grid lines inside track */}
                  <div className="absolute inset-0 flex">
                    {Array.from({ length: 10 }).map((_, j) => (
                      <div key={j} className="flex-1 border-r border-border/20" />
                    ))}
                  </div>
                </div>

                {/* Percentage */}
                <span className="w-10 font-mono text-xs text-muted-foreground text-right">
                  {skill.level}%
                </span>
              </motion.div>
            ))}
          </div>

          {/* Playhead */}
          <motion.div
            className="absolute top-0 bottom-0 w-px bg-primary/60 z-10 pointer-events-none"
            style={{ left: "60%" }}
            animate={{ opacity: [0.4, 1, 0.4] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            <div className="absolute -top-1 left-1/2 -translate-x-1/2 w-3 h-3 bg-primary" style={{ clipPath: "polygon(50% 100%, 0 0, 100% 0)" }} />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default SkillsTimeline;

import { motion } from "framer-motion";

const steps = [
  {
    number: "01",
    title: "CUTTING",
    subtitle: "Assembly & Structure",
    description: "Raw footage transformed into a narrative. Every cut is intentional, every transition purposeful.",
    icon: "✂",
  },
  {
    number: "02",
    title: "COLOR GRADING",
    subtitle: "Mood & Atmosphere",
    description: "Cinematic color science applied to establish visual tone and emotional resonance.",
    icon: "🎨",
  },
  {
    number: "03",
    title: "SOUND DESIGN",
    subtitle: "Immersive Audio",
    description: "Layered soundscapes, precise mixing, and audio effects that complete the visual experience.",
    icon: "🔊",
  },
];

const WorkProcess = () => {
  return (
    <section id="process" className="py-24 md:py-32 relative">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-20"
        >
          <p className="font-mono text-xs text-primary tracking-[0.3em] mb-2">METHODOLOGY</p>
          <h2 className="text-4xl md:text-6xl font-display font-bold tracking-tight text-foreground">
            Work Process
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-px bg-border">
          {steps.map((step, i) => (
            <motion.div
              key={step.number}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15, duration: 0.6 }}
              className="bg-background p-8 md:p-10 group hover:bg-secondary/30 transition-colors duration-500 relative"
            >
              {/* Step number */}
              <span className="font-mono text-7xl md:text-8xl font-bold text-secondary/60 absolute top-4 right-6 group-hover:text-primary/10 transition-colors duration-500">
                {step.number}
              </span>

              <div className="relative z-10">
                <span className="text-3xl mb-6 block">{step.icon}</span>
                <h3 className="font-display text-xl md:text-2xl font-bold text-foreground mb-1 tracking-wide">
                  {step.title}
                </h3>
                <p className="font-mono text-xs text-primary tracking-wider mb-4">{step.subtitle}</p>
                <p className="text-sm text-muted-foreground leading-relaxed max-w-sm">
                  {step.description}
                </p>

                {/* Bottom accent line */}
                <motion.div
                  className="h-px mt-8 bg-primary/30 origin-left"
                  initial={{ scaleX: 0 }}
                  whileInView={{ scaleX: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.5 + i * 0.2, duration: 0.8 }}
                />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WorkProcess;

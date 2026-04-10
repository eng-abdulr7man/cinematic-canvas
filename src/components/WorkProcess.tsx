import { motion } from "framer-motion";

const steps = [
  {
    number: "01",
    title: "THE ASSEMBLY",
    subtitle: "Rhythm & Structure",
    description: "Transforming raw footage into a compelling narrative. Every cut is intentional, ensuring the pace and flow perfectly align with the story's heartbeat.",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M7 21h10a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 3H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
      </svg>
    ),
  },
  {
    number: "02",
    title: "COLOR SCIENCE",
    subtitle: "Mood & Grading",
    description: "Applying cinematic color grading to evoke specific emotions. We create a cohesive visual identity that enhances the atmosphere and elevates the overall production value.",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
      </svg>
    ),
  },
  {
    number: "03",
    title: "SONIC DEPTH",
    subtitle: "Immersive Sound Design",
    description: "Sound is 50% of the experience. We build intricate soundscapes, layered Foley, and precise mixing to pull the audience directly into the world on screen.",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M15.536 8.464a5 5 0 010 7.072m2.828-9.9a9 9 0 010 12.728M5.586 15H4a1 1 0 01-1-1v-4a1 1 0 011-1h1.586l4.707-4.707C10.923 3.663 12 4.109 12 5v14c0 .891-1.077 1.337-1.707.707L5.586 15z" />
      </svg>
    ),
  },
];

const WorkProcess = () => {
  return (
    <section id="process" className="py-24 md:py-40 relative bg-black overflow-hidden" dir="ltr">
      {/* Background Elements */}
      <div className="absolute top-0 left-0 w-full h-full opacity-20 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-[150px]" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-[150px]" />
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-24 text-left"
        >
          <div className="flex items-center gap-3 mb-4">
            <p className="font-mono text-xs text-primary tracking-[0.4em] uppercase">Methodology</p>
            <div className="h-px w-12 bg-primary/50" />
          </div>
          <h2 className="text-5xl md:text-8xl font-display font-bold tracking-tighter text-white">
            Crafting the <span className="text-gradient-neon">Vision</span>
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-12 lg:gap-8">
          {steps.map((step, i) => (
            <motion.div
              key={step.number}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.2, duration: 0.8 }}
              className="group relative"
            >
              {/* Card Container */}
              <div className="relative h-full bg-white/[0.03] border border-white/10 p-10 backdrop-blur-md overflow-hidden transition-all duration-500 group-hover:bg-white/[0.07] group-hover:border-primary/30 group-hover:translate-y-[-10px]">
                
                {/* Large Background Number */}
                <span className="absolute -top-4 -right-4 font-display text-[120px] font-black text-white/[0.02] transition-colors duration-500 group-hover:text-primary/5">
                  {step.number}
                </span>

                <div className="relative z-10">
                  {/* Icon with glow */}
                  <div className="w-14 h-14 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center text-primary mb-8 transition-transform duration-500 group-hover:scale-110 group-hover:shadow-[0_0_20px_rgba(var(--primary-rgb),0.3)]">
                    {step.icon}
                  </div>

                  <h3 className="font-display text-2xl font-bold text-white mb-2 tracking-tight">
                    {step.title}
                  </h3>
                  
                  <p className="font-mono text-[10px] text-primary tracking-[0.2em] mb-6 uppercase opacity-80">
                    // {step.subtitle}
                  </p>
                  
                  <p className="text-muted-foreground leading-relaxed text-sm md:text-base font-light">
                    {step.description}
                  </p>

                  {/* Tech Scanner Line */}
                  <div className="mt-8 h-[1px] w-full bg-white/10 relative overflow-hidden">
                    <motion.div 
                      className="absolute inset-0 bg-primary"
                      initial={{ x: "-100%" }}
                      whileInView={{ x: "100%" }}
                      transition={{ duration: 2, repeat: Infinity, ease: "linear", repeatDelay: 1 }}
                    />
                  </div>
                </div>

                {/* Corner Accents */}
                <div className="absolute bottom-0 right-0 w-4 h-4 border-b border-r border-white/20 transition-colors group-hover:border-primary/50" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WorkProcess;

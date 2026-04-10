import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const testimonials = [
  {
    quote: "Mohamed has a fresh eye for visual rhythm. He took our social campaign and gave it a high-end cinematic feel that exceeded our expectations.",
    name: "Sarah Mitchell",
    role: "Creative Director, Luminary Films",
    project: "Social Media Campaign",
  },
  {
    quote: "He is incredibly fast and intuitive. Mohamed understood the vibe of the project immediately and delivered a cut that was spot on.",
    name: "Omar Hassan",
    role: "Content Manager, RedSea Media",
    project: "Travel Vlog Series",
  },
  {
    quote: "Professionalism and creativity combined. Mohamed’s editing on our product launch made it feel like a mini movie. Pure storytelling.",
    name: "Lisa Chen",
    role: "Marketing Lead, TechVision",
    project: "Product Launch",
  },
  {
    quote: "Great ear for sound design. He layers audio in a way that truly immerses the viewer. A rising star in the editing world.",
    name: "David Park",
    role: "Music Video Director",
    project: "Music Video",
  },
];

const Testimonials = () => {
  const [current, setCurrent] = useState(0);

  const next = () => setCurrent((c) => (c + 1) % testimonials.length);
  const prev = () => setCurrent((c) => (c - 1 + testimonials.length) % testimonials.length);

  return (
    <section className="py-24 md:py-32 relative overflow-hidden bg-background/50">
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/[0.05] rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-5xl mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <p className="font-mono text-xs text-primary tracking-[0.3em] mb-2 uppercase italic">&gt; Feedback</p>
          <h2 className="text-4xl md:text-6xl font-display font-bold tracking-tight text-foreground">
            Client <span className="text-gradient-neon">Words</span>
          </h2>
        </motion.div>

        <div className="relative min-h-[350px] md:min-h-[300px] flex items-center">
          <AnimatePresence mode="wait">
            <motion.div
              key={current}
              initial={{ opacity: 0, scale: 0.95, y: 10 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 1.05, y: -10 }}
              transition={{ duration: 0.4, ease: "easeOut" }}
              className="text-center w-full"
            >
              {/* Cinematic Quote mark */}
              <div className="font-display text-8xl text-primary/10 leading-none h-12 select-none italic">"</div>

              <p className="text-xl md:text-3xl text-foreground/90 leading-relaxed font-display max-w-3xl mx-auto mb-10 italic">
                {testimonials[current].quote}
              </p>

              <div className="space-y-2">
                <p className="font-display text-lg font-bold text-foreground">
                  {testimonials[current].name}
                </p>
                <div className="flex flex-col md:flex-row items-center justify-center gap-2 md:gap-4">
                   <p className="font-mono text-[10px] text-muted-foreground tracking-widest uppercase">
                    {testimonials[current].role}
                  </p>
                  <span className="hidden md:block w-1 h-1 bg-primary/40 rounded-full" />
                  <p className="font-mono text-[10px] text-primary tracking-[0.2em] font-semibold">
                    PROJECT: {testimonials[current].project.toUpperCase()}
                  </p>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Navigation Control Bar */}
        <div className="flex flex-col items-center gap-8 mt-16">
          <div className="flex items-center gap-8">
            <button
              onClick={prev}
              className="group relative w-14 h-14 border border-border hover:border-primary/50 flex items-center justify-center transition-all duration-300 rounded-full overflow-hidden"
            >
              <div className="absolute inset-0 bg-primary/5 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
              <span className="relative z-10 text-muted-foreground group-hover:text-primary">←</span>
            </button>

            {/* Pagination Dots */}
            <div className="flex gap-3">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrent(i)}
                  className={`h-1.5 transition-all duration-500 rounded-full ${
                    i === current ? "w-10 bg-primary shadow-[0_0_10px_rgba(var(--primary),0.5)]" : "w-3 bg-border hover:bg-muted-foreground/30"
                  }`}
                />
              ))}
            </div>

            <button
              onClick={next}
              className="group relative w-14 h-14 border border-border hover:border-primary/50 flex items-center justify-center transition-all duration-300 rounded-full overflow-hidden"
            >
               <div className="absolute inset-0 bg-primary/5 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
              <span className="relative z-10 text-muted-foreground group-hover:text-primary">→</span>
            </button>
          </div>
          
          <div className="font-mono text-[9px] text-muted-foreground/40 tracking-[0.5em] uppercase">
             {String(current + 1).padStart(2, '0')} / {String(testimonials.length).padStart(2, '0')}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;

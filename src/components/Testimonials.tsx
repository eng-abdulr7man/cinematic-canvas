import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const testimonials = [
  {
    quote: "Ahmed transformed our raw footage into a cinematic masterpiece. His attention to detail in color grading alone elevated our entire brand identity.",
    name: "Sarah Mitchell",
    role: "Creative Director, Luminary Films",
    project: "Brand Documentary",
  },
  {
    quote: "Working with Ahmed is like having a storytelling partner. He doesn't just cut — he crafts narratives that leave audiences speechless.",
    name: "Omar Hassan",
    role: "Executive Producer, RedSea Studios",
    project: "Feature Film",
  },
  {
    quote: "The turnaround time and quality are unmatched. Ahmed delivered a 60-second commercial that felt like a mini movie. Pure cinema.",
    name: "Lisa Chen",
    role: "Marketing Lead, TechVision",
    project: "Product Launch",
  },
  {
    quote: "He has an incredible ear for sound design. The way he layers audio with visuals creates an immersive experience every single time.",
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
    <section className="py-24 md:py-32 relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/[0.03] rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-5xl mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <p className="font-mono text-xs text-primary tracking-[0.3em] mb-2">TESTIMONIALS</p>
          <h2 className="text-4xl md:text-6xl font-display font-bold tracking-tight text-foreground">
            Client Words
          </h2>
        </motion.div>

        <div className="relative min-h-[300px] flex items-center">
          <AnimatePresence mode="wait">
            <motion.div
              key={current}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
              className="text-center"
            >
              {/* Quote mark */}
              <span className="text-6xl md:text-8xl text-primary/20 font-display leading-none block mb-4">"</span>

              <p className="text-lg md:text-2xl text-foreground/90 leading-relaxed font-display max-w-3xl mx-auto mb-8">
                {testimonials[current].quote}
              </p>

              <div className="space-y-1">
                <p className="font-display font-semibold text-foreground">
                  {testimonials[current].name}
                </p>
                <p className="font-mono text-xs text-muted-foreground tracking-wider">
                  {testimonials[current].role}
                </p>
                <p className="font-mono text-[10px] text-primary tracking-[0.3em]">
                  {testimonials[current].project.toUpperCase()}
                </p>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Navigation */}
        <div className="flex items-center justify-center gap-6 mt-12">
          <button
            onClick={prev}
            className="w-12 h-12 border border-border hover:border-primary/40 flex items-center justify-center text-muted-foreground hover:text-primary transition-colors cursor-none"
          >
            ←
          </button>

          {/* Dots */}
          <div className="flex gap-2">
            {testimonials.map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrent(i)}
                className={`h-1 transition-all duration-300 cursor-none ${
                  i === current ? "w-8 bg-primary" : "w-4 bg-border hover:bg-muted-foreground"
                }`}
              />
            ))}
          </div>

          <button
            onClick={next}
            className="w-12 h-12 border border-border hover:border-primary/40 flex items-center justify-center text-muted-foreground hover:text-primary transition-colors cursor-none"
          >
            →
          </button>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import editorPortrait from "@/assets/editor-portrait.jpg";

const details = [
  { label: "LOCATION", value: "Mansoura, Egypt" },
  { label: "EXPERIENCE", value: "1+ Years" },
  { label: "SPECIALTY", value: "Cinematic Editing" },
  { label: "AVAILABLE", value: "Freelance & Remote" },
];

const AboutSection = () => {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], [60, -60]);

  return (
    <section id="about" ref={ref} className="py-24 md:py-32 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-12 md:gap-20 items-center">
          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="relative"
          >
            <motion.div style={{ y }} className="relative">
              <div className="relative overflow-hidden border border-border">
                <img
                  src={editorPortrait}
                  alt="Ahmed Karim — Professional Video Editor"
                  width={800}
                  height={1000}
                  loading="lazy"
                  className="w-full h-[500px] md:h-[600px] object-cover grayscale hover:grayscale-0 transition-all duration-700"
                />
                {/* Overlay gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent" />
                {/* Neon border glow on hover */}
                <div className="absolute inset-0 border border-primary/0 hover:border-primary/20 transition-colors duration-500 glow-neon opacity-0 hover:opacity-100" />
              </div>

              {/* Floating label */}
              <motion.div
                className="absolute -bottom-4 -right-4 md:-right-8 bg-card border border-border px-6 py-4"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4 }}
              >
                <span className="font-mono text-[10px] text-primary tracking-[0.3em] block">SINCE</span>
                <span className="font-display text-3xl font-bold text-foreground">2024</span>
              </motion.div>
            </motion.div>
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          >
            <p className="font-mono text-xs text-primary tracking-[0.3em] mb-2">ABOUT ME</p>
            <h2 className="text-4xl md:text-5xl font-display font-bold tracking-tight text-foreground mb-2">
             Mohamed Elesawy
            </h2>
            <p className="font-mono text-sm text-primary/80 mb-6 tracking-wider">
              Junior Video Editor & Colorist
            </p>

            <div className="space-y-4 text-muted-foreground text-sm leading-relaxed mb-10">
             <p>
  I'm a passionate storyteller who speaks through cuts, transitions, and color. With 
  one year of professional experience in the film and advertising industry, I've already 
  started crafting compelling visual narratives for brands and content creators across 
  the Middle East.
</p>
<p>
  My approach combines technical precision with artistic intuition — every frame is an
  opportunity to evoke emotion. I bring a fresh, cinematic eye to every project, 
  focusing on delivering high-quality commercial spots and creative content.
</p>
<p>
  I believe great editing is invisible. The audience should feel the story, not see the cuts.
  That's the standard I hold myself to on every timeline as I continue to push the 
  boundaries of visual storytelling.
</p>
            </div>

            {/* Details grid */}
            <div className="grid grid-cols-2 gap-4">
              {details.map((detail, i) => (
                <motion.div
                  key={detail.label}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.4 + i * 0.1 }}
                  className="border-l-2 border-primary/20 pl-4 py-2"
                >
                  <span className="font-mono text-[10px] text-muted-foreground tracking-[0.2em] block mb-1">
                    {detail.label}
                  </span>
                  <span className="font-display text-sm font-semibold text-foreground">
                    {detail.value}
                  </span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;

import { useState, lazy, Suspense } from "react";
import { motion } from "framer-motion";

const HeroScene = lazy(() => import("./HeroScene"));

const Hero = () => {
  const [isGlitching, setIsGlitching] = useState(false);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden noise-bg">
      {/* 3D Background */}
      <Suspense fallback={null}>
        <HeroScene />
      </Suspense>

      {/* Scanline overlay */}
      <div className="absolute inset-0 scanline pointer-events-none z-10" />

      {/* Gradient overlays */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-transparent to-background z-10 pointer-events-none" />

      {/* Content */}
      <div className="relative z-20 text-center px-6 max-w-5xl mx-auto">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="font-mono text-xs md:text-sm tracking-[0.3em] text-primary mb-6 uppercase"
        >
          Video Editor & Motion Designer
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
          className="relative "
          onMouseEnter={() => setIsGlitching(true)}
          onMouseLeave={() => setIsGlitching(false)}
        >
          <span className={`block text-5xl md:text-7xl lg:text-9xl font-display font-bold tracking-tight leading-[0.9] ${isGlitching ? "" : ""}`}>
            <span className="text-foreground">CRAFTING</span>
            <br />
            <span className="text-gradient-neon glow-text">VISUAL</span>
            <br />
            <span className="text-foreground">STORIES</span>
          </span>

          {/* Glitch layers */}
          {isGlitching && (
            <>
              <span className="absolute inset-0 text-5xl md:text-7xl lg:text-9xl font-display font-bold tracking-tight leading-[0.9] animate-glitch-1 text-primary/70" aria-hidden>
                CRAFTING<br />VISUAL<br />STORIES
              </span>
              <span className="absolute inset-0 text-5xl md:text-7xl lg:text-9xl font-display font-bold tracking-tight leading-[0.9] animate-glitch-2 text-neon-glow/50" aria-hidden>
                CRAFTING<br />VISUAL<br />STORIES
              </span>
            </>
          )}
        </motion.h1>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 1 }}
          className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <button
            onClick={() => document.getElementById("work")?.scrollIntoView({ behavior: "smooth" })}
            className="px-8 py-3 border border-primary/30 text-primary font-mono text-sm tracking-wider hover:bg-primary/10 transition-all glow-neon "
          >
            VIEW SHOWREEL
          </button>
          <button
            onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
            className="px-8 py-3 bg-primary text-primary-foreground font-mono text-sm tracking-wider hover:bg-primary/90 transition-all "
          >
            GET IN TOUCH
          </button>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="w-px h-12 bg-gradient-to-b from-primary/0 via-primary to-primary/0"
          />
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;

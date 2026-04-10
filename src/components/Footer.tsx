import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

const Footer = () => {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end end"] });
  const y = useTransform(scrollYProgress, [0, 1], [100, 0]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [0, 1]);

  return (
    <footer id="contact" ref={ref} className="relative py-32 md:py-48 border-t border-border overflow-hidden bg-background">
      {/* Ambient glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] rounded-full opacity-[0.04]"
          style={{ background: "radial-gradient(ellipse, hsl(var(--neon)), transparent 70%)" }} />
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <motion.div style={{ y, opacity }} className="text-center mb-20">
          <p className="font-mono text-xs text-primary tracking-[0.3em] mb-6">LET'S CREATE TOGETHER</p>
          <h2 className="text-5xl md:text-8xl lg:text-9xl font-display font-bold tracking-tighter text-foreground mb-4">
            Got a <span className="text-gradient-neon">vision</span>?
          </h2>
          <p className="font-mono text-sm text-muted-foreground/50 mb-10 max-w-md mx-auto">
            Let's turn your raw footage into a cinematic masterpiece.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="mailto:3sawydesain@gmail.com"
              className="group relative px-10 py-4 border border-primary/30 font-mono text-sm tracking-wider transition-all duration-500 hover:border-primary glow-neon overflow-hidden"
            >
              <span className="relative z-10 text-primary group-hover:text-primary-foreground transition-colors duration-300">
                START A PROJECT
              </span>
              <div className="absolute inset-0 bg-primary scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
            </a>
            <a
              href="https://wa.me/201098697563"
              target="_blank"
              rel="noopener noreferrer"
              className="px-10 py-4 bg-secondary/50 border border-border font-mono text-sm tracking-wider text-muted-foreground hover:text-foreground hover:border-foreground/20 transition-all duration-300"
            >
              WHATSAPP
            </a>
          </div>
        </motion.div>

        {/* Social Links & Copyright */}
        <div className="flex flex-col gap-8 pt-12 border-t border-border/50">
          
          {/* Social Icons/Links Row */}
          <div className="flex flex-wrap justify-center md:justify-center gap-6 md:gap-8">
            {[
              { name: "Instagram", url: "#" },
              { name: "YouTube", url: "#" },
              { name: "Behance", url: "#" },
              { name: "LinkedIn", url: "#" },
            ].map((social) => (
              <a
                key={social.name}
                href={social.url}
                className="font-mono text-[11px] text-muted-foreground/40 hover:text-primary transition-colors duration-300 tracking-wider"
              >
                {social.name}
              </a>
            ))}
          </div>

          {/* Copyright & Credits Row */}
          <div className="flex flex-col md:flex-row items-center justify-between gap-4 w-full">
            <span className="font-mono text-[11px] text-muted-foreground/40 tracking-wider text-center md:text-left">
              © 2026 MOHAMED ELESAWY — ALL RIGHTS RESERVED
            </span>
            
            <span className="font-mono text-[11px] text-muted-foreground/40 tracking-wider text-center md:text-right">
              CREATED & DESIGNED BY{" "}
              <a 
                href="https://3bdulr7man.vercel.app" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-[#00b4ff] hover:text-[#00b4ff]/80 hover:underline underline-offset-4 transition-all duration-300 font-semibold"
              >
                3BDULR7MAN
              </a>
            </span>
          </div>

        </div>
      </div>
    </footer>
  );
};

export default Footer;

import { motion, useMotionValue, useSpring, useInView } from "framer-motion";
import { useRef, useEffect, useState } from "react";

const stats = [
  { value: 350, suffix: "+", label: "Projects Completed" },
  { value: 12, suffix: "M+", label: "Views Generated" },
  { value: 45, suffix: "+", label: "Brands Served" },
  { value: 8, suffix: "+", label: "Years Experience" },
];

const brands = [
  "Netflix", "Red Bull", "Nike", "Samsung", "Spotify",
  "Apple", "Adidas", "Sony", "Canon", "Adobe",
];

const AnimatedCounter = ({ value, suffix }: { value: number; suffix: string }) => {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true });
  const [display, setDisplay] = useState(0);

  useEffect(() => {
    if (!isInView) return;
    let start = 0;
    const duration = 2000;
    const startTime = Date.now();

    const tick = () => {
      const elapsed = Date.now() - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setDisplay(Math.floor(eased * value));
      if (progress < 1) requestAnimationFrame(tick);
    };
    requestAnimationFrame(tick);
  }, [isInView, value]);

  return (
    <span ref={ref}>
      {display}{suffix}
    </span>
  );
};

const StatsAndClients = () => {
  return (
    <>
      {/* Stats */}
      <section className="py-20 md:py-28 border-y border-border relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-primary/[0.02] via-transparent to-primary/[0.02]" />
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-4">
            {stats.map((stat, i) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.6 }}
                className="text-center md:border-r last:border-r-0 border-border"
              >
                <div className="font-display text-4xl md:text-6xl font-bold text-gradient-neon mb-2">
                  <AnimatedCounter value={stat.value} suffix={stat.suffix} />
                </div>
                <p className="font-mono text-[10px] md:text-xs text-muted-foreground tracking-[0.2em]">
                  {stat.label.toUpperCase()}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Clients Marquee */}
      <section className="py-16 md:py-20 overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 mb-10">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <p className="font-mono text-xs text-muted-foreground tracking-[0.3em]">
              TRUSTED BY INDUSTRY LEADERS
            </p>
          </motion.div>
        </div>

        {/* Scrolling marquee */}
        <div className="relative">
          <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-background to-transparent z-10" />
          <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-background to-transparent z-10" />

          <motion.div
            animate={{ x: ["0%", "-50%"] }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            className="flex gap-16 items-center whitespace-nowrap"
          >
            {[...brands, ...brands].map((brand, i) => (
              <span
                key={`${brand}-${i}`}
                className="font-display text-2xl md:text-3xl font-bold text-muted-foreground/20 hover:text-primary/40 transition-colors duration-300 cursor-none select-none"
              >
                {brand}
              </span>
            ))}
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default StatsAndClients;

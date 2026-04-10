import { motion, useInView } from "framer-motion";
import { useRef, useEffect, useState } from "react";

// تم تحديث الأرقام لتناسب سنة واحدة من الخبرة بشكل احترافي
const stats = [
  { value: 40, suffix: "+", label: "Projects Completed" },
  { value: 500, suffix: "K+", label: "Views Generated" },
  { value: 12, suffix: "+", label: "Happy Clients" },
  { value: 1, suffix: "", label: "Year Experience" },
];

// قائمة البراندات - يمكنك تخصيصها حسب تخصصك (مثلاً براندات محلية أو تقنية)
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
      const eased = 1 - Math.pow(1 - progress, 3); // Ease out cubic
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
      <section className="py-20 md:py-28 border-y border-border relative overflow-hidden bg-background/30">
        <div className="absolute inset-0 bg-gradient-to-r from-primary/[0.01] via-transparent to-primary/[0.01]" />
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-4">
            {stats.map((stat, i) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.6 }}
                className="text-center md:border-r last:border-r-0 border-border/50"
              >
                <div className="font-display text-4xl md:text-6xl font-bold text-gradient-neon mb-2">
                  <AnimatedCounter value={stat.value} suffix={stat.suffix} />
                </div>
                <p className="font-mono text-[10px] md:text-xs text-muted-foreground tracking-[0.2em] px-2">
                  {stat.label.toUpperCase()}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Clients Marquee */}
      <section className="py-16 md:py-24 overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 mb-12">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="flex flex-col items-center gap-4"
          >
            <div className="h-px w-12 bg-primary/50" />
            <p className="font-mono text-[10px] text-muted-foreground tracking-[0.4em] uppercase">
              Brands I've Worked With
            </p>
          </motion.div>
        </div>

        {/* Scrolling marquee */}
        <div className="relative group">
          {/* Faded edges for better blending */}
          <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-background to-transparent z-10 pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-background to-transparent z-10 pointer-events-none" />

          <motion.div
            animate={{ x: ["0%", "-50%"] }}
            transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
            className="flex gap-20 items-center whitespace-nowrap"
          >
            {[...brands, ...brands].map((brand, i) => (
              <span
                key={`${brand}-${i}`}
                className="font-display text-3xl md:text-4xl font-bold text-muted-foreground/10 hover:text-primary/30 transition-all duration-500 cursor-default grayscale hover:grayscale-0"
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

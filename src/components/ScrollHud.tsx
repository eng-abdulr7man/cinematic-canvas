import { motion, useScroll, useTransform } from "framer-motion";

const FPS = 24;
const TOTAL_SECONDS = 90;
const pad = (n: number) => String(n).padStart(2, "0");

/** Editor-style playhead: a progress line and a timecode that follow the scroll. */
const ScrollHud = () => {
  const { scrollYProgress } = useScroll();
  const timecode = useTransform(scrollYProgress, (p) => {
    const frames = Math.round(p * TOTAL_SECONDS * FPS);
    const ff = frames % FPS;
    const s = Math.floor(frames / FPS);
    return `00:${pad(Math.floor(s / 60))}:${pad(s % 60)}:${pad(ff)}`;
  });

  return (
    <>
      <motion.div
        aria-hidden="true"
        style={{ scaleX: scrollYProgress }}
        className="fixed left-0 top-0 z-[70] h-[2px] w-full origin-left bg-cyan"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none fixed bottom-5 left-6 z-[70] hidden items-center gap-2 text-[10px] font-medium tracking-[0.25em] text-foreground/45 md:flex"
      >
        <span className="h-1.5 w-1.5 rounded-full bg-warm" />
        <motion.span className="tabular-nums">{timecode}</motion.span>
      </div>
    </>
  );
};

export default ScrollHud;

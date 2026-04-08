import { useEffect, useState } from "react";
import { motion, useSpring } from "framer-motion";

const CustomCursor = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isHoveringVideo, setIsHoveringVideo] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  const cursorX = useSpring(0, { stiffness: 500, damping: 28 });
  const cursorY = useSpring(0, { stiffness: 500, damping: 28 });
  const dotX = useSpring(0, { stiffness: 800, damping: 35 });
  const dotY = useSpring(0, { stiffness: 800, damping: 35 });

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener("resize", checkMobile);

    const move = (e: MouseEvent) => {
      cursorX.set(e.clientX - 20);
      cursorY.set(e.clientY - 20);
      dotX.set(e.clientX - 4);
      dotY.set(e.clientY - 4);
      setIsVisible(true);
    };

    const handleOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (target.closest("[data-cursor-video]")) setIsHoveringVideo(true);
    };
    const handleOut = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (target.closest("[data-cursor-video]")) setIsHoveringVideo(false);
    };

    window.addEventListener("mousemove", move);
    window.addEventListener("mouseover", handleOver);
    window.addEventListener("mouseout", handleOut);
    window.addEventListener("mouseleave", () => setIsVisible(false));

    return () => {
      window.removeEventListener("mousemove", move);
      window.removeEventListener("mouseover", handleOver);
      window.removeEventListener("mouseout", handleOut);
      window.removeEventListener("resize", checkMobile);
    };
  }, [cursorX, cursorY, dotX, dotY]);

  if (isMobile) return null;

  return (
    <>
      <motion.div
        className="fixed top-0 left-0 pointer-events-none z-[9999] rounded-full border border-primary/50 mix-blend-difference"
        style={{
          x: cursorX,
          y: cursorY,
          width: isHoveringVideo ? 80 : 40,
          height: isHoveringVideo ? 80 : 40,
          opacity: isVisible ? 1 : 0,
        }}
        transition={{ width: { duration: 0.2 }, height: { duration: 0.2 } }}
      >
        {isHoveringVideo && (
          <span className="absolute inset-0 flex items-center justify-center text-xs font-mono text-primary">
            PLAY
          </span>
        )}
      </motion.div>
      <motion.div
        className="fixed top-0 left-0 w-2 h-2 pointer-events-none z-[9999] rounded-full bg-primary"
        style={{
          x: dotX,
          y: dotY,
          opacity: isVisible ? 1 : 0,
        }}
      />
    </>
  );
};

export default CustomCursor;

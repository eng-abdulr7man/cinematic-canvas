import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const CustomCursor = () => {
  const [pos, setPos] = useState({ x: 0, y: 0 });
  const [isVisible, setIsVisible] = useState(false);
  const [isHoveringVideo, setIsHoveringVideo] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.matchMedia("(pointer: coarse)").matches || window.innerWidth < 768);
    checkMobile();
    window.addEventListener("resize", checkMobile);

    const move = (e: MouseEvent) => {
      setPos({ x: e.clientX, y: e.clientY });
      if (!isVisible) setIsVisible(true);
    };

    const handleOver = (e: MouseEvent) => {
      if ((e.target as HTMLElement).closest("[data-cursor-video]")) setIsHoveringVideo(true);
    };
    const handleOut = (e: MouseEvent) => {
      if ((e.target as HTMLElement).closest("[data-cursor-video]")) setIsHoveringVideo(false);
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
  }, [isVisible]);

  if (isMobile) return null;

  const size = isHoveringVideo ? 64 : 8;

  return (
    <div
      className="fixed top-0 left-0 pointer-events-none z-[9999]"
      style={{
        transform: `translate(${pos.x - size / 2}px, ${pos.y - size / 2}px)`,
        width: size,
        height: size,
        opacity: isVisible ? 1 : 0,
        transition: "width 0.2s, height 0.2s, opacity 0.15s",
        borderRadius: "50%",
        backgroundColor: isHoveringVideo ? "transparent" : "hsl(199 100% 50%)",
        border: isHoveringVideo ? "1px solid hsl(199 100% 50% / 0.5)" : "none",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      {isHoveringVideo && (
        <span className="text-[10px] font-mono text-primary">PLAY</span>
      )}
    </div>
  );
};

export default CustomCursor;

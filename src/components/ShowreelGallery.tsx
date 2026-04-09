import { useRef, useState, useEffect } from "react";
import { motion, useScroll, useTransform, useMotionValue, useSpring, AnimatePresence } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { projects } from "@/data/projects";

const ProjectCard = ({
  project,
  index,
  isActive,
  onActivate,
  onClick,
}: {
  project: (typeof projects)[0];
  index: number;
  isActive: boolean;
  onActivate: () => void;
  onClick: () => void;
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.7, delay: index * 0.08, ease: [0.16, 1, 0.3, 1] }}
      className="flex-shrink-0 w-[340px] md:w-[520px] lg:w-[600px] group select-none"
      data-cursor-video
      onMouseEnter={onActivate}
      onClick={onClick}
    >
      <div className="relative aspect-[16/9] overflow-hidden bg-secondary/50 border border-border/50 transition-all duration-500 group-hover:border-primary/30">
        {/* Animated gradient background */}
        <motion.div
          className="absolute inset-0"
          style={{
            background: `radial-gradient(ellipse at 30% 50%, ${project.color}15, transparent 70%), linear-gradient(135deg, ${project.color}08, transparent 60%)`,
          }}
          animate={isActive ? { opacity: 0.8 } : { opacity: 0.3 }}
          transition={{ duration: 0.5 }}
        />

        {/* Cinematic bars */}
        <div className="absolute top-0 left-0 right-0 h-[8%] bg-background/80 z-10" />
        <div className="absolute bottom-0 left-0 right-0 h-[8%] bg-background/80 z-10" />

        {/* Grid pattern */}
        <div
          className="absolute inset-0 opacity-[0.04] group-hover:opacity-[0.08] transition-opacity duration-700"
          style={{
            backgroundImage: `linear-gradient(${project.color}44 1px, transparent 1px), linear-gradient(90deg, ${project.color}44 1px, transparent 1px)`,
            backgroundSize: "30px 30px",
          }}
        />

        {/* Floating elements */}
        <motion.div
          className="absolute top-[15%] left-[10%] w-20 h-20 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-700"
          style={{ background: `radial-gradient(circle, ${project.color}20, transparent 70%)` }}
          animate={isActive ? { scale: [1, 1.3, 1], x: [0, 10, 0] } : {}}
          transition={{ duration: 4, repeat: Infinity }}
        />

        {/* Large project number */}
        <div className="absolute inset-0 flex items-center justify-center z-[1]">
          <span
            className="text-[120px] md:text-[180px] font-display font-bold leading-none opacity-[0.03] group-hover:opacity-[0.08] transition-opacity duration-700"
            style={{ color: project.color }}
          >
            {String(project.id).padStart(2, "0")}
          </span>
        </div>

        {/* Play indicator */}
        <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-500 z-20">
          <motion.div
            className="w-20 h-20 rounded-full flex items-center justify-center"
            style={{
              background: `radial-gradient(circle, ${project.color}30, transparent 70%)`,
              border: `1px solid ${project.color}40`,
            }}
            whileHover={{ scale: 1.1 }}
          >
            <div
              className="w-0 h-0 border-t-[10px] border-b-[10px] border-l-[16px] border-transparent ml-1"
              style={{ borderLeftColor: project.color }}
            />
          </motion.div>
        </div>

        {/* Top info bar */}
        <div className="absolute top-[10%] left-0 right-0 px-5 flex items-center justify-between z-20">
          <span className="font-mono text-[10px] text-muted-foreground/60 tracking-widest">
            {project.year}
          </span>
          <span className="font-mono text-[10px] tracking-widest" style={{ color: `${project.color}99` }}>
            {String(project.id).padStart(2, "0")} / {String(projects.length).padStart(2, "0")}
          </span>
        </div>

        {/* Bottom info bar */}
        <div className="absolute bottom-[10%] left-0 right-0 px-5 flex items-center justify-between z-20">
          <span className="font-mono text-[10px] text-muted-foreground/40 tracking-wider opacity-0 group-hover:opacity-100 transition-opacity duration-500">
            {project.role}
          </span>
          <div className="flex items-center gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
            <span className="w-1.5 h-1.5 rounded-full bg-red-500 animate-pulse" />
            <span className="font-mono text-[10px] text-muted-foreground/60">REC</span>
          </div>
        </div>
      </div>

      {/* Card info */}
      <div className="mt-5 flex items-start justify-between gap-4">
        <div>
          <div className="flex items-center gap-3 mb-1.5">
            <div className="w-2 h-2 rounded-full" style={{ backgroundColor: project.color }} />
            <span
              className="font-mono text-[10px] tracking-[0.2em] uppercase"
              style={{ color: `${project.color}cc` }}
            >
              {project.category}
            </span>
          </div>
          <h3 className="font-display text-xl md:text-2xl font-bold tracking-wide text-foreground group-hover:text-foreground transition-colors">
            {project.title}
          </h3>
          <p className="font-mono text-xs text-muted-foreground/60 mt-2 max-w-[300px] leading-relaxed hidden md:block">
            {project.description}
          </p>
          <p className="font-mono text-[11px] text-muted-foreground/40 mt-2">
            {project.client}
          </p>
        </div>
        <motion.div
          className="mt-2 opacity-0 group-hover:opacity-100 transition-opacity"
          whileHover={{ x: 5 }}
        >
          <span className="font-mono text-xs" style={{ color: project.color }}>
            →
          </span>
        </motion.div>
      </div>
    </motion.div>
  );
};

const ShowreelGallery = () => {
  const navigate = useNavigate();
  const containerRef = useRef<HTMLDivElement>(null);
  const scrollRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const [isDragging, setIsDragging] = useState(false);

  // Drag to scroll
  const dragX = useMotionValue(0);
  const [scrollWidth, setScrollWidth] = useState(0);

  useEffect(() => {
    if (scrollRef.current) {
      setScrollWidth(scrollRef.current.scrollWidth - scrollRef.current.offsetWidth);
    }
  }, []);

  // Parallax for the section header
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });
  const headerY = useTransform(scrollYProgress, [0, 1], [60, -60]);
  const lineWidth = useTransform(scrollYProgress, [0, 0.5], ["0%", "100%"]);

  return (
    <section id="work" ref={containerRef} className="py-24 md:py-40 overflow-hidden relative">
      {/* Background ambient glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div
          className="absolute top-1/2 left-1/4 w-[600px] h-[600px] rounded-full opacity-[0.02]"
          style={{
            background: `radial-gradient(circle, hsl(var(--neon)), transparent 70%)`,
          }}
        />
      </div>

      {/* Section header */}
      <div className="max-w-7xl mx-auto px-6 mb-16 md:mb-20">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        >
          <div className="flex items-end justify-between mb-6">
            <motion.div style={{ y: headerY }}>
              <p className="font-mono text-xs text-primary tracking-[0.3em] mb-3">
                ▶ SELECTED WORK
              </p>
              <h2 className="text-5xl md:text-7xl lg:text-8xl font-display font-bold tracking-tighter text-foreground">
                Show<span className="text-gradient-neon">reel</span>
              </h2>
            </motion.div>
            <div className="hidden md:flex flex-col items-end gap-2">
              <span className="font-mono text-xs text-muted-foreground/60 tracking-wider">
                {String(projects.length).padStart(2, "0")} PROJECTS
              </span>
              <span className="font-mono text-[10px] text-muted-foreground/30 tracking-wider">
                DRAG TO EXPLORE →
              </span>
            </div>
          </div>

          {/* Animated line separator */}
          <motion.div className="h-px bg-gradient-to-r from-primary/50 via-primary/20 to-transparent" style={{ width: lineWidth }} />
        </motion.div>
      </div>

      {/* Draggable horizontal gallery */}
      <div ref={scrollRef} className="overflow-hidden">
        <motion.div
          drag="x"
          dragConstraints={{ right: 0, left: -scrollWidth }}
          dragElastic={0.05}
          dragTransition={{ bounceStiffness: 300, bounceDamping: 30 }}
          onDragStart={() => setIsDragging(true)}
          onDragEnd={() => setTimeout(() => setIsDragging(false), 100)}
          className="flex gap-8 pl-6 md:pl-[calc(50vw-580px)] pr-[20vw] cursor-grab active:cursor-grabbing"
        >
          {projects.map((project, i) => (
            <ProjectCard
              key={project.id}
              project={project}
              index={i}
              isActive={activeIndex === i}
              onActivate={() => setActiveIndex(i)}
              onClick={() => { if (!isDragging) navigate(`/project/${project.slug}`); }}
            />
          ))}
        </motion.div>
      </div>

      {/* Progress indicator */}
      <div className="max-w-7xl mx-auto px-6 mt-12">
        <div className="flex items-center gap-4">
          <div className="flex gap-2">
            {projects.map((p, i) => (
              <motion.div
                key={p.id}
                className="h-1 rounded-full transition-all duration-500"
                style={{
                  backgroundColor: activeIndex === i ? p.color : "hsl(var(--muted))",
                  width: activeIndex === i ? 32 : 8,
                }}
              />
            ))}
          </div>
          <span className="font-mono text-[10px] text-muted-foreground/40 ml-auto">
            {String(activeIndex + 1).padStart(2, "0")} — {projects[activeIndex].title}
          </span>
        </div>
      </div>
    </section>
  );
};

export default ShowreelGallery;

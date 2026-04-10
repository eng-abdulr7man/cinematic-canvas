import { useRef, useState, useEffect } from "react";
import { motion, useScroll, useTransform, useMotionValue } from "framer-motion";
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
      onMouseEnter={onActivate}
      onClick={onClick}
    >
      <div className="relative aspect-[16/9] overflow-hidden bg-secondary/50 border border-border/50 transition-all duration-500 group-hover:border-primary/40 group-hover:shadow-[0_0_30px_-10px_rgba(0,0,0,0.3)]">
        
        {/* الخلفية الملونة التفاعلية */}
        <motion.div
          className="absolute inset-0"
          style={{
            background: `radial-gradient(ellipse at 30% 50%, ${project.color}15, transparent 70%), linear-gradient(135deg, ${project.color}08, transparent 60%)`,
          }}
          animate={isActive ? { opacity: 1, scale: 1.05 } : { opacity: 0.3, scale: 1 }}
          transition={{ duration: 0.8 }}
        />

        {/* Cinematic bars - إضفاء طابع سينمائي */}
        <div className="absolute top-0 left-0 right-0 h-[8%] bg-background/90 z-10 transition-transform duration-500 group-hover:translate-y-[-2px]" />
        <div className="absolute bottom-0 left-0 right-0 h-[8%] bg-background/90 z-10 transition-transform duration-500 group-hover:translate-y-[2px]" />

        {/* رقم المشروع الكبير في الخلفية */}
        <div className="absolute inset-0 flex items-center justify-center z-[1]">
          <span
            className="text-[120px] md:text-[200px] font-display font-bold leading-none opacity-[0.03] group-hover:opacity-[0.07] transition-all duration-700 group-hover:scale-110"
            style={{ color: project.color }}
          >
            {String(index + 1).padStart(2, "0")}
          </span>
        </div>

        {/* أيقونة التشغيل عند التحويم */}
        <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-500 z-20">
          <motion.div
            className="w-16 h-16 rounded-full flex items-center justify-center backdrop-blur-sm"
            style={{
              background: `radial-gradient(circle, ${project.color}40, ${project.color}10)`,
              border: `1px solid ${project.color}50`,
            }}
            whileHover={{ scale: 1.15, rotate: 90 }}
          >
            <div
              className="w-0 h-0 border-t-[8px] border-b-[8px] border-l-[14px] border-transparent ml-1"
              style={{ borderLeftColor: "#fff" }}
            />
          </motion.div>
        </div>

        {/* شريط المعلومات العلوي (REC Style) */}
        <div className="absolute top-[10%] left-0 right-0 px-6 flex items-center justify-between z-20">
          <span className="font-mono text-[10px] text-white/40 tracking-[0.2em]">
            {project.year} // 24FPS
          </span>
          <div className="flex items-center gap-2">
             <span className="w-1.5 h-1.5 rounded-full bg-red-500 animate-pulse" />
             <span className="font-mono text-[10px] text-white/60 tracking-widest">LIVE</span>
          </div>
        </div>
      </div>

      {/* تفاصيل المشروع أسفل الكارت */}
      <div className="mt-6 flex items-start justify-between">
        <div className="space-y-1">
          <div className="flex items-center gap-2">
            <span className="text-[10px] font-mono text-primary tracking-widest uppercase">[{project.category}]</span>
          </div>
          <h3 className="font-display text-2xl font-bold text-foreground tracking-tight">
            {project.title}
          </h3>
          <p className="font-mono text-[11px] text-muted-foreground/60">
            Client: {project.client}
          </p>
        </div>
        <div className="h-px w-12 bg-border mt-4 group-hover:w-20 group-hover:bg-primary transition-all duration-500" />
      </div>
    </motion.div>
  );
};

const ShowreelGallery = () => {
  const navigate = useNavigate();
  const scrollRef = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const [scrollWidth, setScrollWidth] = useState(0);

  useEffect(() => {
    if (scrollRef.current) {
      setScrollWidth(scrollRef.current.scrollWidth - scrollRef.current.offsetWidth);
    }
  }, [projects.length]);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const headerY = useTransform(scrollYProgress, [0, 1], [40, -40]);
  const lineWidth = useTransform(scrollYProgress, [0, 0.4], ["0%", "100%"]);

  return (
    <section id="work" ref={containerRef} className="py-24 md:py-40 overflow-hidden bg-background">
      <div className="max-w-7xl mx-auto px-6 mb-16">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div className="flex items-end justify-between mb-8">
            <motion.div style={{ y: headerY }}>
              <p className="font-mono text-xs text-primary tracking-[0.4em] mb-4 uppercase">
                &gt; Recent Productions
              </p>
              <h2 className="text-6xl md:text-8xl font-display font-bold tracking-tighter">
                Show<span className="text-gradient-neon">reel</span>
              </h2>
            </motion.div>
            <div className="hidden md:block text-right">
              <p className="font-mono text-[10px] text-muted-foreground tracking-widest mb-1">SCROLL OR DRAG</p>
              <div className="flex gap-1 justify-end">
                {[...Array(3)].map((_, i) => (
                  <div key={i} className="w-4 h-[1px] bg-primary/30" />
                ))}
              </div>
            </div>
          </div>
          <motion.div className="h-px bg-primary/20" style={{ width: lineWidth }} />
        </motion.div>
      </div>

      <div ref={scrollRef} className="cursor-grab active:cursor-grabbing">
        <motion.div
          drag="x"
          dragConstraints={{ right: 0, left: -scrollWidth }}
          dragElastic={0.1}
          onDragStart={() => setIsDragging(true)}
          onDragEnd={() => setTimeout(() => setIsDragging(false), 100)}
          className="flex gap-10 pl-6 md:pl-[10vw] pr-[20vw]"
        >
          {projects.map((project, i) => (
            <ProjectCard
              key={project.id}
              project={project}
              index={i}
              isActive={activeIndex === i}
              onActivate={() => setActiveIndex(i)}
              onClick={() => {
                if (!isDragging) navigate(`/project/${project.slug}`);
              }}
            />
          ))}
        </motion.div>
      </div>

      {/* شريط التقدم السفلي */}
      <div className="max-w-7xl mx-auto px-6 mt-16 flex items-center justify-between">
        <div className="flex gap-3">
          {projects.map((p, i) => (
            <motion.button
              key={p.id}
              onClick={() => setActiveIndex(i)}
              className="h-1.5 rounded-full transition-all duration-300"
              style={{
                backgroundColor: activeIndex === i ? p.color : "hsl(var(--border))",
                width: activeIndex === i ? 40 : 12,
              }}
            />
          ))}
        </div>
        <span className="font-mono text-[10px] tracking-widest text-muted-foreground uppercase">
          Project {String(activeIndex + 1).padStart(2, '0')} // {projects[activeIndex].title}
        </span>
      </div>
    </section>
  );
};

export default ShowreelGallery;

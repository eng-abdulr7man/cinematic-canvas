import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

const projects = [
  { id: 1, title: "NEON NIGHTS", category: "Commercial", color: "#00b4ff" },
  { id: 2, title: "ECHO CHAMBER", category: "Music Video", color: "#00d4aa" },
  { id: 3, title: "PARALLEL LINES", category: "Short Film", color: "#ff6b35" },
  { id: 4, title: "DIGITAL PULSE", category: "Brand Film", color: "#a855f7" },
  { id: 5, title: "STATIC NOISE", category: "Documentary", color: "#eab308" },
];

const ProjectCard = ({ project, index }: { project: typeof projects[0]; index: number }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className="flex-shrink-0 w-[320px] md:w-[450px] group "
      data-cursor-video
    >
      <div className="relative aspect-video overflow-hidden bg-secondary border border-border">
        {/* Placeholder with animated gradient */}
        <div
          className="absolute inset-0 opacity-20 group-hover:opacity-40 transition-opacity duration-500"
          style={{
            background: `linear-gradient(135deg, ${project.color}33, transparent 60%)`,
          }}
        />
        {/* Grid pattern */}
        <div className="absolute inset-0 opacity-10" style={{
          backgroundImage: `linear-gradient(${project.color}22 1px, transparent 1px), linear-gradient(90deg, ${project.color}22 1px, transparent 1px)`,
          backgroundSize: '20px 20px'
        }} />

        {/* Play indicator */}
        <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <div className="w-16 h-16 rounded-full border border-primary/40 flex items-center justify-center glow-neon">
            <div className="w-0 h-0 border-t-[8px] border-b-[8px] border-l-[14px] border-transparent border-l-primary ml-1" />
          </div>
        </div>

        {/* Project number */}
        <span className="absolute top-4 right-4 font-mono text-xs text-muted-foreground">
          {String(project.id).padStart(2, "0")}
        </span>
      </div>

      <div className="mt-4 flex items-start justify-between">
        <div>
          <h3 className="font-display text-lg font-semibold tracking-wide text-foreground group-hover:text-primary transition-colors">
            {project.title}
          </h3>
          <p className="font-mono text-xs text-muted-foreground mt-1 tracking-wider">
            {project.category}
          </p>
        </div>
        <motion.span
          className="text-primary opacity-0 group-hover:opacity-100 transition-opacity font-mono text-xs"
          whileHover={{ x: 5 }}
        >
          →
        </motion.span>
      </div>
    </motion.div>
  );
};

const ShowreelGallery = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });
  const x = useTransform(scrollYProgress, [0, 1], ["0%", "-30%"]);

  return (
    <section id="work" ref={containerRef} className="py-24 md:py-32 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 mb-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex items-end justify-between"
        >
          <div>
            <p className="font-mono text-xs text-primary tracking-[0.3em] mb-2">SELECTED WORK</p>
            <h2 className="text-4xl md:text-6xl font-display font-bold tracking-tight text-foreground">
              Showreel
            </h2>
          </div>
          <span className="font-mono text-xs text-muted-foreground hidden md:block">
            {String(projects.length).padStart(2, "0")} PROJECTS
          </span>
        </motion.div>
      </div>

      <motion.div style={{ x }} className="flex gap-6 pl-6 md:pl-[calc(50vw-600px)]">
        {projects.map((project, i) => (
          <ProjectCard key={project.id} project={project} index={i} />
        ))}
      </motion.div>
    </section>
  );
};

export default ShowreelGallery;

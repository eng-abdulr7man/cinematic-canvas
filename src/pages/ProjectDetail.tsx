import { useParams, useNavigate, Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import { projects } from "@/data/projects";
import { ArrowLeft, Clock, Wrench, User, Calendar, ExternalLink } from "lucide-react";

const curtain = {
  initial: { scaleY: 1 },
  animate: { scaleY: 0, transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1], delay: 0.2 } },
};

const stagger = {
  animate: { transition: { staggerChildren: 0.08, delayChildren: 0.6 } },
};

const fadeUp = {
  initial: { opacity: 0, y: 40 },
  animate: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] } },
};

const ProjectDetail = () => {
  const { slug } = useParams();
  const navigate = useNavigate();
  const project = projects.find((p) => p.slug === slug);
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    setLoaded(true);
    window.scrollTo(0, 0);
  }, []);

  if (!project) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-display font-bold mb-4">Project Not Found</h1>
          <Link to="/" className="text-primary font-mono text-sm hover:underline">← Back Home</Link>
        </div>
      </div>
    );
  }

  const projectIndex = projects.findIndex((p) => p.slug === slug);
  const nextProject = projects[(projectIndex + 1) % projects.length];
  const prevProject = projects[(projectIndex - 1 + projects.length) % projects.length];

  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      {/* Film grain & vignette */}
      <div className="film-grain" />
      <div className="vignette" />

      {/* Cinematic curtain reveal */}
      <motion.div
        className="fixed inset-0 z-50 origin-top"
        style={{ backgroundColor: project.color }}
        variants={curtain}
        initial="initial"
        animate="animate"
      />
      <motion.div
        className="fixed inset-0 z-50 origin-bottom bg-background"
        initial={{ scaleY: 1 }}
        animate={{ scaleY: 0, transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1], delay: 0.05 } }}
      />

      {/* Back button */}
      <motion.div
        className="fixed top-6 left-6 z-40"
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 1, duration: 0.5 }}
      >
        <button
          onClick={() => navigate("/")}
          className="flex items-center gap-2 px-4 py-2 border border-border/50 bg-background/80 backdrop-blur-md font-mono text-xs tracking-wider text-muted-foreground hover:text-foreground hover:border-primary/50 transition-all duration-300"
        >
          <ArrowLeft size={14} />
          BACK
        </button>
      </motion.div>

      {/* Hero section */}
      <motion.section
        className="relative h-[70vh] md:h-[80vh] flex items-end overflow-hidden"
        variants={stagger}
        initial="initial"
        animate="animate"
      >
        {/* Background image */}
        <div className="absolute inset-0">
          <img
            src={project.gallery[0]}
            alt={project.title}
            className="w-full h-full object-cover opacity-40"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-background/60 to-transparent" />
          <div
            className="absolute inset-0 opacity-20"
            style={{
              background: `radial-gradient(ellipse at 50% 80%, ${project.color}30, transparent 70%)`,
            }}
          />
        </div>

        {/* Cinematic bars */}
        <div className="absolute top-0 left-0 right-0 h-12 bg-background/60 z-10" />

        {/* HUD elements */}
        <motion.div
          className="absolute top-20 right-6 md:right-12 font-mono text-[10px] text-muted-foreground/40 tracking-widest z-20 text-right space-y-1"
          variants={fadeUp}
        >
          <div className="flex items-center gap-2 justify-end">
            <span className="w-1.5 h-1.5 rounded-full bg-red-500 animate-pulse" />
            <span>REC</span>
          </div>
          <div>{project.year}</div>
          <div>{project.category.toUpperCase()}</div>
        </motion.div>

        {/* Content */}
        <div className="relative z-20 max-w-7xl mx-auto px-6 pb-16 md:pb-24 w-full">
          <motion.div variants={fadeUp} className="mb-4">
            <span
              className="font-mono text-xs tracking-[0.3em] uppercase"
              style={{ color: project.color }}
            >
              {project.category} — {project.client}
            </span>
          </motion.div>

          <motion.h1
            variants={fadeUp}
            className="text-5xl md:text-7xl lg:text-9xl font-display font-bold tracking-tighter leading-[0.9]"
          >
            {project.title.split(" ").map((word, i) => (
              <span key={i} className="inline-block mr-4">
                {i === project.title.split(" ").length - 1 ? (
                  <span style={{ color: project.color }}>{word}</span>
                ) : (
                  word
                )}
              </span>
            ))}
          </motion.h1>

          <motion.div variants={fadeUp} className="mt-6 flex flex-wrap items-center gap-6">
            <div className="flex items-center gap-2 font-mono text-xs text-muted-foreground">
              <User size={12} style={{ color: project.color }} />
              {project.role}
            </div>
            <div className="flex items-center gap-2 font-mono text-xs text-muted-foreground">
              <Clock size={12} style={{ color: project.color }} />
              {project.duration}
            </div>
            <div className="flex items-center gap-2 font-mono text-xs text-muted-foreground">
              <Calendar size={12} style={{ color: project.color }} />
              {project.year}
            </div>
          </motion.div>
        </div>
      </motion.section>

      {/* Content sections */}
      <section className="max-w-7xl mx-auto px-6 py-16 md:py-24">
        {/* Overview */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="grid md:grid-cols-[1fr_2fr] gap-12 md:gap-20 mb-24"
        >
          <div>
            <h2 className="font-mono text-xs tracking-[0.3em] uppercase mb-4" style={{ color: project.color }}>
              Overview
            </h2>
            <div className="h-px w-12 mb-6" style={{ backgroundColor: project.color }} />
          </div>
          <div>
            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed font-light">
              {project.fullDescription}
            </p>
          </div>
        </motion.div>

        {/* Video embed */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative mb-24"
        >
          <div className="relative aspect-video overflow-hidden border border-border/30">
            {/* Cinematic bars on video */}
            <div className="absolute top-0 left-0 right-0 h-[6%] bg-background/70 z-10" />
            <div className="absolute bottom-0 left-0 right-0 h-[6%] bg-background/70 z-10" />
            <iframe
              src={project.videoUrl}
              title={project.title}
              className="w-full h-full"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>
          <div className="absolute -bottom-4 left-8 font-mono text-[10px] text-muted-foreground/30 tracking-widest">
            ▶ PROJECT REEL — {project.year}
          </div>
        </motion.div>

        {/* Challenge & Solution */}
        <div className="grid md:grid-cols-2 gap-12 md:gap-20 mb-24">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="p-8 border border-border/30 bg-secondary/20 relative overflow-hidden"
          >
            <div
              className="absolute top-0 left-0 w-1 h-full"
              style={{ backgroundColor: project.color }}
            />
            <h3 className="font-mono text-xs tracking-[0.3em] uppercase mb-6" style={{ color: project.color }}>
              The Challenge
            </h3>
            <p className="text-muted-foreground leading-relaxed">{project.challenges}</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="p-8 border border-border/30 bg-secondary/20 relative overflow-hidden"
          >
            <div
              className="absolute top-0 left-0 w-1 h-full"
              style={{ backgroundColor: project.color }}
            />
            <h3 className="font-mono text-xs tracking-[0.3em] uppercase mb-6" style={{ color: project.color }}>
              The Solution
            </h3>
            <p className="text-muted-foreground leading-relaxed">{project.solution}</p>
          </motion.div>
        </div>

        {/* Tools */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mb-24"
        >
          <h2 className="font-mono text-xs tracking-[0.3em] uppercase mb-8" style={{ color: project.color }}>
            <Wrench size={12} className="inline mr-2" />
            Tools & Software
          </h2>
          <div className="flex flex-wrap gap-3">
            {project.tools.map((tool) => (
              <span
                key={tool}
                className="px-5 py-2.5 border font-mono text-xs tracking-wider text-muted-foreground hover:text-foreground transition-colors duration-300"
                style={{ borderColor: `${project.color}30` }}
              >
                {tool}
              </span>
            ))}
          </div>
        </motion.div>

        {/* Gallery */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mb-24"
        >
          <h2 className="font-mono text-xs tracking-[0.3em] uppercase mb-8" style={{ color: project.color }}>
            Project Gallery
          </h2>
          <div className="grid grid-cols-2 gap-3 md:gap-4">
            {project.gallery.map((img, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                className="relative aspect-video overflow-hidden cursor-pointer group"
                onClick={() => setSelectedImage(img)}
              >
                <img
                  src={img}
                  alt={`${project.title} - ${i + 1}`}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-background/0 group-hover:bg-background/20 transition-colors duration-500" />
                <div className="absolute bottom-3 left-3 font-mono text-[10px] text-white/0 group-hover:text-white/70 transition-colors duration-500">
                  {String(i + 1).padStart(2, "0")}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Next / Prev project navigation */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="border-t border-border/30 pt-16"
        >
          <div className="grid md:grid-cols-2 gap-8">
            <Link
              to={`/project/${prevProject.slug}`}
              className="group p-6 border border-border/20 hover:border-primary/30 transition-all duration-500"
            >
              <span className="font-mono text-[10px] text-muted-foreground/40 tracking-widest">← PREVIOUS</span>
              <h3 className="font-display text-2xl font-bold mt-2 group-hover:text-primary transition-colors">{prevProject.title}</h3>
              <span className="font-mono text-xs mt-1 block" style={{ color: prevProject.color }}>{prevProject.category}</span>
            </Link>
            <Link
              to={`/project/${nextProject.slug}`}
              className="group p-6 border border-border/20 hover:border-primary/30 transition-all duration-500 text-right"
            >
              <span className="font-mono text-[10px] text-muted-foreground/40 tracking-widest">NEXT →</span>
              <h3 className="font-display text-2xl font-bold mt-2 group-hover:text-primary transition-colors">{nextProject.title}</h3>
              <span className="font-mono text-xs mt-1 block" style={{ color: nextProject.color }}>{nextProject.category}</span>
            </Link>
          </div>
        </motion.div>
      </section>

      {/* Lightbox */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            className="fixed inset-0 z-50 bg-background/95 backdrop-blur-xl flex items-center justify-center p-6 cursor-pointer"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedImage(null)}
          >
            <motion.img
              src={selectedImage}
              alt="Gallery"
              className="max-w-full max-h-[85vh] object-contain"
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ duration: 0.3 }}
            />
            <div className="absolute top-6 right-6 font-mono text-xs text-muted-foreground tracking-widest">
              CLICK TO CLOSE
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default ProjectDetail;

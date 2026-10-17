import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { projects } from "@/data/projects";
import { site } from "@/data/site";
import VideoPlayer from "@/components/VideoPlayer";

const ProjectDetail = () => {
  const { slug } = useParams();
  const index = projects.findIndex((p) => p.slug === slug);
  const project = projects[index];
  const [lightbox, setLightbox] = useState<string | null>(null);

  useEffect(() => {
    window.scrollTo(0, 0);
    setLightbox(null);
  }, [slug]);

  useEffect(() => {
    if (!project) return;
    const previous = document.title;
    document.title = `${project.title} — ${site.name}`;
    return () => {
      document.title = previous;
    };
  }, [project]);

  useEffect(() => {
    if (!lightbox) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setLightbox(null);
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [lightbox]);

  if (!project) {
    return (
      <main className="bg-intro flex min-h-screen flex-col items-center justify-center px-6 text-center">
        <h1 className="text-metal font-display text-5xl uppercase">Project not found</h1>
        <Link to="/#work" className="mt-6 text-sm text-cyan hover:underline">
          Back to selected work
        </Link>
      </main>
    );
  }

  const next = projects[(index + 1) % projects.length];
  const prev = projects[(index - 1 + projects.length) % projects.length];
  const hero = project.thumbnail ?? project.gallery[0];

  return (
    <div className="bg-about min-h-screen">
      <header className="relative isolate flex min-h-[60vh] flex-col justify-end overflow-hidden px-6 pb-14 pt-24 md:px-10 md:pb-20">
        {hero && (
          <>
            <img src={hero} alt="" className="absolute inset-0 -z-10 h-full w-full object-cover opacity-30" />
            <div className="absolute inset-0 -z-10 bg-gradient-to-t from-ink via-ink/70 to-ink/20" aria-hidden="true" />
          </>
        )}
        <Link
          to="/#work"
          className="absolute left-6 top-6 flex items-center gap-2 rounded-full border border-white/20 bg-ink/60 px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.18em] text-foreground/80 transition-colors hover:border-cyan hover:text-cyan md:left-10"
        >
          <ArrowLeft size={14} aria-hidden="true" />
          Selected work
        </Link>

        <div className="mx-auto w-full max-w-6xl">
          <p className="text-xs text-cyan">
            {project.category} · {project.client}
          </p>
          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="text-metal mt-3 font-display text-[clamp(2.75rem,9vw,8rem)] uppercase leading-[0.92]"
          >
            {project.title}
          </motion.h1>
          <dl className="mt-6 flex flex-wrap gap-x-10 gap-y-3 text-sm">
            <div>
              <dt className="text-[11px] text-muted">Role</dt>
              <dd className="text-foreground/90">{project.role}</dd>
            </div>
            <div>
              <dt className="text-[11px] text-muted">Duration</dt>
              <dd className="text-foreground/90">{project.duration}</dd>
            </div>
            <div>
              <dt className="text-[11px] text-muted">Year</dt>
              <dd className="text-foreground/90">{project.year}</dd>
            </div>
          </dl>
        </div>
      </header>

      <main className="mx-auto max-w-6xl space-y-20 px-6 py-16 md:px-10 md:py-24">
        <section className="grid gap-8 md:grid-cols-[1fr_2fr] md:gap-16">
          <h2 className="text-metal font-display text-3xl uppercase">Overview</h2>
          <p className="max-w-2xl text-base leading-relaxed text-foreground/75">{project.fullDescription}</p>
        </section>

        <VideoPlayer url={project.videoUrl} title={project.title} orientation={project.orientation} />

        {(project.challenges || project.solution) && (
          <section className="grid gap-10 md:grid-cols-2 md:gap-16">
            {project.challenges && (
              <div>
                <h2 className="text-metal font-display text-2xl uppercase">The challenge</h2>
                <p className="mt-3 text-sm leading-relaxed text-foreground/75">{project.challenges}</p>
              </div>
            )}
            {project.solution && (
              <div>
                <h2 className="text-metal font-display text-2xl uppercase">The solution</h2>
                <p className="mt-3 text-sm leading-relaxed text-foreground/75">{project.solution}</p>
              </div>
            )}
          </section>
        )}

        <section>
          <h2 className="text-metal font-display text-2xl uppercase">Tools</h2>
          <ul className="mt-4 flex flex-wrap gap-3">
            {project.tools.map((tool) => (
              <li key={tool} className="rounded-full border border-white/15 px-4 py-1.5 text-xs text-foreground/80">
                {tool}
              </li>
            ))}
          </ul>
        </section>

        {project.gallery.length > 0 && (
          <section>
            <h2 className="text-metal font-display text-2xl uppercase">Gallery</h2>
            <ul className="mt-4 grid grid-cols-1 gap-4 sm:grid-cols-2">
              {project.gallery.map((img, i) => (
                <li key={img}>
                  <button
                    type="button"
                    onClick={() => setLightbox(img)}
                    aria-label={`Enlarge image ${i + 1} of ${project.title}`}
                    className="group block aspect-video w-full overflow-hidden ring-1 ring-white/10 hover:ring-cyan/60"
                  >
                    <img
                      src={img}
                      alt=""
                      loading="lazy"
                      decoding="async"
                      className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-[1.04]"
                    />
                  </button>
                </li>
              ))}
            </ul>
          </section>
        )}

        {projects.length > 1 && (
          <nav aria-label="More projects" className="grid gap-4 border-t border-white/10 pt-12 md:grid-cols-2">
            <Link to={`/project/${prev.slug}`} className="group border border-white/10 p-6 transition-colors hover:border-cyan/50">
              <span className="flex items-center gap-2 text-[11px] text-muted">
                <ArrowLeft size={12} aria-hidden="true" /> Previous
              </span>
              <span className="mt-2 block font-display text-2xl uppercase group-hover:text-cyan">{prev.title}</span>
            </Link>
            <Link
              to={`/project/${next.slug}`}
              className="group border border-white/10 p-6 text-right transition-colors hover:border-cyan/50"
            >
              <span className="flex items-center justify-end gap-2 text-[11px] text-muted">
                Next <ArrowRight size={12} aria-hidden="true" />
              </span>
              <span className="mt-2 block font-display text-2xl uppercase group-hover:text-cyan">{next.title}</span>
            </Link>
          </nav>
        )}
      </main>

      <AnimatePresence>
        {lightbox && (
          <motion.div
            role="dialog"
            aria-modal="true"
            aria-label="Image preview"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setLightbox(null)}
            className="fixed inset-0 z-[80] flex cursor-zoom-out items-center justify-center bg-ink/95 p-6"
          >
            <img src={lightbox} alt="" className="max-h-[85vh] max-w-full object-contain" />
            <button
              type="button"
              onClick={() => setLightbox(null)}
              className="absolute right-6 top-6 rounded-full border border-white/20 px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.18em] text-foreground/80 hover:text-cyan"
            >
              Close
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default ProjectDetail;

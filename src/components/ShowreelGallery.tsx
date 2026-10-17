import { useCallback, useState } from "react";
import { motion } from "framer-motion";
import { projects, type Project } from "@/data/projects";
import VideoModal from "@/components/VideoModal";
import { PlayGlyph } from "@/components/icons";

/**
 * Asymmetric placement on large screens. Positions repeat every 4 projects.
 * On smaller screens: verticals sit side by side, landscape tiles span the row.
 */
const slots = [
  "lg:col-span-3 lg:col-start-1",
  "lg:col-span-6 lg:col-start-4 lg:mt-24",
  "lg:col-span-3 lg:col-start-10 lg:mt-8",
  "lg:col-span-7 lg:col-start-3",
];

const Tile = ({
  project,
  index,
  onOpen,
}: {
  project: Project;
  index: number;
  onOpen: (p: Project) => void;
}) => {
  const [failed, setFailed] = useState(false);
  const src = project.thumbnail ?? project.gallery[0];
  const vertical = project.orientation === "vertical";

  return (
    <motion.li
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
      className={`group relative self-start ${vertical ? "col-span-1" : "col-span-2"} ${slots[index % slots.length]}`}
    >
      <div className={vertical ? "mx-auto w-full max-w-[22rem]" : "w-full"}>
        <div
          className={`relative overflow-hidden bg-navy ring-1 ring-white/10 transition-shadow duration-500 group-hover:ring-cyan/60 group-focus-within:ring-cyan/60 ${
            vertical ? "aspect-[9/16]" : "aspect-video"
          }`}
        >
          {failed || !src ? (
            <div className="poster-fallback absolute inset-0" aria-hidden="true" />
          ) : (
            <img
              src={src}
              alt=""
              loading="lazy"
              decoding="async"
              onError={() => setFailed(true)}
              className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-[1.04]"
            />
          )}
          <div className="absolute inset-0 bg-gradient-to-t from-ink/70 via-transparent to-ink/20" aria-hidden="true" />

          {/* Cinema bars slide in on hover */}
          <span
            aria-hidden="true"
            className="absolute inset-x-0 top-0 h-0 bg-ink transition-[height] duration-500 group-hover:h-[7%] group-focus-within:h-[7%]"
          />
          <span
            aria-hidden="true"
            className="absolute inset-x-0 bottom-0 h-0 bg-ink transition-[height] duration-500 group-hover:h-[7%] group-focus-within:h-[7%]"
          />

          <span
            aria-hidden="true"
            className="absolute left-1/2 top-1/2 flex h-14 w-14 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border border-white/70 text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100 group-focus-within:opacity-100"
          >
            <PlayGlyph className="ml-0.5 h-5 w-5" />
          </span>
        </div>

        <div className="mt-3 flex items-baseline justify-between gap-3">
          <h3 className="font-display text-lg uppercase tracking-wide text-foreground md:text-xl">
            {/* Stretched button: the whole tile is the click target */}
            <button
              type="button"
              onClick={() => onOpen(project)}
              aria-haspopup="dialog"
              className="text-left after:absolute after:inset-0 focus-visible:outline-none focus-visible:after:outline focus-visible:after:outline-2 focus-visible:after:outline-offset-4 focus-visible:after:outline-cyan"
            >
              <span className="sr-only">Play: </span>
              {project.title}
            </button>
          </h3>
          <span className="shrink-0 text-[11px] font-semibold text-cyan">{project.year}</span>
        </div>
        <p className="mt-1 text-[11px] text-muted">{project.category}</p>
      </div>
    </motion.li>
  );
};

const ShowreelGallery = () => {
  const [active, setActive] = useState<Project | null>(null);
  const close = useCallback(() => setActive(null), []);

  return (
    <section id="work" className="relative isolate overflow-hidden bg-work px-6 py-24 md:px-10 md:py-32">
      <div className="mx-auto max-w-6xl">
        <header className="mb-14 flex flex-wrap items-end justify-between gap-4 md:mb-20">
          <h2 className="text-metal font-display text-[clamp(2.75rem,8vw,6.5rem)] uppercase leading-[0.9]">
            Selected work
          </h2>
          <p className="text-xs text-muted">
            {projects.length} projects. Tap one to watch.
          </p>
        </header>

        <ul className="grid grid-cols-2 gap-x-4 gap-y-10 sm:gap-x-6 lg:grid-cols-12 lg:gap-x-6 lg:gap-y-14">
          {projects.map((project, i) => (
            <Tile key={project.id} project={project} index={i} onOpen={setActive} />
          ))}
        </ul>
      </div>

      <VideoModal project={active} onClose={close} />
    </section>
  );
};

export default ShowreelGallery;

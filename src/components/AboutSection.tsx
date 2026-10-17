import { motion } from "framer-motion";
import portrait from "@/assets/editor-portrait.webp";
import { capabilities, contentTypes, site, software } from "@/data/site";

const ease: [number, number, number, number] = [0.16, 1, 0.3, 1];

const AboutSection = () => (
  <section id="profile" className="relative isolate overflow-hidden bg-about px-6 py-24 md:px-10 md:py-32">
    <div className="mx-auto grid max-w-6xl items-center gap-14 md:grid-cols-[minmax(0,5fr)_minmax(0,7fr)] md:gap-16">
      {/* Portrait with blue halo */}
      <motion.div
        initial={{ opacity: 0, x: -30 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.9, ease }}
        className="mx-auto w-full max-w-sm md:max-w-none"
      >
        <p className="text-center text-[11px] font-medium tracking-[0.35em] text-foreground/60">HELLO, I AM</p>
        <p className="mt-1 text-center font-display text-3xl uppercase tracking-wide text-foreground">{site.name}</p>
        <div className="relative mt-6 aspect-[4/5]">
          <div className="halo absolute inset-[-6%]" aria-hidden="true" />
          <img
            src={portrait}
            alt={`${site.name} at his editing desk`}
            width={1100}
            height={1100}
            loading="lazy"
            decoding="async"
            className="fade-bottom relative h-full w-full object-cover object-[80%_40%]"
          />
        </div>
      </motion.div>

      {/* Copy */}
      <div>
        <h2 className="text-metal font-display text-4xl uppercase leading-none md:text-5xl">About me</h2>
        <div className="mt-5 max-w-xl space-y-3 text-sm leading-relaxed text-foreground/75">
          {site.about.map((p) => (
            <p key={p}>{p}</p>
          ))}
        </div>

        <h3 className="text-metal mt-10 font-display text-2xl uppercase">Software skills</h3>
        <ul className="mt-4 flex flex-wrap gap-4">
          {software.map((tool) => (
            <li key={tool.name} className="flex w-16 flex-col items-center gap-2 text-center">
              <span
                title={tool.name}
                className="flex h-12 w-12 items-center justify-center rounded-xl text-lg font-bold ring-1 ring-white/10"
                style={{ background: tool.bg, color: tool.fg }}
                aria-hidden="true"
              >
                {tool.mark}
              </span>
              <span className="text-[10px] leading-tight text-muted">{tool.name}</span>
            </li>
          ))}
        </ul>
        <p className="mt-4 text-xs text-muted">Also: {capabilities.join(" and ").toLowerCase()}.</p>

        <dl className="mt-10 grid gap-8 sm:grid-cols-2">
          <div>
            <dt className="text-metal font-display text-xl uppercase">Experience</dt>
            <dd className="mt-2 text-sm text-foreground/75">{site.details.experience}</dd>
            <dd className="mt-1 text-sm text-foreground/75">{site.details.specialty}</dd>
            <dd className="mt-1 text-sm text-foreground/75">{site.details.availability}</dd>
            <dd className="mt-1 text-sm text-foreground/75">Based in {site.details.location}</dd>
          </div>
          <div>
            <dt className="text-metal font-display text-xl uppercase">Content I edit</dt>
            <dd className="mt-2">
              <ul className="space-y-1 text-sm text-foreground/75">
                {contentTypes.map((type) => (
                  <li key={type} className="flex items-center gap-2">
                    <span className="h-1 w-1 rounded-full bg-cyan" aria-hidden="true" />
                    {type}
                  </li>
                ))}
              </ul>
            </dd>
          </div>
        </dl>
      </div>
    </div>
  </section>
);

export default AboutSection;

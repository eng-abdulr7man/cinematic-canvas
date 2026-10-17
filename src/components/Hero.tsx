import { motion } from "framer-motion";
import portrait from "@/assets/editor-portrait.webp";
import { site } from "@/data/site";

const menu = [
  { label: "Start", href: "#profile" },
  { label: "Portfolio", href: "#work" },
  { label: "Contact", href: "#contact" },
];

const ease: [number, number, number, number] = [0.16, 1, 0.3, 1];

const Hero = () => {
  const year = new Date().getFullYear();

  return (
    <section id="start" className="relative isolate flex min-h-[100svh] flex-col overflow-hidden bg-intro">
      <header className="relative z-20 px-6 pt-6 md:px-10 md:pt-8">
        <a href="#start" aria-label={`${site.name}, top of page`} className="font-display text-2xl tracking-wider text-foreground">
          {site.monogram}
        </a>
      </header>

      <div className="relative z-10 flex flex-1 flex-col items-center justify-center gap-8 pb-10 pt-6 lg:flex-row lg:gap-0">
        {/* Red D-shaped portrait, bleeding off the left edge */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.9, ease }}
          className="relative aspect-[5/4] w-[min(62vw,280px)] shrink-0 self-start overflow-hidden rounded-r-full bg-warm lg:w-[clamp(260px,27vw,440px)] lg:self-center"
        >
          <img
            src={portrait}
            alt={`Portrait of ${site.name} at his editing desk`}
            width={1100}
            height={1100}
            decoding="async"
            className="h-full w-full object-cover object-[78%_38%] mix-blend-luminosity"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-warm/80 via-warm/30 to-transparent" />
        </motion.div>

        <div className="flex flex-1 flex-col items-center px-6 text-center lg:pl-12 lg:pr-10">
          <motion.h1
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.15, ease }}
            className="flex flex-wrap items-end justify-center gap-x-4 font-display uppercase leading-[0.85]"
          >
            <span className="text-metal text-[clamp(3.25rem,12.5vw,11rem)] tracking-tight">Portfolio</span>
            <span className="pb-[0.6vw] text-[clamp(1.5rem,5vw,4.25rem)] font-normal text-foreground/55">{year}</span>
          </motion.h1>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.55 }}
            className="mt-6 flex flex-col items-center gap-3"
          >
            <p className="flex items-center gap-3 text-[11px] font-semibold tracking-[0.28em] text-foreground/85">
              <span className="h-2.5 w-2.5 bg-foreground" aria-hidden="true" />
              {site.name.toUpperCase()} — {site.role.toUpperCase()}
            </p>
            <p className="max-w-sm text-sm italic text-muted">{site.tagline}</p>

            <a
              href="#work"
              className="mt-4 rounded-full bg-pill px-7 py-3 text-[11px] font-bold uppercase tracking-[0.2em] text-ink transition-colors hover:bg-white"
            >
              View selected work
            </a>
          </motion.div>
        </div>
      </div>

      <motion.nav
        aria-label="Intro menu"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.8 }}
        className="relative z-10 pb-10"
      >
        <ul className="flex flex-col items-center gap-3">
          {menu.map((item) => (
            <li key={item.label}>
              <a
                href={item.href}
                className="group flex items-center gap-2 text-[11px] font-medium uppercase tracking-[0.3em] text-foreground/70 transition-colors hover:text-foreground focus-visible:text-foreground"
              >
                <span
                  aria-hidden="true"
                  className="text-cyan opacity-0 transition-opacity group-hover:opacity-100 group-focus-visible:opacity-100"
                >
                  ▸
                </span>
                {item.label}
              </a>
            </li>
          ))}
        </ul>
      </motion.nav>
    </section>
  );
};

export default Hero;

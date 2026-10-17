import { motion } from "framer-motion";
import portrait from "@/assets/editor-portrait.webp";
import FilmStrip from "@/components/FilmStrip";
import { SocialGlyph } from "@/components/icons";
import { site, socials } from "@/data/site";

const ContactSection = () => {
  const year = new Date().getFullYear();

  return (
    <section id="contact" className="relative isolate flex min-h-[100svh] flex-col overflow-hidden bg-contact">
      <FilmStrip className="pointer-events-none absolute -bottom-6 -right-16 -z-10 w-[min(88vw,560px)] -rotate-[12deg] text-foreground/20" />

      <div className="mx-auto grid w-full max-w-6xl flex-1 items-center gap-14 px-6 py-24 md:grid-cols-[minmax(0,5fr)_minmax(0,7fr)] md:px-10 md:py-32">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        >
          <h2 className="text-metal font-display text-2xl uppercase tracking-wide">Contact me</h2>

          <div className="mt-6 flex flex-col items-start gap-8 sm:flex-row sm:items-center">
            <div className="text-center">
              <img
                src={portrait}
                alt=""
                width={208}
                height={208}
                loading="lazy"
                decoding="async"
                className="h-40 w-40 rounded-full object-cover object-[80%_35%] ring-2 ring-white/15 md:h-52 md:w-52"
              />
              <p className="mt-3 text-xs font-semibold italic text-foreground">{site.name}</p>
              <p className="text-[11px] text-muted">{site.details.location}</p>
            </div>

            <ul className="space-y-3">
              {socials.map((s) => {
                const external = s.href.startsWith("http");
                return (
                  <li key={s.name}>
                    <a
                      href={s.href}
                      {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                      className="group flex items-center gap-3"
                    >
                      <span className="flex h-10 w-10 items-center justify-center rounded-full bg-foreground text-ink transition-colors group-hover:bg-cyan">
                        <SocialGlyph icon={s.icon} className="h-5 w-5" />
                      </span>
                      <span className="text-xs font-semibold italic text-foreground/90 group-hover:text-cyan">
                        <span className="sr-only">{s.name}: </span>
                        {s.handle}
                      </span>
                    </a>
                  </li>
                );
              })}
            </ul>
          </div>
        </motion.div>

        <div>
          <p className="text-metal font-display text-[clamp(2.75rem,7.5vw,6.5rem)] uppercase leading-[0.92]">
            Let&rsquo;s create
            <br />
            something great
          </p>
          <a
            href="mailto:3sawydesain@gmail.com"
            className="mt-8 inline-block rounded-full bg-pill px-7 py-3 text-[11px] font-bold uppercase tracking-[0.2em] text-ink transition-colors hover:bg-white"
          >
            Start a project
          </a>
        </div>
      </div>

      <footer className="relative z-10 border-t border-white/10 px-6 py-5 md:px-10">
        <div className="mx-auto flex max-w-6xl flex-col gap-2 text-[11px] text-foreground/45 sm:flex-row sm:items-center sm:justify-between">
          <span>
            &copy; {year} {site.name}
          </span>
          <span>
            Designed by{" "}
            <a
              href="https://3bdulr7man.vercel.app"
              target="_blank"
              rel="noopener noreferrer"
              className="text-foreground/70 underline-offset-4 hover:text-cyan hover:underline"
            >
              3BDULR7MAN
            </a>
          </span>
        </div>
      </footer>
    </section>
  );
};

export default ContactSection;

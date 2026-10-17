import { motion } from "framer-motion";
import portrait from "@/assets/editor-portrait.webp";
import { site } from "@/data/site";

const menu = [
  { label: "Start", href: "#start" },
  { label: "Portfolio", href: "#work" },
  { label: "Contact", href: "#contact" },
];

const ease: [number, number, number, number] = [0.16, 1, 0.3, 1];

const Hero = () => {
  const year = new Date().getFullYear();

  return (
    <section id="start" className="relative isolate flex min-h-[100svh] w-full flex-col items-center justify-center overflow-hidden bg-[#050b14]">
      {/* Cinematic Blue Glow Background */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(14,40,75,0.6)_0%,rgba(5,11,20,1)_60%)]" />

      {/* Top Left Monogram / Logo */}
      <header className="absolute left-6 top-6 z-20 md:left-10 md:top-8">
        <a href="#start" aria-label={`${site.name}, top of page`} className="font-display text-2xl font-bold tracking-wider text-white">
          {site.monogram}
        </a>
      </header>

      {/* Left Red D-Shape Portrait Container */}
      <motion.div
        initial={{ opacity: 0, x: -100 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1, ease }}
        className="absolute left-0 top-1/2 z-10 h-[320px] w-[220px] -translate-y-1/2 overflow-hidden rounded-r-full bg-[#7a0b16] shadow-2xl md:h-[450px] md:w-[300px]"
      >
        <img
          src={portrait}
          alt={`Portrait of ${site.name}`}
          width={1100}
          height={1100}
          decoding="async"
          // Using luminosity blend to match the cinematic dark tone, clears up on hover
          className="h-full w-full object-cover object-[70%_30%] mix-blend-luminosity opacity-90 transition-all duration-500 hover:mix-blend-normal hover:opacity-100"
        />
      </motion.div>

      {/* Center Main Typography & Role */}
      <div className="relative z-20 flex flex-col items-center justify-center text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.2, ease }}
          className="flex flex-col items-center md:flex-row md:items-baseline md:gap-6"
        >
          <h1 className="font-display text-[4.5rem] font-black uppercase tracking-tighter text-[#e5e7eb] md:text-[8rem] lg:text-[10rem] leading-none">
            Portfolio
          </h1>
          <span className="font-display text-[2.5rem] font-medium text-gray-500 md:text-[3.5rem] lg:text-[4.5rem]">
            {year}
          </span>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="mt-6 flex items-center gap-3 text-[11px] font-bold tracking-[0.3em] uppercase text-gray-300 md:mt-2"
        >
          {/* White square matching the reference design */}
          <span className="h-2.5 w-2.5 bg-white" aria-hidden="true" />
          {/* Changed to reflect video editing explicitly */}
          {site.role || "Video / Reels Editor"}
        </motion.div>
      </div>

      {/* Bottom Vertical Navigation */}
      <motion.nav
        aria-label="Intro menu"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.8 }}
        className="absolute bottom-12 z-20"
      >
        <ul className="flex flex-col items-center gap-3">
          {menu.map((item) => (
            <li key={item.label}>
              <a
                href={item.href}
                className="text-[10px] font-semibold uppercase tracking-[0.3em] text-gray-400 transition-colors hover:text-cyan-400 focus-visible:text-cyan-400"
              >
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

import { useActiveSection } from "@/hooks/useActiveSection";
import { site } from "@/data/site";

const sections = ["start", "profile", "work", "contact"] as const;
const items = [
  { id: "profile", label: "Profile" },
  { id: "work", label: "Work" },
  { id: "contact", label: "Contact" },
];

/** Minimal pill navigation. Hidden on the intro, like the reference. */
const Navbar = () => {
  const active = useActiveSection(sections);
  const visible = active !== "start";

  return (
    <nav
      aria-label="Primary"
      className={`fixed inset-x-0 top-0 z-50 flex items-center justify-center bg-gradient-to-b from-ink/90 to-transparent px-6 pb-8 pt-4 transition-[opacity,transform,visibility] duration-300 ${
        visible ? "visible translate-y-0 opacity-100" : "invisible -translate-y-3 opacity-0"
      }`}
    >
      <a
        href="#start"
        aria-label={`${site.name}, back to top`}
        className="absolute left-6 top-4 hidden font-display text-lg tracking-wider text-foreground md:block"
      >
        {site.monogram}
      </a>
      <ul className="flex items-center gap-1">
        {items.map((item) => {
          const isActive = active === item.id;
          return (
            <li key={item.id}>
              <a
                href={`#${item.id}`}
                aria-current={isActive ? "true" : undefined}
                className={`block rounded-full px-4 py-1.5 text-[11px] font-semibold uppercase tracking-[0.18em] transition-colors ${
                  isActive ? "bg-pill text-ink" : "text-foreground/70 hover:text-foreground"
                }`}
              >
                {item.label}
              </a>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};

export default Navbar;

import { projects } from "@/data/projects";

// ─────────────────────────────────────────────────────────────
// Personal details. Everything here came from your original
// code. Edit freely; nothing else in the app hard-codes them.
// ─────────────────────────────────────────────────────────────

export const site = {
  name: "Mohamed Elesawy",
  monogram: "M.E",
  role: "Video Editor / Reels Editor",
  tagline: "I speak through cuts, transitions, and color.",
  about: [
    "I'm a storyteller who speaks through cuts, transitions, and color. With one year of professional experience in the film and advertising industry, I craft visual narratives for brands and content creators across the Middle East.",
    "I believe great editing is invisible. The audience should feel the story, not see the cuts.",
  ],
  details: {
    location: "Mansoura, Egypt",
    experience: "1+ years, film and advertising",
    specialty: "Cinematic editing",
    availability: "Freelance and remote",
  },
};

export const software = [
  { name: "Premiere Pro", mark: "Pr", bg: "#00005b", fg: "#9999ff" },
  { name: "After Effects", mark: "Ae", bg: "#00005b", fg: "#9999ff" },
  { name: "DaVinci Resolve", mark: "Dr", bg: "#10151c", fg: "#f2f4f7" },
  { name: "CapCut", mark: "Cc", bg: "#f5f7fa", fg: "#0a0a0a" },
  { name: "Photoshop", mark: "Ps", bg: "#001e36", fg: "#31a8ff" },
  { name: "Illustrator", mark: "Ai", bg: "#330000", fg: "#ff9a00" },
];

export const capabilities = ["Color grading", "Sound design"];

/** Content types are taken from the categories of your own projects. */
export const contentTypes = Array.from(
  new Set(projects.flatMap((p) => p.category.split("/").map((c) => c.trim()))),
);

export type SocialIcon = "instagram" | "linkedin" | "whatsapp" | "mail";

export const socials: { name: string; handle: string; href: string; icon: SocialIcon }[] = [
  {
    name: "Instagram",
    handle: "@m0hamed__el3sawy",
    href: "https://www.instagram.com/m0hamed__el3sawy/",
    icon: "instagram",
  },
  {
    name: "LinkedIn",
    handle: "mohamed-elesawy-",
    href: "https://www.linkedin.com/in/mohamed-elesawy-",
    icon: "linkedin",
  },
  { name: "WhatsApp", handle: "Send a message", href: "https://wa.me/201098697563", icon: "whatsapp" },
  { name: "Email", handle: "3sawydesain@gmail.com", href: "mailto:3sawydesain@gmail.com", icon: "mail" },
];

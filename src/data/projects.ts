export interface Project {
  id: number;
  slug: string;
  title: string;
  category: string;
  year: string;
  client: string;
  color: string;
  description: string;
  role: string;
  fullDescription: string;
  challenges: string;
  solution: string;
  duration: string;
  tools: string[];
  gallery: string[];
  videoUrl: string;
}

export const projects: Project[] = [
  {
    id: 1,
    slug: "telda-launch-campaign",
    title: "TELDA — MOVE MONEY",
    category: "Commercial / Social",
    year: "2025",
    client: "Telda Egypt",
    color: "#00b4ff", // اللون الأزرق القديم
    description: "Fast-paced social media ads for Egypt's leading digital bank",
    role: "Video Editor & Motion Graphics",
    fullDescription:
      "A series of high-energy social media advertisements designed to showcase the ease of peer-to-peer money transfers. The editing style focused on 'Gen Z' aesthetics—quick cuts, kinetic typography, and seamless transitions to match the brand's modern identity.",
    challenges:
      "Creating a cohesive feel across 15+ different deliverables (Reels, TikToks, YouTube Shorts) while keeping the brand's minimal yet bold visual language consistent.",
    solution:
      "Developed a modular project file in Premiere Pro with preset motion graphics templates (MOGRTs) for the UI elements, allowing for rapid iteration and export of different aspect ratios.",
    duration: "2 weeks",
    tools: ["Premiere Pro", "After Effects", "Photoshop"],
    gallery: [
      "https://unsplash.com/photos/a-person-holding-a-credit-card-in-front-of-a-machine-3YSDTzqnVtQ",
      "https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=1200&q=80",
    ],
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
  },
  {
    id: 2,
    slug: "el-gouna-festival-recap",
    title: "GFF 24 — HIGHLIGHTS",
    category: "Event Recap",
    year: "2024",
    client: "El Gouna Film Festival",
    color: "#00d4aa", // اللون الأخضر المائي القديم
    description: "Daily recap videos and red carpet highlights for GFF's 7th edition",
    role: "Lead Content Editor",
    fullDescription:
      "Responsible for delivering 24-hour turnaround recap videos for the El Gouna Film Festival. The project involved sorting through hours of red carpet footage, interviews, and panel discussions to create engaging 60-second highlight reels for Instagram and Facebook.",
    challenges:
      "The extremely tight deadline. Footage was often received at midnight and needed to be edited, color-graded, and approved by 8:00 AM the next day.",
    solution:
      "Set up an on-site editing station. Pre-selected music tracks and created intro/outro templates before the festival started to focus entirely on the daily storytelling.",
    duration: "10 days",
    tools: ["Premiere Pro", "CapCut Desktop", "DaVinci Resolve"],
    gallery: [
      "https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?w=1200&q=80",
      "https://images.unsplash.com/photo-1536440136628-849c177e76a1?w=1200&q=80",
    ],
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
  },
  {
    id: 3,
    slug: "swvl-business-solutions",
    title: "SWVL FOR BUSINESS",
    category: "Corporate Explainer",
    year: "2024",
    client: "Swvl",
    color: "#ff6b35", // اللون البرتقالي القديم
    description: "B2B explainer video showcasing Swvl's corporate transportation logistics",
    role: "Video Editor",
    fullDescription:
      "A professional B2B video aimed at corporate HR and logistics managers. The edit balances stock footage with real-world bus operations and clean UI animations to explain Swvl's tracking and booking system.",
    challenges:
      "Explaining a complex logistics software in under 90 seconds without losing the viewer's interest.",
    solution:
      "Used a 'split-screen' editing technique to show the app interface on one side and the real-world benefit (staff arriving on time) on the other, creating a clear cause-and-effect narrative.",
    duration: "3 weeks",
    tools: ["Premiere Pro", "After Effects", "Illustrator"],
    gallery: [
      "https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?w=1200&q=80",
      "https://images.unsplash.com/photo-1570126618953-d437176e8c79?w=1200&q=80",
    ],
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
  },
  {
    id: 4,
    slug: "mountain-view-ramadan",
    title: "MOUNTAIN VIEW — EID GREETINGS",
    category: "Social Media",
    year: "2024",
    client: "Mountain View Egypt",
    color: "#a855f7", // اللون البنفسجي القديم
    description: "Heartwarming social media spots for Ramadan and Eid seasons",
    role: "Content Editor",
    fullDescription:
      "Edited a series of short, emotional clips featuring families in Mountain View compounds. The goal was to evoke a sense of community and happiness during the holy month through warm color grading and nostalgic pacing.",
    challenges:
      "Managing a high volume of raw footage from multiple shoot locations and selecting only the most authentic 'candid' moments.",
    solution:
      "Implemented a strict logging system for the best emotional reactions and used a warm, film-stock LUT to unify the different lighting conditions of the outdoor shoots.",
    duration: "4 weeks",
    tools: ["Premiere Pro", "DaVinci Resolve"],
    gallery: [
      "https://images.unsplash.com/photo-1509316785289-025f5b846b35?w=1200&q=80",
      "https://images.unsplash.com/photo-1542401886-65d6c61db217?w=1200&q=80",
    ],
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
  },
];

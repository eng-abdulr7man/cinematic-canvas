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
    slug: "the-last-frame",
    title: "THE LAST FRAME",
    category: "Short Film",
    year: "2025",
    client: "Netflix MENA",
    color: "#00b4ff",
    description: "Award-winning short film exploring time through a filmmaker's lens",
    role: "Lead Editor & Colorist",
    fullDescription:
      "A deeply personal short film that weaves together the fragmented memories of an aging filmmaker revisiting his life's work. Through non-linear editing and dreamlike color grading, the narrative blurs the line between memory and reality, culminating in a powerful meditation on legacy and the passage of time.",
    challenges:
      "The film required seamless transitions between five distinct timelines, each with its own color palette and visual rhythm. Maintaining emotional coherence across 200+ cuts while preserving the dreamlike quality was the primary editorial challenge.",
    solution:
      "Developed a custom color pipeline in DaVinci Resolve with LUT chains per timeline. Used rhythmic J-cuts and L-cuts to create an audio-visual tapestry that guides the viewer through temporal shifts without disorientation.",
    duration: "6 weeks",
    tools: ["DaVinci Resolve", "Premiere Pro", "After Effects", "Audition"],
    gallery: [
      "https://images.unsplash.com/photo-1485846234645-a62644f84728?w=1200&q=80",
      "https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?w=1200&q=80",
      "https://images.unsplash.com/photo-1536440136628-849c177e76a1?w=1200&q=80",
      "https://images.unsplash.com/photo-1518676590747-1e3dcf5a4e32?w=1200&q=80",
    ],
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
  },
  {
    id: 2,
    slug: "pulse",
    title: "PULSE",
    category: "Music Video",
    year: "2025",
    client: "Universal Music",
    color: "#00d4aa",
    description: "High-energy visual journey for top-charting Arabic pop single",
    role: "Editor & VFX Supervisor",
    fullDescription:
      "A kinetic music video for one of the year's biggest Arabic pop hits. The visual concept revolves around the heartbeat — every cut, transition, and VFX element is synchronized to the BPM of the track, creating an immersive audiovisual experience that pulses with raw energy.",
    challenges:
      "Syncing 400+ cuts to exact musical beats while maintaining visual storytelling. The artist performed across 8 distinct set pieces, each requiring unique VFX treatments and color worlds.",
    solution:
      "Built a beat-mapping system in Premiere Pro using markers synced to the track's waveform. Created modular VFX templates in After Effects that could be rhythm-adjusted per section, allowing rapid iteration without losing sync.",
    duration: "3 weeks",
    tools: ["Premiere Pro", "After Effects", "Cinema 4D", "DaVinci Resolve"],
    gallery: [
      "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=1200&q=80",
      "https://images.unsplash.com/photo-1514320291840-2e0a9bf2a9ae?w=1200&q=80",
      "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?w=1200&q=80",
      "https://images.unsplash.com/photo-1511379938547-c1f69419868d?w=1200&q=80",
    ],
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
  },
  {
    id: 3,
    slug: "desert-mirage",
    title: "DESERT MIRAGE",
    category: "Commercial",
    year: "2024",
    client: "Vodafone Egypt",
    color: "#ff6b35",
    description: "Cinematic Ramadan campaign reaching 40M+ views across platforms",
    role: "Senior Editor",
    fullDescription:
      "Vodafone's flagship Ramadan campaign told the story of connection across vast distances — from desert landscapes to Cairo's bustling streets. The 90-second hero spot and 6 cutdowns needed to feel epic yet intimate, capturing the warmth of Ramadan while showcasing Vodafone's network reach.",
    challenges:
      "Delivering a hero spot and 6 platform-specific cutdowns (TikTok, Instagram, YouTube) from the same footage, each requiring different pacing and aspect ratios while maintaining the emotional arc.",
    solution:
      "Created a modular editing timeline where key emotional beats could be rearranged per format. Used AI-assisted reframing for vertical formats while manually fine-tuning critical compositions.",
    duration: "4 weeks",
    tools: ["Premiere Pro", "After Effects", "DaVinci Resolve", "Media Encoder"],
    gallery: [
      "https://images.unsplash.com/photo-1451337516015-6b6e9a44a8a3?w=1200&q=80",
      "https://images.unsplash.com/photo-1509316785289-025f5b846b35?w=1200&q=80",
      "https://images.unsplash.com/photo-1473580044384-7ba9967e16a0?w=1200&q=80",
      "https://images.unsplash.com/photo-1542401886-65d6c61db217?w=1200&q=80",
    ],
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
  },
  {
    id: 4,
    slug: "echoes-of-cairo",
    title: "ECHOES OF CAIRO",
    category: "Documentary",
    year: "2024",
    client: "Al Jazeera",
    color: "#a855f7",
    description: "Documentary exploring Cairo's hidden artistic underground scene",
    role: "Editor & Sound Designer",
    fullDescription:
      "A 45-minute documentary that descends into Cairo's underground art scene — from illegal gallery spaces in abandoned buildings to secret music venues beneath the city. The edit needed to feel like the city itself: layered, chaotic, beautiful, and always surprising.",
    challenges:
      "120+ hours of vérité footage with no script. The story had to be found entirely in the edit room. Additionally, the sound design needed to weave ambient city recordings into a cohesive sonic landscape.",
    solution:
      "Used a paper-edit process to identify 12 key narrative threads, then wove them into a three-act structure. Built custom soundscapes by layering production audio with field recordings from Cairo's streets, markets, and underground venues.",
    duration: "10 weeks",
    tools: ["Premiere Pro", "Audition", "DaVinci Resolve", "Pro Tools"],
    gallery: [
      "https://images.unsplash.com/photo-1539768942893-daf53e736b68?w=1200&q=80",
      "https://images.unsplash.com/photo-1549893072-4bc678117f45?w=1200&q=80",
      "https://images.unsplash.com/photo-1558618666-fcd25c85f82e?w=1200&q=80",
      "https://images.unsplash.com/photo-1568992687947-868a62a9f521?w=1200&q=80",
    ],
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
  },
  {
    id: 5,
    slug: "neon-dynasty",
    title: "NEON DYNASTY",
    category: "Brand Film",
    year: "2024",
    client: "Samsung MENA",
    color: "#eab308",
    description: "Futuristic brand film for Galaxy S24 Ultra launch event",
    role: "Lead Editor & Motion Designer",
    fullDescription:
      "Samsung's Galaxy S24 Ultra needed a launch film that felt like a glimpse into the future. Combining live-action footage shot in a neon-lit studio with generative AI visuals and 3D motion graphics, the 2-minute film premiered at the Dubai launch event on a 40-meter LED wall.",
    challenges:
      "Integrating live-action with AI-generated imagery seamlessly. The film needed to feel cohesive — not like a tech demo — while showcasing the phone's camera capabilities in an aspirational context.",
    solution:
      "Developed a visual language where AI-generated elements emerge organically from live-action frames using custom compositing techniques. Created a consistent color grade that unifies all visual elements under a warm neon palette.",
    duration: "5 weeks",
    tools: ["Premiere Pro", "After Effects", "Cinema 4D", "Midjourney", "DaVinci Resolve"],
    gallery: [
      "https://images.unsplash.com/photo-1550745165-9bc0b252726f?w=1200&q=80",
      "https://images.unsplash.com/photo-1535223289827-42f1e9919769?w=1200&q=80",
      "https://images.unsplash.com/photo-1558591710-4b4a1ae0f04d?w=1200&q=80",
      "https://images.unsplash.com/photo-1531297484001-80022131f5a1?w=1200&q=80",
    ],
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
  },
  {
    id: 6,
    slug: "between-worlds",
    title: "BETWEEN WORLDS",
    category: "Short Film",
    year: "2023",
    client: "Cairo Film Festival",
    color: "#ef4444",
    description: "Experimental narrative blending reality and dreams in modern Egypt",
    role: "Editor & Colorist",
    fullDescription:
      "An experimental short that follows a young woman navigating between waking life and a surreal dreamscape inspired by ancient Egyptian mythology. The editing style shifts dramatically between worlds — grounded and observational in reality, fragmented and hypnotic in dreams.",
    challenges:
      "Creating two distinct visual and rhythmic languages that feel like they belong to the same film. The dream sequences required extensive visual effects compositing within a limited budget.",
    solution:
      "Used speed ramping, reverse footage, and kaleidoscopic mirror effects to create the dream world's visual language using only in-camera and editorial techniques. The color grade shifts from desaturated naturalism to saturated, high-contrast surrealism.",
    duration: "8 weeks",
    tools: ["DaVinci Resolve", "Premiere Pro", "After Effects"],
    gallery: [
      "https://images.unsplash.com/photo-1478720568477-152d9b164e26?w=1200&q=80",
      "https://images.unsplash.com/photo-1440404653325-ab127d49abc1?w=1200&q=80",
      "https://images.unsplash.com/photo-1524712245354-2c4e5e7121c0?w=1200&q=80",
      "https://images.unsplash.com/photo-1505533542167-8c89838bb19e?w=1200&q=80",
    ],
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
  },
];

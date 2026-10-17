import type { SVGProps } from "react";
import type { SocialIcon } from "@/data/site";

const base: SVGProps<SVGSVGElement> = {
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.8,
  strokeLinecap: "round",
  strokeLinejoin: "round",
  "aria-hidden": true,
};

export const SocialGlyph = ({ icon, className }: { icon: SocialIcon; className?: string }) => {
  switch (icon) {
    case "instagram":
      return (
        <svg {...base} className={className}>
          <rect x="3" y="3" width="18" height="18" rx="5" />
          <circle cx="12" cy="12" r="4" />
          <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
        </svg>
      );
    case "linkedin":
      return (
        <svg {...base} className={className}>
          <rect x="3" y="3" width="18" height="18" rx="3" />
          <path d="M8 11v5M8 8v.01M12 16v-5m0 2a2 2 0 0 1 4 0v3" />
        </svg>
      );
    case "whatsapp":
      return (
        <svg {...base} className={className}>
          <path d="M3 21l1.65-4.9A8.5 8.5 0 1 1 8 19.4L3 21z" />
          <path d="M9.2 8.6c-.3 1.9 2.2 5.2 5.2 6l1.3-1.3-2-1.1-1 .8a4.5 4.5 0 0 1-2.1-2.1l.8-1-1.1-2-1.1.7z" />
        </svg>
      );
    case "mail":
      return (
        <svg {...base} className={className}>
          <rect x="3" y="5" width="18" height="14" rx="2" />
          <path d="M3 7l9 6 9-6" />
        </svg>
      );
  }
};

export const PlayGlyph = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" className={className}>
    <path d="M8 5.5v13a1 1 0 0 0 1.5.86l10.5-6.5a1 1 0 0 0 0-1.72L9.5 4.64A1 1 0 0 0 8 5.5z" />
  </svg>
);

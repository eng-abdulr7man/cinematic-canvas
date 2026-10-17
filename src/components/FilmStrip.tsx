/** Decorative film strip, drawn as inline SVG. */
const FRAMES = 4;
const FRAME_W = 120;
const H = 96;

const FilmStrip = ({ className }: { className?: string }) => {
  const width = FRAMES * FRAME_W + 16;
  const holes = Array.from({ length: FRAMES * 5 + 2 });
  return (
    <svg
      viewBox={`0 0 ${width} ${H}`}
      className={className}
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      aria-hidden="true"
    >
      <rect x="1" y="1" width={width - 2} height={H - 2} rx="4" />
      {holes.map((_, i) => (
        <g key={i}>
          <rect x={10 + i * 24} y="8" width="10" height="8" rx="1.5" />
          <rect x={10 + i * 24} y={H - 16} width="10" height="8" rx="1.5" />
        </g>
      ))}
      {Array.from({ length: FRAMES }).map((_, i) => (
        <rect key={i} x={10 + i * FRAME_W} y="24" width={FRAME_W - 12} height={H - 48} rx="2" />
      ))}
    </svg>
  );
};

export default FilmStrip;

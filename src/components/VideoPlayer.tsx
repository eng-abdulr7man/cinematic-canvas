import type { Project } from "@/data/projects";

const isFile = (url: string) => /\.(mp4|webm|ogg)(\?.*)?$/i.test(url);

const withAutoplay = (url: string) => `${url}${url.includes("?") ? "&" : "?"}autoplay=1&rel=0`;

interface Props {
  url: string;
  title: string;
  orientation: Project["orientation"];
  autoPlay?: boolean;
}

/** Plays a direct video file or a YouTube/Vimeo embed, sized for 9:16 or 16:9. */
const VideoPlayer = ({ url, title, orientation, autoPlay = false }: Props) => {
  const vertical = orientation === "vertical";
  const style = vertical
    ? { aspectRatio: "9 / 16", height: "min(74vh, calc((100vw - 2rem) * 16 / 9))" }
    : { aspectRatio: "16 / 9", width: "min(92vw, 1100px, calc(74vh * 16 / 9))" };

  return (
    <div style={style} className="mx-auto overflow-hidden bg-black ring-1 ring-white/10">
      {isFile(url) ? (
        <video
          src={url}
          title={title}
          controls
          playsInline
          autoPlay={autoPlay}
          preload="metadata"
          className="h-full w-full object-contain"
        />
      ) : (
        <iframe
          src={autoPlay ? withAutoplay(url) : url}
          title={title}
          className="h-full w-full"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />
      )}
    </div>
  );
};

export default VideoPlayer;

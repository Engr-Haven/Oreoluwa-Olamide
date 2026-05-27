import { useEffect, useRef, useState } from "react";
import { WEDDING } from "@/config";
import videoOo from "@/assets/video-oo.mp4";

export default function EnvelopeScreen({ onOpen, onSongStart }) {
  const [isPlaying, setIsPlaying] = useState(false);
  const videoRef = useRef(null);

  const handleTap = () => {
    if (isPlaying) return;
    setIsPlaying(true);
    onSongStart?.();
    if (videoRef.current && typeof videoRef.current.play === "function") {
      videoRef.current.play().catch(() => {});
    }
  };

  useEffect(() => {
    if (!isPlaying || !videoRef.current) return;
    const el = videoRef.current;
    const handleEnded = () => onOpen();
    el.addEventListener("ended", handleEnded);
    return () => el.removeEventListener("ended", handleEnded);
  }, [isPlaying, onOpen]);

  return (
    <div
      className="fixed inset-0 z-50 mobile-video-screen animate-fade-in"
      onClick={handleTap}
      role="button"
      tabIndex={0}
      onKeyDown={(e) => (e.key === "Enter" || e.key === " ") && handleTap()}
    >
      <video
        ref={videoRef}
        playsInline
        webkit-playsinline="true"
        // preload="none"
        muted
        className="mobile-video-element"
        aria-label="Invitation reel"
      >
        <source src={videoOo} type="video/mp4" />
      </video>
      <div className="mobile-video-hint">Tap</div>
      {WEDDING.studio.name && (
        <a
          href={WEDDING.studio.url || "#"}
          target="_blank"
          rel="noreferrer"
          className="reel-studio-link pt-2"
        >
          {WEDDING.studio.name}
        </a>
      )}
    </div>
  );
}

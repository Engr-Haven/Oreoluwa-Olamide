import { useEffect, useRef, useState } from "react";
import { WEDDING } from "@/config";
import videoOo from "@/assets/video-oo.mp4";

export default function EnvelopeScreen({ onOpen, onSongStart }) {
  const [isPlaying, setIsPlaying] = useState(false);
  const videoRef = useRef(null);

  useEffect(() => {
    if (typeof window !== "undefined" && window.innerWidth > 480) {
      onOpen();
    }
  }, [onOpen]);

  const handleTap = () => {
    if (isPlaying) return;
    setIsPlaying(true);
    onSongStart?.();
    const el = videoRef.current;
    if (el) {
      el.src = videoOo;
      el.load();
      el.play().catch(() => {});
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
        muted
        className="mobile-video-element"
        aria-label="Invitation reel"
      />
      <div className="mobile-video-hint">Tap to open</div>
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

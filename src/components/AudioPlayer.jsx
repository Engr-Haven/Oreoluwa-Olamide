import { useEffect, useRef, useState } from "react";
import { Music, VolumeX } from "lucide-react";
import songOo from "@/assets/song-oo.mpeg";

export default function AudioPlayer({ playOn }) {
  const audioRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);

  useEffect(() => {
    if (!playOn || !audioRef.current) return;
    audioRef.current.volume = 0.4;
    audioRef.current.loop = true;
    audioRef.current.play().then(() => setIsPlaying(true)).catch(() => {});
  }, [playOn]);

  const toggle = () => {
    if (!audioRef.current) return;
    if (isPlaying) {
      audioRef.current.pause();
      setIsPlaying(false);
    } else {
      audioRef.current.play().then(() => setIsPlaying(true)).catch(() => {});
    }
  };

  return (
    <>
      <audio ref={audioRef} src={songOo} preload="auto" />
      <button
        onClick={toggle}
        className="fixed bottom-6 left-6 z-50 flex items-center justify-center rounded-full transition-all hover:scale-110"
        style={{
          width: 44,
          height: 44,
          backgroundColor: "var(--color-gold)",
          color: "#fff",
          border: "none",
          cursor: "pointer",
          boxShadow: "0 4px 16px rgba(201,169,110,0.4)",
          opacity: playOn ? 1 : 0,
        }}
        aria-label={isPlaying ? "Pause music" : "Play music"}
      >
        {isPlaying ? <Music size={18} /> : <VolumeX size={18} />}
      </button>
    </>
  );
}

import { useState, useRef, forwardRef } from "react";
import { Music, VolumeX } from "lucide-react";
import songOo from "@/assets/song-oo.mpeg";

const AudioPlayer = forwardRef(function AudioPlayer({ playOn }, ref) {
  const [isPlaying, setIsPlaying] = useState(false);
  const innerRef = useRef(null);
  const audioRef = ref ?? innerRef;

  const toggle = () => {
    const audio = audioRef?.current;
    if (!audio) return;
    if (isPlaying) {
      audio.pause();
    } else {
      audio
        .play()
        .then(() => setIsPlaying(true))
        .catch(() => {});
    }
  };

  return (
    <>
      <audio
        ref={audioRef}
        preload="none"
        onPlay={() => setIsPlaying(true)}
        onPause={() => setIsPlaying(false)}
      >
        <source src={songOo} type="audio/mpeg" />
      </audio>
      {playOn && (
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
          }}
          aria-label={isPlaying ? "Pause music" : "Play music"}
        >
          {isPlaying ? <Music size={18} /> : <VolumeX size={18} />}
        </button>
      )}
    </>
  );
});

export default AudioPlayer;

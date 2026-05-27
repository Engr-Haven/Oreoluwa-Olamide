import { lazy, Suspense, useRef, useState, useCallback } from "react";
import EnvelopeScreen from "@/components/EnvelopeScreen";
import AudioPlayer from "@/components/AudioPlayer";

const HeroSection = lazy(() => import("@/components/sections/HeroSection"));
const SaveDateSection = lazy(() => import("@/components/sections/SaveDateSection"));
const CountdownSection = lazy(() => import("@/components/sections/CountdownSection"));
const RSVPSection = lazy(() => import("@/components/sections/RSVPSection"));
const LogoSection = lazy(() => import("@/components/sections/LogoSection"));
const Footer = lazy(() => import("@/components/Footer"));

export default function App() {
  const [isOpen, setIsOpen] = useState(false);
  const [songStarted, setSongStarted] = useState(false);
  const audioRef = useRef(null);

  const handleOpen = useCallback(() => setIsOpen(true), []);

  const handleSongStart = useCallback(() => {
    setSongStarted(true);
    const audio = audioRef.current;
    if (audio) {
      audio.volume = 0.4;
      audio.loop = true;
      audio.play().catch(() => {});
    }
  }, []);

  return (
    <div
      className="min-h-screen w-full"
      style={{ backgroundColor: "var(--color-parchment)" }}
    >
      {!isOpen && (
        <EnvelopeScreen
          onOpen={handleOpen}
          onSongStart={handleSongStart}
        />
      )}

      <AudioPlayer ref={audioRef} playOn={songStarted} />

      {isOpen && (
        <div
          className="animate-invitation-reveal w-full max-w-lg mx-auto"
          style={{ backgroundColor: "var(--color-cream)" }}
        >
          <Suspense fallback={null}>
            <nav className="fixed top-4 right-4 z-40 flex flex-col gap-2" aria-label="Section navigation">
              {["hero", "rsvp"].map((id) => (
                <a
                  key={id}
                  href={`#${id}`}
                  className="w-1.5 h-1.5 rounded-full opacity-30 hover:opacity-80 transition-opacity"
                  style={{ backgroundColor: "var(--color-gold)" }}
                  aria-label={`Go to ${id} section`}
                />
              ))}
            </nav>

            <div id="hero">
              <HeroSection />
            </div>

            <SaveDateSection />

            <div
              style={{
                background:
                  "linear-gradient(to bottom, var(--color-cream), var(--color-blush))",
              }}
            >
              <CountdownSection />
            </div>

            <div
              id="rsvp"
              style={{
                background:
                  "linear-gradient(to bottom, var(--color-cream), var(--color-blush))",
              }}
            >
              <RSVPSection />
            </div>

            <LogoSection />

            <div style={{ backgroundColor: "var(--color-blush)" }}>
              <Footer />
            </div>
          </Suspense>
        </div>
      )}
    </div>
  );
}

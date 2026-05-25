import { useState } from "react";
import EnvelopeScreen from "@/components/EnvelopeScreen";
import HeroSection from "@/components/sections/HeroSection";
import SaveDateSection from "@/components/sections/SaveDateSection";
import CountdownSection from "@/components/sections/CountdownSection";
import RSVPSection from "@/components/sections/RSVPSection";
import AudioPlayer from "@/components/AudioPlayer";
import LogoSection from "@/components/sections/LogoSection";
import Footer from "@/components/Footer";

export default function App() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div
      className="min-h-screen w-full"
      style={{ backgroundColor: "var(--color-parchment)" }}
    >
      {/* Envelope / Wax Seal Screen */}
      {!isOpen && <EnvelopeScreen onOpen={() => setIsOpen(true)} />}

      {/* Background Music */}
      <AudioPlayer play={isOpen} />

      {/* Invitation Content */}
      {isOpen && (
        <div
          className="animate-invitation-reveal w-full max-w-md mx-auto"
          style={{ backgroundColor: "var(--color-cream)" }}
        >
          {/* Sticky mini nav dots */}
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

          {/* === HERO === */}
          <div id="hero">
            <HeroSection />
          </div>

          {/* === SAVE THE DATE === */}
          <SaveDateSection />

          {/* === COUNTDOWN === */}
          <div
            style={{
              background:
                "linear-gradient(to bottom, var(--color-cream), var(--color-blush))",
            }}
          >
            <CountdownSection />
          </div>

          {/* === RSVP === */}
          <div
            id="rsvp"
            style={{
              background:
                "linear-gradient(to bottom, var(--color-cream), var(--color-blush))",
            }}
          >
            <RSVPSection />
          </div>

          {/* === LOGO === */}
          <LogoSection />

          {/* === FOOTER === */}
          <div style={{ backgroundColor: "var(--color-blush)" }}>
            <Footer />
          </div>
        </div>
      )}
    </div>
  );
}

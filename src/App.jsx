import { useState } from "react";
import EnvelopeScreen from "@/components/EnvelopeScreen";
import HeroSection from "@/components/sections/HeroSection";
import CountdownSection from "@/components/sections/CountdownSection";
import VenueSection from "@/components/sections/VenueSection";
import ProgrammeSection from "@/components/sections/ProgrammeSection";
import MenuSection from "@/components/sections/MenuSection";
import NotesSection from "@/components/sections/NotesSection";
import RSVPSection from "@/components/sections/RSVPSection";
import Footer from "@/components/Footer";
import OrnamentDivider from "@/components/OrnamentDivider";

export default function App() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div
      className="min-h-screen w-full"
      style={{ backgroundColor: "var(--color-parchment)" }}
    >
      {/* Envelope / Wax Seal Screen */}
      {!isOpen && <EnvelopeScreen onOpen={() => setIsOpen(true)} />}

      {/* Invitation Content */}
      {isOpen && (
        <div
          className="animate-invitation-reveal w-full max-w-md mx-auto"
          style={{ backgroundColor: "var(--color-cream)" }}
        >
          {/* Sticky mini nav dots */}
          <nav className="fixed top-4 right-4 z-40 flex flex-col gap-2">
            {["hero", "venue", "programme", "menu", "notes", "rsvp"].map((id) => (
              <a
                key={id}
                href={`#${id}`}
                className="w-1.5 h-1.5 rounded-full opacity-30 hover:opacity-80 transition-opacity"
                style={{ backgroundColor: "var(--color-gold)" }}
              />
            ))}
          </nav>

          {/* === HERO === */}
          <div id="hero">
            <HeroSection />
          </div>

          {/* === COUNTDOWN === */}
          <div
            style={{
              background:
                "linear-gradient(to bottom, var(--color-cream), var(--color-blush))",
            }}
          >
            <CountdownSection />
          </div>

          {/* Transition divider */}
          <div
            className="flex items-center justify-center py-4"
            style={{ backgroundColor: "var(--color-blush)" }}
          >
            <OrnamentDivider label="✦" />
          </div>

          {/* === VENUE === */}
          <div
            id="venue"
            style={{ backgroundColor: "var(--color-cream)" }}
          >
            <VenueSection />
          </div>

          {/* Transition */}
          <div
            className="flex items-center justify-center py-4"
            style={{ backgroundColor: "var(--color-cream)" }}
          >
            <OrnamentDivider />
          </div>

          {/* === PROGRAMME === */}
          <div
            id="programme"
            style={{ backgroundColor: "var(--color-cream)" }}
          >
            <ProgrammeSection />
          </div>

          {/* === MENU === */}
          <div id="menu" style={{ backgroundColor: "var(--color-blush)" }}>
            <MenuSection />
          </div>

          {/* === NOTES === */}
          <div
            id="notes"
            style={{ backgroundColor: "var(--color-cream)" }}
          >
            <NotesSection />
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

          {/* === FOOTER === */}
          <div style={{ backgroundColor: "var(--color-blush)" }}>
            <Footer />
          </div>
        </div>
      )}
    </div>
  );
}

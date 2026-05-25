import { WEDDING } from "@/config";
import OrnamentDivider from "@/components/OrnamentDivider";

export default function HeroSection() {
  return (
    <div className="relative w-full min-h-screen flex flex-col">
      {/* Couple Photo — Top Half */}
      <div className="relative w-full h-[55vh] overflow-hidden">
        <img
          src={WEDDING.venue.imageUrl}
          alt="Couple"
          className="w-full h-full object-cover"
          style={{ objectPosition: "center top" }}
        />
        {/* Gradient fade into card below */}
        <div
          className="absolute bottom-0 left-0 right-0 h-32"
          style={{
            background:
              "linear-gradient(to bottom, transparent, var(--color-cream))",
          }}
        />
      </div>

      {/* Invitation Card — Bottom Half */}
      <div
        className="relative flex-1 flex flex-col items-center justify-start px-8 pt-4 pb-16 paper-texture"
        style={{ backgroundColor: "var(--color-cream)" }}
      >
        {/* Decorative top accent */}
        <div className="flex items-center gap-3 mb-6">
          <span style={{ color: "var(--color-gold)", fontSize: "0.7rem" }}>✦</span>
          <div
            className="h-px w-16 opacity-50"
            style={{ backgroundColor: "var(--color-gold)" }}
          />
          <span style={{ color: "var(--color-gold)", fontSize: "0.7rem" }}>✦</span>
        </div>

        {/* Couple Names */}
        <h1
          className="text-center leading-none mb-3"
          style={{
            fontFamily: "var(--font-display)",
            fontSize: "3.2rem",
            fontWeight: 300,
            color: "var(--color-brown)",
            letterSpacing: "0.02em",
          }}
        >
          <span className="italic">{WEDDING.partner1}</span>
          <span
            className="block text-2xl my-1"
            style={{ color: "var(--color-gold)", fontWeight: 400 }}
          >
            &
          </span>
          <span className="italic">{WEDDING.partner2}</span>
        </h1>

        {/* Tagline */}
        <p
          className="text-center mt-3 mb-6 leading-relaxed"
          style={{
            fontFamily: "var(--font-body)",
            fontSize: "0.7rem",
            letterSpacing: "0.18em",
            textTransform: "uppercase",
            color: "var(--color-brown-light)",
          }}
        >
          {WEDDING.tagline}
        </p>

        <OrnamentDivider />

        {/* Date */}
        <p
          className="text-center"
          style={{
            fontFamily: "var(--font-display)",
            fontSize: "1.15rem",
            fontWeight: 400,
            color: "var(--color-brown)",
            letterSpacing: "0.05em",
          }}
        >
          {WEDDING.weddingDate}
        </p>

        {/* Decorative bottom accent */}
        <div className="flex items-center gap-3 mt-6">
          <div
            className="h-px w-16 opacity-30"
            style={{ backgroundColor: "var(--color-gold)" }}
          />
          <span
            style={{
              fontFamily: "var(--font-script)",
              fontSize: "1.2rem",
              color: "var(--color-gold)",
            }}
          >
            ❧
          </span>
          <div
            className="h-px w-16 opacity-30"
            style={{ backgroundColor: "var(--color-gold)" }}
          />
        </div>
      </div>
    </div>
  );
}

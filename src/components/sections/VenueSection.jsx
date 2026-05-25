import { MapPin, Navigation } from "lucide-react";
import { WEDDING } from "@/config";
import Section from "@/components/Section";
import OrnamentDivider from "@/components/OrnamentDivider";

export default function VenueSection() {
  const { venue } = WEDDING;

  return (
    <Section
      className="!px-0 !py-0"
      style={{ backgroundColor: "var(--color-cream)" }}
    >
      {/* Section header */}
      <div className="px-6 pt-14 pb-0 max-w-md mx-auto">
        <p
          className="text-center mb-2 tracking-[0.25em] uppercase"
          style={{
            fontFamily: "var(--font-body)",
            fontSize: "0.6rem",
            color: "var(--color-gold)",
          }}
        >
          ✦ Venue ✦
        </p>
        <h2
          className="text-center mb-1"
          style={{
            fontFamily: "var(--font-display)",
            fontSize: "2rem",
            fontWeight: 400,
            color: "var(--color-brown)",
            fontStyle: "italic",
          }}
        >
          {venue.name}
        </h2>
        <p
          className="text-center mb-1"
          style={{
            fontFamily: "var(--font-body)",
            fontSize: "0.75rem",
            color: "var(--color-brown-light)",
          }}
        >
          {venue.address}
        </p>
        <p
          className="text-center mb-6"
          style={{
            fontFamily: "var(--font-body)",
            fontSize: "0.75rem",
            color: "var(--color-brown-light)",
          }}
        >
          {venue.city}
        </p>

        {/* Buttons */}
        <div className="flex gap-3 mb-8 justify-center">
          <a
            href={venue.mapsUrl}
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-2 px-4 py-2.5 rounded-sm transition-all hover:opacity-80"
            style={{
              border: "1px solid var(--color-gold)",
              fontFamily: "var(--font-body)",
              fontSize: "0.65rem",
              letterSpacing: "0.1em",
              textTransform: "uppercase",
              color: "var(--color-brown)",
              textDecoration: "none",
            }}
          >
            <MapPin size={12} style={{ color: "var(--color-gold)" }} />
            Open in Maps
          </a>
          <a
            href={venue.directionsUrl}
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-2 px-4 py-2.5 rounded-sm transition-all hover:opacity-80"
            style={{
              backgroundColor: "var(--color-gold)",
              fontFamily: "var(--font-body)",
              fontSize: "0.65rem",
              letterSpacing: "0.1em",
              textTransform: "uppercase",
              color: "#fff",
              textDecoration: "none",
            }}
          >
            <Navigation size={12} />
            Directions
          </a>
        </div>
      </div>

      {/* Venue Photo full width */}
      <div className="w-full h-56 overflow-hidden">
        <img
          src={venue.imageUrl}
          alt={venue.name}
          className="w-full h-full object-cover"
        />
      </div>

      {/* Description */}
      <div className="px-6 pt-6 pb-14 max-w-md mx-auto">
        <OrnamentDivider />
        <p
          className="text-center leading-relaxed"
          style={{
            fontFamily: "var(--font-body)",
            fontSize: "0.8rem",
            color: "var(--color-brown-light)",
            lineHeight: 1.8,
          }}
        >
          {venue.description}
        </p>
      </div>
    </Section>
  );
}

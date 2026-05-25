import { Mail, ExternalLink } from "lucide-react";
import { WEDDING } from "@/config";
import Section from "@/components/Section";

export default function RSVPSection() {
  const { rsvp } = WEDDING;
  if (!rsvp.enabled) return null;

  return (
    <Section>
      {/* Background card */}
      <div
        className="rounded-sm p-8 text-center"
        style={{
          background:
            "linear-gradient(135deg, rgba(201,169,110,0.1), rgba(201,169,110,0.05))",
          border: "1px solid rgba(201,169,110,0.3)",
        }}
      >
        {/* Label */}
        <p
          className="tracking-[0.25em] uppercase mb-3"
          style={{
            fontFamily: "var(--font-body)",
            fontSize: "0.6rem",
            color: "var(--color-gold)",
          }}
        >
          ✦ RSVP ✦
        </p>

        {/* Title */}
        <h2
          className="mb-3"
          style={{
            fontFamily: "var(--font-display)",
            fontSize: "1.8rem",
            fontWeight: 400,
            color: "var(--color-brown)",
            fontStyle: "italic",
          }}
        >
          RSVP
        </h2>

        {/* Deadline */}
        <p
          className="mb-6"
          style={{
            fontFamily: "var(--font-body)",
            fontSize: "0.75rem",
            color: "var(--color-brown-light)",
          }}
        >
          Please confirm your attendance by{" "}
          <strong style={{ color: "var(--color-brown)" }}>
            {rsvp.deadline}
          </strong>
        </p>

        {/* RSVP Button */}
        <a
          href={rsvp.formUrl}
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center gap-2 px-8 py-3 rounded-sm mb-4 transition-all hover:opacity-85"
          style={{
            backgroundColor: "var(--color-gold)",
            fontFamily: "var(--font-body)",
            fontSize: "0.7rem",
            letterSpacing: "0.15em",
            textTransform: "uppercase",
            color: "#fff",
            textDecoration: "none",
          }}
        >
          <ExternalLink size={13} />
          Confirm Attendance
        </a>

        {/* Or email */}
        <div
          className="flex items-center gap-3 mt-4"
          style={{ color: "rgba(201,169,110,0.4)" }}
        >
          <div
            className="h-px flex-1"
            style={{ backgroundColor: "rgba(201,169,110,0.2)" }}
          />
          <span style={{ fontSize: "0.6rem", fontFamily: "var(--font-body)" }}>
            or
          </span>
          <div
            className="h-px flex-1"
            style={{ backgroundColor: "rgba(201,169,110,0.2)" }}
          />
        </div>

        <a
          href={`mailto:${rsvp.email}`}
          className="inline-flex items-center gap-2 mt-4 hover:opacity-70 transition-opacity"
          style={{
            fontFamily: "var(--font-body)",
            fontSize: "0.7rem",
            color: "var(--color-brown-light)",
            textDecoration: "none",
          }}
        >
          <Mail size={12} style={{ color: "var(--color-gold)" }} />
          {rsvp.email}
        </a>
      </div>
    </Section>
  );
}

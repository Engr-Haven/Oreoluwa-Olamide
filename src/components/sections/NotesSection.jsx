import { WEDDING } from "@/config";
import Section from "@/components/Section";
import OrnamentDivider from "@/components/OrnamentDivider";

export default function NotesSection() {
  return (
    <Section>
      {/* Title */}
      <p
        className="text-center mb-2 tracking-[0.25em] uppercase"
        style={{
          fontFamily: "var(--font-body)",
          fontSize: "0.6rem",
          color: "var(--color-gold)",
        }}
      >
        ✦ Notes ✦
      </p>
      <h2
        className="text-center mb-8"
        style={{
          fontFamily: "var(--font-display)",
          fontSize: "2rem",
          fontWeight: 400,
          color: "var(--color-brown)",
          fontStyle: "italic",
        }}
      >
        Important Information
      </h2>

      {/* Notes */}
      <div className="flex flex-col gap-8">
        {WEDDING.notes.map((note, i) => (
          <div key={i}>
            {/* Note header */}
            <div className="flex items-center gap-2 mb-2">
              <span className="text-base">{note.icon}</span>
              <p
                style={{
                  fontFamily: "var(--font-display)",
                  fontSize: "1rem",
                  fontWeight: 600,
                  color: "var(--color-brown)",
                }}
              >
                {note.title}
              </p>
            </div>
            {/* Note text */}
            <p
              style={{
                fontFamily: "var(--font-body)",
                fontSize: "0.75rem",
                color: "var(--color-brown-light)",
                lineHeight: 1.9,
              }}
            >
              {note.text}
            </p>

            {/* Divider */}
            {i < WEDDING.notes.length - 1 && (
              <div
                className="mt-6 h-px w-full"
                style={{ background: "rgba(201,169,110,0.2)" }}
              />
            )}
          </div>
        ))}
      </div>

      <OrnamentDivider />
    </Section>
  );
}

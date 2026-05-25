import { WEDDING } from "@/config";
import Section from "@/components/Section";
import OrnamentDivider from "@/components/OrnamentDivider";

export default function ProgrammeSection() {
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
        ✦ Schedule ✦
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
        Event Schedule
      </h2>

      {/* Days */}
      {WEDDING.programme.map((day, di) => (
        <div key={di} className={di > 0 ? "mt-10" : ""}>
          {/* Day header */}
          <div className="flex items-center gap-3 mb-6">
            <div
              className="h-px flex-1"
              style={{ backgroundColor: "rgba(201,169,110,0.3)" }}
            />
            <div className="text-center">
              <p
                style={{
                  fontFamily: "var(--font-display)",
                  fontSize: "1.1rem",
                  fontWeight: 500,
                  color: "var(--color-brown)",
                }}
              >
                {day.day}
              </p>
              <p
                style={{
                  fontFamily: "var(--font-body)",
                  fontSize: "0.65rem",
                  letterSpacing: "0.12em",
                  color: "var(--color-gold)",
                  textTransform: "uppercase",
                }}
              >
                {day.date}
              </p>
            </div>
            <div
              className="h-px flex-1"
              style={{ backgroundColor: "rgba(201,169,110,0.3)" }}
            />
          </div>

          {/* Events timeline */}
          <div className="relative pl-6">
            {/* Vertical line */}
            <div
              className="absolute left-0 top-2 bottom-2 w-px"
              style={{ backgroundColor: "rgba(201,169,110,0.25)" }}
            />

            {day.events.map((event, ei) => (
              <div key={ei} className="relative mb-6 last:mb-0">
                {/* Dot */}
                <div
                  className="absolute -left-[5px] top-1.5 w-2.5 h-2.5 rounded-full border"
                  style={{
                    backgroundColor: "var(--color-cream)",
                    borderColor: "var(--color-gold)",
                  }}
                />

                {/* Time */}
                <p
                  style={{
                    fontFamily: "var(--font-body)",
                    fontSize: "0.65rem",
                    letterSpacing: "0.15em",
                    color: "var(--color-gold)",
                    marginBottom: "2px",
                  }}
                >
                  {event.time}
                </p>

                {/* Title */}
                <p
                  style={{
                    fontFamily: "var(--font-display)",
                    fontSize: "1rem",
                    fontWeight: 500,
                    color: "var(--color-brown)",
                    lineHeight: 1.3,
                  }}
                >
                  {event.title}
                </p>

                {/* Location */}
                {event.location && (
                  <p
                    className="mt-1"
                    style={{
                      fontFamily: "var(--font-body)",
                      fontSize: "0.7rem",
                      color: "var(--color-brown-light)",
                      whiteSpace: "pre-line",
                      lineHeight: 1.6,
                    }}
                  >
                    {event.location}
                  </p>
                )}
              </div>
            ))}
          </div>
        </div>
      ))}

      <OrnamentDivider label="✦" />
    </Section>
  );
}

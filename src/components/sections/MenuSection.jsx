import { WEDDING } from "@/config";
import Section from "@/components/Section";
import OrnamentDivider from "@/components/OrnamentDivider";

export default function MenuSection() {
  const { menu } = WEDDING;

  return (
    <Section
      style={{ backgroundColor: "var(--color-blush)" }}
      className="rounded-none"
    >
      {/* Title */}
      <p
        className="text-center mb-2 tracking-[0.25em] uppercase"
        style={{
          fontFamily: "var(--font-body)",
          fontSize: "0.6rem",
          color: "var(--color-gold)",
        }}
      >
        ✦ Menu ✦
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
        Le repas
      </h2>

      {/* Courses */}
      <div className="flex flex-col gap-8">
        {menu.courses.map((course, i) => (
          <div key={i} className="relative">
            {/* Course icon + title */}
            <div className="flex items-center gap-3 mb-3">
              <span className="text-lg">{course.icon}</span>
              <p
                style={{
                  fontFamily: "var(--font-display)",
                  fontSize: "1.05rem",
                  fontWeight: 500,
                  color: "var(--color-brown)",
                  fontStyle: "italic",
                }}
              >
                {course.title}
              </p>
            </div>

            {/* Items */}
            {course.items &&
              course.items.map((item, j) => (
                <p
                  key={j}
                  className="ml-8"
                  style={{
                    fontFamily: "var(--font-body)",
                    fontSize: "0.75rem",
                    color: "var(--color-brown-light)",
                    lineHeight: 1.8,
                  }}
                >
                  — {item}
                </p>
              ))}

            {/* Options */}
            {course.options &&
              course.options.map((option, j) => (
                <p
                  key={j}
                  className="ml-8"
                  style={{
                    fontFamily: "var(--font-body)",
                    fontSize: "0.75rem",
                    color: "var(--color-brown-light)",
                    lineHeight: 1.8,
                  }}
                >
                  {option}
                </p>
              ))}

            {/* Divider between courses */}
            {i < menu.courses.length - 1 && (
              <div
                className="mt-6 h-px w-full"
                style={{ background: "rgba(201,169,110,0.2)" }}
              />
            )}
          </div>
        ))}
      </div>

      <OrnamentDivider />

      {/* Menu note */}
      <p
        className="text-center"
        style={{
          fontFamily: "var(--font-body)",
          fontSize: "0.7rem",
          color: "var(--color-brown-light)",
          lineHeight: 1.8,
          fontStyle: "italic",
        }}
      >
        {menu.note}
      </p>
    </Section>
  );
}

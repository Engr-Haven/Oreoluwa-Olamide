import { useEffect, useRef } from "react";
import { WEDDING } from "@/config";

const HEART_TRAIN = `
@keyframes heartTrain {
  from { stroke-dashoffset: 0; }
  to { stroke-dashoffset: -56; }
}
.animate-heart-train {
  animation: heartTrain 1.8s linear infinite;
}
`;

const WEEKDAYS = ["S", "M", "T", "W", "T", "F", "S"];

function buildCalendar(year, month) {
  const first = new Date(year, month, 1).getDay();
  const daysInMonth = new Date(year, month + 1, 0).getDate();
  const cells = [];
  for (let i = 0; i < first; i++) cells.push(null);
  for (let d = 1; d <= daysInMonth; d++) cells.push(d);
  return cells;
}

export default function SaveDateSection() {
  const ref = useRef(null);
  const [y, m] = WEDDING.weddingDateISO.split("-").map(Number);
  const month = m - 1;
  const day = Number(WEDDING.weddingDay);
  const cells = buildCalendar(y, month);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.classList.add("visible");
          observer.disconnect();
        }
      },
      { threshold: 0, rootMargin: "-40px 0px" },
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className="reveal w-full min-h-screen flex flex-col items-center justify-center px-8 py-16"
      style={{
        background:
          "linear-gradient(to bottom, var(--color-cream), var(--color-blush))",
      }}
    >
      <p
        className="text-center mb-2 tracking-[0.25em] uppercase"
        style={{
          fontFamily: "var(--font-body)",
          fontSize: "1rem",
          color: "var(--color-gold)",
        }}
      >
        ✦ Save the Date ✦
      </p>

      <h2
        className="text-center mb-6"
        style={{
          fontFamily: "var(--font-script)",
          fontSize: "2.2rem",
          color: "var(--color-brown)",
          lineHeight: 1.2,
          marginTop: "1.5rem",
          marginBottom: "2rem",
        }}
      >
        {WEDDING.partner1} & {WEDDING.partner2}
      </h2>

      <div
        className="w-full max-w-[280px] mx-auto rounded-sm p-5"
        style={{
          backgroundColor: "var(--color-parchment)",
          border: "1px solid rgba(201,169,110,0.25)",
        }}
      >
        <p
          className="text-center mb-4"
          style={{
            fontFamily: "var(--font-display)",
            fontSize: "1.1rem",
            fontWeight: 500,
            color: "var(--color-brown)",
            marginTop: "1.5rem",
            marginBottom: "1.5rem",
          }}
        >
          September 2026
        </p>

        <div className="grid grid-cols-7 gap-1 text-center">
          {WEEKDAYS.map((wd) => (
            <div
              key={wd}
              style={{
                fontFamily: "var(--font-body)",
                fontSize: "0.55rem",
                fontWeight: 600,
                color: "var(--color-gold)",
                letterSpacing: "0.05em",
                paddingBottom: "4px",
              }}
            >
              {wd}
            </div>
          ))}

          {cells.map((d, i) =>
            d === day ? (
              <div
                key={i}
                className="flex items-center justify-center relative animate-seal-pulse"
                style={{
                  aspectRatio: "1",
                  width: "100%",
                  cursor: "pointer",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = "scale(1.15)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = "scale(1)";
                }}
                onClick={(e) => {
                  e.currentTarget.style.transform = "scale(0.92)";
                  setTimeout(() => {
                    e.currentTarget.style.transform = "scale(1.15)";
                    setTimeout(() => {
                      e.currentTarget.style.transform = "scale(1)";
                    }, 200);
                  }, 120);
                }}
              >
                <style>{HEART_TRAIN}</style>
                <div
                  className="flex items-center justify-center w-full h-full"
                  style={{
                    fontFamily: "var(--font-body)",
                    fontSize: "0.8rem",
                    fontWeight: 700,
                    color: "#fff",
                    background:
                      "linear-gradient(135deg, #d4a844, #c9a96e, #e8c97a, #c9a96e)",
                    backgroundSize: "200% 200%",
                    borderRadius: "50%",
                    zIndex: 1,
                    transition: "transform 0.3s ease",
                  }}
                >
                  {d}
                </div>
                <svg
                  className="absolute inset-0 w-full h-full"
                  viewBox="0 0 100 100"
                  style={{ zIndex: 2, pointerEvents: "none" }}
                >
                  <path
                    d="M50,88 C50,88 8,56 8,32 8,16 22,8 32,14 40,18 50,34 50,34 50,34 60,18 68,14 78,8 92,16 92,32 92,56 50,88 50,88Z"
                    fill="none"
                    stroke="rgba(255,255,255,0.8)"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                    strokeDasharray="7 9"
                    className="animate-heart-train"
                  />
                </svg>
              </div>
            ) : (
              <div
                key={i}
                className="flex items-center justify-center"
                style={{
                  aspectRatio: "1",
                  width: "100%",
                  fontFamily: "var(--font-body)",
                  fontSize: "0.75rem",
                  fontWeight: 400,
                  color: "var(--color-brown)",
                  opacity: d ? 1 : 0,
                }}
              >
                {d || ""}
              </div>
            )
          )}
        </div>
      </div>

      <p
        className="text-center mt-6"
        style={{
          fontFamily: "var(--font-display)",
          fontSize: "0.85rem",
          fontStyle: "italic",
          color: "var(--color-brown-light)",
          marginTop: "1.5rem",
        }}
      >
        Saturday, 05 September 2026
      </p>
    </div>
  );
}

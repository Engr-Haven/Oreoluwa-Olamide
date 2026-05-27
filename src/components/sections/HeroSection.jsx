import { useEffect, useRef, useState } from "react";
import { WEDDING } from "@/config";
import ScratchReveal from "@/components/ScratchReveal";

export default function HeroSection() {
  const ref = useRef(null);
  const [stage, setStage] = useState(0);

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
      { threshold: 0, rootMargin: "-40px 0px" }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);
  const reveals = [
    { label: "Day", text: WEDDING.weddingDay },
    { label: "Month", text: WEDDING.weddingMonth },
    { label: "Year", text: WEDDING.weddingYear },
  ];

  return (
    <div ref={ref} className="reveal relative w-full min-h-screen flex flex-col">
      {/* Couple Photo — Top Half */}
      <div className="relative w-full h-[55vh] overflow-hidden">
        <img
          src={WEDDING.imageUrl}
          alt="Couple"
          className="w-full h-full object-cover"
          style={{ objectPosition: "center top" }}
          loading="lazy"
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
        className="relative flex-1 flex flex-col items-center justify-start px-8 pt-8 pb-16 paper-texture"
        style={{ backgroundColor: "var(--color-cream)" }}
      >
        {/* Decorative top accent */}
        <div className="flex items-center gap-3 mb-6">
          <span style={{ color: "var(--color-gold)", fontSize: "0.7rem" }}>
            ✦
          </span>
          <div
            className="h-px w-16 opacity-50"
            style={{ backgroundColor: "var(--color-gold)" }}
          />
          <span style={{ color: "var(--color-gold)", fontSize: "0.7rem" }}>
            ✦
          </span>
        </div>

        {/* Announcement copy */}
        <p
          className="text-center mb-3"
          style={{
            fontFamily: "var(--font-display)",
            fontSize: "1.15rem",
            fontWeight: 400,
            color: "var(--color-brown)",
            letterSpacing: "0.03em",
            marginBottom: "0.7rem",
          }}
        >
          {WEDDING.tagline}
        </p>

        <h1 className="text-center leading-none mb-3 mt-2 flex flex-col items-center gap-1">
          <span
            style={{
              fontFamily: "var(--font-script)",
              fontSize: "4rem",
              fontWeight: 400,
              color: "var(--color-brown)",
              letterSpacing: "0.02em",
              lineHeight: 1,
            }}
          >
            {WEDDING.partner1}
          </span>
          <span
            className="gold-shimmer"
            style={{
              fontFamily: "var(--font-script)",
              fontSize: "2.8rem",
              lineHeight: 1,
              margin: "-2px 0",
            }}
          >
            &
          </span>
          <span
            style={{
              fontFamily: "var(--font-script)",
              fontSize: "4rem",
              fontWeight: 400,
              color: "var(--color-brown)",
              letterSpacing: "0.02em",
              lineHeight: 1,
            }}
          >
            {WEDDING.partner2}
          </span>
        </h1>

        <p
          className="text-center uppercase tracking-[0.25em] mb-3"
          style={{
            fontFamily: "var(--font-display)",
            fontSize: "0.7rem",
            fontWeight: 900,
            color: "var(--color-brown)",
            letterSpacing: "0.05rem",
          }}
        >
          {WEDDING.hero.announcement}
        </p>

        <p
          className="text-center text-sm mb-6"
          style={{
            fontFamily: "var(--font-display)",
            color: "var(--color-brown-light)",
            fontSize: "1.2rem",
            letterSpacing: "0.03rem",
            textTransform: "lowercase",
            marginBottom: "0.5rem",
          }}
        >
          {WEDDING.hero.on}
        </p>

        <div className="flex justify-center" style={{ gap: "0.4rem" }}>
          {reveals.map((item, index) => (
            <ScratchReveal
              key={item.label}
              text={item.text}
              enabled={stage === index}
              revealed={stage > index}
              onReveal={() =>
                setStage((prevStage) => Math.min(prevStage + 1, reveals.length))
              }
            />
          ))}
        </div>

        <p
          className="text-center mt-3 uppercase"
          style={{
            fontFamily: "var(--font-body)",
            fontSize: "0.6rem",
            fontWeight: 700,
            letterSpacing: "0.1rem",
            color: "var(--color-gold)",
            marginTop: "1rem",
          }}
        >
          {WEDDING.hero.hint}
        </p>
      </div>
    </div>
  );
}

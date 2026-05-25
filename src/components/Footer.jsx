import { useEffect, useRef } from "react";
import { WEDDING } from "@/config";

export default function Footer() {
  const ref = useRef(null);

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
    <footer ref={ref} className="reveal w-full pb-10 pt-4 text-center">
      {/* Closing ornament */}
      <div className="flex items-center justify-center gap-4 mb-6 px-8">
        <div
          className="h-px flex-1 max-w-[80px]"
          style={{
            background:
              "linear-gradient(to right, transparent, rgba(201,169,110,0.4))",
          }}
        />
        <span
          style={{
            fontFamily: "var(--font-body)",
            fontSize: "1.2rem",
            color: "var(--color-gold)",
            margin: "0.6rem 0",
          }}
        >
          {/* {WEDDING.partner1[0]} & {WEDDING.partner2[0]} */}
          #Lockedin2026
        </span>
        <div
          className="h-px flex-1 max-w-[80px]"
          style={{
            background:
              "linear-gradient(to left, transparent, rgba(201,169,110,0.4))",
          }}
        />
      </div>

      {/* Date */}
      <p
        className="mb-4"
        style={{
          fontFamily: "var(--font-body)",
          fontSize: "0.65rem",
          letterSpacing: "0.2em",
          textTransform: "uppercase",
          color: "var(--color-brown-light)",
          opacity: 0.6,
        }}
      >
        {WEDDING.weddingDate}
      </p>

      {/* Studio credit */}
      {WEDDING.studio.name && (
        <a
          href={WEDDING.studio.url || "#"}
          target="_blank"
          rel="noreferrer"
          className="hover:opacity-70 transition-opacity"
          style={{
            fontFamily: "var(--font-body)",
            fontSize: "0.6rem",
            letterSpacing: "0.15em",
            color: "var(--color-brown-light)",
            opacity: 0.4,
            textDecoration: "none",
            marginBottom: "0.5rem",
          }}
        >
          {WEDDING.studio.name}
        </a>
      )}
    </footer>
  );
}

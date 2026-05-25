import { useEffect, useRef } from "react";

export default function LogoSection() {
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
    <div
      ref={ref}
      className="reveal w-full flex flex-col items-center justify-center px-8 py-20"
      style={{
        background:
          "linear-gradient(180deg, var(--color-cream) 0%, var(--color-blush) 40%, var(--color-rose) 100%)",
      }}
    >
      <div
        className="relative flex items-center justify-center"
        style={{
          width: "clamp(160px, 50vw, 280px)",
          aspectRatio: "1",
        }}
      >
        {/* Glow aura */}
        <div
          className="absolute rounded-full"
          style={{
            inset: "-20%",
            background:
              "radial-gradient(circle, rgba(201,169,110,0.3) 0%, transparent 70%)",
            animation: "sealPulse 3s ease-in-out infinite",
          }}
        />

        {/* Logo image */}
        <img
          src="/logo-oo.png"
          alt="Oreoluwa & Olamide"
          className="relative"
          style={{
            width: "100%",
            height: "100%",
            objectFit: "contain",
            filter: "drop-shadow(0 8px 24px rgba(201,169,110,0.35))",
            animation: "logoFloat 4s ease-in-out infinite",
          }}
        />

        {/* Sparkle overlay */}
        <div
          className="absolute inset-0 rounded-full"
          style={{
            background:
              "linear-gradient(135deg, transparent 40%, rgba(255,255,255,0.25) 50%, transparent 60%)",
            backgroundSize: "200% 200%",
            animation: "shimmer 3s linear infinite",
            pointerEvents: "none",
          }}
        />
      </div>

      <p
        className="text-center mt-8 tracking-[0.3em] uppercase"
        style={{
          fontFamily: "var(--font-body)",
          fontSize: "0.7rem",
          fontWeight: 600,
          color: "var(--color-gold)",
          letterSpacing: "0.35em",
          opacity: 0.7,
          marginBottom: "0.8rem",
        }}
      >
        Thank You
      </p>

      <style>{`
        @keyframes logoFloat {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-8px); }
        }
      `}</style>
    </div>
  );
}

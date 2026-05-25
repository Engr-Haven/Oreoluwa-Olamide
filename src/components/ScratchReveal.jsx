import { useState } from "react";

export default function ScratchReveal({
  text,
  enabled = true,
  revealed = false,
  onReveal = () => {},
}) {
  const [localRevealed, setLocalRevealed] = useState(false);
  const isFullyRevealed = revealed || localRevealed;
  const isInteractive = enabled && !isFullyRevealed;

  const handleClick = () => {
    if (!isInteractive) return;
    setLocalRevealed(true);
    onReveal();
  };

  return (
    <div className="flex justify-center">
      <div
        className="relative overflow-hidden rounded-full select-none"
        style={{
          width: "clamp(56px, 18vw, 72px)",
          aspectRatio: "1",
          border: "1px solid rgba(58,46,42,0.15)",
          background:
            "radial-gradient(circle at top, rgba(245,235,225,0.9), rgba(180,160,145,0.2)), linear-gradient(135deg, #e8ddd0, #c4b5a4)",
        }}
      >
        <div
          className="absolute inset-0 flex items-center justify-center text-center"
          style={{
            fontFamily: "var(--font-display)",
            fontSize: "clamp(1.1rem, 4vw, 1.4rem)",
            fontWeight: 700,
            color: "var(--color-brown)",
          }}
        >
          {text}
        </div>

        {!isFullyRevealed && (
          <div
            className="absolute inset-0 rounded-full"
            style={{
              backgroundColor: "rgba(58, 46, 42, 0.92)",
              cursor: "pointer",
            }}
            onClick={handleClick}
            onKeyDown={(e) => (e.key === "Enter" || e.key === " ") && handleClick()}
            role="button"
            tabIndex={0}
            aria-label="Reveal date"
          />
        )}
      </div>
    </div>
  );
}

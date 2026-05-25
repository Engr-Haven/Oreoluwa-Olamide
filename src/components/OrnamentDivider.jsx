export default function OrnamentDivider({ label }) {
  return (
    <div className="ornament-divider my-6 text-xs tracking-[0.25em] uppercase"
      style={{ fontFamily: "var(--font-body)", color: "var(--color-gold)", fontSize: "0.6rem" }}>
      {label || "✦"}
    </div>
  );
}

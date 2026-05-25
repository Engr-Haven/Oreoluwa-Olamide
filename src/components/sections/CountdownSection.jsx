import { useState, useEffect } from "react";
import { WEDDING } from "@/config";
import Section from "@/components/Section";

function pad(n) {
  return String(n).padStart(2, "0");
}

function getTimeLeft() {
  const target = new Date(WEDDING.weddingDateISO);
  const now = new Date();
  const diff = target - now;
  if (diff <= 0) return { days: 0, hours: 0, minutes: 0, seconds: 0 };
  return {
    days: Math.floor(diff / 86400000),
    hours: Math.floor((diff % 86400000) / 3600000),
    minutes: Math.floor((diff % 3600000) / 60000),
    seconds: Math.floor((diff % 60000) / 1000),
  };
}

export default function CountdownSection() {
  const [time, setTime] = useState(getTimeLeft());

  useEffect(() => {
    const interval = setInterval(() => setTime(getTimeLeft()), 1000);
    return () => clearInterval(interval);
  }, []);

  const units = [
    { label: "Days", value: time.days },
    { label: "Hours", value: pad(time.hours) },
    { label: "Minutes", value: pad(time.minutes) },
    { label: "Seconds", value: pad(time.seconds) },
  ];

  return (
    <Section>
      <p
        className="text-center mb-8 tracking-[0.25em] uppercase"
        style={{
          fontFamily: "var(--font-body)",
          fontSize: "0.6rem",
          color: "var(--color-gold)",
        }}
      >
        ✦ Countdown ✦
      </p>

      <div className="grid grid-cols-4 gap-3">
        {units.map(({ label, value }) => (
          <div key={label} className="flex flex-col items-center">
            <div
              className="w-full aspect-square flex items-center justify-center rounded-sm mb-2"
              style={{
                background:
                  "linear-gradient(135deg, rgba(201,169,110,0.12), rgba(201,169,110,0.04))",
                border: "1px solid rgba(201,169,110,0.25)",
              }}
            >
              <span
                style={{
                  fontFamily: "var(--font-display)",
                  fontSize: "1.8rem",
                  fontWeight: 300,
                  color: "var(--color-brown)",
                  lineHeight: 1,
                }}
              >
                {value}
              </span>
            </div>
            <span
              style={{
                fontFamily: "var(--font-body)",
                fontSize: "0.55rem",
                letterSpacing: "0.15em",
                textTransform: "uppercase",
                color: "var(--color-brown-light)",
              }}
            >
              {label}
            </span>
          </div>
        ))}
      </div>
    </Section>
  );
}

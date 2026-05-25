import { useEffect, useRef } from "react";
import { cn } from "@/lib/utils";

export default function Section({ children, className, id }) {
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
      { threshold: 0, rootMargin: "-40px 0px" }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      id={id}
      ref={ref}
      className={cn("reveal px-6 py-14 max-w-md mx-auto w-full", className)}
    >
      {children}
    </section>
  );
}

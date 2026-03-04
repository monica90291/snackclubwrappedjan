import { useEffect, useRef } from "react";

export function useScrollAnimation() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
          }
        });
      },
      { threshold: 0.15, rootMargin: "0px 0px -40px 0px" }
    );

    const elements = el.querySelectorAll(".scroll-fade-up");
    elements.forEach((e) => observer.observe(e));
    // Also observe the container itself if it has the class
    if (el.classList.contains("scroll-fade-up")) {
      observer.observe(el);
    }

    return () => observer.disconnect();
  }, []);

  return ref;
}

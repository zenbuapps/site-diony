"use client";
import { useEffect } from "react";
import { usePathname } from "next/navigation";

export default function AnimationDriver() {
  const pathname = usePathname();

  useEffect(() => {
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          const el = entry.target as HTMLElement;
          const delay = parseInt(el.dataset.delay ?? "0", 10);
          setTimeout(() => el.classList.add("in"), delay);
          io.unobserve(el);
        });
      },
      { threshold: 0.06, rootMargin: "0px 0px -40px 0px" }
    );

    const observeAll = () => {
      const els = document.querySelectorAll<HTMLElement>("[data-anim]:not(.in)");
      els.forEach((el) => io.observe(el));
    };

    // Initial pass — defer one frame so route content has mounted.
    const raf = requestAnimationFrame(() => {
      observeAll();
      // Anything already in the first viewport should reveal immediately.
      const els = document.querySelectorAll<HTMLElement>("[data-anim]:not(.in)");
      els.forEach((el) => {
        const rect = el.getBoundingClientRect();
        if (rect.top < window.innerHeight && rect.bottom > 0) {
          const delay = parseInt(el.dataset.delay ?? "0", 10);
          setTimeout(() => el.classList.add("in"), delay);
          io.unobserve(el);
        }
      });
    });

    // Catch elements that mount later (e.g. lazy sections).
    const mo = new MutationObserver(() => observeAll());
    mo.observe(document.body, { childList: true, subtree: true });

    return () => {
      cancelAnimationFrame(raf);
      mo.disconnect();
      io.disconnect();
    };
  }, [pathname]);

  return null;
}

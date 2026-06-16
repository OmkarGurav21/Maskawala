import { useEffect, useRef } from "react";

/**
 * Desktop-only: faint chai steam plumes trail the cursor.
 * Disabled on touch / small screens for performance.
 */
export function SteamCursor() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (typeof window === "undefined") return;
    const isTouch = window.matchMedia("(hover: none)").matches || window.innerWidth < 1024;
    if (isTouch) return;

    const container = containerRef.current;
    if (!container) return;

    let lastSpawn = 0;
    const onMove = (e: MouseEvent) => {
      const now = performance.now();
      if (now - lastSpawn < 55) return;
      lastSpawn = now;

      const dot = document.createElement("span");
      dot.className = "cursor-steam-dot";
      const jitterX = (Math.random() - 0.5) * 14;
      dot.style.left = `${e.clientX + jitterX}px`;
      dot.style.top = `${e.clientY}px`;
      dot.style.opacity = "0.9";
      dot.style.transition = "transform 1500ms ease-out, opacity 1500ms ease-out, filter 1500ms";
      container.appendChild(dot);
      requestAnimationFrame(() => {
        dot.style.transform = `translate(calc(-50% + ${jitterX * 2}px), calc(-50% - 80px)) scale(2.2)`;
        dot.style.opacity = "0";
        dot.style.filter = "blur(14px)";
      });
      setTimeout(() => dot.remove(), 1600);
    };

    window.addEventListener("mousemove", onMove, { passive: true });
    return () => window.removeEventListener("mousemove", onMove);
  }, []);

  return <div ref={containerRef} aria-hidden className="pointer-events-none fixed inset-0 z-[9998]" />;
}

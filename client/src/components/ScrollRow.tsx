import { Children, useCallback, useEffect, useRef, useState, type ReactNode } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

interface ScrollRowProps {
  /** Cards. Each one is wrapped in a snap-aligned <li> sized by itemClassName. */
  children: ReactNode;
  /** Accessible name for the row, e.g. "Recent website builds". */
  label: string;
  /** Width (and any per-item offset) applied to every <li>. */
  itemClassName?: string;
  /**
   * Gap + padding on the track itself. Full-bleed rows pass the page gutter here.
   * Pass a matching `scroll-pl-*` with every `px-*`: without it, mandatory snapping
   * parks the first card against the scrollport edge and eats the left padding.
   */
  trackClassName?: string;
  /** Tailwind `from-*` color the edge fades blend into. Must match the section background. */
  fadeFrom?: string;
  className?: string;
}

/**
 * Horizontal card row, the pattern the Wise Women page uses for its build strip:
 * one swipeable line of cards instead of a grid that eats a screen and a half.
 *
 * Native scrollbar is hidden, so desktop gets arrow buttons and edge fades to
 * advertise that there is more to the right. Both are dropped entirely when the
 * cards already fit, so a short row never shows dead controls.
 */
export default function ScrollRow({
  children,
  label,
  itemClassName = "w-[280px] sm:w-[340px] lg:w-[380px]",
  trackClassName = "gap-3 px-4 sm:px-6 lg:px-8 scroll-pl-4 sm:scroll-pl-6 lg:scroll-pl-8",
  fadeFrom = "from-background",
  className = "",
}: ScrollRowProps) {
  const trackRef = useRef<HTMLUListElement>(null);
  const [atStart, setAtStart] = useState(true);
  const [atEnd, setAtEnd] = useState(true);

  const sync = useCallback(() => {
    const el = trackRef.current;
    if (!el) return;
    // 2px of slack: sub-pixel layout means scrollLeft rarely hits the exact max.
    setAtStart(el.scrollLeft <= 2);
    setAtEnd(el.scrollLeft >= el.scrollWidth - el.clientWidth - 2);
  }, []);

  useEffect(() => {
    const el = trackRef.current;
    if (!el) return;
    sync();
    const observer = new ResizeObserver(sync);
    observer.observe(el);
    return () => observer.disconnect();
  }, [sync]);

  const page = (direction: 1 | -1) => {
    const el = trackRef.current;
    if (!el) return;
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    el.scrollBy({
      left: direction * el.clientWidth * 0.85,
      behavior: reduced ? "auto" : "smooth",
    });
  };

  // Both ends reachable means the row fits: no arrows, no fades, nothing to scroll.
  const scrollable = !(atStart && atEnd);

  return (
    <div className={`relative ${className}`}>
      <ul
        ref={trackRef}
        onScroll={sync}
        role="list"
        aria-label={label}
        tabIndex={0}
        className={`flex overflow-x-auto overflow-y-hidden snap-x snap-mandatory scrollbar-none [-webkit-overflow-scrolling:touch] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-4 focus-visible:ring-offset-background ${trackClassName}`}
      >
        {Children.toArray(children).map((child, i) => (
          <li key={i} className={`flex-none snap-start ${itemClassName}`}>
            {child}
          </li>
        ))}
      </ul>

      {scrollable && (
        <>
          <div
            className={`pointer-events-none absolute inset-y-0 left-0 w-10 sm:w-16 bg-gradient-to-r ${fadeFrom} to-transparent transition-opacity duration-300 ${
              atStart ? "opacity-0" : "opacity-100"
            }`}
            aria-hidden="true"
          />
          <div
            className={`pointer-events-none absolute inset-y-0 right-0 w-10 sm:w-16 bg-gradient-to-l ${fadeFrom} to-transparent transition-opacity duration-300 ${
              atEnd ? "opacity-0" : "opacity-100"
            }`}
            aria-hidden="true"
          />
          <button
            type="button"
            onClick={() => page(-1)}
            disabled={atStart}
            aria-label={`Scroll ${label} left`}
            className="hidden md:grid place-items-center absolute left-2 lg:left-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-background/90 backdrop-blur-sm border border-foreground/15 text-foreground shadow-sm transition-all hover:border-primary hover:text-primary disabled:opacity-0 disabled:pointer-events-none"
          >
            <ChevronLeft size={18} aria-hidden="true" />
          </button>
          <button
            type="button"
            onClick={() => page(1)}
            disabled={atEnd}
            aria-label={`Scroll ${label} right`}
            className="hidden md:grid place-items-center absolute right-2 lg:right-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-background/90 backdrop-blur-sm border border-foreground/15 text-foreground shadow-sm transition-all hover:border-primary hover:text-primary disabled:opacity-0 disabled:pointer-events-none"
          >
            <ChevronRight size={18} aria-hidden="true" />
          </button>
        </>
      )}
    </div>
  );
}

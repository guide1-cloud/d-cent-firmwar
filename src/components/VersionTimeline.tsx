import { useState, useRef, useCallback } from "react";
import type { FirmwareVersion } from "@/data/firmware-versions";

interface VersionTimelineProps {
  versions: FirmwareVersion[];
}

export function VersionTimeline({ versions }: VersionTimelineProps) {
  const sorted = versions;

  const trackRef = useRef<HTMLDivElement>(null);
  const viewportRef = useRef<HTMLDivElement>(null);

  const ITEM_WIDTH = 280;
  const VISIBLE = 3;
  const maxOffset = Math.max(0, (sorted.length - VISIBLE) * ITEM_WIDTH);

  const [offset, setOffset] = useState(0);

  const scrollPrev = useCallback(() => {
    setOffset((prev) => Math.max(0, prev - ITEM_WIDTH));
  }, []);

  const scrollNext = useCallback(() => {
    setOffset((prev) => Math.min(maxOffset, prev + ITEM_WIDTH));
  }, [maxOffset]);

  return (
    <section className="mb-12">
      <h2 className="text-xl font-semibold text-foreground mb-6">Version history</h2>

      <div className="relative flex items-start gap-2">
        <button
          onClick={scrollPrev}
          disabled={offset === 0}
          aria-label="Previous version"
          className="mt-4 shrink-0 w-10 h-10 flex items-center justify-center rounded-full bg-secondary text-foreground hover:bg-dcent-green hover:text-dcent-dark transition-colors disabled:opacity-30 disabled:cursor-not-allowed"
        >
          <span className="text-lg">❮</span>
        </button>

        <div ref={viewportRef} className="overflow-hidden flex-1 relative">
          {/* Timeline line */}
          <div className="absolute top-6 left-0 right-0 h-px bg-dcent-border z-0" />

          <div
            ref={trackRef}
            className="flex transition-transform duration-300 ease-out"
            style={{ transform: `translateX(-${offset}px)` }}
          >
            {sorted.map((v, i) => (
              <div
                key={v.version}
                className="shrink-0 pt-3 px-2"
                style={{ width: `${ITEM_WIDTH}px` }}
              >
                {/* Dot on timeline */}
                <div className="flex justify-center mb-3">
                  <div className={`w-3 h-3 rounded-full ${i === 0 ? "bg-dcent-green shadow-[0_0_8px_var(--dcent-green)]" : "bg-dcent-border"}`} />
                </div>

                {/* Version pill */}
                <div className="flex justify-center mb-2">
                  <span
                    className={`inline-block px-4 py-1.5 rounded-full text-sm font-semibold ${
                      v.isSecurityPatch
                        ? "bg-dcent-security/20 text-dcent-security border border-dcent-security/40"
                        : i === 0
                          ? "bg-dcent-green text-dcent-dark"
                          : "bg-secondary text-foreground"
                    }`}
                  >
                    {v.version}
                  </span>
                </div>

                {/* Date */}
                <div className="text-center text-sm text-muted-foreground mb-2">{v.date}</div>

                {/* Notes */}
                <ul className="text-sm text-dcent-text-muted space-y-1 pl-4">
                  {v.notes.map((note, ni) => (
                    <li key={ni} className="list-disc">{note}</li>
                  ))}
                </ul>

                {v.isSecurityPatch && (
                  <div className="mt-2 text-xs text-dcent-security font-medium text-center">
                    🔒 Critical Security Release
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        <button
          onClick={scrollNext}
          disabled={offset >= maxOffset}
          aria-label="Next version"
          className="mt-4 shrink-0 w-10 h-10 flex items-center justify-center rounded-full bg-secondary text-foreground hover:bg-dcent-green hover:text-dcent-dark transition-colors disabled:opacity-30 disabled:cursor-not-allowed"
        >
          <span className="text-lg">❯</span>
        </button>
      </div>
    </section>
  );
}

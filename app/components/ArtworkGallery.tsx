"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";

// All sixteen original artwork photographs from Jess's JESS ART Drive folder.
// Neutral filenames keep the presentation free of invented artwork titles.
const artworks = Array.from({ length: 16 }, (_, index) => ({
  src: `/art/gallery-${String(index + 1).padStart(2, "0")}.jpg`,
}));

export default function ArtworkGallery() {
  const [active, setActive] = useState<number | null>(null);
  const closeButton = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (active === null) return;
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    closeButton.current?.focus();

    function onKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") setActive(null);
      if (event.key === "ArrowRight") setActive((n) => n === null ? null : (n + 1) % artworks.length);
      if (event.key === "ArrowLeft") setActive((n) => n === null ? null : (n + artworks.length - 1) % artworks.length);
    }

    document.addEventListener("keydown", onKeyDown);
    return () => {
      document.body.style.overflow = previousOverflow;
      document.removeEventListener("keydown", onKeyDown);
    };
  }, [active]);

  return (
    <>
      <div className="original-art-grid" aria-label="Original artwork by Rev. Dr. Jess Simmonds">
        {artworks.map((artwork, index) => (
          <button
            key={artwork.src}
            type="button"
            className="original-art-thumb"
            onClick={() => setActive(index)}
            aria-label={`Enlarge artwork ${index + 1}`}
          >
            <span className="original-art-thumb-image">
              <Image
                src={artwork.src}
                alt={`Original artwork by Jess Simmonds, image ${index + 1}`}
                fill
                sizes="(max-width: 600px) 43vw, (max-width: 1000px) 28vw, 200px"
                style={{ objectFit: "contain" }}
              />
              <span className="original-art-zoom-hint" aria-hidden="true">↗</span>
            </span>
          </button>
        ))}
      </div>
      {active !== null && (
        <div className="original-art-backdrop" onClick={() => setActive(null)}>
          <div
            className="original-art-dialog"
            role="dialog"
            aria-modal="true"
            aria-label={`Expanded artwork ${active + 1}`}
            onClick={(event) => event.stopPropagation()}
          >
            <button
              ref={closeButton}
              className="original-art-close"
              type="button"
              onClick={() => setActive(null)}
              aria-label="Close enlarged artwork"
            >
              Close ×
            </button>
            <div className="original-art-full-image">
              <Image
                key={artworks[active].src}
                src={artworks[active].src}
                alt={`Original artwork by Jess Simmonds, image ${active + 1}`}
                fill
                sizes="95vw"
                quality={85}
                style={{ objectFit: "contain" }}
                priority
              />
            </div>
            <div className="original-art-controls">
              <button
                type="button"
                onClick={() => setActive((active + artworks.length - 1) % artworks.length)}
                aria-label="Previous artwork"
              >
                ← Previous
              </button>
              <p aria-live="polite">{active + 1} / {artworks.length}</p>
              <button
                type="button"
                onClick={() => setActive((active + 1) % artworks.length)}
                aria-label="Next artwork"
              >
                Next →
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

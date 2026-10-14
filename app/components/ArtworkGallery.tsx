"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";

const artworks = [
  { src: "/art/jess-heart-of-colour.jpg", title: "The Heart", alt: "Jess's vivid, multicoloured anatomical heart illustration" },
  { src: "/art/jess-bloom-and-become.jpg", title: "Bloom & Become", alt: "Jess's flower-filled mixed-media artwork with empowering words" },
  { src: "/art/jess-purpose-of-enlightenment.jpg", title: "Stay Open", alt: "Original illustrated reflection on the purpose of enlightenment" },
  { src: "/art/jess-colourful-rooster.jpg", title: "The Rooster", alt: "Expressive multicoloured rooster painted by Jess" },
  { src: "/art/jess-brain-and-beliefs.jpg", title: "The Inner Mind", alt: "Hand-drawn profile of a head exploring brain and beliefs" },
  { src: "/art/jess-cosmic-night.jpg", title: "Cosmic Night", alt: "Jess's swirling blue night sky inspired artwork" },
] as const;

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
      <div className="original-art-grid" aria-label="Original artwork by Rev. Dr. Jessica Simmonds">
        {artworks.map((artwork, index) => (
          <button
            key={artwork.src}
            type="button"
            className="original-art-thumb"
            onClick={() => setActive(index)}
            aria-label={`Enlarge artwork ${index + 1}: ${artwork.title}`}
          >
            <span className="original-art-thumb-image">
              <Image src={artwork.src} alt={artwork.alt} fill sizes="(max-width: 600px) 43vw, (max-width: 1000px) 28vw, 200px" style={{ objectFit: "contain" }} />
              <span className="original-art-zoom-hint" aria-hidden="true">↗</span>
            </span>
            <span className="original-art-thumb-title">{artwork.title}</span>
          </button>
        ))}
      </div>
      {active !== null && (
        <div className="original-art-backdrop" onClick={() => setActive(null)}>
          <div
            className="original-art-dialog"
            role="dialog"
            aria-modal="true"
            aria-label={`Expanded artwork: ${artworks[active].title}`}
            onClick={(event) => event.stopPropagation()}
          >
            <button ref={closeButton} className="original-art-close" type="button" onClick={() => setActive(null)} aria-label="Close enlarged artwork">Close ×</button>
            <div className="original-art-full-image">
              <Image
                key={artworks[active].src}
                src={artworks[active].src}
                alt={artworks[active].alt}
                fill
                sizes="95vw"
                quality={85}
                style={{ objectFit: "contain" }}
                priority
              />
            </div>
            <div className="original-art-controls">
              <button type="button" onClick={() => setActive((active + artworks.length - 1) % artworks.length)} aria-label="Previous artwork">← Previous</button>
              <p>{artworks[active].title}<span>{active + 1} / {artworks.length}</span></p>
              <button type="button" onClick={() => setActive((active + 1) % artworks.length)} aria-label="Next artwork">Next →</button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

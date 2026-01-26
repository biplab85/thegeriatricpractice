/* eslint-disable @next/next/no-img-element */
"use client";

import { useEffect, useRef } from "react";

const marqueeItems = [
  "Comprehensive Geriatric Assessment",
  "Cognitive Wellness",
  "Functional Screening",
  "Advance Care Planning",
  "Caregiver Support",
  "Falls & Mobility Clinic",
  "Chronic Disease Management",
  "Rehabilitation & Recovery"
];

export default function MarqueeSection() {
  const trackRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;

    const items = Array.from(track.querySelectorAll(".marquee-item"));
    // Clone items once to guarantee seamless infinite scroll
    items.forEach((item) => {
      const clone = item.cloneNode(true);
      track.appendChild(clone);
    });
  }, []);

  return (
    <section className="marquee-section" aria-label="Trusted services marquee">
      <div className="marquee-shell">
        <div className="marquee-track" ref={trackRef}>
          {marqueeItems.map((item) => (
            <span className="marquee-item" key={item}>
              <img src="/about/star.png" alt="" aria-hidden="true" className="marquee-star" />
              {item}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}

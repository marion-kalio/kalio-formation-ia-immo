"use client";

import { useEffect, useState, type ReactNode } from "react";

// v4 : barre sticky mobile. Apparaît après le hero (id="hero"), disparaît quand
// la carte Prix (id="prix") ou le CTA final (id="cta-final") est visible.
export function StickyBar({ children }: { children: ReactNode }) {
  const [heroPassed, setHeroPassed] = useState(false);
  const [zoneVisible, setZoneVisible] = useState(false);

  useEffect(() => {
    const hero = document.getElementById("hero");
    const zones = ["prix", "cta-final"]
      .map((id) => document.getElementById(id))
      .filter((el): el is HTMLElement => el !== null);

    const heroIo = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          setHeroPassed(!entry.isIntersecting && entry.boundingClientRect.bottom < 0);
        });
      },
      { threshold: 0 },
    );
    if (hero) heroIo.observe(hero);

    const visibleZones = new Set<Element>();
    const zoneIo = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            visibleZones.add(entry.target);
          } else {
            visibleZones.delete(entry.target);
          }
        });
        setZoneVisible(visibleZones.size > 0);
      },
      { threshold: 0.05 },
    );
    zones.forEach((z) => zoneIo.observe(z));

    return () => {
      heroIo.disconnect();
      zoneIo.disconnect();
    };
  }, []);

  const visible = heroPassed && !zoneVisible;

  return (
    <div className={`sticky-bar lg:hidden${visible ? " is-visible" : ""}`}>
      {children}
    </div>
  );
}

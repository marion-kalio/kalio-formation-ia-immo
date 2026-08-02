"use client";

import { useEffect, useState } from "react";

// Fin réelle du prix de lancement : vendredi 8 août 2026, 23 h 59 (heure du Québec).
const DEADLINE = new Date("2026-08-08T23:59:59-04:00").getTime();

function restant(): string | null {
  const ms = DEADLINE - Date.now();
  if (ms <= 0) return null;
  const j = Math.floor(ms / 86_400_000);
  const h = Math.floor((ms % 86_400_000) / 3_600_000);
  const m = Math.floor((ms % 3_600_000) / 60_000);
  return j > 0 ? `${j} j ${h} h ${m} min` : `${h} h ${m} min`;
}

export function Countdown({ prefix = "Le prix monte à 499 $ dans" }: { prefix?: string }) {
  // null au premier rendu serveur pour éviter tout mismatch d'hydratation.
  const [txt, setTxt] = useState<string | null>(null);

  useEffect(() => {
    const tick = () => setTxt(restant());
    tick();
    const id = setInterval(tick, 30_000);
    return () => clearInterval(id);
  }, []);

  if (!txt) return null;
  return (
    <span className="inline-flex items-center gap-2 text-[13.5px] font-semibold" style={{ color: "var(--kalio-blue)" }}>
      <span className="size-1.5 rounded-full" style={{ background: "var(--kalio-blue)", boxShadow: "0 0 6px rgba(0,119,255,0.5)" }} />
      {prefix} {txt}
    </span>
  );
}

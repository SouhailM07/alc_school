"use client";

import dynamic from "next/dynamic";
import Image from "next/image";
import { useEffect, useState } from "react";
import { cn } from "cn";

const Scene = dynamic(() => import("./scene/alc-scene").then((m) => m.AlcScene), {
  ssr: false,
  loading: () => null,
});

function shouldMountWebGL() {
  if (typeof window === "undefined") return false;
  if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return false;
  const nav = navigator as Navigator & { connection?: { saveData?: boolean } };
  if (nav.connection?.saveData) return false;
  if ((navigator.hardwareConcurrency ?? 8) < 4) return false;
  try {
    const canvas = document.createElement("canvas");
    return !!(canvas.getContext("webgl2") ?? canvas.getContext("webgl"));
  } catch {
    return false;
  }
}

export function HeroVisual() {
  const [mount3D, setMount3D] = useState(false);
  const [ready, setReady] = useState(false);
  const compact = typeof window !== "undefined" && window.innerWidth < 768;

  useEffect(() => {
    if (!shouldMountWebGL()) return;
    const schedule = (cb: () => void) => {
      const ric = (window as Window & { requestIdleCallback?: (cb: () => void) => void }).requestIdleCallback;
      if (ric) ric(cb);
      else setTimeout(cb, 600);
    };
    schedule(() => setMount3D(true));
  }, []);

  return (
    <div aria-hidden className="relative h-72 w-full overflow-hidden rounded-xl border border-border bg-brand-slate-light sm:h-96 lg:h-[520px]">
      <Image
        src="/images/why-classroom.webp"
        alt=""
        fill
        priority
        sizes="(max-width: 1024px) 100vw, 45vw"
        className={cn("object-cover transition-opacity duration-700", ready ? "opacity-0" : "opacity-100")}
      />
      {/* Decorative vocabulary chips over the poster */}
      <div className={cn("absolute inset-x-0 bottom-3 flex justify-center gap-2 transition-opacity duration-700", ready && "opacity-0")}>
        {["HELLO", "BONJOUR", "مرحبا"].map((w) => (
          <span key={w} className="rounded-md bg-white/95 px-2.5 py-1 font-heading text-xs font-bold text-brand-navy shadow-sm">
            {w}
          </span>
        ))}
      </div>
      {mount3D && (
        <div className={cn("absolute inset-0 transition-opacity duration-700", ready ? "opacity-100" : "opacity-0")}>
          <Scene compact={compact} onReady={() => setReady(true)} />
        </div>
      )}
    </div>
  );
}

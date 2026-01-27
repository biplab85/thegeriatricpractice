import type { CSSProperties } from "react";

import { Button } from "@/components/ui/button";
import HeroVisual from "@/components/hero-visual";

export default function HeroSection() {
  return (
    <section className="relative z-10 mx-auto mt-12 mb-20 grid max-w-6xl gap-10 px-4 lg:grid-cols-[1.05fr_0.95fr] lg:items-center lg:px-0">
      <div className="animate-rise">
        <span className="inline-flex items-center gap-2 rounded-full border border-brand-gray bg-white/90 px-4 py-2 text-sm text-brand-shadow shadow-halo">
          <span className="h-2 w-2 rounded-full bg-brand-red shadow-[0_0_0_6px_rgba(198,8,19,0.15)]" />
          A personal relationship with medical excellence.
        </span>
        <h1 className="mt-6 font-display text-[3rem] leading-[1.05] text-brand-shadow sm:text-[4rem] lg:text-[5rem]">
          <span className="word-reveal" style={{ "--delay": "0s" } as CSSProperties}>
            Your
          </span>
          <span className="word-reveal" style={{ "--delay": "0.08s" } as CSSProperties}>
            Health
          </span>
          <span className="word-reveal" style={{ "--delay": "0.16s" } as CSSProperties}>
            Comes
          </span>
          <span className="word-reveal" style={{ "--delay": "0.24s" } as CSSProperties}>
            First,
          </span>
          <span className="word-reveal" style={{ "--delay": "0.32s" } as CSSProperties}>
            Every
          </span>
          <span className="word-reveal" style={{ "--delay": "0.4s" } as CSSProperties}>
            Time
          </span>
          <span className="word-reveal" style={{ "--delay": "0.48s" } as CSSProperties}>
            With
          </span>
          <span className="word-reveal" style={{ "--delay": "0.56s" } as CSSProperties}>
            Us.
          </span>
        </h1>
        <p className="mt-4 max-w-xl text-base leading-7 text-brand-shadow/80 sm:text-lg">
          The Geriatric Practice delivers specialized primary care for aging adults, built around
          dignity, independence, and thoughtful prevention.
        </p>
        <div className="mt-6 flex flex-wrap items-center gap-4">
          <Button asChild>
            <a href="#">Schedule an Appointment</a>
          </Button>
          <Button variant="outline" asChild>
            <a href="#">View our plan</a>
          </Button>
        </div>
      </div>

      <div className="hidden lg:block">
        <HeroVisual />
      </div>
    </section>
  );
}

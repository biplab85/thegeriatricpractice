import Image from "next/image";
import { FiPhone, FiPlus } from "react-icons/fi";

import { Button } from "@/components/ui/button";
import HeroVisual from "@/components/hero-visual";

export default function Home() {
  return (
    <main className="relative overflow-hidden px-6 pb-24 pt-8">
      <div className="pointer-events-none absolute right-[-160px] top-[-180px] h-[520px] w-[520px] rounded-full bg-[radial-gradient(circle_at_35%_35%,rgba(255,255,255,0.8),rgba(198,8,19,0.12))] blur-[1px]" />
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(rgba(49,36,36,0.06)_1px,transparent_1px)] [background-size:24px_24px] opacity-40" />
      <Image
        src="/elements12.webp"
        alt=""
        width={520}
        height={520}
        className="pointer-events-none absolute left-[16%] top-40 -z-10 h-[520px] w-[520px] opacity-35 animate-rise-rotate"
        aria-hidden
      />

      <header className="relative z-10 mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-4 rounded-full border border-brand-gray bg-white/90 px-6 py-3 shadow-halo backdrop-blur animate-rise">
        <div className="flex items-center gap-3 font-semibold text-brand-shadow">
          <span className="grid h-10 w-10 place-items-center rounded-2xl bg-brand-red text-white shadow-glow">
            <FiPlus className="text-lg" />
          </span>
          <span className="text-sm tracking-wide">The Geriatric Practice</span>
        </div>
        <nav className="flex flex-wrap items-center gap-5 text-sm text-brand-shadow">
          <a className="nav-link nav-link-active" href="#">
            Home
          </a>
          <a className="nav-link" href="#">
            About Us
          </a>
          <a className="nav-link" href="#">
            Consultation Services
          </a>
          <a className="nav-link" href="#">
            Caregiver Training
          </a>
          <a className="nav-link" href="#">
            Contact Us
          </a>
        </nav>
        <div className="flex flex-wrap items-center gap-3 text-sm text-brand-shadow">
          <a className="flex items-center gap-2 font-medium" href="#">
            <span className="grid h-8 w-8 place-items-center rounded-full bg-brand-rose text-brand-red">
              <FiPhone className="text-sm" />
            </span>
            (65) 6262 2864
          </a>
          <Button asChild>
            <a href="#">Schedule an Appointment</a>
          </Button>
        </div>
      </header>

      <section className="relative z-10 mx-auto mt-12 grid max-w-6xl gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
        <div className="animate-rise">
          <span className="inline-flex items-center gap-2 rounded-full border border-brand-gray bg-white/90 px-4 py-2 text-sm text-brand-shadow shadow-halo">
            <span className="h-2 w-2 rounded-full bg-brand-red shadow-[0_0_0_6px_rgba(198,8,19,0.15)]" />
             A personal relationship with medical excellence.
          </span>
          <h1 className="mt-6 font-display text-[3rem] leading-[1.05] text-brand-shadow sm:text-[4rem] lg:text-[5rem]">
            Your Health Comes First, Every Time With Us.
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

        <HeroVisual />
      </section>
    </main>
  );
}

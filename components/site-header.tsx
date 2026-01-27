"use client";

import { useState } from "react";
import { FiMenu, FiPhone, FiPlus, FiX } from "react-icons/fi";

import { Button } from "@/components/ui/button";

export default function SiteHeader() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="site-header sticky top-0 z-30 mx-auto mt-3 max-w-6xl animate-rise px-4 md:relative md:mt-[30px] md:px-0">
      <div className="flex flex-col gap-4 rounded-2xl border border-brand-gray bg-white/95 px-4 py-3 shadow-halo backdrop-blur md:flex-row md:items-center md:justify-between md:gap-4 md:rounded-full md:px-6">
        <div className="flex items-center justify-between gap-3 font-semibold text-brand-shadow">
          <div className="flex items-center gap-3">
            <span className="grid h-10 w-10 place-items-center rounded-2xl bg-brand-red text-white shadow-glow">
              <FiPlus className="text-lg" />
            </span>
            <span className="text-sm tracking-wide">The Geriatric Practice</span>
          </div>
          <button
            type="button"
            className="inline-flex h-10 w-10 items-center justify-center rounded-xl border border-brand-gray text-brand-shadow md:hidden"
            aria-label={isOpen ? "Close menu" : "Open menu"}
            aria-expanded={isOpen}
            onClick={() => setIsOpen((prev) => !prev)}
          >
            {isOpen ? <FiX className="text-lg" /> : <FiMenu className="text-lg" />}
          </button>
        </div>

        <nav
          className={`w-full flex-col gap-4 text-sm text-brand-shadow md:flex md:w-auto md:flex-row md:flex-wrap md:items-center md:gap-5 ${
            isOpen ? "flex" : "hidden"
          }`}
        >
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

        <div
          className={`w-full flex-col gap-3 text-sm text-brand-shadow md:flex md:w-auto md:flex-row md:flex-wrap md:items-center md:gap-3 ${
            isOpen ? "flex" : "hidden"
          }`}
        >
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
      </div>
    </header>
  );
}

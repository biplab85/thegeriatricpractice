import { FiPhone, FiPlus } from "react-icons/fi";

import { Button } from "@/components/ui/button";

export default function SiteHeader() {
  return (
    <header className="relative z-10 mx-auto mt-[30px] flex max-w-6xl flex-wrap items-center justify-between gap-4 rounded-full border border-brand-gray bg-white/90 px-6 py-3 shadow-halo backdrop-blur animate-rise">
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
  );
}

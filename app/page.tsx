import Image from "next/image";

import AboutSection from "@/components/about-section";
import HeroSection from "@/components/hero-section";
import HowItWorksSection from "@/components/how-it-works-section";
import LatestBlogSection from "@/components/latest-blog-section";
import PartnersTeamSection from "@/components/partners-team-section";
import SiteFooter from "@/components/site-footer";
import SiteHeader from "@/components/site-header";
import TestimonialSection from "@/components/testimonial-section";

export default function Home() {
  return (
    <main className="relative overflow-hidden">
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

      <SiteHeader />

      <HeroSection />

      <AboutSection />

      <PartnersTeamSection />

      <HowItWorksSection />

      <TestimonialSection />

      <LatestBlogSection />

      <SiteFooter />
    </main>
  );
}

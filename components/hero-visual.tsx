"use client";

import Image from "next/image";
import { useEffect, useRef } from "react";
import { FiActivity, FiHeart, FiPlus } from "react-icons/fi";
import { FaStethoscope } from "react-icons/fa6";

const MAX_OFFSET = 18;
const SMOOTHING = 0.12;

export default function HeroVisual() {
  const containerRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);
  const target = useRef({ x: 0, y: 0 });
  const current = useRef({ x: 0, y: 0 });
  const rafRef = useRef<number | null>(null);

  useEffect(() => {
    const container = containerRef.current;
    const image = imageRef.current;
    if (!container || !image) return;

    let isHovering = false;

    const animate = () => {
      current.current.x += (target.current.x - current.current.x) * SMOOTHING;
      current.current.y += (target.current.y - current.current.y) * SMOOTHING;

      image.style.transform = `translate3d(${current.current.x}px, ${current.current.y}px, 0)`;

      if (!isHovering && Math.abs(current.current.x) < 0.1 && Math.abs(current.current.y) < 0.1) {
        image.style.transform = "translate3d(0, 0, 0)";
        rafRef.current = null;
        return;
      }

      rafRef.current = requestAnimationFrame(animate);
    };

    const start = () => {
      if (rafRef.current === null) {
        rafRef.current = requestAnimationFrame(animate);
      }
    };

    const handleMove = (event: MouseEvent) => {
      const rect = container.getBoundingClientRect();
      const x = (event.clientX - rect.left) / rect.width - 0.5;
      const y = (event.clientY - rect.top) / rect.height - 0.5;

      target.current.x = Math.max(-MAX_OFFSET, Math.min(MAX_OFFSET, x * MAX_OFFSET * 2));
      target.current.y = Math.max(-MAX_OFFSET, Math.min(MAX_OFFSET, y * MAX_OFFSET * 2));

      isHovering = true;
      start();
    };

    const handleLeave = () => {
      isHovering = false;
      target.current.x = 0;
      target.current.y = 0;
      start();
    };

    container.addEventListener("mousemove", handleMove);
    container.addEventListener("mouseleave", handleLeave);

    return () => {
      container.removeEventListener("mousemove", handleMove);
      container.removeEventListener("mouseleave", handleLeave);
      if (rafRef.current !== null) {
        cancelAnimationFrame(rafRef.current);
      }
    };
  }, []);

  return (
    <div ref={containerRef} className="relative flex min-h-[520px] items-center justify-center">
      <div className="absolute h-[420px] w-[420px] rounded-full bg-[radial-gradient(circle_at_30%_30%,rgba(255,255,255,0.9),rgba(255,212,214,0.35))] shadow-halo" />
      <div className="absolute h-[520px] w-[520px] rounded-full border border-dashed border-brand-shadow/20" />
      <div className="absolute left-24 top-10 grid h-16 w-16 place-items-center rounded-full border border-brand-gray bg-white/95 text-brand-red shadow-halo animate-float">
        <FiHeart />
      </div>
      <div className="absolute right-[4.5rem] top-16 grid h-16 w-16 place-items-center rounded-full border border-brand-gray bg-white/95 text-brand-red shadow-halo animate-float [animation-delay:0.6s]">
        <FiPlus />
      </div>
      <div className="absolute bottom-16 right-16 grid h-16 w-16 place-items-center rounded-full border border-brand-gray bg-white/95 text-brand-red shadow-halo animate-float [animation-delay:1.2s]">
        <FiActivity />
      </div>
      <div className="absolute bottom-8 left-24 grid h-16 w-16 place-items-center rounded-full border border-brand-gray bg-white/95 text-brand-red shadow-halo animate-float [animation-delay:1.8s]">
        <FaStethoscope />
      </div>
      <div className="relative z-10 h-[413px] w-[413px] rounded-full bg-white p-3 shadow-halo">
        <div className="relative h-full w-full overflow-hidden rounded-full">
          <div ref={imageRef} className="relative h-full w-full will-change-transform">
            <Image
              src="/Geriatric-img.jpg"
              alt="Clinician in white coat smiling with arms folded"
              fill
              sizes="(max-width: 1024px) 300px, 413px"
              className="object-cover"
              priority
            />
          </div>
        </div>
      </div>
    </div>
  );
}

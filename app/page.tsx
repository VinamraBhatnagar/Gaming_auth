"use client"

import { LiquidEffectAnimation } from "@/components/ui/liquid-effect-animation"

export default function Home() {
  return (
    <div className="relative min-h-screen">
      {/* Liquid background effect */}
      <LiquidEffectAnimation />

      {/* Page content on top */}
      <div className="relative z-10 flex min-h-screen flex-col items-center justify-center px-6 text-center">
        <h1 className="text-5xl font-bold tracking-tight text-white drop-shadow-lg sm:text-7xl">
          GameStyle Hub
        </h1>
        <p className="mt-4 max-w-xl text-lg text-white/80 drop-shadow-md">
          Your ultimate destination for gaming IDs &amp; fashion
        </p>
        <div className="mt-8 flex flex-col gap-4 sm:flex-row">
          <a
            href="/login.html"
            className="rounded-full bg-white/20 px-8 py-3 text-base font-semibold text-white backdrop-blur-md transition hover:bg-white/30"
          >
            Get Started
          </a>
          <a
            href="/home.html"
            className="rounded-full border border-white/30 px-8 py-3 text-base font-semibold text-white backdrop-blur-md transition hover:bg-white/10"
          >
            Explore
          </a>
        </div>
      </div>
    </div>
  )
}

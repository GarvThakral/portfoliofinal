"use client"

import { useEffect, useRef, useState } from "react"
import { Code, Cpu, Database, Globe, Layers, Palette } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function ParallaxHeader() {
  const [scrollY, setScrollY] = useState(0)
  const headerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY)
    }

    window.addEventListener("scroll", handleScroll, { passive: true })
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <div ref={headerRef} className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Background with parallax effect */}
      <div
        className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(120,50,255,0.15),transparent_70%)]"
        style={{
          transform: `translateY(${scrollY * 0.5}px)`,
        }}
      ></div>

      {/* Floating icons with different parallax rates */}
      <div className="absolute inset-0 pointer-events-none">
        <Code
          className="absolute text-purple-500/30 h-16 w-16 top-1/4 left-1/4"
          style={{ transform: `translate(${scrollY * -0.2}px, ${scrollY * 0.1}px)` }}
        />
        <Cpu
          className="absolute text-blue-500/30 h-20 w-20 top-1/3 right-1/4"
          style={{ transform: `translate(${scrollY * 0.3}px, ${scrollY * -0.2}px)` }}
        />
        <Database
          className="absolute text-green-500/30 h-14 w-14 bottom-1/3 left-1/3"
          style={{ transform: `translate(${scrollY * -0.1}px, ${scrollY * 0.3}px)` }}
        />
        <Globe
          className="absolute text-cyan-500/30 h-24 w-24 bottom-1/4 right-1/3"
          style={{ transform: `translate(${scrollY * 0.2}px, ${scrollY * 0.2}px)` }}
        />
        <Layers
          className="absolute text-pink-500/30 h-16 w-16 top-1/2 right-1/5"
          style={{ transform: `translate(${scrollY * -0.3}px, ${scrollY * -0.1}px)` }}
        />
        <Palette
          className="absolute text-orange-500/30 h-18 w-18 bottom-1/2 left-1/5"
          style={{ transform: `translate(${scrollY * 0.1}px, ${scrollY * -0.3}px)` }}
        />
      </div>

      {/* Content */}
      <div
        className="relative z-10 text-center px-4 max-w-4xl"
        style={{
          transform: `translateY(${scrollY * -0.2}px)`,
          opacity: Math.max(1 - scrollY * 0.002, 0),
        }}
      >
        <div className="mb-6 inline-block">
          <div className="relative">
            <div className="absolute -inset-1 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full blur opacity-75 animate-pulse"></div>
            <div className="relative bg-zinc-900 p-4 rounded-full border border-zinc-700">
              <Code className="h-10 w-10 text-white" />
            </div>
          </div>
        </div>

        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-400 via-pink-500 to-red-500">
            Creative Developer
          </span>
          <br />
          <span className="text-white">Crafting Digital Experiences</span>
        </h1>

        <p className="text-xl md:text-2xl text-zinc-300 mb-8 max-w-2xl mx-auto">
          Full-stack developer specializing in building exceptional digital experiences that combine stunning design
          with powerful functionality.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button
            size="lg"
            className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-lg"
            asChild
          >
            <a href="#projects">View My Work</a>
          </Button>

          <Button size="lg" variant="outline" className="border-zinc-600 text-white hover:bg-zinc-800 text-lg" asChild>
            <a href="#contact">Contact Me</a>
          </Button>
        </div>
      </div>

      {/* Scroll indicator */}
      <div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center"
        style={{
          opacity: Math.max(1 - scrollY * 0.01, 0),
        }}
      >
        <span className="text-zinc-400 mb-2">Scroll Down</span>
        <div className="w-6 h-10 border-2 border-zinc-400 rounded-full flex justify-center p-1">
          <div className="w-1 h-2 bg-zinc-400 rounded-full animate-bounce-slow"></div>
        </div>
      </div>
    </div>
  )
}

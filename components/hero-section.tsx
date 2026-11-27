"use client"

import { motion, useReducedMotion } from "framer-motion"
import { Github, Linkedin, Mail, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { profile } from "@/lib/portfolio-data"

export default function HeroSection() {
  const reduceMotion = useReducedMotion()

  return (
    <div id="home" className="flex min-h-[80svh] flex-col justify-center px-4 pb-16 pt-28 md:px-8 lg:px-16 max-w-7xl mx-auto relative">
      <motion.div
        initial={reduceMotion ? false : { opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="mb-4"
      >
        <p className="text-[#80FFEA] font-mono">Hi, my name is</p>
      </motion.div>

      <motion.h1
        initial={reduceMotion ? false : { opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.1 }}
        className="text-5xl md:text-7xl font-bold mb-4 text-[#F8F8F2]"
      >
        {profile.name}.
      </motion.h1>

      <motion.h2
        initial={reduceMotion ? false : { opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="text-4xl md:text-6xl font-bold mb-6 text-[#FF7EDB]"
      >
        {profile.title}
      </motion.h2>

      <motion.div
        initial={reduceMotion ? false : { opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.3 }}
        className="mb-8 max-w-2xl"
      >
        <p className="mb-5 text-sm font-mono leading-relaxed text-[#80FFEA]">{profile.subtitle}</p>
        <p className="text-[#C2BDCB] text-lg leading-relaxed">
          <span className="text-[#80FFEA] font-mono" aria-hidden="true">$ </span>
          {profile.summary}
        </p>
        <p className="mt-4 text-sm leading-relaxed text-[#A39DAC]">{profile.about}</p>
      </motion.div>

      <motion.div
        initial={reduceMotion ? false : { opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.5 }}
        className="flex flex-col sm:flex-row gap-4"
      >
        <Button
          className="bg-[#FF7EDB] hover:bg-[#FF7EDB]/90 text-[#13111C] border border-[#FF7EDB] rounded px-6 py-5 font-mono"
          asChild
        >
          <a href="#projects">
            <ChevronRight className="mr-2 h-4 w-4" />
            View My Work
          </a>
        </Button>

        <Button
          variant="outline"
          className="bg-transparent border border-[#2D2B3A] text-[#F8F8F2] hover:border-[#80FFEA] hover:text-[#80FFEA] rounded px-6 py-4 font-mono"
          asChild
        >
          <a href="#contact">Contact Me</a>
        </Button>
      </motion.div>

      <motion.div
        initial={reduceMotion ? false : { opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.7 }}
        className="mt-12 flex gap-6"
      >
        <a
          href={profile.github}
          target="_blank"
          rel="noopener noreferrer"
          className="text-[#A39DAC] hover:text-[#80FFEA] transition-colors"
        >
          <Github className="h-6 w-6" />
          <span className="sr-only">GitHub</span>
        </a>
        <a
          href={profile.linkedin}
          target="_blank"
          rel="noopener noreferrer"
          className="text-[#A39DAC] hover:text-[#80FFEA] transition-colors"
        >
          <Linkedin className="h-6 w-6" />
          <span className="sr-only">LinkedIn</span>
        </a>
        <a
          href={`mailto:${profile.email}`}
          className="text-[#A39DAC] hover:text-[#80FFEA] transition-colors"
        >
          <Mail className="h-6 w-6" />
          <span className="sr-only">Email</span>
        </a>
      </motion.div>
    </div>
  )
}

"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import { Github, Linkedin, Mail, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function HeroSection() {
  const [typedText, setTypedText] = useState("")
  const fullText = "I build web applications that look good, feel fast, and work flawlessly across devices."
  const typingSpeed = 50

  useEffect(() => {
    if (typedText.length < fullText.length) {
      const timeout = setTimeout(() => {
        setTypedText(fullText.slice(0, typedText.length + 1))
      }, typingSpeed)
      return () => clearTimeout(timeout)
    }
  }, [typedText])

  return (
    <div className="min-h-screen flex flex-col justify-center px-4 md:px-8 lg:px-16 max-w-7xl mx-auto relative">
      <div className="absolute inset-0 bg-grid-pattern opacity-10 pointer-events-none"></div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="mb-4"
      >
        <p className="text-[#80FFEA] font-mono">Hi, my name is</p>
      </motion.div>

      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.1 }}
        className="text-5xl md:text-7xl font-bold mb-4 text-[#F8F8F2]"
      >
        Garv Thakral.
      </motion.h1>

      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="text-4xl md:text-6xl font-bold mb-6 text-[#FF7EDB]"
      >
        Full Stack Developer
      </motion.h2>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.3 }}
        className="mb-8 max-w-xl"
      >
        <p className="text-[#A39DAC] text-lg font-mono">
          <span className="text-[#80FFEA]">$ </span>
          {typedText}
          <span className="inline-block w-2 h-5 bg-[#80FFEA] ml-1 animate-blink"></span>
        </p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.5 }}
        className="flex flex-col sm:flex-row gap-4"
      >
        <Button
          className="bg-transparent hover:bg-[#FF7EDB]/10 text-[#FF7EDB] border border-[#FF7EDB] rounded px-6 py-4 font-mono"
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
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.7 }}
        className="mt-12 flex gap-6"
      >
        <a
          href="https://github.com/GarvThakral"
          target="_blank"
          rel="noopener noreferrer"
          className="text-[#A39DAC] hover:text-[#80FFEA] transition-colors"
        >
          <Github className="h-6 w-6" />
          <span className="sr-only">GitHub</span>
        </a>
        <a
          href="https://linkedin.com/in/garv-thakral08"
          target="_blank"
          rel="noopener noreferrer"
          className="text-[#A39DAC] hover:text-[#80FFEA] transition-colors"
        >
          <Linkedin className="h-6 w-6" />
          <span className="sr-only">LinkedIn</span>
        </a>
        <a href="mailto:garvthakralfx@gmail.com" className="text-[#A39DAC] hover:text-[#80FFEA] transition-colors">
          <Mail className="h-6 w-6" />
          <span className="sr-only">Email</span>
        </a>
      </motion.div>
    </div>
  )
}

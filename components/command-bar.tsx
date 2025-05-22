"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Command, X } from "lucide-react"

export default function CommandBar() {
  const [isOpen, setIsOpen] = useState(false)

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === "k") {
        e.preventDefault()
        setIsOpen((prev) => !prev)
      }

      if (e.key === "Escape") {
        setIsOpen(false)
      }
    }

    window.addEventListener("keydown", handleKeyDown)
    return () => window.removeEventListener("keydown", handleKeyDown)
  }, [])

  const navItems = [
    { name: "Home", href: "#" },
    { name: "Projects", href: "#projects" },
    { name: "Skills", href: "#skills" },
    { name: "Education", href: "#education" },
    { name: "Contact", href: "#contact" },
  ]

  return (
    <>
      <div className="fixed top-4 right-4 z-50">
        <button
          onClick={() => setIsOpen(true)}
          className="bg-[#201C2B] border border-[#2D2B3A] rounded-md p-2 text-[#A39DAC] hover:text-[#FF7EDB] transition-colors"
        >
          <Command className="h-5 w-5" />
        </button>
      </div>

      <AnimatePresence>
        {isOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50"
              onClick={() => setIsOpen(false)}
            ></motion.div>

            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.2 }}
              className="fixed top-20 left-1/2 transform -translate-x-1/2 w-full max-w-md bg-[#201C2B] border border-[#2D2B3A] rounded-md shadow-xl z-50"
            >
              <div className="flex items-center justify-between p-3 border-b border-[#2D2B3A]">
                <div className="flex items-center gap-2">
                  <Command className="h-4 w-4 text-[#FF7EDB]" />
                  <span className="text-sm font-mono text-[#F8F8F2]">Command Menu</span>
                </div>
                <button onClick={() => setIsOpen(false)} className="text-[#A39DAC] hover:text-[#F8F8F2]">
                  <X className="h-4 w-4" />
                </button>
              </div>

              <div className="p-2">
                {navItems.map((item) => (
                  <a
                    key={item.name}
                    href={item.href}
                    onClick={() => setIsOpen(false)}
                    className="flex items-center p-3 rounded-md hover:bg-[#2D2B3A] text-[#A39DAC] hover:text-[#F8F8F2] transition-colors"
                  >
                    <span className="text-[#80FFEA] font-mono text-xs mr-3">goto</span>
                    <span>{item.name}</span>
                  </a>
                ))}
              </div>

              <div className="p-2 border-t border-[#2D2B3A] text-xs text-[#6C6980] font-mono">
                <div className="p-2">
                  Press <kbd className="px-1 py-0.5 bg-[#2D2B3A] rounded text-[#A39DAC]">Esc</kbd> to close
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  )
}

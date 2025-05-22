"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Home, Briefcase, Code, GraduationCap, Mail, Menu, X } from "lucide-react"

const navItems = [
  { name: "Home", icon: <Home className="h-5 w-5" />, href: "#" },
  { name: "Projects", icon: <Briefcase className="h-5 w-5" />, href: "#projects" },
  { name: "Skills", icon: <Code className="h-5 w-5" />, href: "#skills" },
  { name: "Education", icon: <GraduationCap className="h-5 w-5" />, href: "#education" },
  { name: "Contact", icon: <Mail className="h-5 w-5" />, href: "#contact" },
]

export default function FloatingNav() {
  const [isVisible, setIsVisible] = useState(false)
  const [activeSection, setActiveSection] = useState("#")
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      // Show nav after scrolling down a bit
      if (window.scrollY > 100) {
        setIsVisible(true)
      } else {
        setIsVisible(false)
      }

      // Determine active section
      const sections = ["#projects", "#skills", "#education", "#contact"]

      for (const section of sections) {
        const element = document.querySelector(section)
        if (element) {
          const rect = element.getBoundingClientRect()
          if (rect.top <= 200 && rect.bottom >= 200) {
            setActiveSection(section)
            break
          }
        }
      }

      // If we're at the top, set home as active
      if (window.scrollY < 100) {
        setActiveSection("#")
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <>
      {/* Desktop Navigation */}
      <AnimatePresence>
        {isVisible && (
          <motion.div
            initial={{ y: -100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -100, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed top-6 left-1/2 transform -translate-x-1/2 z-50 hidden md:block"
          >
            <nav className="bg-slate-800/80 backdrop-blur-md border border-slate-700 rounded-full px-2 py-2 shadow-lg">
              <ul className="flex items-center space-x-1">
                {navItems.map((item) => (
                  <li key={item.name}>
                    <a
                      href={item.href}
                      className={`relative flex items-center gap-1 px-4 py-2 rounded-full transition-colors ${
                        activeSection === item.href
                          ? "text-white"
                          : "text-slate-400 hover:text-white hover:bg-slate-700/50"
                      }`}
                    >
                      {item.icon}
                      <span>{item.name}</span>
                      {activeSection === item.href && (
                        <motion.div
                          layoutId="activeSection"
                          className="absolute inset-0 bg-gradient-to-r from-amber-500/20 to-orange-500/20 rounded-full -z-10"
                          transition={{ type: "spring", duration: 0.6 }}
                        />
                      )}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Mobile Navigation Toggle */}
      <AnimatePresence>
        {isVisible && (
          <motion.button
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0, opacity: 0 }}
            whileTap={{ scale: 0.9 }}
            onClick={() => setIsMobileMenuOpen(true)}
            className="fixed bottom-6 right-6 z-50 p-3 bg-gradient-to-r from-amber-500 to-orange-500 rounded-full shadow-lg md:hidden"
          >
            <Menu className="h-6 w-6 text-white" />
          </motion.button>
        )}
      </AnimatePresence>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-slate-900/90 backdrop-blur-md z-50 flex items-center justify-center md:hidden"
          >
            <motion.button
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              whileTap={{ scale: 0.9 }}
              onClick={() => setIsMobileMenuOpen(false)}
              className="absolute top-6 right-6 p-2 bg-slate-800 rounded-full"
            >
              <X className="h-6 w-6 text-white" />
            </motion.button>

            <motion.nav initial={{ y: 20, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ delay: 0.1 }}>
              <ul className="flex flex-col items-center space-y-6">
                {navItems.map((item, index) => (
                  <motion.li
                    key={item.name}
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.1 + index * 0.1 }}
                  >
                    <a
                      href={item.href}
                      onClick={() => setIsMobileMenuOpen(false)}
                      className={`flex items-center gap-3 px-6 py-3 rounded-full text-xl transition-colors ${
                        activeSection === item.href
                          ? "text-white bg-gradient-to-r from-amber-500/20 to-orange-500/20"
                          : "text-slate-300 hover:text-white"
                      }`}
                    >
                      {item.icon}
                      <span>{item.name}</span>
                    </a>
                  </motion.li>
                ))}
              </ul>
            </motion.nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}

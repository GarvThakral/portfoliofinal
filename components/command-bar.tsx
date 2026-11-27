"use client"

import { useEffect, useState } from "react"
import { Command } from "lucide-react"
import { Dialog, DialogContent, DialogDescription, DialogTitle, DialogTrigger } from "@/components/ui/dialog"

const navItems = [
  { name: "Home", href: "#home" },
  { name: "Projects", href: "#projects" },
  { name: "Skills", href: "#skills" },
  { name: "Education", href: "#education" },
  { name: "Contact", href: "#contact" },
]

export default function CommandBar() {
  const [isOpen, setIsOpen] = useState(false)

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if ((event.metaKey || event.ctrlKey) && event.key.toLowerCase() === "k") {
        event.preventDefault()
        setIsOpen((open) => !open)
      }
    }
    window.addEventListener("keydown", handleKeyDown)
    return () => window.removeEventListener("keydown", handleKeyDown)
  }, [])

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <div className="fixed right-4 top-4 z-40 flex items-center gap-1 rounded-md border border-[#2D2B3A] bg-[#201C2B]/95 p-1 shadow-lg backdrop-blur-md">
        <nav aria-label="Main navigation" className="hidden sm:flex">
          {navItems.slice(1).map((item) => (
            <a key={item.name} href={item.href} className="rounded px-3 py-2 font-mono text-xs text-[#A39DAC] transition-colors hover:text-[#FF7EDB]">{item.name}</a>
          ))}
        </nav>
        <DialogTrigger asChild>
          <button type="button" aria-label="Open navigation menu" className="flex items-center gap-2 rounded p-2 font-mono text-xs text-[#A39DAC] hover:text-[#FF7EDB]">
            <Command className="h-4 w-4" aria-hidden="true" /><span className="sm:hidden">Menu</span>
          </button>
        </DialogTrigger>
      </div>
      <DialogContent className="max-w-[calc(100vw-2rem)] rounded-md border-[#2D2B3A] bg-[#201C2B] p-5 text-[#F8F8F2] sm:max-w-md">
        <DialogTitle className="font-mono text-base">Jump to a section</DialogTitle>
        <DialogDescription className="text-sm text-[#A39DAC]">Explore my work, technical skills, and background.</DialogDescription>
        <nav aria-label="Section navigation" className="space-y-1">
          {navItems.map((item) => (
            <a key={item.name} href={item.href} onClick={() => setIsOpen(false)} className="flex items-center rounded-md p-3 text-[#A39DAC] transition-colors hover:bg-[#2D2B3A] hover:text-[#F8F8F2]">
              <span className="mr-3 font-mono text-xs text-[#80FFEA]" aria-hidden="true">goto</span>{item.name}
            </a>
          ))}
        </nav>
        <p className="border-t border-[#2D2B3A] pt-3 font-mono text-xs text-[#A39DAC]">Ctrl / ⌘ K to toggle · Esc to close</p>
      </DialogContent>
    </Dialog>
  )
}

"use client"

import type React from "react"

import { useState, useEffect, useRef } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { TerminalIcon, Maximize2, Minimize2, X } from "lucide-react"

type CommandResult = {
  command: string
  output: React.ReactNode
}

export default function Terminal() {
  const [isOpen, setIsOpen] = useState(false)
  const [isMinimized, setIsMinimized] = useState(false)
  const [isFullscreen, setIsFullscreen] = useState(false)
  const [input, setInput] = useState("")
  const [commandHistory, setCommandHistory] = useState<CommandResult[]>([])
  const [historyIndex, setHistoryIndex] = useState(-1)
  const [inputHistory, setInputHistory] = useState<string[]>([])

  const terminalRef = useRef<HTMLDivElement>(null)
  const inputRef = useRef<HTMLInputElement>(null)

  useEffect(() => {
    if (isOpen && !isMinimized && inputRef.current) {
      inputRef.current.focus()
    }
  }, [isOpen, isMinimized])

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (terminalRef.current && !terminalRef.current.contains(event.target as Node)) {
        // Don't close, just unfocus
        if (inputRef.current) {
          inputRef.current.blur()
        }
      }
    }

    document.addEventListener("mousedown", handleClickOutside)
    return () => {
      document.removeEventListener("mousedown", handleClickOutside)
    }
  }, [])

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()

    if (!input.trim()) return

    const command = input.trim().toLowerCase()
    setInputHistory([...inputHistory, command])
    setHistoryIndex(-1)

    let output: React.ReactNode

    switch (command) {
      case "help":
        output = (
          <div className="text-[#A39DAC] mt-2">
            <p className="text-[#FF7EDB] mb-1">Available commands:</p>
            <ul className="grid grid-cols-2 gap-x-4 gap-y-1">
              <li>
                <span className="text-[#80FFEA]">whoami</span> - About me
              </li>
              <li>
                <span className="text-[#80FFEA]">projects</span> - View my projects
              </li>
              <li>
                <span className="text-[#80FFEA]">skills</span> - My technical skills
              </li>
              <li>
                <span className="text-[#80FFEA]">education</span> - My education
              </li>
              <li>
                <span className="text-[#80FFEA]">contact</span> - Contact information
              </li>
              <li>
                <span className="text-[#80FFEA]">social</span> - Social media links
              </li>
              <li>
                <span className="text-[#80FFEA]">clear</span> - Clear terminal
              </li>
              <li>
                <span className="text-[#80FFEA]">help</span> - Show this help
              </li>
            </ul>
          </div>
        )
        break

      case "whoami":
        output = (
          <div className="text-[#A39DAC] mt-2">
            <p className="text-[#FF7EDB] mb-1">Garv Thakral</p>
            <p>
              Full Stack Developer passionate about building web applications that look good, feel fast, and work
              flawlessly across devices.
            </p>
            <p className="mt-1">
              Based in Bengaluru, India. Currently pursuing Bachelor of Computer Applications at Christ University.
            </p>
          </div>
        )
        break

      case "projects":
        output = (
          <div className="text-[#A39DAC] mt-2">
            <p className="text-[#FF7EDB] mb-1">My Projects:</p>
            <ul className="space-y-2">
              <li>
                <div className="flex items-center gap-2">
                  <span className="text-[#80FFEA]">→</span>
                  <span className="text-[#F8F8F2]">Dex | C++ CLI Tool</span>
                </div>
                <p className="pl-6">
                  A command-line tool designed to reduce boilerplate code by 40% and accelerate project setup.
                </p>
              </li>
              <li>
                <div className="flex items-center gap-2">
                  <span className="text-[#80FFEA]">→</span>
                  <span className="text-[#F8F8F2]">Job Dashboard</span>
                </div>
                <p className="pl-6">
                  A dashboard to track job applications with AI-based analysis for resume suggestions.
                </p>
              </li>
              <li>
                <div className="flex items-center gap-2">
                  <span className="text-[#80FFEA]">→</span>
                  <span className="text-[#F8F8F2]">SkillTrade</span>
                </div>
                <p className="pl-6">A token-based skill exchange platform with real-time collaboration features.</p>
              </li>
            </ul>
            <p className="mt-2 text-[#80FFEA]">
              Type <span className="text-[#FF7EDB]">cd projects</span> to navigate to the projects section.
            </p>
          </div>
        )
        break

      case "skills":
        output = (
          <div className="text-[#A39DAC] mt-2">
            <p className="text-[#FF7EDB] mb-1">Technical Skills:</p>
            <div className="grid grid-cols-2 gap-x-4 gap-y-1">
              <div>
                <p className="text-[#80FFEA]">Frontend:</p>
                <p>React, Next.js, TypeScript, Tailwind CSS</p>
              </div>
              <div>
                <p className="text-[#80FFEA]">Backend:</p>
                <p>Node.js, Express, REST APIs, GraphQL</p>
              </div>
              <div className="mt-2">
                <p className="text-[#80FFEA]">Database:</p>
                <p>PostgreSQL, MongoDB, Firebase</p>
              </div>
              <div className="mt-2">
                <p className="text-[#80FFEA]">Other:</p>
                <p>Git, Docker, AWS, CI/CD</p>
              </div>
            </div>
            <p className="mt-2 text-[#80FFEA]">
              Type <span className="text-[#FF7EDB]">cd skills</span> to navigate to the skills section.
            </p>
          </div>
        )
        break

      case "education":
        output = (
          <div className="text-[#A39DAC] mt-2">
            <p className="text-[#FF7EDB] mb-1">Education:</p>
            <ul className="space-y-2">
              <li>
                <div className="flex items-center gap-2">
                  <span className="text-[#80FFEA]">→</span>
                  <span className="text-[#F8F8F2]">Bachelor of Computer Applications</span>
                </div>
                <p className="pl-6">Christ University, Bengaluru, India (Aug. 2022 – May 2025)</p>
              </li>
              <li>
                <div className="flex items-center gap-2">
                  <span className="text-[#80FFEA]">→</span>
                  <span className="text-[#F8F8F2]">Class XII</span>
                </div>
                <p className="pl-6">Lancers Convent, Delhi, India (May 2022)</p>
              </li>
            </ul>
            <p className="mt-2 text-[#80FFEA]">
              Type <span className="text-[#FF7EDB]">cd education</span> to navigate to the education section.
            </p>
          </div>
        )
        break

      case "contact":
        output = (
          <div className="text-[#A39DAC] mt-2">
            <p className="text-[#FF7EDB] mb-1">Contact Information:</p>
            <ul className="space-y-1">
              <li>
                <span className="text-[#80FFEA]">Email:</span> garvthakralfx@gmail.com
              </li>
              <li>
                <span className="text-[#80FFEA]">Phone:</span> +91 79826 46243
              </li>
            </ul>
            <p className="mt-2 text-[#80FFEA]">
              Type <span className="text-[#FF7EDB]">cd contact</span> to navigate to the contact section.
            </p>
          </div>
        )
        break

      case "social":
        output = (
          <div className="text-[#A39DAC] mt-2">
            <p className="text-[#FF7EDB] mb-1">Social Media:</p>
            <ul className="space-y-1">
              <li>
                <span className="text-[#80FFEA]">GitHub:</span>{" "}
                <a
                  href="https://github.com/GarvThakral"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#F8F8F2] hover:text-[#FF7EDB] underline"
                >
                  github.com/GarvThakral
                </a>
              </li>
              <li>
                <span className="text-[#80FFEA]">LinkedIn:</span>{" "}
                <a
                  href="https://linkedin.com/in/garv-thakral08"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#F8F8F2] hover:text-[#FF7EDB] underline"
                >
                  linkedin.com/in/garv-thakral08
                </a>
              </li>
            </ul>
          </div>
        )
        break

      case "clear":
        setCommandHistory([])
        output = null
        break

      case "cd projects":
        output = (
          <div className="text-[#A39DAC] mt-2">
            <p>Navigating to projects section...</p>
          </div>
        )
        setTimeout(() => {
          document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" })
        }, 500)
        break

      case "cd skills":
        output = (
          <div className="text-[#A39DAC] mt-2">
            <p>Navigating to skills section...</p>
          </div>
        )
        setTimeout(() => {
          document.getElementById("skills")?.scrollIntoView({ behavior: "smooth" })
        }, 500)
        break

      case "cd education":
        output = (
          <div className="text-[#A39DAC] mt-2">
            <p>Navigating to education section...</p>
          </div>
        )
        setTimeout(() => {
          document.getElementById("education")?.scrollIntoView({ behavior: "smooth" })
        }, 500)
        break

      case "cd contact":
        output = (
          <div className="text-[#A39DAC] mt-2">
            <p>Navigating to contact section...</p>
          </div>
        )
        setTimeout(() => {
          document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })
        }, 500)
        break

      default:
        output = (
          <div className="text-[#FF7EDB] mt-2">
            <p>Command not found: {command}</p>
            <p className="text-[#A39DAC]">
              Type <span className="text-[#80FFEA]">help</span> to see available commands.
            </p>
          </div>
        )
    }

    if (output !== null) {
      setCommandHistory([...commandHistory, { command, output }])
    }

    setInput("")
  }

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "ArrowUp") {
      e.preventDefault()
      if (inputHistory.length > 0) {
        const newIndex = historyIndex < inputHistory.length - 1 ? historyIndex + 1 : historyIndex
        setHistoryIndex(newIndex)
        setInput(inputHistory[inputHistory.length - 1 - newIndex] || "")
      }
    } else if (e.key === "ArrowDown") {
      e.preventDefault()
      if (historyIndex > 0) {
        const newIndex = historyIndex - 1
        setHistoryIndex(newIndex)
        setInput(inputHistory[inputHistory.length - 1 - newIndex] || "")
      } else if (historyIndex === 0) {
        setHistoryIndex(-1)
        setInput("")
      }
    }
  }

  return (
    <>
      {/* Terminal toggle button */}
      <div className="fixed bottom-4 right-4 z-40">
        <button
          onClick={() => {
            setIsOpen(!isOpen)
            setIsMinimized(false)
          }}
          className="bg-[#201C2B] border border-[#2D2B3A] rounded-md p-3 text-[#FF7EDB] hover:bg-[#2D2B3A] transition-colors shadow-lg"
        >
          <TerminalIcon className="h-5 w-5" />
        </button>
      </div>

      {/* Terminal window */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            ref={terminalRef}
            initial={{ opacity: 0, y: 50 }}
            animate={{
              opacity: 1,
              y: 0,
              height: isMinimized ? "auto" : isFullscreen ? "100vh" : "400px",
              width: isFullscreen ? "100vw" : "600px",
              bottom: isFullscreen ? 0 : 20,
              right: isFullscreen ? 0 : 20,
              borderRadius: isFullscreen ? 0 : "0.5rem",
            }}
            exit={{ opacity: 0, y: 50 }}
            transition={{ duration: 0.2 }}
            className={`fixed z-50 bg-[#13111C] border border-[#2D2B3A] shadow-xl flex flex-col`}
            style={{
              maxWidth: isFullscreen ? "100%" : "calc(100vw - 40px)",
              maxHeight: isFullscreen ? "100%" : "calc(100vh - 40px)",
            }}
          >
            {/* Terminal header */}
            <div className="flex items-center justify-between p-3 bg-[#201C2B] border-b border-[#2D2B3A]">
              <div className="flex items-center gap-2">
                <TerminalIcon className="h-4 w-4 text-[#FF7EDB]" />
                <span className="text-sm font-mono text-[#F8F8F2]">terminal@garvthakral</span>
              </div>
              <div className="flex items-center gap-2">
                <button
                  onClick={() => setIsMinimized(!isMinimized)}
                  className="text-[#A39DAC] hover:text-[#F8F8F2] transition-colors"
                >
                  <Minimize2 className="h-4 w-4" />
                </button>
                <button
                  onClick={() => setIsFullscreen(!isFullscreen)}
                  className="text-[#A39DAC] hover:text-[#F8F8F2] transition-colors"
                >
                  {isFullscreen ? <Minimize2 className="h-4 w-4" /> : <Maximize2 className="h-4 w-4" />}
                </button>
                <button
                  onClick={() => setIsOpen(false)}
                  className="text-[#A39DAC] hover:text-[#FF7EDB] transition-colors"
                >
                  <X className="h-4 w-4" />
                </button>
              </div>
            </div>

            {/* Terminal content */}
            {!isMinimized && (
              <div className="flex-1 p-4 font-mono text-sm overflow-auto">
                {/* Welcome message */}
                {commandHistory.length === 0 && (
                  <div className="text-[#A39DAC]">
                    <p className="text-[#FF7EDB] font-bold">Welcome to Garv Thakral's portfolio terminal!</p>
                    <p className="mt-1">
                      Type <span className="text-[#80FFEA]">help</span> to see available commands.
                    </p>
                  </div>
                )}

                {/* Command history */}
                {commandHistory.map((item, index) => (
                  <div key={index} className="mt-4">
                    <div className="flex items-center">
                      <span className="text-[#80FFEA]">visitor@portfolio</span>
                      <span className="text-[#A39DAC]">:</span>
                      <span className="text-[#FF7EDB]">~</span>
                      <span className="text-[#A39DAC]">$</span>
                      <span className="text-[#F8F8F2] ml-2">{item.command}</span>
                    </div>
                    {item.output}
                  </div>
                ))}

                {/* Input form */}
                <form onSubmit={handleSubmit} className="mt-4 flex items-center">
                  <div className="flex items-center">
                    <span className="text-[#80FFEA]">visitor@portfolio</span>
                    <span className="text-[#A39DAC]">:</span>
                    <span className="text-[#FF7EDB]">~</span>
                    <span className="text-[#A39DAC]">$</span>
                  </div>
                  <input
                    ref={inputRef}
                    type="text"
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    onKeyDown={handleKeyDown}
                    className="flex-1 bg-transparent border-none outline-none text-[#F8F8F2] ml-2 font-mono"
                    autoComplete="off"
                    spellCheck="false"
                  />
                </form>
              </div>
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}

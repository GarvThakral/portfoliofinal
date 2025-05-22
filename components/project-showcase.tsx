"use client"

import { useState, useRef, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { ArrowLeft, ArrowRight, ExternalLink, Github, Terminal, LayoutDashboard, Users, Film } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"

// Project data from resume
const projects = [
  {
    id: 1,
    title: "Dex | C++ CLI Tool",
    description:
      "A command-line tool designed to reduce boilerplate code by 40% and accelerate project setup from 10 to 3 minutes. Features 15 modular commands with cross-platform compatibility across Windows, Linux, and macOS.",
    image: "/placeholder.svg?height=600&width=800",
    icon: <Terminal className="h-6 w-6" />,
    tags: ["C++", "CLI", "Git Integration", "Cross-Platform"],
    liveUrl: "#",
    githubUrl: "https://github.com/GarvThakral/Dex",
    color: "from-amber-500 to-orange-500",
    highlights: [
      "Designed and implemented 15 modular commands in C++",
      "Reduced boilerplate code by 40%",
      "Accelerated project setup from 10 to 3 minutes",
      "100% success in automated CI builds",
      "Integrated Git operations and project template management",
    ],
  },
  {
    id: 2,
    title: "Job Dashboard",
    description:
      "A dashboard to track job applications, improving review efficiency by 25% through intuitive UI design. Features AI-based analysis to generate resume suggestions with an 80% user adoption rate.",
    image: "/placeholder.svg?height=600&width=800",
    icon: <LayoutDashboard className="h-6 w-6" />,
    tags: ["React", "Prisma", "PostgreSQL", "AI Integration"],
    liveUrl: "#",
    githubUrl: "https://github.com/GarvThakral/JobDashboard",
    color: "from-teal-500 to-emerald-500",
    highlights: [
      "Created a dashboard to track over 50 job applications",
      "Improved review efficiency by 25% through intuitive UI design",
      "Implemented AI-based analysis to generate 200+ resume suggestions",
      "Achieved an 80% user adoption rate",
      "Built modular React components for sorting, filtering, and visualizing data",
    ],
  },
  {
    id: 3,
    title: "SkillTrade",
    description:
      "A token-based skill exchange platform with real-time collaboration features. Integrated Dyte API for video calls and WebSocket chat, maintaining 99% uptime across 100+ test sessions.",
    image: "/placeholder.svg?height=600&width=800",
    icon: <Users className="h-6 w-6" />,
    tags: ["React", "Node.js", "PostgreSQL", "WebSockets", "Dyte API"],
    liveUrl: "#",
    githubUrl: "https://github.com/GarvThakral/SkillTrade",
    color: "from-violet-500 to-purple-500",
    highlights: [
      "Developed a token-based skill exchange platform with real-time collaboration",
      "Integrated Dyte API for video calls and WebSocket chat",
      "Maintained 99% uptime across 100+ test sessions",
      "Implemented an offer system and chat history tracking",
      "Ensured secure user authentication and data management",
    ],
  },
  {
    id: 4,
    title: "Recommendation System",
    description:
      "A content-based recommendation engine using TF-IDF and cosine similarity, achieving 85% accuracy in user feedback. Built with Flask API to process over 1,000 movie records and deliver recommendations.",
    image: "/placeholder.svg?height=600&width=800",
    icon: <Film className="h-6 w-6" />,
    tags: ["Python", "Flask", "Next.js", "TF-IDF", "Cosine Similarity"],
    liveUrl: "#",
    githubUrl: "https://github.com/GarvThakral/RecommendationSystem",
    color: "from-rose-500 to-pink-500",
    highlights: [
      "Developed a content-based recommendation engine using TF-IDF and cosine similarity",
      "Achieved 85% accuracy in user feedback",
      "Built a Flask API to process over 1,000 movie records",
      "Handled 200 requests daily",
      "Created a Next.js frontend for user interaction",
    ],
  },
]

export default function ProjectShowcase() {
  const [activeIndex, setActiveIndex] = useState(0)
  const [isAnimating, setIsAnimating] = useState(false)
  const [direction, setDirection] = useState(0) // -1 for left, 1 for right
  const carouselRef = useRef<HTMLDivElement>(null)

  const nextProject = () => {
    if (isAnimating) return

    setIsAnimating(true)
    setDirection(1)
    setActiveIndex((prev) => (prev + 1) % projects.length)

    setTimeout(() => {
      setIsAnimating(false)
    }, 500)
  }

  const prevProject = () => {
    if (isAnimating) return

    setIsAnimating(true)
    setDirection(-1)
    setActiveIndex((prev) => (prev - 1 + projects.length) % projects.length)

    setTimeout(() => {
      setIsAnimating(false)
    }, 500)
  }

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "ArrowRight") {
        nextProject()
      } else if (e.key === "ArrowLeft") {
        prevProject()
      }
    }

    window.addEventListener("keydown", handleKeyDown)
    return () => window.removeEventListener("keydown", handleKeyDown)
  }, [isAnimating])

  const activeProject = projects[activeIndex]

  return (
    <div className="relative" ref={carouselRef}>
      <div className="absolute top-1/2 left-4 z-10 transform -translate-y-1/2">
        <Button
          variant="outline"
          size="icon"
          onClick={prevProject}
          className="rounded-full bg-slate-800/50 border-slate-700 backdrop-blur-sm hover:bg-slate-700/70"
          disabled={isAnimating}
        >
          <ArrowLeft className="h-5 w-5" />
          <span className="sr-only">Previous project</span>
        </Button>
      </div>

      <div className="absolute top-1/2 right-4 z-10 transform -translate-y-1/2">
        <Button
          variant="outline"
          size="icon"
          onClick={nextProject}
          className="rounded-full bg-slate-800/50 border-slate-700 backdrop-blur-sm hover:bg-slate-700/70"
          disabled={isAnimating}
        >
          <ArrowRight className="h-5 w-5" />
          <span className="sr-only">Next project</span>
        </Button>
      </div>

      <div className="overflow-hidden rounded-xl">
        <AnimatePresence mode="wait">
          <motion.div
            key={activeIndex}
            initial={{
              opacity: 0,
              x: direction > 0 ? 100 : -100,
            }}
            animate={{
              opacity: 1,
              x: 0,
            }}
            exit={{
              opacity: 0,
              x: direction > 0 ? -100 : 100,
            }}
            transition={{
              duration: 0.5,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="w-full"
          >
            <div className="bg-slate-800/30 backdrop-blur-sm border border-slate-700 rounded-xl p-6 md:p-8">
              <div className="grid md:grid-cols-2 gap-8 md:gap-12">
                <div className="flex flex-col">
                  <div className="flex items-center gap-3 mb-4">
                    <div className={`p-2 rounded-lg bg-gradient-to-r ${activeProject.color}`}>{activeProject.icon}</div>
                    <h3 className="text-2xl md:text-3xl font-bold">{activeProject.title}</h3>
                  </div>

                  <p className="text-slate-300 mb-6">{activeProject.description}</p>

                  <div className="flex flex-wrap gap-2 mb-6">
                    {activeProject.tags.map((tag) => (
                      <Badge key={tag} variant="outline" className="bg-slate-800/50 text-slate-300 border-slate-700">
                        {tag}
                      </Badge>
                    ))}
                  </div>

                  <div className="flex gap-4 mt-auto">
                    <Button asChild className={`bg-gradient-to-r ${activeProject.color} hover:brightness-110`}>
                      <a href={activeProject.githubUrl} target="_blank" rel="noopener noreferrer">
                        <Github className="mr-2 h-4 w-4" />
                        View Code
                      </a>
                    </Button>

                    {activeProject.liveUrl !== "#" && (
                      <Button asChild variant="outline" className="border-slate-700 hover:bg-slate-800">
                        <a href={activeProject.liveUrl} target="_blank" rel="noopener noreferrer">
                          <ExternalLink className="mr-2 h-4 w-4" />
                          Live Demo
                        </a>
                      </Button>
                    )}
                  </div>
                </div>

                <div className="space-y-4">
                  <h4 className="text-lg font-semibold text-white">Key Highlights</h4>
                  <ul className="space-y-2">
                    {activeProject.highlights.map((highlight, index) => (
                      <motion.li
                        key={index}
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.3, delay: index * 0.1 }}
                        className="flex items-start gap-2"
                      >
                        <div
                          className={`mt-1 h-2 w-2 rounded-full bg-gradient-to-r ${activeProject.color} flex-shrink-0`}
                        ></div>
                        <span className="text-slate-300">{highlight}</span>
                      </motion.li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>

      <div className="flex justify-center mt-8 gap-2">
        {projects.map((_, index) => (
          <button
            key={index}
            onClick={() => {
              if (!isAnimating) {
                setIsAnimating(true)
                setDirection(index > activeIndex ? 1 : -1)
                setActiveIndex(index)
                setTimeout(() => setIsAnimating(false), 500)
              }
            }}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              activeIndex === index ? "bg-amber-500 w-6" : "bg-slate-600 hover:bg-slate-400"
            }`}
            aria-label={`Go to project ${index + 1}`}
          />
        ))}
      </div>
    </div>
  )
}

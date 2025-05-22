"use client"

import { useState, useRef, useEffect } from "react"
import Image from "next/image"
import { ArrowLeft, ArrowRight, ExternalLink, Github } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"

// Sample project data
const projects = [
  {
    id: 1,
    title: "Immersive E-Learning Platform",
    description:
      "A next-generation learning platform with interactive courses, real-time collaboration, and AI-powered personalization.",
    image: "/placeholder.svg?height=600&width=800",
    tags: ["Next.js", "TypeScript", "Tailwind CSS", "Supabase", "WebRTC"],
    liveUrl: "https://example.com",
    githubUrl: "https://github.com/example",
    color: "from-purple-500 to-pink-500",
  },
  {
    id: 2,
    title: "Crypto Dashboard & Analytics",
    description:
      "Real-time cryptocurrency tracking dashboard with advanced analytics, portfolio management, and predictive insights.",
    image: "/placeholder.svg?height=600&width=800",
    tags: ["React", "Redux", "D3.js", "WebSockets", "Firebase"],
    liveUrl: "https://example.com",
    githubUrl: "https://github.com/example",
    color: "from-blue-500 to-cyan-500",
  },
  {
    id: 3,
    title: "AI-Powered Content Creator",
    description:
      "Content generation platform leveraging AI to create blog posts, social media content, and marketing copy.",
    image: "/placeholder.svg?height=600&width=800",
    tags: ["Next.js", "OpenAI API", "MongoDB", "Express", "Node.js"],
    liveUrl: "https://example.com",
    githubUrl: "https://github.com/example",
    color: "from-green-500 to-teal-500",
  },
  {
    id: 4,
    title: "Smart Home IoT Dashboard",
    description:
      "Centralized control system for smart home devices with automation rules, energy monitoring, and voice commands.",
    image: "/placeholder.svg?height=600&width=800",
    tags: ["React", "GraphQL", "MQTT", "WebSockets", "Chart.js"],
    liveUrl: "https://example.com",
    githubUrl: "https://github.com/example",
    color: "from-orange-500 to-red-500",
  },
]

export default function ProjectCarousel() {
  const [activeIndex, setActiveIndex] = useState(0)
  const [isAnimating, setIsAnimating] = useState(false)
  const carouselRef = useRef<HTMLDivElement>(null)

  const nextProject = () => {
    if (isAnimating) return

    setIsAnimating(true)
    setActiveIndex((prev) => (prev + 1) % projects.length)

    setTimeout(() => {
      setIsAnimating(false)
    }, 500)
  }

  const prevProject = () => {
    if (isAnimating) return

    setIsAnimating(true)
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

  return (
    <div className="relative" ref={carouselRef}>
      <div className="absolute top-1/2 left-4 z-10 transform -translate-y-1/2">
        <Button
          variant="outline"
          size="icon"
          onClick={prevProject}
          className="rounded-full bg-zinc-800/50 border-zinc-700 backdrop-blur-sm hover:bg-zinc-700/70"
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
          className="rounded-full bg-zinc-800/50 border-zinc-700 backdrop-blur-sm hover:bg-zinc-700/70"
          disabled={isAnimating}
        >
          <ArrowRight className="h-5 w-5" />
          <span className="sr-only">Next project</span>
        </Button>
      </div>

      <div className="overflow-hidden rounded-xl">
        <div
          className="flex transition-transform duration-500 ease-in-out"
          style={{ transform: `translateX(-${activeIndex * 100}%)` }}
        >
          {projects.map((project) => (
            <div key={project.id} className="w-full flex-shrink-0">
              <div className="grid md:grid-cols-2 gap-6 md:gap-12">
                <div className="relative group">
                  <div
                    className={`absolute -inset-1 bg-gradient-to-r ${project.color} rounded-lg blur opacity-25 group-hover:opacity-75 transition duration-300`}
                  ></div>
                  <div className="relative h-64 md:h-80 lg:h-96 overflow-hidden rounded-lg">
                    <Image
                      src={project.image || "/placeholder.svg"}
                      alt={project.title}
                      width={800}
                      height={600}
                      className="object-cover w-full h-full transform group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                </div>

                <div className="flex flex-col justify-center">
                  <h3
                    className={`text-2xl md:text-3xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r ${project.color}`}
                  >
                    {project.title}
                  </h3>

                  <p className="text-zinc-300 mb-6">{project.description}</p>

                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tags.map((tag) => (
                      <Badge key={tag} variant="outline" className="bg-zinc-800/50 text-zinc-300 border-zinc-700">
                        {tag}
                      </Badge>
                    ))}
                  </div>

                  <div className="flex gap-4">
                    <Button asChild className={`bg-gradient-to-r ${project.color} hover:brightness-110`}>
                      <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="mr-2 h-4 w-4" />
                        Live Demo
                      </a>
                    </Button>

                    <Button asChild variant="outline" className="border-zinc-700 hover:bg-zinc-800">
                      <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                        <Github className="mr-2 h-4 w-4" />
                        View Code
                      </a>
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="flex justify-center mt-8 gap-2">
        {projects.map((_, index) => (
          <button
            key={index}
            onClick={() => {
              if (!isAnimating) {
                setIsAnimating(true)
                setActiveIndex(index)
                setTimeout(() => setIsAnimating(false), 500)
              }
            }}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              activeIndex === index ? "bg-white w-6" : "bg-zinc-600 hover:bg-zinc-400"
            }`}
            aria-label={`Go to project ${index + 1}`}
          />
        ))}
      </div>
    </div>
  )
}

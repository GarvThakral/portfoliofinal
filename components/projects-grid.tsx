"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { ExternalLink, Github, Folder, Terminal, LayoutDashboard, Users, Film } from "lucide-react"
import { Badge } from "@/components/ui/badge"

// Project data from resume
const projects = [
  {
    id: 1,
    title: "Dex | C++ CLI Tool",
    description:
      "A command-line tool designed to reduce boilerplate code by 40% and accelerate project setup from 10 to 3 minutes. Features 15 modular commands with cross-platform compatibility.",
    image: "/placeholder.svg?height=600&width=800",
    icon: <Terminal className="h-5 w-5" />,
    tags: ["C++", "CLI", "Git Integration", "Cross-Platform"],
    liveUrl: "#",
    githubUrl: "https://github.com/GarvThakral/Dex",
    highlights: [
      "Reduced boilerplate code by 40%",
      "Accelerated project setup from 10 to 3 minutes",
      "100% success in automated CI builds",
    ],
  },
  {
    id: 2,
    title: "Job Dashboard",
    description:
      "A dashboard to track job applications, improving review efficiency by 25% through intuitive UI design. Features AI-based analysis to generate resume suggestions with an 80% user adoption rate.",
    image: "/placeholder.svg?height=600&width=800",
    icon: <LayoutDashboard className="h-5 w-5" />,
    tags: ["React", "Prisma", "PostgreSQL", "AI Integration"],
    liveUrl: "#",
    githubUrl: "https://github.com/GarvThakral/JobDashboard",
    highlights: [
      "Improved review efficiency by 25%",
      "AI-based analysis for resume suggestions",
      "80% user adoption rate",
    ],
  },
  {
    id: 3,
    title: "SkillTrade",
    description:
      "A token-based skill exchange platform with real-time collaboration features. Integrated Dyte API for video calls and WebSocket chat, maintaining 99% uptime across 100+ test sessions.",
    image: "/placeholder.svg?height=600&width=800",
    icon: <Users className="h-5 w-5" />,
    tags: ["React", "Node.js", "PostgreSQL", "WebSockets", "Dyte API"],
    liveUrl: "#",
    githubUrl: "https://github.com/GarvThakral/SkillTrade",
    highlights: [
      "Real-time collaboration features",
      "99% uptime across 100+ test sessions",
      "Secure user authentication",
    ],
  },
  {
    id: 4,
    title: "Recommendation System",
    description:
      "A content-based recommendation engine using TF-IDF and cosine similarity, achieving 85% accuracy in user feedback. Built with Flask API to process over 1,000 movie records.",
    image: "/placeholder.svg?height=600&width=800",
    icon: <Film className="h-5 w-5" />,
    tags: ["Python", "Flask", "Next.js", "TF-IDF", "Cosine Similarity"],
    liveUrl: "#",
    githubUrl: "https://github.com/GarvThakral/RecommendationSystem",
    highlights: [
      "85% accuracy in user feedback",
      "Processed over 1,000 movie records",
      "Next.js frontend for user interaction",
    ],
  },
]

export default function ProjectsGrid() {
  const [hoveredProject, setHoveredProject] = useState<number | null>(null)

  return (
    <div className="grid md:grid-cols-2 gap-6">
      {projects.map((project) => (
        <motion.div
          key={project.id}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: project.id * 0.1 }}
          className="bg-[#201C2B] rounded-md p-6 flex flex-col h-full border border-[#2D2B3A] hover:border-[#FF7EDB]/50 transition-all duration-300"
          onMouseEnter={() => setHoveredProject(project.id)}
          onMouseLeave={() => setHoveredProject(null)}
        >
          <div className="flex justify-between items-start mb-6">
            <div className="p-2 bg-[#201C2B] text-[#80FFEA] rounded-md">
              <Folder className="h-6 w-6" />
            </div>
            <div className="flex gap-4">
              {project.githubUrl && (
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#A39DAC] hover:text-[#80FFEA] transition-colors"
                >
                  <Github className="h-5 w-5" />
                  <span className="sr-only">GitHub</span>
                </a>
              )}
              {project.liveUrl && project.liveUrl !== "#" && (
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#A39DAC] hover:text-[#80FFEA] transition-colors"
                >
                  <ExternalLink className="h-5 w-5" />
                  <span className="sr-only">Live Demo</span>
                </a>
              )}
            </div>
          </div>

          <h3 className="text-xl font-semibold text-[#F8F8F2] mb-2">{project.title}</h3>
          <p className="text-[#A39DAC] mb-6 flex-grow">{project.description}</p>

          <div className="space-y-4">
            <div className="flex flex-wrap gap-2">
              {project.tags.map((tag) => (
                <Badge
                  key={tag}
                  className="bg-[#2D2B3A] hover:bg-[#2D2B3A] text-[#80FFEA] border-none text-xs font-mono"
                >
                  {tag}
                </Badge>
              ))}
            </div>

            {hoveredProject === project.id && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3 }}
                className="mt-4"
              >
                <h4 className="text-sm font-mono text-[#FF7EDB] mb-2">Highlights:</h4>
                <ul className="space-y-1">
                  {project.highlights.map((highlight, index) => (
                    <li key={index} className="text-xs text-[#A39DAC] flex items-start gap-2">
                      <span className="text-[#80FFEA]">▹</span>
                      <span>{highlight}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            )}
          </div>
        </motion.div>
      ))}
    </div>
  )
}

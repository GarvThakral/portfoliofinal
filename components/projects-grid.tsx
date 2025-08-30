"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { ExternalLink, Github, Folder, Terminal, LayoutDashboard, Users, Film } from "lucide-react"
import { Badge } from "@/components/ui/badge"

// Project data from resume
const projects = [
  // AI/ML projects first
  {
    id: 1,
    title: "Bengali NLI System",
    description:
      "Fine-tuned XLM-RoBERTa-Large using LoRA on Bengali XNLI dataset to classify premise-hypothesis pairs, achieving 84% F1-score.",
    image: "/placeholder.svg?height=600&width=800",
    icon: <Terminal className="h-6 w-6" />, // You can change icon if you want specific to AI/ML
    tags: ["Python", "Transformers", "LoRA", "XNLI", "NLP"],
    liveUrl: "#",
    githubUrl: "https://github.com/GarvThakral/NLIProject",
    color: "from-purple-500 to-pink-500",
    highlights: [
      "Fine-tuned XLM-RoBERTa-Large for Bengali text classification",
      "Achieved 84% F1-score on XNLI dataset",
      "Implemented LoRA for efficient training",
      "Enhanced NLP pipeline for low-resource language",
    ],
  },
  {
    id: 2,
    title: "Document Intelligence & QA System",
    description:
      "RAG-based Q&A system for 1,000+ multi-format documents using SentenceTransformers, ChromaDB, and AWS Lambda. Integrated LangChain and Gemini API.",
    image: "/placeholder.svg?height=600&width=800",
    icon: <LayoutDashboard className="h-6 w-6" />,
    tags: ["Python", "RAG", "ChromaDB", "LangChain", "AWS", "GenAI"],
    liveUrl: "#",
    githubUrl: "https://github.com/GarvThakral/ChatBotCode",
    color: "from-blue-500 to-cyan-500",
    highlights: [
      "Built RAG-based question answering system",
      "Processed over 1,000 multi-format documents",
      "Used LangChain and Gemini API for advanced inference",
      "Deployed on AWS Lambda serverless platform",
    ],
  },
  {
    id: 3,
    title: "Emotion Drift Monitoring System (EDM)",
    description:
      "Fine-tuned DistilBERT (GoEmotions) to track emotion shifts in 50,000+ YouTube comments. ML pipeline with ZenML & MLflow, Streamlit dashboard, and Evidently for drift alerts.",
    image: "/placeholder.svg?height=600&width=800",
    icon: <Users className="h-6 w-6" />,
    tags: ["TensorFlow", "NLP", "DistilBERT", "ZenML", "MLflow", "Streamlit"],
    liveUrl: "#",
    githubUrl: "https://github.com/GarvThakral/EDM",
    color: "from-green-500 to-teal-500",
    highlights: [
      "Tracked emotional shifts in 50K+ YouTube comments",
      "Implemented ML pipeline with ZenML and MLflow",
      "Integrated drift detection and alerts in Streamlit UI",
      "Achieved F1-score of 0.62 with optimized training",
    ],
  },

  // Web development projects retained next
  {
    id: 4,
    title: "Job Dashboard",
    description:
      "A dashboard to track job applications, improving review efficiency by 25% through intuitive UI design. Features AI-based analysis to generate resume suggestions with an 80% user adoption rate.",
    image: "/placeholder.svg?height=600&width=800",
    icon: <LayoutDashboard className="h-6 w-6" />,
    tags: ["React", "Prisma", "PostgreSQL", "AI Integration"],
    liveUrl: "#",
    githubUrl: "https://github.com/GarvThakral/JobAnalysisFrontend",
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
    id: 5,
    title: "SkillTrade",
    description:
      "A token-based skill exchange platform with real-time collaboration features. Integrated Dyte API for video calls and WebSocket chat, maintaining 99% uptime across 100+ test sessions.",
    image: "/placeholder.svg?height=600&width=800",
    icon: <Users className="h-6 w-6" />,
    tags: ["React", "Node.js", "PostgreSQL", "WebSockets", "Dyte API"],
    liveUrl: "#",
    githubUrl: "https://github.com/GarvThakral/SkillSwapFE",
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
    id: 6,
    title: "Recommendation System",
    description:
      "A content-based recommendation engine using TF-IDF and cosine similarity, achieving 85% accuracy in user feedback. Built with Flask API to process over 1,000 movie records and deliver recommendations.",
    image: "/placeholder.svg?height=600&width=800",
    icon: <Film className="h-6 w-6" />,
    tags: ["Python", "Flask", "Next.js", "TF-IDF", "Cosine Similarity"],
    liveUrl: "#",
    githubUrl: "https://github.com/GarvThakral/MovieRecommenderModel",
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

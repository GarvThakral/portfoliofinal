"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Database, Layout, Server, Smartphone, Terminal, Wand2 } from "lucide-react"

// Sample skills data
const skillsCategories = [
  {
    id: "frontend",
    title: "Frontend",
    icon: <Layout className="h-6 w-6" />,
    color: "bg-gradient-to-br from-blue-500 to-cyan-500",
    skills: [
      { name: "React", level: 90 },
      { name: "Next.js", level: 85 },
      { name: "TypeScript", level: 80 },
      { name: "Tailwind CSS", level: 95 },
      { name: "Framer Motion", level: 75 },
    ],
  },
  {
    id: "backend",
    title: "Backend",
    icon: <Server className="h-6 w-6" />,
    color: "bg-gradient-to-br from-green-500 to-teal-500",
    skills: [
      { name: "Node.js", level: 85 },
      { name: "Express", level: 80 },
      { name: "Python", level: 75 },
      { name: "GraphQL", level: 70 },
      { name: "REST API", level: 90 },
    ],
  },
  {
    id: "database",
    title: "Database",
    icon: <Database className="h-6 w-6" />,
    color: "bg-gradient-to-br from-orange-500 to-red-500",
    skills: [
      { name: "MongoDB", level: 85 },
      { name: "PostgreSQL", level: 80 },
      { name: "Supabase", level: 75 },
      { name: "Firebase", level: 85 },
      { name: "Redis", level: 65 },
    ],
  },
  {
    id: "devops",
    title: "DevOps",
    icon: <Terminal className="h-6 w-6" />,
    color: "bg-gradient-to-br from-purple-500 to-pink-500",
    skills: [
      { name: "Docker", level: 75 },
      { name: "CI/CD", level: 80 },
      { name: "AWS", level: 70 },
      { name: "Vercel", level: 90 },
      { name: "GitHub Actions", level: 85 },
    ],
  },
  {
    id: "mobile",
    title: "Mobile",
    icon: <Smartphone className="h-6 w-6" />,
    color: "bg-gradient-to-br from-yellow-500 to-orange-500",
    skills: [
      { name: "React Native", level: 80 },
      { name: "Expo", level: 85 },
      { name: "Flutter", level: 60 },
      { name: "Mobile UI/UX", level: 75 },
      { name: "App Performance", level: 70 },
    ],
  },
  {
    id: "design",
    title: "Design",
    icon: <Wand2 className="h-6 w-6" />,
    color: "bg-gradient-to-br from-pink-500 to-rose-500",
    skills: [
      { name: "Figma", level: 85 },
      { name: "UI/UX", level: 80 },
      { name: "Responsive Design", level: 90 },
      { name: "Animation", level: 75 },
      { name: "Design Systems", level: 85 },
    ],
  },
]

export default function SkillsGrid() {
  const [activeCategory, setActiveCategory] = useState(skillsCategories[0].id)

  const activeSkills = skillsCategories.find((cat) => cat.id === activeCategory)?.skills || []

  return (
    <div className="relative z-10">
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 mb-12">
        {skillsCategories.map((category) => (
          <button
            key={category.id}
            onClick={() => setActiveCategory(category.id)}
            className={`relative group p-4 rounded-xl transition-all duration-300 ${
              activeCategory === category.id
                ? "bg-zinc-800/80 border border-zinc-700"
                : "bg-zinc-900/50 hover:bg-zinc-800/50 border border-transparent hover:border-zinc-800"
            }`}
          >
            <div className="flex flex-col items-center text-center">
              <div className={`p-3 rounded-lg mb-3 ${activeCategory === category.id ? category.color : "bg-zinc-800"}`}>
                {category.icon}
              </div>
              <h3 className="font-medium">{category.title}</h3>
            </div>

            {activeCategory === category.id && (
              <motion.div
                className="absolute bottom-0 left-0 right-0 h-1 rounded-b-xl"
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                style={{
                  originX: 0,
                  background: `linear-gradient(to right, ${
                    category.color.includes("blue")
                      ? "#3b82f6, #06b6d4"
                      : category.color.includes("green")
                        ? "#10b981, #14b8a6"
                        : category.color.includes("orange")
                          ? "#f97316, #ef4444"
                          : category.color.includes("purple")
                            ? "#8b5cf6, #ec4899"
                            : category.color.includes("yellow")
                              ? "#eab308, #f97316"
                              : "#ec4899, #f43f5e"
                  })`,
                }}
              />
            )}
          </button>
        ))}
      </div>

      <div className="bg-zinc-900/50 border border-zinc-800 rounded-xl p-6 backdrop-blur-sm">
        <div className="space-y-6">
          {activeSkills.map((skill) => (
            <div key={skill.name} className="space-y-2">
              <div className="flex justify-between">
                <span className="font-medium">{skill.name}</span>
                <span className="text-zinc-400">{skill.level}%</span>
              </div>
              <div className="h-2 w-full bg-zinc-800 rounded-full overflow-hidden">
                <motion.div
                  className={`h-full rounded-full ${
                    activeCategory === "frontend"
                      ? "bg-gradient-to-r from-blue-500 to-cyan-500"
                      : activeCategory === "backend"
                        ? "bg-gradient-to-r from-green-500 to-teal-500"
                        : activeCategory === "database"
                          ? "bg-gradient-to-r from-orange-500 to-red-500"
                          : activeCategory === "devops"
                            ? "bg-gradient-to-r from-purple-500 to-pink-500"
                            : activeCategory === "mobile"
                              ? "bg-gradient-to-r from-yellow-500 to-orange-500"
                              : "bg-gradient-to-r from-pink-500 to-rose-500"
                  }`}
                  initial={{ width: 0 }}
                  animate={{ width: `${skill.level}%` }}
                  transition={{ duration: 1, ease: "easeOut" }}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

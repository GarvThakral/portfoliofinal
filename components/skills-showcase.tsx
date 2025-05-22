"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Code, Database, Server, Cpu, Palette, Cloud } from "lucide-react"

// Skills data from resume
const skillsCategories = [
  {
    id: "frontend",
    title: "Frontend",
    icon: <Code className="h-6 w-6" />,
    color: "bg-gradient-to-br from-amber-500 to-orange-500",
    skills: [
      { name: "React", level: 90 },
      { name: "Next.js", level: 85 },
      { name: "JavaScript", level: 90 },
      { name: "TypeScript", level: 85 },
      { name: "HTML/CSS", level: 95 },
      { name: "Responsive Design", level: 90 },
    ],
  },
  {
    id: "backend",
    title: "Backend",
    icon: <Server className="h-6 w-6" />,
    color: "bg-gradient-to-br from-teal-500 to-emerald-500",
    skills: [
      { name: "Node.js", level: 85 },
      { name: "Express", level: 80 },
      { name: "REST APIs", level: 90 },
      { name: "GraphQL", level: 70 },
      { name: "WebSockets", level: 75 },
      { name: "Prisma", level: 80 },
    ],
  },
  {
    id: "database",
    title: "Database",
    icon: <Database className="h-6 w-6" />,
    color: "bg-gradient-to-br from-violet-500 to-purple-500",
    skills: [
      { name: "PostgreSQL", level: 85 },
      { name: "MongoDB", level: 80 },
      { name: "Firebase", level: 75 },
      { name: "SQL", level: 85 },
      { name: "Data Modeling", level: 75 },
    ],
  },
  {
    id: "cloud",
    title: "Cloud & DevOps",
    icon: <Cloud className="h-6 w-6" />,
    color: "bg-gradient-to-br from-blue-500 to-indigo-500",
    skills: [
      { name: "AWS (EC2, S3, Lambda)", level: 75 },
      { name: "Docker", level: 70 },
      { name: "CI/CD (GitHub Actions)", level: 80 },
      { name: "Deployment", level: 85 },
      { name: "Version Control (Git)", level: 90 },
    ],
  },
  {
    id: "ai",
    title: "AI & ML",
    icon: <Cpu className="h-6 w-6" />,
    color: "bg-gradient-to-br from-rose-500 to-pink-500",
    skills: [
      { name: "Python", level: 80 },
      { name: "TensorFlow", level: 70 },
      { name: "Keras", level: 65 },
      { name: "OpenCV", level: 75 },
      { name: "Data Analysis", level: 70 },
    ],
  },
  {
    id: "tools",
    title: "Tools & Design",
    icon: <Palette className="h-6 w-6" />,
    color: "bg-gradient-to-br from-yellow-500 to-amber-500",
    skills: [
      { name: "Figma", level: 80 },
      { name: "Adobe Photoshop", level: 75 },
      { name: "Blender", level: 65 },
      { name: "After Effects", level: 60 },
      { name: "Postman", level: 85 },
    ],
  },
]

export default function SkillsShowcase() {
  const [activeCategory, setActiveCategory] = useState(skillsCategories[0].id)
  const [hoveredSkill, setHoveredSkill] = useState<string | null>(null)

  const activeSkills = skillsCategories.find((cat) => cat.id === activeCategory)?.skills || []
  const activeCategoryData = skillsCategories.find((cat) => cat.id === activeCategory)

  return (
    <div className="relative z-10">
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 mb-12">
        {skillsCategories.map((category) => (
          <motion.button
            key={category.id}
            onClick={() => setActiveCategory(category.id)}
            whileHover={{ y: -5 }}
            whileTap={{ scale: 0.95 }}
            className={`relative group p-4 rounded-xl transition-all duration-300 ${
              activeCategory === category.id
                ? "bg-slate-800/80 border border-slate-700"
                : "bg-slate-900/50 hover:bg-slate-800/50 border border-transparent hover:border-slate-800"
            }`}
          >
            <div className="flex flex-col items-center text-center">
              <div
                className={`p-3 rounded-lg mb-3 ${activeCategory === category.id ? category.color : "bg-slate-800"}`}
              >
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
                    category.color.includes("amber")
                      ? "#f59e0b, #ea580c"
                      : category.color.includes("teal")
                        ? "#14b8a6, #10b981"
                        : category.color.includes("violet")
                          ? "#8b5cf6, #a855f7"
                          : category.color.includes("blue")
                            ? "#3b82f6, #6366f1"
                            : category.color.includes("rose")
                              ? "#f43f5e, #ec4899"
                              : "#f59e0b, #d97706"
                  })`,
                }}
              />
            )}
          </motion.button>
        ))}
      </div>

      <AnimatePresence mode="wait">
        <motion.div
          key={activeCategory}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.5 }}
          className="bg-slate-800/30 backdrop-blur-sm border border-slate-700 rounded-xl p-6 md:p-8"
        >
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <div className="flex items-center gap-3 mb-6">
                <div className={`p-2 rounded-lg ${activeCategoryData?.color}`}>{activeCategoryData?.icon}</div>
                <h3 className="text-2xl font-bold">{activeCategoryData?.title} Skills</h3>
              </div>

              <div className="space-y-6">
                {activeSkills.map((skill, index) => (
                  <motion.div
                    key={skill.name}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3, delay: index * 0.1 }}
                    className="space-y-2"
                    onMouseEnter={() => setHoveredSkill(skill.name)}
                    onMouseLeave={() => setHoveredSkill(null)}
                  >
                    <div className="flex justify-between">
                      <span className="font-medium">{skill.name}</span>
                      <span className="text-slate-400">{skill.level}%</span>
                    </div>
                    <div className="h-2 w-full bg-slate-700 rounded-full overflow-hidden">
                      <motion.div
                        className={`h-full rounded-full ${
                          activeCategory === "frontend"
                            ? "bg-gradient-to-r from-amber-500 to-orange-500"
                            : activeCategory === "backend"
                              ? "bg-gradient-to-r from-teal-500 to-emerald-500"
                              : activeCategory === "database"
                                ? "bg-gradient-to-r from-violet-500 to-purple-500"
                                : activeCategory === "cloud"
                                  ? "bg-gradient-to-r from-blue-500 to-indigo-500"
                                  : activeCategory === "ai"
                                    ? "bg-gradient-to-r from-rose-500 to-pink-500"
                                    : "bg-gradient-to-r from-yellow-500 to-amber-500"
                        }`}
                        initial={{ width: 0 }}
                        animate={{ width: `${skill.level}%` }}
                        transition={{ duration: 1, ease: "easeOut" }}
                      />
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            <div className="flex items-center justify-center">
              <div className="relative w-64 h-64">
                <svg viewBox="0 0 200 200" className="w-full h-full">
                  <defs>
                    <linearGradient id="frontendGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                      <stop offset="0%" stopColor="#f59e0b" />
                      <stop offset="100%" stopColor="#ea580c" />
                    </linearGradient>
                    <linearGradient id="backendGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                      <stop offset="0%" stopColor="#14b8a6" />
                      <stop offset="100%" stopColor="#10b981" />
                    </linearGradient>
                    <linearGradient id="databaseGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                      <stop offset="0%" stopColor="#8b5cf6" />
                      <stop offset="100%" stopColor="#a855f7" />
                    </linearGradient>
                    <linearGradient id="cloudGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                      <stop offset="0%" stopColor="#3b82f6" />
                      <stop offset="100%" stopColor="#6366f1" />
                    </linearGradient>
                    <linearGradient id="aiGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                      <stop offset="0%" stopColor="#f43f5e" />
                      <stop offset="100%" stopColor="#ec4899" />
                    </linearGradient>
                    <linearGradient id="toolsGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                      <stop offset="0%" stopColor="#f59e0b" />
                      <stop offset="100%" stopColor="#d97706" />
                    </linearGradient>
                  </defs>

                  {activeSkills.map((skill, i) => {
                    const angle = (i / activeSkills.length) * Math.PI * 2
                    const radius = (skill.level / 100) * 80
                    const x = 100 + radius * Math.cos(angle - Math.PI / 2)
                    const y = 100 + radius * Math.sin(angle - Math.PI / 2)

                    return (
                      <g key={skill.name}>
                        <line
                          x1="100"
                          y1="100"
                          x2={100 + 80 * Math.cos(angle - Math.PI / 2)}
                          y2={100 + 80 * Math.sin(angle - Math.PI / 2)}
                          stroke="#334155"
                          strokeWidth="1"
                        />
                        <circle
                          cx={x}
                          cy={y}
                          r={hoveredSkill === skill.name ? 6 : 4}
                          fill={`url(#${activeCategory}Gradient)`}
                        />
                        <text
                          x={x + (x < 100 ? -5 : 5)}
                          y={y + (y < 100 ? -8 : 16)}
                          fontSize="10"
                          fill="white"
                          textAnchor={x < 100 ? "end" : "start"}
                          className={`${hoveredSkill === skill.name ? "font-bold" : ""}`}
                        >
                          {skill.name}
                        </text>
                      </g>
                    )
                  })}

                  {/* Radar circles */}
                  <circle cx="100" cy="100" r="20" fill="none" stroke="#334155" strokeWidth="1" />
                  <circle cx="100" cy="100" r="40" fill="none" stroke="#334155" strokeWidth="1" />
                  <circle cx="100" cy="100" r="60" fill="none" stroke="#334155" strokeWidth="1" />
                  <circle cx="100" cy="100" r="80" fill="none" stroke="#334155" strokeWidth="1" />

                  {/* Center point */}
                  <circle cx="100" cy="100" r="4" fill={`url(#${activeCategory}Gradient)`} />
                </svg>
              </div>
            </div>
          </div>
        </motion.div>
      </AnimatePresence>
    </div>
  )
}

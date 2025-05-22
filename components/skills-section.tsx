"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Code, Database, Server, Cpu, Palette, Cloud } from "lucide-react"
import { Badge } from "@/components/ui/badge"

// Skills data from resume
const skillsCategories = [
  {
    id: "frontend",
    title: "Frontend",
    icon: <Code className="h-5 w-5" />,
    skills: [
      "React",
      "Next.js",
      "JavaScript",
      "TypeScript",
      "HTML/CSS",
      "Responsive Design",
      "Tailwind CSS",
      "Framer Motion",
      "Redux",
      "React Query",
    ],
  },
  {
    id: "backend",
    title: "Backend",
    icon: <Server className="h-5 w-5" />,
    skills: [
      "Node.js",
      "Express",
      "REST APIs",
      "GraphQL",
      "WebSockets",
      "Prisma",
      "Authentication",
      "Middleware",
      "API Design",
      "Server-side Rendering",
    ],
  },
  {
    id: "database",
    title: "Database",
    icon: <Database className="h-5 w-5" />,
    skills: [
      "PostgreSQL",
      "MongoDB",
      "Firebase",
      "SQL",
      "Data Modeling",
      "Indexing",
      "Query Optimization",
      "Migrations",
      "ORM",
      "NoSQL",
    ],
  },
  {
    id: "cloud",
    title: "Cloud & DevOps",
    icon: <Cloud className="h-5 w-5" />,
    skills: [
      "AWS (EC2, S3, Lambda)",
      "Docker",
      "CI/CD (GitHub Actions)",
      "Deployment",
      "Version Control (Git)",
      "Vercel",
      "Netlify",
      "Serverless",
      "Infrastructure as Code",
      "Monitoring",
    ],
  },
  {
    id: "ai",
    title: "AI & ML",
    icon: <Cpu className="h-5 w-5" />,
    skills: [
      "Python",
      "TensorFlow",
      "Keras",
      "OpenCV",
      "Data Analysis",
      "Natural Language Processing",
      "Computer Vision",
      "Model Training",
      "AI Integration",
      "ML Ops",
    ],
  },
  {
    id: "tools",
    title: "Tools & Design",
    icon: <Palette className="h-5 w-5" />,
    skills: [
      "Figma",
      "Adobe Photoshop",
      "Blender",
      "After Effects",
      "Postman",
      "VS Code",
      "Git",
      "Terminal",
      "UI/UX Design",
      "Wireframing",
    ],
  },
]

export default function SkillsSection() {
  const [activeCategory, setActiveCategory] = useState(skillsCategories[0].id)

  const activeSkills = skillsCategories.find((cat) => cat.id === activeCategory)?.skills || []
  const activeCategoryData = skillsCategories.find((cat) => cat.id === activeCategory)

  return (
    <div className="bg-[#201C2B] rounded-md border border-[#2D2B3A] p-6">
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 mb-8">
        {skillsCategories.map((category) => (
          <button
            key={category.id}
            onClick={() => setActiveCategory(category.id)}
            className={`p-3 rounded-md font-mono text-sm transition-all duration-300 flex items-center gap-2 ${
              activeCategory === category.id
                ? "bg-[#2D2B3A] text-[#FF7EDB] border border-[#FF7EDB]/30"
                : "bg-[#2D2B3A]/50 text-[#A39DAC] hover:text-[#F8F8F2] border border-transparent"
            }`}
          >
            {category.icon}
            <span>{category.title}</span>
          </button>
        ))}
      </div>

      <AnimatePresence mode="wait">
        <motion.div
          key={activeCategory}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.3 }}
          className="grid md:grid-cols-2 gap-8"
        >
          <div>
            <div className="flex items-center gap-3 mb-6">
              <div className="p-2 bg-[#2D2B3A] text-[#80FFEA] rounded-md">{activeCategoryData?.icon}</div>
              <h3 className="text-xl font-mono text-[#F8F8F2]">{activeCategoryData?.title}</h3>
            </div>

            <div className="grid grid-cols-2 gap-3">
              {activeSkills.map((skill, index) => (
                <motion.div
                  key={skill}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.3, delay: index * 0.05 }}
                >
                  <Badge className="bg-[#2D2B3A] hover:bg-[#2D2B3A] text-[#A39DAC] border-none text-xs font-mono py-2 px-3 w-full justify-start">
                    <span className="text-[#80FFEA] mr-2">▹</span> {skill}
                  </Badge>
                </motion.div>
              ))}
            </div>
          </div>

          <div className="hidden md:block">
            <div className="h-full flex items-center justify-center">
              <div className="relative w-full h-64 border border-[#2D2B3A] rounded-md bg-[#13111C] p-4">
                <div className="absolute top-0 left-0 p-2 bg-[#2D2B3A] text-[#FF7EDB] text-xs font-mono rounded-tl-md rounded-br-md">
                  skills.js
                </div>
                <pre className="text-[#A39DAC] font-mono text-sm mt-8 overflow-auto h-full">
                  <code>
                    {`// ${activeCategoryData?.title} Skills\n`}
                    {`const ${activeCategory}Skills = [\n`}
                    {activeSkills.map((skill, i) => `  "${skill}"${i < activeSkills.length - 1 ? "," : ""}`).join("\n")}
                    {`\n];\n\n`}
                    {`// Export for use in portfolio\n`}
                    {`export default ${activeCategory}Skills;`}
                  </code>
                </pre>
              </div>
            </div>
          </div>
        </motion.div>
      </AnimatePresence>
    </div>
  )
}

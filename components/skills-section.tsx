"use client"

import { useState } from "react"
import { Bot, Cloud, Code, Cpu, Database, Palette, Server, Workflow } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { skillsCategories } from "@/lib/portfolio-data"

const icons = { agents: Bot, ai: Cpu, mlops: Workflow, backend: Server, frontend: Code, database: Database, cloud: Cloud, tools: Palette }

export default function SkillsSection() {
  const [activeCategory, setActiveCategory] = useState(skillsCategories[0].id)
  const active = skillsCategories.find((category) => category.id === activeCategory) || skillsCategories[0]
  const Icon = icons[active.id as keyof typeof icons]

  return (
    <div className="rounded-md border border-[#2D2B3A] bg-[#201C2B] p-4 sm:p-6">
      <div className="mb-8 grid grid-cols-2 gap-2 md:grid-cols-4" role="group" aria-label="Skill categories">
        {skillsCategories.map((category) => {
          const CategoryIcon = icons[category.id as keyof typeof icons]
          return (
            <button key={category.id} type="button" onClick={() => setActiveCategory(category.id)} aria-pressed={activeCategory === category.id} aria-controls="skill-category-content"
              className={`flex items-center gap-2 rounded-md border p-3 text-left font-mono text-xs transition-colors sm:text-sm ${activeCategory === category.id ? "border-[#FF7EDB]/30 bg-[#2D2B3A] text-[#FF7EDB]" : "border-transparent bg-[#2D2B3A]/50 text-[#A39DAC] hover:text-[#F8F8F2]"}`}>
              <CategoryIcon className="h-4 w-4 shrink-0" aria-hidden="true" />{category.title}
            </button>
          )
        })}
      </div>
      <div id="skill-category-content" className="grid gap-8 md:grid-cols-2" aria-live="polite">
        <div>
          <h3 className="mb-3 flex items-center gap-3 text-xl font-semibold text-[#F8F8F2]"><Icon className="h-5 w-5 text-[#80FFEA]" aria-hidden="true" />{active.title}</h3>
          <p className="mb-6 text-sm leading-relaxed text-[#A39DAC]">{active.description}</p>
          <ul className="grid grid-cols-2 gap-2">
            {active.skills.map((skill) => (
              <li key={skill} className="min-w-0">
                <Badge className="h-full w-full justify-start border-none bg-[#2D2B3A] px-3 py-2 text-left font-mono text-xs font-normal leading-relaxed text-[#C2BDCB] hover:bg-[#2D2B3A]">
                  <span className="mr-2 text-[#80FFEA]" aria-hidden="true">▹</span>{skill}
                </Badge>
              </li>
            ))}
          </ul>
        </div>
        <div className="hidden min-w-0 overflow-hidden rounded-md border border-[#2D2B3A] bg-[#13111C] md:block" aria-hidden="true">
          <div className="border-b border-[#2D2B3A] px-4 py-2 font-mono text-xs text-[#FF7EDB]">skills.ts</div>
          <pre className="max-h-80 overflow-auto p-5 font-mono text-sm leading-relaxed text-[#A39DAC]">
            <code>{`// ${active.title}\nconst ${active.id}Skills = [\n${active.skills.map((skill) => `  "${skill}",`).join("\n")}\n];`}</code>
          </pre>
        </div>
      </div>
    </div>
  )
}

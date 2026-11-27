import Image from "next/image"
import { ArrowUpRight, ChevronDown, Folder, Github } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { earlierProjects, featuredProjects, type Project } from "@/lib/portfolio-data"

function ProjectCard({ project }: { project: Project }) {
  return (
    <article className="group flex h-full min-w-0 flex-col overflow-hidden rounded-md border border-[#2D2B3A] bg-[#201C2B] transition-colors hover:border-[#FF7EDB]/50">
      {project.image && (
        <div className="relative aspect-[16/9] overflow-hidden border-b border-[#2D2B3A] bg-[#13111C]">
          <Image src={project.image} alt={project.imageAlt || project.title} fill sizes="(max-width: 767px) 100vw, 50vw" className="object-contain transition-transform duration-500 motion-safe:group-hover:scale-[1.02]" />
        </div>
      )}
      <div className="flex flex-1 flex-col p-5 sm:p-6">
        <div className="mb-4 flex items-start justify-between gap-4">
          <p className="font-mono text-xs leading-relaxed text-[#80FFEA]">{project.category}</p>
          {!project.image && <Folder className="h-5 w-5 shrink-0 text-[#80FFEA]" aria-hidden="true" />}
        </div>
        <h3 className="mb-2 text-2xl font-semibold tracking-tight text-[#F8F8F2]">{project.title}</h3>
        {project.role && <p className="mb-3 font-mono text-xs text-[#FF7EDB]">{project.role}</p>}
        <p className="mb-6 flex-1 leading-relaxed text-[#A39DAC]">{project.description}</p>
        {project.metrics && (
          <dl className="mb-6 grid grid-cols-2 gap-4 border-y border-[#2D2B3A] py-4">
            {project.metrics.map((metric) => (
              <div key={metric.label} className="flex min-w-0 flex-col">
                <dt className="mt-1 font-mono text-xs text-[#A39DAC]">{metric.label}</dt>
                <dd className="order-first text-xl font-semibold text-[#F8F8F2]">{metric.value}</dd>
              </div>
            ))}
          </dl>
        )}
        <div className="mb-5 flex flex-wrap gap-2">
          {project.tags.map((tag) => (
            <Badge key={tag} className="border-none bg-[#2D2B3A] font-mono text-xs font-normal text-[#80FFEA] hover:bg-[#2D2B3A]">{tag}</Badge>
          ))}
        </div>
        <details className="group/details border-t border-[#2D2B3A] pt-4">
          <summary className="flex cursor-pointer list-none items-center justify-between gap-2 rounded-sm py-1 font-mono text-sm text-[#FF7EDB] [&::-webkit-details-marker]:hidden">
            <span>Engineering highlights<span className="sr-only"> for {project.title}</span></span>
            <ChevronDown className="h-4 w-4 shrink-0 transition-transform group-open/details:rotate-180" aria-hidden="true" />
          </summary>
          <ul className="mt-4 space-y-3 text-sm leading-relaxed text-[#A39DAC]">
            {project.highlights.map((highlight) => (
              <li key={highlight} className="flex gap-2"><span className="text-[#80FFEA]" aria-hidden="true">▹</span><span>{highlight}</span></li>
            ))}
          </ul>
        </details>
        {(project.githubUrl || project.liveUrl) && (
          <div className="mt-5 flex flex-wrap gap-5 border-t border-[#2D2B3A] pt-4">
            {project.githubUrl && (
              <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 font-mono text-sm text-[#A39DAC] transition-colors hover:text-[#80FFEA]">
                <Github className="h-4 w-4" aria-hidden="true" />Source code<span className="sr-only"> for {project.title}</span>
              </a>
            )}
            {project.liveUrl && (
              <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 font-mono text-sm text-[#A39DAC] transition-colors hover:text-[#80FFEA]">
                Live project<span className="sr-only">: {project.title}</span><ArrowUpRight className="h-4 w-4" aria-hidden="true" />
              </a>
            )}
          </div>
        )}
      </div>
    </article>
  )
}

export default function ProjectsGrid() {
  return (
    <div>
      <div className="grid items-start gap-6 md:grid-cols-2">
        {featuredProjects.map((project) => <ProjectCard key={project.id} project={project} />)}
      </div>
      <details className="group/archive mt-10 rounded-md border border-[#2D2B3A] bg-[#201C2B]/40 p-5 sm:p-6">
        <summary className="flex cursor-pointer list-none flex-wrap items-center justify-between gap-4 rounded-sm [&::-webkit-details-marker]:hidden">
          <span>
            <span className="block text-lg font-semibold text-[#F8F8F2]">Earlier projects</span>
            <span className="mt-1 block text-sm text-[#A39DAC]">NLP experiments, full-stack applications, and the work that came before.</span>
          </span>
          <span className="flex items-center gap-3 font-mono text-xs text-[#80FFEA]">{earlierProjects.length} projects<ChevronDown className="h-4 w-4 transition-transform group-open/archive:rotate-180" aria-hidden="true" /></span>
        </summary>
        <div className="mt-6 grid items-start gap-6 md:grid-cols-2">
          {earlierProjects.map((project) => <ProjectCard key={project.id} project={project} />)}
        </div>
      </details>
    </div>
  )
}

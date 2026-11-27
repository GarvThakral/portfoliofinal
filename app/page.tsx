import { Github, Linkedin, Mail } from "lucide-react"
import HeroSection from "@/components/hero-section"
import ProjectsGrid from "@/components/projects-grid"
import SkillsSection from "@/components/skills-section"
import EducationSection from "@/components/education-section"
import ContactSection from "@/components/contact-section"
import CommandBar from "@/components/command-bar"
import Terminal from "@/components/terminal"
import { profile } from "@/lib/portfolio-data"

export default function Home() {
  return (
    <main className="relative isolate min-h-screen bg-[#13111C] text-white">
      <div aria-hidden="true" className="absolute inset-0 -z-10 bg-grid-pattern opacity-10 pointer-events-none"></div>
      <CommandBar />
      <Terminal />

      {/* Hero Section */}
      <HeroSection />

      {/* Projects Section */}
      <section id="projects" className="py-16 px-4 md:px-8 lg:px-16 max-w-7xl mx-auto">
        <div className="mb-8">
          <h2 className="break-words text-base sm:text-xl font-mono font-bold mb-4 text-[#FF7EDB]">// featured_projects</h2>
          <p className="text-[#A39DAC] max-w-2xl">
            Products and systems I’ve built across community commerce, computer vision, AI automation, and full-stack engineering.
          </p>
        </div>

        <ProjectsGrid />
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-16 px-4 md:px-8 lg:px-16 max-w-7xl mx-auto">
        <div className="mb-8">
          <h2 className="break-words text-base sm:text-xl font-mono font-bold mb-4 text-[#FF7EDB]">// skills_and_technologies</h2>
          <p className="text-[#A39DAC] max-w-2xl">
            My toolkit for building AI systems, shipping full-stack products, and operating them in production.
          </p>
        </div>

        <SkillsSection />
      </section>

      {/* Education Section */}
      <section id="education" className="py-16 px-4 md:px-8 lg:px-16 max-w-7xl mx-auto">
        <div className="mb-8">
          <h2 className="break-words text-base sm:text-xl font-mono font-bold mb-4 text-[#FF7EDB]">// education_and_certifications</h2>
          <p className="text-[#A39DAC] max-w-2xl">My academic journey and professional certifications.</p>
        </div>

        <EducationSection />
      </section>

      <section aria-labelledby="activity-heading" className="py-12 px-4 md:px-8 lg:px-16 max-w-7xl mx-auto">
        <h2 id="activity-heading" className="mb-6 text-lg font-mono font-bold text-[#FF7EDB]">// contribution_activity</h2>
        <div className="overflow-x-auto rounded-md border border-[#2D2B3A] bg-[#201C2B] p-5">
          <img src="https://ghchart.rshah.org/FF7EDB/GarvThakral" alt="Garv Thakral’s GitHub contribution chart" loading="lazy" width="720" height="110" className="mx-auto w-full min-w-[600px] max-w-3xl" />
        </div>
        <a href={profile.github} target="_blank" rel="noopener noreferrer" className="mt-4 inline-block font-mono text-xs text-[#80FFEA] hover:underline">View activity on GitHub →</a>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-16 px-4 md:px-8 lg:px-16 max-w-7xl mx-auto">
        <div className="mb-8">
          <h2 className="break-words text-base sm:text-xl font-mono font-bold mb-4 text-[#FF7EDB]">// contact_me</h2>
          <p className="text-[#A39DAC] max-w-2xl">
            For engineering opportunities, collaborations, or a conversation about something worth building.
          </p>
        </div>

        <ContactSection />
      </section>

      {/* Footer */}
      <footer className="py-8 px-4 border-t border-[#2D2B3A] text-center text-[#A39DAC]">
        <div className="max-w-7xl mx-auto">
          <div className="flex justify-center space-x-6 mb-4">
            <a
              href={profile.github}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[#FF7EDB] transition-colors"
            >
              <Github className="h-5 w-5" />
              <span className="sr-only">GitHub</span>
            </a>
            <a
              href={profile.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[#FF7EDB] transition-colors"
            >
              <Linkedin className="h-5 w-5" />
              <span className="sr-only">LinkedIn</span>
            </a>
            <a href={`mailto:${profile.email}`} className="hover:text-[#FF7EDB] transition-colors">
              <Mail className="h-5 w-5" />
              <span className="sr-only">Email</span>
            </a>
          </div>
          <p className="text-sm">
            <span className="text-[#FF7EDB]">©</span> {new Date().getFullYear()} Garv Thakral. All rights reserved.
          </p>
          <p className="text-xs mt-2 text-[#6C6980]">Built with Next.js, Tailwind CSS, and Framer Motion</p>
        </div>
      </footer>
    </main>
  )
}

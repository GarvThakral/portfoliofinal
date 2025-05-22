import { Github, Linkedin, Mail } from "lucide-react"
import HeroSection from "@/components/hero-section"
import ProjectsGrid from "@/components/projects-grid"
import SkillsSection from "@/components/skills-section"
import EducationSection from "@/components/education-section"
import ContactSection from "@/components/contact-section"
import ContributionGraph from "@/components/contribution-graph"
import CommandBar from "@/components/command-bar"
import Terminal from "@/components/terminal"

export default function Home() {
  return (
    <main className="min-h-screen bg-[#13111C] text-white">
      <div className="absolute inset-0 bg-grid-pattern opacity-10 pointer-events-none"></div>
      <CommandBar />
      <Terminal />

      {/* Hero Section */}
      <HeroSection />

      {/* Contribution Graph */}
      <section className="py-16 px-4 md:px-8 lg:px-16 max-w-7xl mx-auto">
        <div className="mb-8">
          <h2 className="text-xl font-mono font-bold mb-4 text-[#FF7EDB]">// contribution_activity</h2>
        </div>
        <ContributionGraph />
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-16 px-4 md:px-8 lg:px-16 max-w-7xl mx-auto">
        <div className="mb-8">
          <h2 className="text-xl font-mono font-bold mb-4 text-[#FF7EDB]">// featured_projects</h2>
          <p className="text-[#A39DAC] max-w-2xl">
            A showcase of my technical projects, demonstrating problem-solving skills and coding expertise.
          </p>
        </div>

        <ProjectsGrid />
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-16 px-4 md:px-8 lg:px-16 max-w-7xl mx-auto">
        <div className="mb-8">
          <h2 className="text-xl font-mono font-bold mb-4 text-[#FF7EDB]">// skills_and_technologies</h2>
          <p className="text-[#A39DAC] max-w-2xl">
            My technical toolkit spans frontend, backend, and cloud technologies.
          </p>
        </div>

        <SkillsSection />
      </section>

      {/* Education Section */}
      <section id="education" className="py-16 px-4 md:px-8 lg:px-16 max-w-7xl mx-auto">
        <div className="mb-8">
          <h2 className="text-xl font-mono font-bold mb-4 text-[#FF7EDB]">// education_and_certifications</h2>
          <p className="text-[#A39DAC] max-w-2xl">My academic journey and professional certifications.</p>
        </div>

        <EducationSection />
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-16 px-4 md:px-8 lg:px-16 max-w-7xl mx-auto">
        <div className="mb-8">
          <h2 className="text-xl font-mono font-bold mb-4 text-[#FF7EDB]">// contact_me</h2>
          <p className="text-[#A39DAC] max-w-2xl">
            Interested in working together? Reach out and let's discuss your project.
          </p>
        </div>

        <ContactSection />
      </section>

      {/* Footer */}
      <footer className="py-8 px-4 border-t border-[#2D2B3A] text-center text-[#A39DAC]">
        <div className="max-w-7xl mx-auto">
          <div className="flex justify-center space-x-6 mb-4">
            <a
              href="https://github.com/GarvThakral"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[#FF7EDB] transition-colors"
            >
              <Github className="h-5 w-5" />
              <span className="sr-only">GitHub</span>
            </a>
            <a
              href="https://linkedin.com/in/garv-thakral08"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[#FF7EDB] transition-colors"
            >
              <Linkedin className="h-5 w-5" />
              <span className="sr-only">LinkedIn</span>
            </a>
            <a href="mailto:garvthakralfx@gmail.com" className="hover:text-[#FF7EDB] transition-colors">
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

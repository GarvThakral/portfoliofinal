import { ArrowUpRight, Github, Linkedin, Mail } from "lucide-react"
import { Button } from "@/components/ui/button"
import { profile } from "@/lib/portfolio-data"

const contacts = [
  { label: "Email", text: profile.email, href: `mailto:${profile.email}`, icon: Mail },
  { label: "GitHub", text: "github.com/GarvThakral", href: profile.github, icon: Github },
  { label: "LinkedIn", text: "linkedin.com/in/garv-thakral08", href: profile.linkedin, icon: Linkedin },
  { label: "X", text: "x.com/Garvfx", href: profile.x, icon: ArrowUpRight },
]

export default function ContactSection() {
  return (
    <div className="grid gap-6 md:grid-cols-2">
      <div className="flex flex-col items-start rounded-md border border-[#2D2B3A] bg-[#201C2B] p-6 sm:p-8">
        <h3 className="mb-4 text-2xl font-semibold text-[#F8F8F2]">Let’s build something useful.</h3>
        <p className="mb-8 max-w-md leading-relaxed text-[#A39DAC]">
          I work across AI engineering and full-stack product development. If you have an engineering opportunity, a collaboration, or a technical problem in mind, I’d love to hear about it.
        </p>
        <Button asChild className="mt-auto bg-[#FF7EDB] font-mono text-[#13111C] hover:bg-[#FF7EDB]/90">
          <a href={`mailto:${profile.email}`}><Mail className="mr-2 h-4 w-4" aria-hidden="true" />Email me</a>
        </Button>
      </div>
      <div className="rounded-md border border-[#2D2B3A] bg-[#201C2B] p-6 sm:p-8">
        <h3 className="mb-6 text-xl font-mono text-[#F8F8F2]">Find me online</h3>
        <ul className="space-y-5">
          {contacts.map(({ label, text, href, icon: Icon }) => (
            <li key={label} className="flex min-w-0 items-center gap-3 sm:gap-4">
              <div className="shrink-0 rounded-md bg-[#2D2B3A] p-3 text-[#80FFEA]"><Icon className="h-5 w-5" aria-hidden="true" /></div>
              <div className="min-w-0">
                <p className="mb-1 font-mono text-xs text-[#A39DAC]">{label}</p>
                <a href={href} target={label === "Email" ? undefined : "_blank"} rel={label === "Email" ? undefined : "noopener noreferrer"} className="break-words text-sm text-[#F8F8F2] transition-colors hover:text-[#FF7EDB]">{text}</a>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}

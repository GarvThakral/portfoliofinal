"use client"

import { motion } from "framer-motion"
import { GraduationCap, Award, Calendar } from "lucide-react"
import { Badge } from "@/components/ui/badge"

const education = [
  {
    id: 1,
    institution: "Christ University",
    location: "Bengaluru, India",
    degree: "Bachelor of Computer Applications",
    period: "Aug. 2022 – May 2025",
    icon: <GraduationCap className="h-5 w-5" />,
  },
  {
    id: 2,
    institution: "Lancers Convent",
    location: "Delhi, India",
    degree: "Class XII",
    period: "May 2022",
    icon: <GraduationCap className="h-5 w-5" />,
  },
]

const certifications = [
  {
    id: 1,
    name: "AWS Academy Cloud Foundations",
    issuer: "Amazon Web Services",
    icon: <Award className="h-5 w-5" />,
  },
  {
    id: 2,
    name: "Introduction to Machine Learning",
    issuer: "freeCodeCamp",
    icon: <Award className="h-5 w-5" />,
  },
  {
    id: 3,
    name: "Responsive Web Design Certification",
    issuer: "freeCodeCamp",
    icon: <Award className="h-5 w-5" />,
  },
]

export default function EducationSection() {
  return (
    <div className="grid md:grid-cols-2 gap-8">
      <div className="bg-[#201C2B] rounded-md border border-[#2D2B3A] p-6">
        <h3 className="text-xl font-mono text-[#F8F8F2] mb-6 flex items-center gap-2">
          <Calendar className="h-5 w-5 text-[#FF7EDB]" />
          <span>Academic Journey</span>
        </h3>

        <div className="space-y-6">
          {education.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="relative pl-6 border-l border-[#2D2B3A]"
            >
              <div className="absolute -left-2.5 top-0 p-1 bg-[#201C2B] border border-[#2D2B3A] rounded-full">
                <div className="p-1 text-[#80FFEA]">{item.icon}</div>
              </div>

              <div className="mb-1">
                <Badge className="bg-[#2D2B3A] hover:bg-[#2D2B3A] text-[#FF7EDB] border-none text-xs font-mono">
                  {item.period}
                </Badge>
              </div>

              <h4 className="text-lg font-semibold text-[#F8F8F2] mb-1">{item.institution}</h4>
              <p className="text-[#A39DAC] mb-1">{item.degree}</p>
              <p className="text-[#6C6980] text-sm">{item.location}</p>
            </motion.div>
          ))}
        </div>
      </div>

      <div className="space-y-8">
        <div className="bg-[#201C2B] rounded-md border border-[#2D2B3A] p-6">
          <h3 className="text-xl font-mono text-[#F8F8F2] mb-6 flex items-center gap-2">
            <Award className="h-5 w-5 text-[#FF7EDB]" />
            <span>Certifications</span>
          </h3>

          <div className="space-y-4">
            {certifications.map((cert, index) => (
              <motion.div
                key={cert.id}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                className="flex items-center gap-4 p-3 border border-[#2D2B3A] rounded-md hover:border-[#FF7EDB]/30 transition-all duration-300"
              >
                <div className="p-2 bg-[#2D2B3A] text-[#80FFEA] rounded-md">{cert.icon}</div>

                <div>
                  <h4 className="font-semibold text-[#F8F8F2]">{cert.name}</h4>
                  <p className="text-[#A39DAC] text-sm">{cert.issuer}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        <div className="bg-[#201C2B] rounded-md border border-[#2D2B3A] p-6">
          <h3 className="text-xl font-mono text-[#F8F8F2] mb-6">Technical Expertise</h3>
          <div className="flex flex-wrap gap-2">
            {[
              "MERN Stack",
              "Next.js",
              "JavaScript",
              "TypeScript",
              "HTML/CSS",
              "Prisma",
              "Python",
              "TensorFlow",
              "Keras",
              "OpenCV",
              "C",
              "WebSockets",
              "PostgreSQL",
              "MongoDB",
              "Git",
              "Docker",
              "Postman",
              "REST APIs",
              "GraphQL",
              "CI/CD",
              "AWS",
              "Firebase",
              "Figma",
              "Adobe Photoshop",
              "Blender",
            ].map((skill, index) => (
              <motion.div
                key={skill}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3, delay: index * 0.03 }}
              >
                <Badge className="bg-[#2D2B3A] hover:bg-[#2D2B3A] text-[#A39DAC] border-none text-xs font-mono">
                  {skill}
                </Badge>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

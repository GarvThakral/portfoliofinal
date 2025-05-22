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
    icon: <GraduationCap className="h-6 w-6" />,
    color: "from-violet-500 to-purple-500",
  },
  {
    id: 2,
    institution: "Lancers Convent",
    location: "Delhi, India",
    degree: "Class XII",
    period: "May 2022",
    icon: <GraduationCap className="h-6 w-6" />,
    color: "from-violet-500 to-purple-500",
  },
]

const certifications = [
  {
    id: 1,
    name: "AWS Academy Cloud Foundations",
    issuer: "Amazon Web Services",
    icon: <Award className="h-6 w-6" />,
    color: "from-amber-500 to-orange-500",
  },
  {
    id: 2,
    name: "Introduction to Machine Learning",
    issuer: "freeCodeCamp",
    icon: <Award className="h-6 w-6" />,
    color: "from-teal-500 to-emerald-500",
  },
  {
    id: 3,
    name: "Responsive Web Design Certification",
    issuer: "freeCodeCamp",
    icon: <Award className="h-6 w-6" />,
    color: "from-blue-500 to-indigo-500",
  },
]

export default function EducationTimeline() {
  return (
    <div className="grid md:grid-cols-2 gap-8">
      <div className="space-y-8">
        <h3 className="text-2xl font-bold flex items-center gap-2">
          <Calendar className="h-5 w-5 text-violet-400" />
          Academic Journey
        </h3>

        <div className="relative border-l-2 border-slate-700 pl-6 space-y-8">
          {education.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="relative"
            >
              <div className="absolute -left-[29px] p-1 rounded-full bg-slate-900 border-2 border-slate-700">
                <div className={`p-1 rounded-full bg-gradient-to-r ${item.color}`}>{item.icon}</div>
              </div>

              <div className="bg-slate-800/30 backdrop-blur-sm border border-slate-700 rounded-lg p-4">
                <h4 className="text-xl font-semibold">{item.institution}</h4>
                <p className="text-slate-300">{item.degree}</p>
                <div className="flex justify-between items-center mt-2">
                  <span className="text-slate-400 text-sm">{item.location}</span>
                  <Badge variant="outline" className="bg-slate-800 border-slate-700">
                    {item.period}
                  </Badge>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <div className="space-y-8">
        <h3 className="text-2xl font-bold flex items-center gap-2">
          <Award className="h-5 w-5 text-violet-400" />
          Certifications
        </h3>

        <div className="space-y-4">
          {certifications.map((cert, index) => (
            <motion.div
              key={cert.id}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="bg-slate-800/30 backdrop-blur-sm border border-slate-700 rounded-lg p-4 flex items-center gap-4"
            >
              <div className={`p-2 rounded-full bg-gradient-to-r ${cert.color}`}>{cert.icon}</div>

              <div>
                <h4 className="font-semibold">{cert.name}</h4>
                <p className="text-slate-400 text-sm">{cert.issuer}</p>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="mt-8">
          <h3 className="text-2xl font-bold mb-4">Technical Expertise</h3>
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
                <Badge className="bg-slate-800 hover:bg-slate-700 text-slate-200 border-slate-700">{skill}</Badge>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

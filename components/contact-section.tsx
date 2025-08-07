"use client"

import type React from "react"

import { useState } from "react"
import { motion } from "framer-motion"
import { Github, Linkedin, Mail, Phone, Send } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function ContactSection() {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    message: "",
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormState({
      ...formState,
      [e.target.id]: e.target.value,
    })
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Form submission logic would go here
    console.log(formState)
    alert("Thanks for your message! This form doesn't actually submit in this demo.")
  }

  return (
    <div className="grid md:grid-cols-2 gap-8">
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="bg-[#201C2B] rounded-md border border-[#2D2B3A] p-6 max-w-xl mx-auto"
    >
      <h3 className="text-xl font-mono text-[#F8F8F2] mb-6 text-center">Get in Touch</h3>

      <p className="text-[#A39DAC] font-mono text-center mb-4">
        I’m excited to connect! Whether you have a project in mind, want to collaborate, or just want to say hi,
        don’t hesitate to reach out. I’m always open to new opportunities and conversations.
      </p>

      <p className="text-[#A39DAC] font-mono text-center leading-relaxed">
        You can reach me via email or social media (details are provided elsewhere on this site). Looking forward to hearing from you!
      </p>
    </motion.div>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="bg-[#201C2B] rounded-md border border-[#2D2B3A] p-6"
      >
        <h3 className="text-xl font-mono text-[#F8F8F2] mb-6">Contact Information</h3>
        <p className="text-[#A39DAC] mb-8">
          Feel free to reach out for collaboration opportunities, project inquiries, or just to say hello!
        </p>

        <div className="space-y-6">
          <motion.div whileHover={{ x: 5 }} className="flex items-center gap-4">
            <div className="p-3 bg-[#2D2B3A] text-[#80FFEA] rounded-md">
              <Mail className="h-5 w-5" />
            </div>
            <div>
              <h4 className="text-sm font-mono text-[#A39DAC]">_email</h4>
              <a
                href="mailto:garvthakralfx@gmail.com"
                className="text-[#F8F8F2] hover:text-[#FF7EDB] transition-colors"
              >
                garvthakralfx@gmail.com
              </a>
            </div>
          </motion.div>



          <motion.div whileHover={{ x: 5 }} className="flex items-center gap-4">
            <div className="p-3 bg-[#2D2B3A] text-[#80FFEA] rounded-md">
              <Github className="h-5 w-5" />
            </div>
            <div>
              <h4 className="text-sm font-mono text-[#A39DAC]">_github</h4>
              <a
                href="https://github.com/GarvThakral"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#F8F8F2] hover:text-[#FF7EDB] transition-colors"
              >
                github.com/GarvThakral
              </a>
            </div>
          </motion.div>

          <motion.div whileHover={{ x: 5 }} className="flex items-center gap-4">
            <div className="p-3 bg-[#2D2B3A] text-[#80FFEA] rounded-md">
              <Linkedin className="h-5 w-5" />
            </div>
            <div>
              <h4 className="text-sm font-mono text-[#A39DAC]">_linkedin</h4>
              <a
                href="https://linkedin.com/in/garv-thakral08"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#F8F8F2] hover:text-[#FF7EDB] transition-colors"
              >
                linkedin.com/in/garv-thakral08
              </a>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </div>
  )
}

"use client"

import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"
import { Card, CardContent } from "@/components/ui/card"
import { GraduationCap, Users, Calendar, Briefcase, Award } from "lucide-react"

export default function Experience() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const experiences = [
    {
      organization: "Djezzy",
      icon: <Briefcase className="w-5 h-5" />,
      type: "internship",
      roles: [
        {
          title: "Data Science & AI / Backend Engineering Intern",
          period: "June 2026 - July 2026",
          description:
            "Contributed to an enterprise Business Copilot integrating Agentic RAG and Text-to-SQL for querying complex relational databases. Modeled and optimized PostgreSQL & pgvector queries for high integrity, fast response times, and large transaction volumes.",
        },
      ],
    },
    {
      organization: "Orientation ESI",
      icon: <Briefcase className="w-5 h-5" />,
      type: "automation",
      roles: [
        {
          title: "Helpdesk & Automation Agent",
          period: "July 2026 - August 2026",
          description:
            "Engineered automated Python pipelines and OCR extraction tools to streamline the validation and processing of student candidate files.",
        },
      ],
    },
    {
      organization: <a href="https://www.instagram.com/etic_club/" target="_blank" rel="noopener noreferrer">ETIC Club</a>,
      icon: <Calendar className="w-5 h-5" />,
      type: "leadership",
      roles: [
        {
          title: "Development Department Manager",
          period: "August 2025 - August 2026",
          description:
            "Supervised end-to-end full-stack web platforms (React, Next.js, Node.js, RBAC permissions, Discord bot integration). Mentored and trained 25+ developers on Git workflows, software architecture, and led production code reviews.",
        },
        {
          title: "Technical Hackathon Coach & Mentor",
          period: "2025 - 2026",
          description:
            "Mentored and coached 23 developer teams during national hackathons (TCXII & AUP4) on modular system architecture, API design, and rapid prototyping under strict time constraints.",
        },
        {
          title: "Before S2EE 16 Event Coordinator",
          period: "March - May 2025",
          description:
            "Coordinated logistics and team workflows for the prominent S2EE event, driving student tech engagement and organizational excellence.",
        },
      ],
    },
    {
      organization: "Smart DZ Hackathon (Guiddini)",
      icon: <Award className="w-5 h-5" />,
      type: "award",
      roles: [
        {
          title: "1st Prize Winner — Hackathon Smart DZ",
          period: "2026",
          description:
            "Awarded 1st place for Project Maida: a full-fledged modular restaurant and business management ecosystem of 6 interconnected micro-applications with FastAPI backend, Next.js frontend, and reliable transaction flows.",
        },
      ],
    },
    {
      organization: "Cosider Travaux Publics",
      icon: <Briefcase className="w-5 h-5" />,
      type: "internship",
      roles: [
        {
          title: "IT & Systems Intern",
          period: "June - July 2025",
          description:
            "Administered and maintained Linux enterprise servers, performed network diagnostics, configured access security controls, and provided system-level technical support.",
        },
      ],
    },
    {
      organization: <a href="https://www.esi.dz/" target="_blank" rel="noopener noreferrer">ESI Algiers (École Nationale Supérieure d'Informatique)</a>,
      icon: <GraduationCap className="w-5 h-5" />,
      type: "education",
      roles: [
        {
          title: "Engineering Degree in Computer Science (Cycle Ingénieur)",
          period: "2024 - 2029 (Expected)",
          description:
            "Focusing on software engineering, operating systems & computer networks, relational and distributed databases, advanced algorithms, and secure web application development.",
        },
      ],
    },
    {
      organization: <a href="https://www.instagram.com/shellmates/" target="_blank" rel="noopener noreferrer">Shellmates Club</a>,
      icon: <Users className="w-5 h-5" />,
      type: "membership",
      roles: [
        {
          title: "Active Member",
          period: "2024 - Present",
          description:
            "Member of Shellmates cybersecurity club, exploring web security, penetration testing, and participating in CTF competitions.",
        },
      ],
    },
    {
      organization: <a href="https://www.instagram.com/soai_algiers/" target="_blank" rel="noopener noreferrer">SOAI Club</a>,
      icon: <Users className="w-5 h-5" />,
      type: "membership",
      roles: [
        {
          title: "Active Member",
          period: "2024 - Present",
          description:
            "Contributing member of the School of AI Algiers club, engaging in machine learning workshops and collaborative AI projects.",
        },
      ],
    },
  ]

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  }

  const item = {
    hidden: { opacity: 0, x: -20 },
    show: { opacity: 1, x: 0 },
  }

  return (
    <section id="experience" className="py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          <span className="gradient-text">Experience</span> & Education
        </h2>

        <motion.div
          ref={ref}
          initial="hidden"
          animate={inView ? "show" : "hidden"}
          variants={container}
          className="max-w-4xl mx-auto space-y-8"
        >
          {experiences.map((exp, index) => (
            <motion.div key={index} variants={item}>
              <Card className="overflow-hidden">
                <CardContent className="p-6">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="p-2 rounded-full bg-primary/10 text-primary">{exp.icon}</div>
                    <h3 className="text-xl font-semibold text-primary">{exp.organization}</h3>
                  </div>

                  <div className="relative">
                    {exp.roles.map((role, roleIndex) => (
                      <div key={roleIndex} className="relative flex gap-4 pb-6 last:pb-0">
                        <div className="flex flex-col items-center">
                          <div className="w-3 h-3 rounded-full bg-primary border-2 border-background shadow-sm"></div>
                          {roleIndex < exp.roles.length - 1 && <div className="w-0.5 h-full bg-border mt-2"></div>}
                        </div>

                        <div className="flex-1 min-w-0">
                          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-2">
                            <h4 className="text-lg font-medium">{role.title}</h4>
                            <span className="text-sm text-muted-foreground font-medium">{role.period}</span>
                          </div>
                          <p className="text-muted-foreground text-sm leading-relaxed">{role.description}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

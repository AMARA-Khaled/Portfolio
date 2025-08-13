"use client"

import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"
import { Card, CardContent } from "@/components/ui/card"
import { GraduationCap, Users, Calendar } from "lucide-react"
import { Briefcase } from "lucide-react"

export default function Experience() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const experiences = [
    {
      organization: <a href="https://www.esi.dz/">ESI Algiers</a>,
      icon: <GraduationCap className="w-5 h-5" />,
      type: "education",
      roles: [
        {
          title: "Computer Science Student",
          period: "2024 - Present (2nd Year)",
          description:
            "2nd year Computer Science student focusing on software development, algorithms, and data structures.",
        },
      ],
    },
    {
      organization: "Cosider TP - CSI",
      icon: <Briefcase className="w-5 h-5" />,
      type: "internship",
      roles: [
        {
          title: "Intern",
          period: "June - July 2025",
          description:
            "Completed a 2-week internship at Cosider TP - CSI, gaining practical and theoretical experience in software development, company hierarchy and project management.",
        },
      ],
    },
    {
      organization: <a href="https://www.instagram.com/etic_club/">ETIC Club</a>,
      icon: <Calendar className="w-5 h-5" />,
      type: "leadership",
      roles: [
        {
          title: "Development Department Manager",
          period: "August 2025 - Present",
          description:
            "Leading the development department, overseeing technical projects and mentoring team members in software development practices.",
        },
        {
          title: "S2EE 16 Event Coordinator",
          period: "March - May 2025",
          description:
            "Coordinated events for the ETIC Club, demonstrating leadership and organizational skills in tech community building and project management.",
        },
      ],
    },
    {
      organization: <a href="https://www.instagram.com/soai_algiers/">SOAI Club</a>,
      icon: <Users className="w-5 h-5" />,
      type: "membership",
      roles: [
        {
          title: "Active Member",
          period: "2024 - Present",
          description:
            "Contributing member of SOAI Club, participating in various tech initiatives and collaborative projects.",
        },
      ],
    },
    {
      organization: <a href="https://www.instagram.com/shellmates/">Shellmates Club</a>,
      icon: <Users className="w-5 h-5" />,
      type: "membership",
      roles: [
        {
          title: "Active Member",
          period: "2024 - Present",
          description:
            "Member of Shellmates cybersecurity club, exploring security concepts and participating in CTF competitions.",
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

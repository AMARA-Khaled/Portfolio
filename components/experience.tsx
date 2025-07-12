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
      title: "Computer Science Student",
      organization: <a href="https://www.esi.dz/">ESI Algiers</a>,
      period: "2024 - Present (2nd Year)",
      description:
         "2nd year Computer Science student focusing on software development, algorithms, and data structures.",
      icon: <GraduationCap className="w-5 h-5" />,
      type: "education",
   },
   {
      title: "Intern",
      organization: "Cosider TP - CSI",
      period: "June - July 2025",
      description:
         "Completed a 2-week internship at Cosider TP - CSI, gaining practical and theoretical experience in software development, company hierarchy and project management.",
      icon: <Briefcase className="w-5 h-5" />, // Special icon for internship
      type: "internship",
   },
   {
      title: "Next.js Intern",
      organization: <a href="https://arimayi.fr/">AriMayi</a>,
      period: "July 2025 - Present",
      description:
         "Remote internship focused on developing and maintaining web applications using Next.js, collaborating with cross-functional teams, and implementing modern frontend features to enhance user experience.",
      icon: <Briefcase className="w-5 h-5" />, // Special icon for internship
      type: "education",
   },
   {
      title: "Before S2EE 16 Event Coordinator",
      organization: <a href="https://www.instagram.com/etic_club/">ETIC Club</a>,
      period: "Mars - May 2025",
      description:
         "Event coordinator for the ETIC Club, demonstrating leadership and organizational skills in tech community building and event management.",
      icon: <Calendar className="w-5 h-5" />,
      type: "leadership",
   },
   {
      title: "Active Member",
      organization: <a href="https://www.instagram.com/etic_club/">ETIC Club</a>,
      period: "2024 - Present",
      description:
         "Contributing member of ETIC Club, participating in various initiatives and collaborative projects.",
      icon: <Users className="w-5 h-5" />,
      type: "membership",
   },
   {
      title: "Active Member",
      organization: <a href="https://www.instagram.com/soai_algiers/">SOAI Club</a>,
      period: "2024 - Present",
      description:
         "Contributing member of SOAI Club, participating in various tech initiatives and collaborative projects.",
      icon: <Users className="w-5 h-5" />,
      type: "membership",
   },
   {
      title: "Active Member",
      organization: <a href="https://www.instagram.com/shellmates/">Shellmates Club</a>,
      period: "2024 - Present",
      description:
         "Member of Shellmates cybersecurity club, exploring security concepts and participating in CTF competitions.",
      icon: <Users className="w-5 h-5" />,
      type: "membership",
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
          className="max-w-4xl mx-auto"
        >
          <div className="relative">
            {experiences.map((exp, index) => (
              <motion.div key={index} variants={item} className="experience-item">
                <Card className="ml-6">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <div className="p-2 rounded-full bg-primary/10 text-primary">{exp.icon}</div>
                      <div className="flex-1">
                        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-2">
                          <h3 className="text-xl font-semibold">{exp.title}</h3>
                          <span className="text-sm text-muted-foreground">{exp.period}</span>
                        </div>
                        <h4 className="text-primary font-medium mb-2">{exp.organization}</h4>
                        <p className="text-muted-foreground">{exp.description}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}

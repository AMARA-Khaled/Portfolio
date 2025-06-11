"use client"

import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"
import {
  Html5,
  Css3,
  Javascript,
  Typescript,
  ReactLogo,
  Nextdotjs,
  Nodedotjs,
  Python,
  C,
  Cplusplus,
  Vercel,
  Tailwindcss,
  Express,
  Mongodb,
  Mysql,
  Git,
  Linux,
} from "@/components/tech-icons"

export default function TechStack() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 },
  }

  const techStack = [
    { icon: <Html5 />, name: "HTML" },
    { icon: <Css3 />, name: "CSS" },
    { icon: <Tailwindcss />, name: "Tailwind" },
    { icon: <Javascript />, name: "JavaScript" },
    { icon: <Typescript />, name: "TypeScript" },
    { icon: <ReactLogo />, name: "React" },
    { icon: <Nextdotjs />, name: "Next.js" },
    { icon: <Nodedotjs />, name: "Node.js" },
    { icon: <Python />, name: "Python" },
    { icon: <C />, name: "C" },
    { icon: <Cplusplus />, name: "C++" },
    { icon: <Vercel />, name: "Vercel" },
  ]

  const learning = [
    { icon: <Express />, name: "Express" },
    { icon: <Mongodb />, name: "MongoDB" },
    { icon: <Mysql />, name: "MySQL" },
  ]

  const additionalSkills = [
    { icon: <Git />, name: "Git" },
    { icon: <Linux />, name: "Linux" },
  ]

  return (
    <section id="skills" className="py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          <span className="gradient-text">Tech</span> Stack
        </h2>

        <motion.div
          ref={ref}
          initial="hidden"
          animate={inView ? "show" : "hidden"}
          variants={container}
          className="max-w-4xl mx-auto"
        >
          <div className="mb-12">
            <h3 className="text-2xl font-semibold mb-6 text-center">Technologies I Work With</h3>
            <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-7 gap-8">
              {techStack.map((tech, index) => (
                <motion.div key={index} variants={item} className="flex flex-col items-center">
                  <div className="w-12 h-12 mb-2 tech-icon">{tech.icon}</div>
                  <span className="text-sm text-center">{tech.name}</span>
                </motion.div>
              ))}
            </div>
          </div>

          <div className="mb-12">
            <h3 className="text-2xl font-semibold mb-6 text-center">Currently Learning</h3>
            <div className="grid grid-cols-3 gap-8 max-w-md mx-auto">
              {learning.map((tech, index) => (
                <motion.div key={index} variants={item} className="flex flex-col items-center">
                  <div className="w-12 h-12 mb-2 tech-icon">{tech.icon}</div>
                  <span className="text-sm text-center">{tech.name}</span>
                </motion.div>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-2xl font-semibold mb-6 text-center">Additional Skills</h3>
            <div className="grid grid-cols-4 gap-8 max-w-md mx-auto">
              {additionalSkills.map((tech, index) => (
                <motion.div key={index} variants={item} className="flex flex-col items-center">
                  <div className="w-12 h-12 mb-2 tech-icon">{tech.icon}</div>
                  <span className="text-sm text-center">{tech.name}</span>
                </motion.div>
              ))}
              <motion.div variants={item} className="flex flex-col items-center">
                <div className="w-12 h-12 mb-2 flex items-center justify-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="w-8 h-8"
                  >
                    <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
                    <line x1="16" y1="2" x2="16" y2="6" />
                    <line x1="8" y1="2" x2="8" y2="6" />
                    <line x1="3" y1="10" x2="21" y2="10" />
                    <path d="M8 14h.01" />
                    <path d="M12 14h.01" />
                    <path d="M16 14h.01" />
                    <path d="M8 18h.01" />
                    <path d="M12 18h.01" />
                  </svg>
                </div>
                <span className="text-sm text-center">Event Management</span>
              </motion.div>
              <motion.div variants={item} className="flex flex-col items-center">
                <div className="w-12 h-12 mb-2 flex items-center justify-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="w-8 h-8"
                  >
                    <rect x="3" y="3" width="18" height="18" rx="2" ry="2" />
                    <path d="M9 9h6" />
                    <path d="M9 15h6" />
                    <path d="M9 12h6" />
                    <path d="M6 9h.01" />
                    <path d="M6 12h.01" />
                    <path d="M6 15h.01" />
                  </svg>
                </div>
                <span className="text-sm text-center">Project Management</span>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

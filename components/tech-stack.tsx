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
  Assembly,
  Tailwindcss,
  Express,
  Mongodb,
  Mysql,
  Git,
  Linux,
   Bash,
   Pandas,
   Numpy,
   ScikitLearn,
   Tensorflow,
   Django,
   Docker,
   Github
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
    { icon: <Assembly />, name: "Assembly" },
    { icon: <Nodedotjs />, name: "Node.js" },
    { icon: <Python />, name: "Python" },
    { icon: <C />, name: "C" },
    { icon: <Cplusplus />, name: "C++" },
    { icon: <Vercel />, name: "Vercel" },
    { icon: <Express />, name: "Express" },
    { icon: <Mongodb />, name: "MongoDB" },
    { icon: <Mysql />, name: "MySQL" },
    { icon: <Bash />, name: "Bash" },
    { icon: <Pandas />, name: "Pandas" },
    { icon: <Numpy />, name: "Numpy" },
    { icon: <ScikitLearn />, name: "Scikit Learn" },

  ]

  const learning = [
    { icon: <Tensorflow />, name: "TensorFlow" },
    { icon: <Django />, name: "Django" },
    { icon: <Docker />, name: "Docker" },
  ]

  const additionalSkills = [
    { icon: <Git />, name: "Git" },
    { icon: <Linux />, name: "Linux" },
    { icon: <Github />, name: "GitHub" },
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
            <div className="grid grid-cols-3 gap-8 max-w-md mx-auto">
              {additionalSkills.map((tech, index) => (
                <motion.div key={index} variants={item} className="flex flex-col items-center">
                  <div className="w-12 h-12 mb-2 tech-icon">{tech.icon}</div>
                  <span className="text-sm text-center">{tech.name}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

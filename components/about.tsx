"use client"

import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"

export default function About() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  return (
    <section id="about" className="py-20 relative overflow-hidden bg-muted/30">

      {/* Content */}
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5 }}
          className="max-w-4xl mx-auto"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">
            <span className="text-green-500" style={{ textShadow: "2px 2px 4px rgba(0, 0, 0, 0.5)" }}>
              About
            </span>{" "}
            <span style={{ textShadow: "2px 2px 4px rgba(0, 0, 0, 0.5)" }}>Me</span>
          </h2>
          <div className="bg-card/90 backdrop-blur-sm rounded-lg p-6 md:p-8 shadow-lg border">
            <p className="text-lg mb-6">
              Welcome to my portfolio! I'm a second-year Computer Science student at ESI Algiers with a passion for technology, 
              problem-solving, and community-driven projects. 
              I balance academic growth with active participation in tech clubs and hands-on development work.
            </p>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h3 className="text-xl font-semibold mb-4 gradient-text">What I Do</h3>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <span className="text-primary mr-2">▹</span>
                    <span>Web development (front-end & back-end)</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary mr-2">▹</span>
                    <span>Data science & AI projects</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary mr-2">▹</span>
                    <span>Leadership & event coordination at ETIC Club</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary mr-2">▹</span>
                    <span>Game development with Godot (beginner)</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary mr-2">▹</span>
                    <span>Exploring cybersecurity & participating in CTFs</span>
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-4 gradient-text">Personal Interests</h3>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <span className="text-primary mr-2">▹</span>
                    <span>Learning new programming languages & frameworks</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary mr-2">▹</span>
                    <span>Active member in student-led clubs</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary mr-2">▹</span>
                    <span>Data-driven problem solving</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary mr-2">▹</span>
                    <span>Low-level programming & performance optimization</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary mr-2">▹</span>
                    <span>Building innovative web applications</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

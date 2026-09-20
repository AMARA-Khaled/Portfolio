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
              Welcome to my portfolio! I'm a Computer Science Engineering student at the National Higher School of Computer Science (ESI Algiers) and a versatile Full Stack &amp; Backend Developer. I specialize in building robust web platforms, high-performance backend APIs, and transactional systems with clean architecture. With a strong foundation in software engineering and hands-on experience in leadership, AI integration, and hackathons, I thrive on turning complex problems into scalable digital solutions.
            </p>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h3 className="text-xl font-semibold mb-4 gradient-text">What I Do</h3>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <span className="text-primary mr-2">▹</span>
                    <span>Full-stack web development (React, Next.js, Node.js, FastAPI)</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary mr-2">▹</span>
                    <span>Database modeling & query optimization (PostgreSQL, pgvector, MySQL, NoSQL)</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary mr-2">▹</span>
                    <span>AI integrations, Agentic RAG, Text-to-SQL & data pipelines</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary mr-2">▹</span>
                    <span>Development Department Manager & Technical Mentor at ETIC Club</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary mr-2">▹</span>
                    <span>Cloud, Linux server administration, Docker & DevOps practices</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary mr-2">▹</span>
                    <span>Secure API architecture (JWT, OAuth, RBAC) & web security</span>
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-4 gradient-text">Personal Interests</h3>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <span className="text-primary mr-2">▹</span>
                    <span>FinTech, digital payments & transactional integrity</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary mr-2">▹</span>
                    <span>Distributed systems, resilient microservices & Cloud computing</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary mr-2">▹</span>
                    <span>Mentoring student developers & coaching hackathon teams</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary mr-2">▹</span>
                    <span>Open-source tooling & browser automation (MCP, CDP, WebSockets)</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary mr-2">▹</span>
                    <span>Algerian startup ecosystem & technological innovation</span>
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

"use client"

import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ExternalLink, Github } from "lucide-react"

export default function Projects() {
   const [ref, inView] = useInView({
      triggerOnce: true,
      threshold: 0.1,
   })

   const projects = [
      {
         title: "Wrave – MCP Gateway & Browser Automation",
         description:
            "High-performance Model Context Protocol (MCP) gateway connecting AI harnesses (Claude Code, Antigravity, Cursor, Codex) to Brave Browser via Chrome DevTools Protocol (CDP) and duplex WebSockets. Features 21 automation primitives including 1-turn compound actions.",
         technologies: ["TypeScript", "Node.js", "MCP", "CDP", "WebSocket", "Brave Browser"],
         githubUrl: "https://github.com/AMARA-Khaled/wrave",
         featured: true,
      },
      {
         title: "Maida – Modular POS & Management System",
         description:
            "Modular commercial and restaurant management system composed of 6 interconnected micro-applications (POS, real-time order processing, inventory tracking). Backend designed with FastAPI & Node.js with PostgreSQL ACID transactional integrity. 1st Prize Winner at Hackathon Smart DZ (Guiddini).",
         technologies: ["Next.js", "FastAPI", "Python", "PostgreSQL", "TypeScript", "TailwindCSS"],
         featured: true,
      },
      {
         title: "Doctorcom – Intelligent Medical Platform",
         description:
            "Full-stack medical management web platform featuring diagnostic assistance, sensitive patient records, and automated clinical report generation. Built with React, Express, tRPC, PostgreSQL, and TanStack Query.",
         technologies: ["React", "Express.js", "tRPC", "PostgreSQL", "TanStack", "TypeScript"],
         githubUrl: "https://github.com/AMARA-Khaled/doctor.com",
         featured: true,
      },
      {
         title: "ETIC Talents & S2EE Platform – Enterprise ERP",
         description:
            "Comprehensive internal ERP and applicant tracking portal for ETIC Club, featuring automated Discord bot notifications, granular RBAC permissions, and recruitment pipeline tracking.",
         technologies: ["Next.js", "React", "TypeScript", "TanStack", "Discord.js", "PostgreSQL"],
         featured: true,
      },
      {
         title: "Meow-ssion Impossible Website",
         description:
            "A website to Download and Explore an indie game, using Next.js. Features an engaging interface for game discovery and download functionality with modern web technologies.",
         technologies: ["Next.js", "React", "TypeScript", "TailwindCSS"],
         liveUrl: "https://meow-ssion-impossible.vercel.app/",
         githubUrl: "https://github.com/AMARA-Khaled/meow-ssion-impossible-website",
         featured: false,
      },
      {
         title: "Optimized Word Search Using BST Variants",
         description:
            "Academic algorithmic research project evaluating different Binary Search Tree (BST) variants to optimize word lookup and range searches. Implemented in C and supported by Python for performance visualization.",
         technologies: ["C", "Python", "Data Structures", "Algorithm Analysis"],
         githubUrl: "https://github.com/AMARA-Khaled/Optimized-Word-Search-Using-BST-Variants",
         featured: false,
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
      hidden: { opacity: 0, y: 20 },
      show: { opacity: 1, y: 0 },
   }

   return (
      <section id="projects" className="py-20 bg-muted/30">
         <div className="container mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
               Featured <span className="gradient-text">Projects</span>
            </h2>

            <motion.div
               ref={ref}
               initial="hidden"
               animate={inView ? "show" : "hidden"}
               variants={container}
               className="grid md:grid-cols-2 gap-6 max-w-6xl mx-auto"
            >
               {projects.map((project, index) => (
                  <motion.div key={index} variants={item}>
                     <Card className={`h-full project-card ${project.featured ? "border-primary/50" : ""}`}>
                        <CardHeader>
                           <div className="flex items-start justify-between">
                              <div>
                                 <CardTitle className="text-xl mb-2">
                                    {project.title}
                                    {project.featured && (
                                       <Badge variant="secondary" className="ml-2">
                                          Featured
                                       </Badge>
                                    )}
                                 </CardTitle>
                                 <CardDescription className="text-base">{project.description}</CardDescription>
                              </div>
                           </div>
                        </CardHeader>
                        <CardContent>
                           <div className="flex flex-wrap gap-2 mb-4">
                              {project.technologies.map((tech, techIndex) => (
                                 <Badge key={techIndex} variant="outline">
                                    {tech}
                                 </Badge>
                              ))}
                           </div>
                           <div className="flex gap-2">
                              {project.liveUrl && (
                                 <Button size="sm" asChild>
                                    <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                                       <ExternalLink className="w-4 h-4 mr-2" />
                                       Live Demo
                                    </a>
                                 </Button>
                              )}
                              {project.githubUrl && (
                                 <Button size="sm" variant="outline" asChild>
                                    <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                                       <Github className="w-4 h-4 mr-2" />
                                       Code
                                    </a>
                                 </Button>
                              )}
                              {!project.githubUrl && !project.liveUrl && (
                                 <Button size="sm" variant="outline" disabled>
                                    Private Project
                                 </Button>
                              )}
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

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
      title: "Needs.ai",
      description:
        "A full-stack product demand prediction website built with React.js, Express.js, and Python. Enables users to manage products and visualize future needs through advanced prediction algorithms.",
      technologies: ["React.js", "Express.js", "Python", "Machine Learning"],
      liveUrl: "https://needs-ai.vercel.app/",
      githubUrl: null,
      featured: true,
    },
    {
      title: "Occupational Health Medical Visit Management",
      description:
        "A console-based system built in C to manage employee health visits, featuring efficient data storage and retrieval for patient information management.",
      technologies: ["C", "Data Structures", "File I/O"],
      githubUrl: "https://github.com/AMARA-Khaled/Occupational-Health-Medical-Visit-Management",
      featured: false,
    },
    {
      title: "Address Book Management System",
      description:
        "A low-level address book tool developed using x86 Assembly language for efficient data storage and basic user interactions.",
      technologies: ["Assembly", "x86", "Low-level Programming"],
      githubUrl: "https://github.com/AMARA-Khaled/adress-book-management-system",
      featured: false,
    },
    {
      title: "ETIC Friv",
      description:
        "An internal club project developed for ETIC Club, showcasing web development skills and contributing to the club's digital presence. Private club project.",
      technologies: ["Web Development", "JavaScript", "HTML/CSS"],
      githubUrl: null,
      featured: false,
    },
    {
      title: "Meow-ssion Impossible Website",
      description:
        "A website to Download and Explore a game, using Next.js. Features an engaging interface for game discovery and download functionality with modern web technologies.",
      technologies: ["Next.js", "React", "JavaScript", "Web Development"],
      githubUrl: "https://github.com/AMARA-Khaled/meow-ssion-impossible-website",
      featured: false,
    },
    {
      title: "Optimized Word Search Using BST Variants",
      description:
        "This academic project explores and evaluates different Binary Search Tree (BST) variants to optimize word search operations. Implemented in C and supported by Python for performance visualization, the project compares standard and customized BSTs to improve efficiency in single word and range searches. Detailed methodology and results are documented in accompanying reports and graphs.",
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

"use client"

import { useEffect, useState } from "react"
import { Button } from "@/components/ui/button"
import { ArrowDown, Github, Linkedin, Mail } from "lucide-react"
import { motion } from "framer-motion"

export default function Hero() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) return null

  return (
    <section className="relative min-h-screen flex flex-col justify-center items-center pt-16 pb-32 overflow-hidden">
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(74,222,128,0.1),transparent_50%)]" />
      </div>

      <div className="container mx-auto px-4 flex flex-col items-center text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-6"
        >
           <div>
            <img
              src="/DSC09464.jpg"
              alt="weeed"
              className="w-60 h-60 rounded-full flex items-center justify-center text-6xl font-bold mb-4 mx-auto shadow-[0_0_50px_rgba(74,222,128,0.5)]"
              loading="lazy"
              onError={(e) => {
               // fallback for image not found
               (e.currentTarget as HTMLImageElement).style.display = "none"
              }}
            />
           </div>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-4xl md:text-6xl font-bold mb-4"
        >
          Hi, I'm <span className="gradient-text">Amara Khaled Walid</span>
        </motion.h1>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mb-8 h-12 flex justify-center"
        >
          <div className="typing-demo text-xl md:text-2xl">Full Stack Developer</div>
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="text-muted-foreground text-lg md:text-xl max-w-2xl mb-8"
        >
          Computer Science Student at ESI Algiers passionate about web development, data science, and open source.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.8 }}
          className="flex flex-wrap gap-4 justify-center mb-12"
        >
          <Button asChild size="lg">
            <a href="#projects">View My Work</a>
          </Button>
          <Button variant="outline" size="lg" asChild>
            <a href="#contact">Contact Me</a>
          </Button>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 1 }}
          className="flex gap-4"
        >
          <a
            href="https://github.com/AMARA-Khaled"
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 rounded-full bg-muted hover:bg-primary/20 transition-colors"
          >
            <Github className="w-6 h-6" />
            <span className="sr-only">GitHub</span>
          </a>
          <a
            href="https://www.linkedin.com/in/amara-khaled-walid-782b9833b/"
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 rounded-full bg-muted hover:bg-primary/20 transition-colors"
          >
            <Linkedin className="w-6 h-6" />
            <span className="sr-only">LinkedIn</span>
          </a>
          <a href="mailto:ok_amara@esi.dz" className="p-2 rounded-full bg-muted hover:bg-primary/20 transition-colors">
            <Mail className="w-6 h-6" />
            <span className="sr-only">Email</span>
          </a>
        </motion.div>
      </div>

      <div className="absolute bottom-8 left-50% transform -translate-x-1/2 animate-bounce">
        <Button
          variant="ghost"
          size="icon"
          onClick={() =>
            document.getElementById("about")?.scrollIntoView({
              behavior: "smooth",
            })
          }
        >
          <ArrowDown className="h-6 w-6" />
        </Button>
      </div>
    </section>
  )
}

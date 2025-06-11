"use client"

import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Github, Linkedin, Mail, MapPin, Instagram } from "lucide-react"

export default function Contact() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

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

  const contactInfo = [
    {
      icon: <Mail className="w-5 h-5" />,
      label: "Email",
      value: "ok_amara@esi.dz",
      href: "mailto:ok_amara@esi.dz",
    },
    {
      icon: <MapPin className="w-5 h-5" />,
      label: "Location",
      value: "Algiers, Algeria",
      href: null,
    },
  ]

  const socialLinks = [
    {
      icon: <Github className="w-6 h-6" />,
      label: "GitHub",
      href: "https://github.com/AMARA-Khaled",
    },
    {
      icon: <Linkedin className="w-6 h-6" />,
      label: "LinkedIn",
      href: "https://www.linkedin.com/in/amara-khaled-walid-782b9833b/",
    },
    {
      icon: <Instagram className="w-6 h-6" />,
      label: "Instagram",
      href: "https://www.instagram.com/amrweed.k/",
    },
    {
      icon: <Mail className="w-6 h-6" />,
      label: "Email",
      href: "mailto:ok_amara@esi.dz",
    },
  ]

  return (
    <section id="contact" className="py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          Get In <span className="gradient-text">Touch</span>
        </h2>

        <motion.div
          ref={ref}
          initial="hidden"
          animate={inView ? "show" : "hidden"}
          variants={container}
          className="max-w-2xl mx-auto"
        >
          <motion.div variants={item}>
            <Card>
              <CardHeader>
                <CardTitle>Let's Connect</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-6">
                  I'm always interested in new opportunities and collaborations. Whether you have a project in mind or
                  just want to connect, feel free to reach out through any of these platforms!
                </p>

                <div className="space-y-4 mb-6">
                  {contactInfo.map((info, index) => (
                    <div key={index} className="flex items-center gap-3">
                      <div className="p-2 rounded-full bg-primary/10 text-primary">{info.icon}</div>
                      <div>
                        <p className="font-medium">{info.label}</p>
                        {info.href ? (
                          <a href={info.href} className="text-muted-foreground hover:text-primary transition-colors">
                            {info.value}
                          </a>
                        ) : (
                          <p className="text-muted-foreground">{info.value}</p>
                        )}
                      </div>
                    </div>
                  ))}
                </div>

                <div className="flex gap-4 justify-center">
                  {socialLinks.map((link, index) => (
                    <a
                      key={index}
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-3 rounded-full bg-muted hover:bg-primary/20 transition-colors"
                      aria-label={link.label}
                    >
                      {link.icon}
                    </a>
                  ))}
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

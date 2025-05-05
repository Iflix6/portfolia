"use client"

import { motion } from "framer-motion"
import { Palette, FileText, PenTool, Laptop } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

export default function Services() {
  const services = [
    {
      icon: <Palette className="h-10 w-10 text-rose-500" />,
      title: "Graphic Design",
      description:
        "Creative visual solutions including logos, branding, marketing materials, and digital assets tailored to your brand identity.",
    },
    {
      icon: <FileText className="h-10 w-10 text-rose-500" />,
      title: "Seminar Writing",
      description:
        "Comprehensive seminar papers and presentations crafted with thorough research and clear, engaging content.",
    },
    {
      icon: <PenTool className="h-10 w-10 text-rose-500" />,
      title: "Project Writing",
      description:
        "Well-structured project documents, reports, and proposals with professional formatting and compelling narratives.",
    },
    {
      icon: <Laptop className="h-10 w-10 text-rose-500" />,
      title: "Desktop Publishing",
      description:
        "Expert layout design for books, magazines, newsletters, and other publications with attention to typography and readability.",
    },
  ]

  return (
    <section
      id="services"
      className="py-20 bg-gradient-to-b from-slate-50 to-white dark:from-slate-800 dark:to-slate-900 relative overflow-hidden"
    >
      {/* Gradient blobs */}
      <div className="absolute top-1/4 right-0 -z-10 h-[400px] w-[400px] rounded-full bg-gradient-to-r from-orange-400/5 to-rose-500/5 dark:from-orange-400/10 dark:to-rose-500/10 blur-3xl" />
      <div className="absolute bottom-1/4 left-0 -z-10 h-[400px] w-[400px] rounded-full bg-gradient-to-r from-blue-500/5 to-purple-500/5 dark:from-blue-500/10 dark:to-purple-500/10 blur-3xl" />

      <div className="container px-4 md:px-6 max-w-5xl mx-auto">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold tracking-tight text-slate-900 dark:text-white">My Services</h2>
            <div className="w-20 h-1 bg-gradient-to-r from-rose-500 to-orange-400 mx-auto mt-2 mb-6"></div>
            <p className="text-slate-700 dark:text-slate-300 max-w-2xl mx-auto">
              I offer a range of creative services to help businesses and individuals communicate effectively and stand
              out.
            </p>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="h-full border-none shadow-lg hover:shadow-xl transition-shadow duration-300 bg-white/80 dark:bg-slate-900/80 backdrop-blur-sm">
                <CardHeader className="pb-2">
                  <div className="mb-4">{service.icon}</div>
                  <CardTitle className="text-xl text-slate-900 dark:text-white">{service.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-slate-700 dark:text-slate-300 text-base">
                    {service.description}
                  </CardDescription>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}


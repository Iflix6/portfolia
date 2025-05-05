"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog"

export default function Portfolio() {
  const [selectedCategory, setSelectedCategory] = useState("all")
  const [selectedProject, setSelectedProject] = useState(null)

  const categories = [
    { id: "all", name: "All Work" },
    { id: "graphic", name: "Graphic Design" },
    { id: "publishing", name: "Publishing" },
    { id: "writing", name: "Writing" },
  ]

  const projects = [
    {
      id: 1,
      title: "Brand Identity Design",
      category: "graphic",
      image: "/portfolio-1.jpg",
      description: "Complete brand identity design including logo, color palette, typography, and brand guidelines.",
    },
    {
      id: 2,
      title: "Magazine Layout",
      category: "publishing",
      image: "/portfolio-2.jpg",
      description: "Professional magazine layout design with custom typography and image placement.",
    },
    {
      id: 3,
      title: "Marketing Collateral",
      category: "graphic",
      image: "/portfolio-3.jpg",
      description: "Suite of marketing materials including brochures, flyers, and social media assets.",
    },
    {
      id: 4,
      title: "Research Paper",
      category: "writing",
      image: "/portfolio-4.jpg",
      description: "Comprehensive research paper with proper citations, formatting, and clear structure.",
    },
    {
      id: 5,
      title: "Book Design",
      category: "publishing",
      image: "/portfolio-5.jpg",
      description: "Complete book design including cover, layout, and typesetting.",
    },
    {
      id: 6,
      title: "Corporate Presentation",
      category: "writing",
      image: "/portfolio-6.jpg",
      description: "Professional corporate presentation with compelling content and visual elements.",
    },
  ]

  const filteredProjects =
    selectedCategory === "all" ? projects : projects.filter((project) => project.category === selectedCategory)

  return (
    <section
      id="portfolio"
      className="py-20 bg-gradient-to-b from-white to-slate-50 dark:from-slate-900 dark:to-slate-800 relative overflow-hidden"
    >
      {/* Gradient blobs */}
      <div className="absolute top-0 left-1/4 -z-10 h-[300px] w-[300px] rounded-full bg-gradient-to-r from-rose-500/5 to-orange-400/5 dark:from-rose-500/10 dark:to-orange-400/10 blur-3xl" />
      <div className="absolute bottom-0 right-1/4 -z-10 h-[300px] w-[300px] rounded-full bg-gradient-to-r from-blue-500/5 to-purple-500/5 dark:from-blue-500/10 dark:to-purple-500/10 blur-3xl" />

      <div className="container px-4 md:px-6 max-w-5xl mx-auto">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold tracking-tight text-slate-900 dark:text-white">My Portfolio</h2>
            <div className="w-20 h-1 bg-gradient-to-r from-rose-500 to-orange-400 mx-auto mt-2 mb-6"></div>
            <p className="text-slate-700 dark:text-slate-300 max-w-2xl mx-auto">
              Explore my recent projects showcasing my skills in graphic design, publishing, and writing.
            </p>
          </motion.div>
        </div>

        <div className="flex flex-wrap justify-center gap-4 mb-10">
          {categories.map((category) => (
            <Button
              key={category.id}
              variant={selectedCategory === category.id ? "default" : "outline"}
              onClick={() => setSelectedCategory(category.id)}
              className={
                selectedCategory === category.id
                  ? "bg-gradient-to-r from-rose-500 to-orange-400 hover:from-rose-600 hover:to-orange-500 border-none"
                  : "border-slate-200 dark:border-slate-700"
              }
            >
              {category.name}
            </Button>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group cursor-pointer"
              onClick={() => setSelectedProject(project)}
            >
              <div className="relative overflow-hidden rounded-lg shadow-md">
                <Image
                  src={project.image || "/placeholder.svg"}
                  alt={project.title}
                  width={800}
                  height={600}
                  className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                  <div className="p-4 text-white">
                    <h3 className="font-bold text-lg">{project.title}</h3>
                    <p className="text-sm text-slate-200 capitalize">{project.category}</p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {selectedProject && (
        <Dialog open={!!selectedProject} onOpenChange={() => setSelectedProject(null)}>
          <DialogContent className="sm:max-w-[600px] bg-white dark:bg-slate-900">
            <DialogHeader>
              <DialogTitle className="text-slate-900 dark:text-white">{selectedProject.title}</DialogTitle>
              <DialogDescription className="capitalize text-rose-500">{selectedProject.category}</DialogDescription>
            </DialogHeader>
            <div className="mt-4">
              <Image
                src={selectedProject.image || "/placeholder.svg"}
                alt={selectedProject.title}
                width={800}
                height={600}
                className="w-full h-auto rounded-md"
              />
              <p className="mt-4 text-slate-700 dark:text-slate-300">{selectedProject.description}</p>
            </div>
          </DialogContent>
        </Dialog>
      )}
    </section>
  )
}


"use client"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Quote } from "lucide-react"

export default function Testimonials() {
  const testimonials = [
    {
      id: 1,
      name: "Sarah Johnson",
      role: "Marketing Director",
      company: "TechCorp",
      avatar: "/testimonial-1.jpg",
      quote:
        "Emmanuel's graphic design work transformed our brand identity. His attention to detail and creative vision exceeded our expectations.",
    },
    {
      id: 2,
      name: "Michael Chen",
      role: "Publisher",
      company: "Insight Publications",
      avatar: "/testimonial-2.jpg",
      quote:
        "Working with Emmanuel on our magazine layout was a pleasure. His desktop publishing skills are exceptional, and he delivered on time.",
    },
    {
      id: 3,
      name: "Dr. Amina Patel",
      role: "Professor",
      company: "State University",
      avatar: "/testimonial-3.jpg",
      quote:
        "Emmanuel's project writing assistance was invaluable. His research was thorough, and the final document was well-structured and professionally presented.",
    },
  ]

  return (
    <section
      id="testimonials"
      className="py-20 bg-gradient-to-b from-slate-50 to-white dark:from-slate-800 dark:to-slate-900 relative overflow-hidden"
    >
      {/* Gradient blobs */}
      <div className="absolute top-1/3 right-0 -z-10 h-[400px] w-[400px] rounded-full bg-gradient-to-r from-rose-500/5 to-orange-400/5 dark:from-rose-500/10 dark:to-orange-400/10 blur-3xl" />
      <div className="absolute bottom-1/3 left-0 -z-10 h-[400px] w-[400px] rounded-full bg-gradient-to-r from-blue-500/5 to-purple-500/5 dark:from-blue-500/10 dark:to-purple-500/10 blur-3xl" />

      <div className="container px-4 md:px-6 max-w-5xl mx-auto">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold tracking-tight text-slate-900 dark:text-white">Client Testimonials</h2>
            <div className="w-20 h-1 bg-gradient-to-r from-rose-500 to-orange-400 mx-auto mt-2 mb-6"></div>
            <p className="text-slate-700 dark:text-slate-300 max-w-2xl mx-auto">
              Here's what my clients have to say about working with me.
            </p>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="h-full border-none shadow-lg bg-white/80 dark:bg-slate-900/80 backdrop-blur-sm">
                <CardContent className="pt-6">
                  <Quote className="h-8 w-8 text-rose-500/30 mb-4" />
                  <p className="text-slate-700 dark:text-slate-300 mb-6 italic">"{testimonial.quote}"</p>
                  <div className="flex items-center gap-4">
                    <Avatar>
                      <AvatarImage src={testimonial.avatar} alt={testimonial.name} />
                      <AvatarFallback>
                        {testimonial.name
                          .split(" ")
                          .map((n) => n[0])
                          .join("")}
                      </AvatarFallback>
                    </Avatar>
                    <div>
                      <p className="font-medium text-slate-900 dark:text-white">{testimonial.name}</p>
                      <p className="text-sm text-slate-500 dark:text-slate-400">
                        {testimonial.role}, {testimonial.company}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}


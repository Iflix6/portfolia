"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent } from "@/components/ui/card"
import { MapPin, Phone, Mail, Send } from "lucide-react"

export default function Contact() {
  return (
    <section
      id="contact"
      className="py-20 bg-gradient-to-b from-white to-slate-50 dark:from-slate-900 dark:to-slate-800 relative overflow-hidden"
    >
      {/* Gradient blobs */}
      <div className="absolute top-0 right-1/4 -z-10 h-[300px] w-[300px] rounded-full bg-gradient-to-r from-rose-500/5 to-orange-400/5 dark:from-rose-500/10 dark:to-orange-400/10 blur-3xl" />
      <div className="absolute bottom-0 left-1/4 -z-10 h-[300px] w-[300px] rounded-full bg-gradient-to-r from-blue-500/5 to-purple-500/5 dark:from-blue-500/10 dark:to-purple-500/10 blur-3xl" />

      <div className="container px-4 md:px-6 max-w-5xl mx-auto">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold tracking-tight text-slate-900 dark:text-white">Get In Touch</h2>
            <div className="w-20 h-1 bg-gradient-to-r from-rose-500 to-orange-400 mx-auto mt-2 mb-6"></div>
            <p className="text-slate-700 dark:text-slate-300 max-w-2xl mx-auto">
              Have a project in mind? Let's discuss how I can help bring your vision to life.
            </p>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="lg:col-span-1 space-y-6"
          >
            <Card className="border-none shadow-lg bg-white/80 dark:bg-slate-900/80 backdrop-blur-sm">
              <CardContent className="pt-6">
                <h3 className="text-xl font-bold mb-6 text-slate-900 dark:text-white">Contact Information</h3>

                <div className="space-y-4">
                  <div className="flex items-start gap-4">
                    <MapPin className="h-5 w-5 text-rose-500 mt-1" />
                    <div>
                      <p className="font-medium text-slate-900 dark:text-white">Location</p>
                      <p className="text-slate-600 dark:text-slate-400">Lagos, Nigeria</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <Phone className="h-5 w-5 text-rose-500 mt-1" />
                    <div>
                      <p className="font-medium text-slate-900 dark:text-white">Phone</p>
                      <p className="text-slate-600 dark:text-slate-400">+234 123 456 7890</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <Mail className="h-5 w-5 text-rose-500 mt-1" />
                    <div>
                      <p className="font-medium text-slate-900 dark:text-white">Email</p>
                      <p className="text-slate-600 dark:text-slate-400">emmanuel@example.com</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="lg:col-span-2"
          >
            <Card className="border-none shadow-lg bg-white/80 dark:bg-slate-900/80 backdrop-blur-sm">
              <CardContent className="pt-6">
                <form className="space-y-6">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label htmlFor="name" className="text-sm font-medium text-slate-900 dark:text-white">
                        Your Name
                      </label>
                      <Input
                        id="name"
                        placeholder="John Doe"
                        className="bg-white/50 dark:bg-slate-800/50 border-slate-200 dark:border-slate-700"
                      />
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="email" className="text-sm font-medium text-slate-900 dark:text-white">
                        Your Email
                      </label>
                      <Input
                        id="email"
                        type="email"
                        placeholder="john@example.com"
                        className="bg-white/50 dark:bg-slate-800/50 border-slate-200 dark:border-slate-700"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="subject" className="text-sm font-medium text-slate-900 dark:text-white">
                      Subject
                    </label>
                    <Input
                      id="subject"
                      placeholder="Project Inquiry"
                      className="bg-white/50 dark:bg-slate-800/50 border-slate-200 dark:border-slate-700"
                    />
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="message" className="text-sm font-medium text-slate-900 dark:text-white">
                      Message
                    </label>
                    <Textarea
                      id="message"
                      placeholder="Tell me about your project..."
                      className="min-h-[150px] bg-white/50 dark:bg-slate-800/50 border-slate-200 dark:border-slate-700"
                    />
                  </div>

                  <Button
                    type="submit"
                    className="w-full bg-gradient-to-r from-rose-500 to-orange-400 hover:from-rose-600 hover:to-orange-500"
                  >
                    <Send className="mr-2 h-4 w-4" /> Send Message
                  </Button>
                </form>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  )
}


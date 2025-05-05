"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { Briefcase, Award, BookOpen, Cpu } from "lucide-react"

export default function About() {
  return (
    <section
      id="about"
      className="py-20 bg-gradient-to-b from-white to-slate-50 dark:from-slate-900 dark:to-slate-800 relative overflow-hidden"
    >
      {/* Gradient blobs */}
      <div className="absolute top-0 right-0 -z-10 h-[300px] w-[300px] rounded-full bg-gradient-to-r from-rose-500/10 to-orange-400/10 blur-3xl" />
      <div className="absolute bottom-0 left-0 -z-10 h-[300px] w-[300px] rounded-full bg-gradient-to-r from-blue-500/5 to-purple-500/5 blur-3xl" />

      <div className="container px-4 md:px-6 max-w-5xl mx-auto">
        <div className="flex flex-col md:flex-row gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="md:w-1/2"
          >
            <div className="relative">
              <Image
                src="/about-image.png"
                alt="Ighieghwe Emmanuel"
                width={600}
                height={600}
                className="rounded-2xl shadow-xl"
              />
              <div className="absolute -z-10 inset-0 bg-gradient-to-tr from-rose-500/20 to-orange-400/20 rounded-2xl blur-md transform translate-x-4 translate-y-4" />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="md:w-1/2 space-y-6"
          >
            <div>
              <h2 className="text-3xl font-bold tracking-tight text-slate-900 dark:text-white">About Me</h2>
              <div className="w-20 h-1 bg-gradient-to-r from-rose-500 to-orange-400 mt-2 mb-6"></div>
            </div>

            <p className="text-slate-700 dark:text-slate-300 text-lg">
              Hello! I'm Ighieghwe Emmanuel Irudunoghena, a passionate graphic designer, seminar and project writer, and
              desktop publisher with 5 years of professional experience.
            </p>

            <p className="text-slate-700 dark:text-slate-300">
              I specialize in creating visually stunning designs that communicate effectively and help businesses stand
              out. My approach combines creativity with strategic thinking to deliver results that exceed expectations.
            </p>

            <div className="grid grid-cols-2 gap-4 pt-4">
              <div className="flex items-center gap-2 text-slate-700 dark:text-slate-300">
                <Briefcase className="text-rose-500" size={20} />
                <span>5+ Years Experience</span>
              </div>
              <div className="flex items-center gap-2 text-slate-700 dark:text-slate-300">
                <Award className="text-rose-500" size={20} />
                <span>Award Winning</span>
              </div>
              <div className="flex items-center gap-2 text-slate-700 dark:text-slate-300">
                <BookOpen className="text-rose-500" size={20} />
                <span>Project Writing</span>
              </div>
              <div className="flex items-center gap-2 text-slate-700 dark:text-slate-300">
                <Cpu className="text-rose-500" size={20} />
                <span>Desktop Publishing</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}


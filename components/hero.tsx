"use client"

import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"
import Link from "next/link"
import Image from "next/image"

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-900 dark:to-slate-800 text-slate-900 dark:text-white pt-16">
      {/* Background pattern */}
      <div className="absolute inset-0 w-full h-full bg-grid-white/[0.05] dark:bg-grid-white/[0.05] bg-[length:50px_50px]" />

      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-rose-500/5 to-orange-400/5 dark:from-rose-500/10 dark:to-orange-400/10" />

      {/* Hero content */}
      <div className="container relative z-10 px-4 md:px-6 max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-6 text-center lg:text-left"
          >
            <h1 className="text-4xl md:text-6xl font-bold tracking-tighter">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-rose-500 to-orange-400">
                Ighieghwe Emmanuel
              </span>
            </h1>
            <p className="text-xl md:text-2xl font-medium text-slate-700 dark:text-slate-300">
              Graphic Designer | Seminar & Project Writer | Desktop Publisher
            </p>
            <p className="max-w-[700px] mx-auto lg:mx-0 text-slate-600 dark:text-slate-400 md:text-lg">
              Transforming ideas into visual masterpieces with 5 years of professional experience
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start pt-4">
              <Button
                asChild
                size="lg"
                className="bg-gradient-to-r from-rose-500 to-orange-400 hover:from-rose-600 hover:to-orange-500"
              >
                <Link href="#portfolio">View My Work</Link>
              </Button>
              <Button
                asChild
                variant="outline"
                size="lg"
                className="border-slate-300 dark:border-slate-700 hover:bg-slate-100 dark:hover:bg-slate-800"
              >
                <Link href="#contact">Get In Touch</Link>
              </Button>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="relative h-[400px] md:h-[500px] w-full">
              <Image src="/hero-image.png" alt="Ighieghwe Emmanuel" fill className="object-contain" />
            </div>
            <div className="absolute -bottom-10 -right-10 -z-10 h-[300px] w-[300px] rounded-full bg-gradient-to-r from-rose-500/20 to-orange-400/20 blur-3xl" />
            <div className="absolute -top-10 -left-10 -z-10 h-[300px] w-[300px] rounded-full bg-gradient-to-r from-blue-500/10 to-purple-500/10 blur-3xl" />
          </motion.div>
        </div>
      </div>

      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2">
        <motion.div animate={{ y: [0, 10, 0] }} transition={{ repeat: Number.POSITIVE_INFINITY, duration: 2 }}>
          <Link
            href="#about"
            className="flex flex-col items-center text-slate-500 dark:text-slate-400 hover:text-rose-500 dark:hover:text-rose-400 transition-colors"
          >
            <span className="text-sm mb-2">Scroll Down</span>
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M12 5v14M5 12l7 7 7-7" />
            </svg>
          </Link>
        </motion.div>
      </div>
    </section>
  )
}


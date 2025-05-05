import Link from "next/link"
import { Facebook, Twitter, Instagram, Linkedin, Github } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-gradient-to-b from-slate-900 to-slate-950 text-white py-12 relative overflow-hidden">
      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-rose-500/5 to-orange-400/5" />

      <div className="container px-4 md:px-6 max-w-5xl mx-auto relative z-10">
        <div className="flex flex-col items-center">
          <h3 className="text-2xl font-bold mb-6 bg-gradient-to-r from-rose-500 to-orange-400 bg-clip-text text-transparent">
            Ighieghwe Emmanuel
          </h3>

          <div className="flex space-x-6 mb-8">
            <Link href="#" className="hover:text-rose-400 transition-colors">
              <Facebook className="h-5 w-5" />
              <span className="sr-only">Facebook</span>
            </Link>
            <Link href="#" className="hover:text-rose-400 transition-colors">
              <Twitter className="h-5 w-5" />
              <span className="sr-only">Twitter</span>
            </Link>
            <Link href="#" className="hover:text-rose-400 transition-colors">
              <Instagram className="h-5 w-5" />
              <span className="sr-only">Instagram</span>
            </Link>
            <Link href="#" className="hover:text-rose-400 transition-colors">
              <Linkedin className="h-5 w-5" />
              <span className="sr-only">LinkedIn</span>
            </Link>
            <Link href="#" className="hover:text-rose-400 transition-colors">
              <Github className="h-5 w-5" />
              <span className="sr-only">GitHub</span>
            </Link>
          </div>

          <div className="flex flex-wrap justify-center gap-6 mb-8">
            <Link href="#" className="hover:text-rose-400 transition-colors">
              Home
            </Link>
            <Link href="#about" className="hover:text-rose-400 transition-colors">
              About
            </Link>
            <Link href="#services" className="hover:text-rose-400 transition-colors">
              Services
            </Link>
            <Link href="#portfolio" className="hover:text-rose-400 transition-colors">
              Portfolio
            </Link>
            <Link href="#contact" className="hover:text-rose-400 transition-colors">
              Contact
            </Link>
          </div>

          <div className="text-slate-400 text-sm text-center">
            <p>&copy; {new Date().getFullYear()} Ighieghwe Emmanuel. All rights reserved.</p>
            <p className="mt-1">Graphic Designer | Seminar & Project Writer | Desktop Publisher</p>
          </div>
        </div>
      </div>
    </footer>
  )
}


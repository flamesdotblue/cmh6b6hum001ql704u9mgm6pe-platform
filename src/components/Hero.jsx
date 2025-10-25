import React from 'react'
import { motion } from 'framer-motion'

export default function Hero() {
  return (
    <section className="relative pt-28 md:pt-32">
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1564663231009-5f7f4d0d72b8?q=80&w=1886&auto=format&fit=crop')] bg-cover bg-center" />
        <div className="absolute inset-0 bg-white/70" />
        <div className="absolute inset-0 bg-gradient-to-b from-white/30 via-white/60 to-white" />
      </div>

      <div className="mx-auto max-w-7xl px-6 grid md:grid-cols-2 gap-10 items-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="py-10"
        >
          <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl tracking-tight text-slate-900">
            Healing Journeys, Trusted Paths
          </h1>
          <p className="mt-5 text-lg text-slate-700 max-w-xl">
            Discover authentic Ayurveda, Yoga, and Medical Wellness experiences across South India. Curated by experts, delivered with modern hospitality.
          </p>
          <div className="mt-8 flex items-center gap-4">
            <a
              href="#contact"
              className="inline-flex items-center rounded-full bg-gradient-to-r from-teal-600 to-emerald-600 px-6 py-3 text-white font-medium shadow-lg shadow-emerald-200 hover:opacity-95"
              onClick={(e) => {
                e.preventDefault()
                document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })
              }}
            >
              Plan Your Journey
            </a>
            <a
              href="#packages"
              className="inline-flex items-center rounded-full border border-emerald-200 px-6 py-3 text-emerald-800 hover:bg-emerald-50"
              onClick={(e) => {
                e.preventDefault()
                document.querySelector('#packages')?.scrollIntoView({ behavior: 'smooth' })
              }}
            >
              Explore Packages
            </a>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="relative h-[420px] md:h-[520px]"
        >
          <div className="absolute inset-0 rounded-3xl overflow-hidden shadow-2xl shadow-emerald-100 ring-1 ring-emerald-100/60">
            <img
              src="https://images.unsplash.com/photo-1555685812-4b943f1cb0eb?q=80&w=1974&auto=format&fit=crop"
              alt="Ayurvedic therapy with herbal compresses"
              className="h-full w-full object-cover"
            />
          </div>
          <div className="absolute -bottom-6 -left-6 hidden md:block w-40 h-40 rounded-3xl bg-emerald-50 blur-xl" />
          <div className="absolute -top-6 -right-6 hidden md:block w-40 h-40 rounded-3xl bg-teal-50 blur-xl" />
        </motion.div>
      </div>
    </section>
  )
}

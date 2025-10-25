import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { MessageCircle } from 'lucide-react'

export default function ContactFooter() {
  const [form, setForm] = useState({ name: '', email: '', country: '', interest: '', dates: '' })
  const [submitted, setSubmitted] = useState(false)

  const onChange = (e) => setForm({ ...form, [e.target.name]: e.target.value })
  const onSubmit = (e) => {
    e.preventDefault()
    setSubmitted(true)
    setTimeout(() => setSubmitted(false), 3000)
  }

  return (
    <>
      <section id="contact" className="relative py-20 md:py-24">
        <div className="absolute inset-0 -z-10 bg-[url('https://images.unsplash.com/photo-1506126613408-eca07ce68773?q=80&w=2069&auto=format&fit=crop')] bg-cover bg-center opacity-[0.12]" />
        <div className="mx-auto max-w-7xl px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6 }}
            className="grid lg:grid-cols-2 gap-10"
          >
            <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-8 ring-1 ring-emerald-100 shadow-xl">
              <h2 className="font-serif text-3xl text-slate-900">Start Your Healing Journey</h2>
              <p className="mt-3 text-slate-700">Share your preferences and we’ll curate trusted options for Ayurveda, Yoga, Detox, or Medical Wellness across South India.</p>

              <form onSubmit={onSubmit} className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm text-slate-700">Name</label>
                  <input name="name" value={form.name} onChange={onChange} required className="mt-1 w-full rounded-xl border border-emerald-200 bg-white px-4 py-2.5 focus:outline-none focus:ring-2 focus:ring-emerald-300" />
                </div>
                <div>
                  <label className="block text-sm text-slate-700">Email</label>
                  <input type="email" name="email" value={form.email} onChange={onChange} required className="mt-1 w-full rounded-xl border border-emerald-200 bg-white px-4 py-2.5 focus:outline-none focus:ring-2 focus:ring-emerald-300" />
                </div>
                <div>
                  <label className="block text-sm text-slate-700">Country</label>
                  <input name="country" value={form.country} onChange={onChange} className="mt-1 w-full rounded-xl border border-emerald-200 bg-white px-4 py-2.5 focus:outline-none focus:ring-2 focus:ring-emerald-300" />
                </div>
                <div>
                  <label className="block text-sm text-slate-700">Wellness Interest</label>
                  <select name="interest" value={form.interest} onChange={onChange} className="mt-1 w-full rounded-xl border border-emerald-200 bg-white px-4 py-2.5 focus:outline-none focus:ring-2 focus:ring-emerald-300">
                    <option value="">Select</option>
                    <option>Ayurveda Rejuvenation</option>
                    <option>Yoga & Mindfulness</option>
                    <option>Detox & Weight Management</option>
                    <option>Stress Relief Retreat</option>
                    <option>Physiotherapy Wellness Program</option>
                    <option>Holistic Healing Journey</option>
                  </select>
                </div>
                <div className="sm:col-span-2">
                  <label className="block text-sm text-slate-700">Travel Dates</label>
                  <input name="dates" value={form.dates} onChange={onChange} placeholder="e.g., 10–20 Feb 2025" className="mt-1 w-full rounded-xl border border-emerald-200 bg-white px-4 py-2.5 focus:outline-none focus:ring-2 focus:ring-emerald-300" />
                </div>
                <div className="sm:col-span-2 flex items-center justify-between">
                  <button type="submit" className="inline-flex items-center rounded-full bg-gradient-to-r from-teal-600 to-emerald-600 px-6 py-3 text-white font-medium shadow-lg shadow-emerald-200 hover:opacity-95">Request Curation</button>
                  {submitted && <span className="text-emerald-700 text-sm">Thank you! We will reach out shortly.</span>}
                </div>
              </form>
            </div>

            <div className="rounded-3xl overflow-hidden ring-1 ring-emerald-100 shadow-xl">
              <img
                src="https://images.unsplash.com/photo-1512374382149-233c42b6a83e?q=80&w=2069&auto=format&fit=crop"
                alt="Sunrise yoga and calm waters"
                className="h-full w-full object-cover"
              />
            </div>
          </motion.div>
        </div>

        {/* Floating WhatsApp Button */}
        <a
          href="https://wa.me/0000000000"
          target="_blank"
          rel="noreferrer"
          aria-label="Chat on WhatsApp"
          className="fixed bottom-5 right-5 z-40 inline-flex items-center gap-2 rounded-full bg-emerald-600 text-white px-4 py-3 shadow-xl hover:bg-emerald-700"
        >
          <MessageCircle className="h-5 w-5" />
          WhatsApp
        </a>
      </section>

      {/* Footer */}
      <footer className="border-t border-emerald-100 bg-white">
        <div className="mx-auto max-w-7xl px-6 py-10 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div>
            <div className="text-xl font-serif text-slate-900">HealRoutes</div>
            <p className="text-sm text-slate-600 mt-1">HealRoutes — Connecting the World to India’s Wellness Heritage.</p>
          </div>
          <nav className="flex flex-wrap items-center gap-5 text-sm">
            <a href="#about" className="text-slate-600 hover:text-emerald-700">About</a>
            <a href="#packages" className="text-slate-600 hover:text-emerald-700">Packages</a>
            <a href="#partners" className="text-slate-600 hover:text-emerald-700">Partners</a>
            <a href="#contact" className="text-slate-600 hover:text-emerald-700">Contact</a>
          </nav>
        </div>
      </footer>
    </>
  )
}

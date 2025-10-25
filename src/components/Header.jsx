import React from 'react'
import { User } from 'lucide-react'

const navItems = [
  { label: 'About', href: '#about' },
  { label: 'Packages', href: '#packages' },
  { label: 'How It Works', href: '#how-it-works' },
  { label: 'Partners', href: '#partners' },
  { label: 'Contact', href: '#contact' },
]

export default function Header() {
  const handleScroll = (e, href) => {
    e.preventDefault()
    const el = document.querySelector(href)
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }

  return (
    <header className="fixed top-0 inset-x-0 z-40 backdrop-blur-md bg-white/70 border-b border-slate-100">
      <div className="mx-auto max-w-7xl px-6 py-4 flex items-center justify-between">
        <a href="#" className="group inline-flex items-center gap-2">
          <div className="h-9 w-9 rounded-full bg-gradient-to-br from-teal-500 to-emerald-600 flex items-center justify-center ring-2 ring-emerald-100">
            <span className="text-white text-lg font-semibold">HR</span>
          </div>
          <div>
            <div className="text-xl font-serif tracking-tight text-slate-900">HealRoutes</div>
            <div className="text-xs text-slate-500">Healing Journeys, Trusted Paths</div>
          </div>
        </a>

        <nav className="hidden md:flex items-center gap-6">
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              onClick={(e) => handleScroll(e, item.href)}
              className="text-sm text-slate-700 hover:text-emerald-700 transition-colors"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <button
            type="button"
            className="hidden sm:inline-flex items-center gap-2 rounded-full border border-emerald-200 px-4 py-2 text-sm text-emerald-800 hover:bg-emerald-50 transition-colors"
          >
            <User className="h-4 w-4" />
            Customer Login
          </button>
          <a
            href="#contact"
            onClick={(e) => handleScroll(e, '#contact')}
            className="inline-flex items-center rounded-full bg-gradient-to-r from-teal-600 to-emerald-600 px-5 py-2 text-sm font-medium text-white shadow-sm hover:opacity-95"
          >
            Plan Your Journey
          </a>
        </div>
      </div>
    </header>
  )
}

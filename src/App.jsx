import React from 'react'
import Header from './components/Header'
import Hero from './components/Hero'
import MainSections from './components/MainSections'
import ContactFooter from './components/ContactFooter'

export default function App() {
  return (
    <div className="min-h-screen bg-white text-slate-800 antialiased">
      <Header />
      <main>
        <Hero />
        <MainSections />
        <ContactFooter />
      </main>
    </div>
  )
}

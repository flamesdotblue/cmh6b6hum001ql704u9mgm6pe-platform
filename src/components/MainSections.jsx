import React from 'react'
import { motion } from 'framer-motion'
import { Leaf, Sparkles, ShieldCheck } from 'lucide-react'

const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6 } },
}

const packages = [
  {
    title: 'Ayurveda Rejuvenation',
    price: 'From $899',
    img: 'https://images.unsplash.com/photo-1599058917212-d750089bc07e?q=80&w=2070&auto=format&fit=crop',
    blurb: 'Traditional therapies for vitality and balance over 7–14 days.',
  },
  {
    title: 'Yoga & Mindfulness',
    price: 'From $699',
    img: 'https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?q=80&w=1974&auto=format&fit=crop',
    blurb: 'Daily asanas, meditation, and breathwork by the ocean or hills.',
  },
  {
    title: 'Detox & Weight Management',
    price: 'From $1,099',
    img: 'https://images.unsplash.com/photo-1567968518502-57c7493d6d9b?q=80&w=2070&auto=format&fit=crop',
    blurb: 'Personalized Panchakarma-inspired detox with diet & lifestyle.',
  },
  {
    title: 'Stress Relief Retreat',
    price: 'From $799',
    img: 'https://images.unsplash.com/photo-1525201548942-d8732f6617a0?q=80&w=1974&auto=format&fit=crop',
    blurb: 'Calming therapies, sleep rituals, and mindful nature escapes.',
  },
  {
    title: 'Physiotherapy Wellness Program',
    price: 'From $649',
    img: 'https://images.unsplash.com/photo-1519823551278-64ac92734fb1?q=80&w=1974&auto=format&fit=crop',
    blurb: 'Strengthen, recover, and restore mobility with expert guidance.',
  },
  {
    title: 'Holistic Healing Journey',
    price: 'From $1,299',
    img: 'https://images.unsplash.com/photo-1533089860892-a7c6f0a88666?q=80&w=1974&auto=format&fit=crop',
    blurb: 'Integrative Ayurveda, yoga, and medical wellness for whole-being.',
  },
]

export default function MainSections() {
  return (
    <div className="relative">
      {/* About */}
      <section id="about" className="mx-auto max-w-7xl px-6 py-20 md:py-24">
        <motion.div
          variants={fadeIn}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
          className="grid md:grid-cols-2 gap-10 items-center"
        >
          <div>
            <h2 className="font-serif text-3xl md:text-4xl text-slate-900">About HealRoutes</h2>
            <p className="mt-5 text-slate-700 leading-relaxed">
              HealRoutes blends ancient Indian healing with modern hospitality. We connect global travelers to South India’s most authentic Ayurvedic retreats, yoga resorts, wellness centers, and hospitals. Our expertise spans Ayurveda, Yoga, Detox, Stress Relief, Physiotherapy, and Medical Tourism — with curation you can trust, and comfort you can feel.
            </p>
            <div className="mt-6 flex items-center gap-6 text-slate-700">
              <div className="inline-flex items-center gap-2"><ShieldCheck className="h-5 w-5 text-emerald-600" /> Trusted & Verified</div>
              <div className="inline-flex items-center gap-2"><Leaf className="h-5 w-5 text-emerald-600" /> Natural & Holistic</div>
              <div className="hidden sm:inline-flex items-center gap-2"><Sparkles className="h-5 w-5 text-emerald-600" /> Premium Care</div>
            </div>
          </div>
          <div className="relative h-72 md:h-full min-h-[320px]">
            <div className="absolute inset-0 rounded-3xl overflow-hidden ring-1 ring-emerald-100 shadow-xl">
              <img
                src="https://images.unsplash.com/photo-1600490036275-35f5f162c12e?q=80&w=2070&auto=format&fit=crop"
                alt="Kerala backwaters and palm trees"
                className="h-full w-full object-cover"
              />
            </div>
          </div>
        </motion.div>
      </section>

      {/* Packages */}
      <section id="packages" className="bg-gradient-to-b from-emerald-50/40 to-white py-20 md:py-24">
        <div className="mx-auto max-w-7xl px-6">
          <div className="flex items-end justify-between">
            <h2 className="font-serif text-3xl md:text-4xl text-slate-900">Top Packages</h2>
            <p className="text-sm text-emerald-800 bg-emerald-50 rounded-full px-3 py-1 border border-emerald-100">Curated for results</p>
          </div>
          <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {packages.map((item) => (
              <motion.div
                key={item.title}
                variants={fadeIn}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, amount: 0.2 }}
                className="group rounded-3xl overflow-hidden bg-white ring-1 ring-emerald-100 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
              >
                <div className="h-48 w-full overflow-hidden">
                  <img
                    src={item.img}
                    alt={item.title}
                    className="h-full w-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-5">
                  <div className="flex items-center justify-between">
                    <h3 className="font-serif text-xl text-slate-900">{item.title}</h3>
                    <span className="text-sm text-emerald-700 bg-emerald-50 rounded-full px-3 py-1 border border-emerald-100">{item.price}</span>
                  </div>
                  <p className="mt-2 text-slate-700 text-sm">{item.blurb}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section id="how-it-works" className="mx-auto max-w-7xl px-6 py-20 md:py-24">
        <motion.div
          variants={fadeIn}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
        >
          <h2 className="font-serif text-3xl md:text-4xl text-slate-900">How It Works</h2>
          <div className="mt-10 grid md:grid-cols-3 gap-8">
            {[{
              step: 'Step 1', title: 'Fill in your preferences', desc: 'Share your wellness goals, travel dates, budget, and desired region.'
            }, {
              step: 'Step 2', title: 'Get curated packages', desc: 'We match you with authentic retreats, clinics, and hospitals that fit you.'
            }, {
              step: 'Step 3', title: 'Book & begin your journey', desc: 'Enjoy seamless planning and dedicated support from start to finish.'
            }].map((s, i) => (
              <div key={s.step} className="relative rounded-3xl border border-emerald-100 bg-white/80 p-6 shadow-sm">
                <div className="absolute -top-4 left-6 inline-flex items-center rounded-full bg-gradient-to-r from-teal-600 to-emerald-600 px-3 py-1 text-xs text-white shadow">
                  {s.step}
                </div>
                <h3 className="mt-2 font-serif text-xl text-slate-900">{s.title}</h3>
                <p className="mt-2 text-slate-700 text-sm">{s.desc}</p>
              </div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* Partners */}
      <section id="partners" className="py-20 md:py-24 bg-gradient-to-b from-white to-emerald-50/40">
        <div className="mx-auto max-w-7xl px-6">
          <motion.div
            variants={fadeIn}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.3 }}
            className="grid md:grid-cols-2 gap-10 items-center"
          >
            <div>
              <h2 className="font-serif text-3xl md:text-4xl text-slate-900">Partner With Us</h2>
              <p className="mt-4 text-slate-700">
                Join the HealRoutes network to reach discerning travelers seeking authentic wellness and medical care in South India. We collaborate with premium Ayurvedic resorts, yoga retreats, wellness clinics, and hospitals to deliver exceptional experiences with global standards.
              </p>
              <a
                href="#contact"
                onClick={(e) => { e.preventDefault(); document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' }) }}
                className="mt-6 inline-flex items-center rounded-full bg-gradient-to-r from-teal-600 to-emerald-600 px-5 py-2 text-sm font-medium text-white shadow-sm hover:opacity-95"
              >
                Become a Partner
              </a>
            </div>
            <div className="relative h-72 md:h-full min-h-[320px]">
              <div className="absolute inset-0 rounded-3xl overflow-hidden ring-1 ring-emerald-100 shadow-xl">
                <img
                  src="https://images.unsplash.com/photo-1540206276207-3af25c08abc4?q=80&w=1974&auto=format&fit=crop"
                  alt="Serene wellness resort in tropical greenery"
                  className="h-full w-full object-cover"
                />
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

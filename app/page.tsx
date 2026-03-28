'use client'

import { useState } from 'react'
import AuditModal from './components/Modal'

export default function Home() {
  const [showModal, setShowModal] = useState(false)

  return (
    <main className="min-h-screen">
      <AuditModal isOpen={showModal} onClose={() => setShowModal(false)} />

      {/* Nav */}
      <nav className="fixed top-0 left-0 right-0 z-50 border-b border-white/5 bg-dark/80 backdrop-blur-xl">
        <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-brand-400 to-brand-600 flex items-center justify-center font-bold text-dark text-sm">F</div>
            <span className="font-bold text-xl tracking-tight">Fiotta</span>
          </div>
          <a href="mailto:fiotta@fiotta.com" className="text-sm text-white/60 hover:text-brand-400 transition-colors">fiotta@fiotta.com</a>
        </div>
      </nav>

      {/* Hero */}
      <section className="relative pt-32 pb-20 px-6 overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-brand-500/10 rounded-full blur-[120px] animate-pulse-slow" />
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.02)_1px,transparent_1px)] bg-[size:64px_64px] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_0%,black,transparent)]" />
        <div className="relative max-w-6xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-brand-500/20 bg-brand-500/10 text-brand-400 text-sm font-medium mb-8">
            <span className="w-2 h-2 rounded-full bg-brand-400 animate-pulse" />
            Now accepting first clients
          </div>
          <h1 className="text-5xl md:text-7xl font-black tracking-tight mb-6 leading-[1.05]">
            AI That Works<br />
            <span className="gradient-text">While You Sleep</span>
          </h1>
          <p className="text-lg md:text-xl text-white/50 max-w-2xl mx-auto mb-10 leading-relaxed">
            Custom AI automation workflows for small businesses.
            Stop wasting 15+ hours a week on work AI can do for free.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button onClick={() => setShowModal(true)} className="px-8 py-4 bg-brand-500 hover:bg-brand-400 text-dark font-bold rounded-xl transition-all hover:scale-105 glow cursor-pointer">
              Book Free Audit
            </button>
            <a href="#services" className="px-8 py-4 border border-white/10 hover:border-white/20 text-white/70 hover:text-white font-medium rounded-xl transition-all">
              See How It Works
            </a>
          </div>
        </div>
      </section>

      {/* Problem */}
      <section className="py-24 px-6 border-t border-white/5">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <p className="text-brand-400 text-sm font-semibold uppercase tracking-widest mb-3">The Problem</p>
            <h2 className="text-3xl md:text-5xl font-bold">You Are Doing Work That AI Can Do Free</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { emoji: '⏰', title: '15+ Hours/Week Lost', desc: 'Manually entering leads, sending follow-ups, updating spreadsheets. That is 750+ hours a year. Time you could spend on revenue.' },
              { emoji: '📉', title: 'Leads Going Cold', desc: 'You respond at 9am. They hired someone who replied at 9pm last night. Speed kills and you are always behind.' },
              { emoji: '😤', title: 'Deals Fall Through', desc: 'You meant to follow up. You were busy. They moved on. Automation does not forget, does not get busy, does not sleep.' }
            ].map((item, i) => (
              <div key={i} className="p-8 rounded-2xl bg-white/[0.03] border border-white/5 hover:border-brand-500/20 transition-colors">
                <div className="text-4xl mb-4">{item.emoji}</div>
                <h3 className="text-xl font-bold mb-3">{item.title}</h3>
                <p className="text-white/40 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services */}
      <section id="services" className="py-24 px-6 border-t border-white/5 bg-gradient-to-b from-dark to-white/[0.02]">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <p className="text-brand-400 text-sm font-semibold uppercase tracking-widest mb-3">What We Build</p>
            <h2 className="text-3xl md:text-5xl font-bold">Automation That Actually Works</h2>
            <p className="text-white/40 mt-4 max-w-xl mx-auto">Not templates. Not bots. Systems that run your business while you focus on what matters.</p>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            {[
              { icon: '⚡', title: 'AI Workflow Automation', price: 'From $1,500', period: '/project', highlight: false,
                features: ['Lead qualification and instant response','Automatic CRM updates and data entry','Meeting scheduling and reminders','Invoice and document processing'] },
              { icon: '🔄', title: 'Automation Partner', price: '$500-1,500', period: '/month', highlight: true,
                features: ['Everything in Starter, plus:','Weekly optimization and monitoring','New workflows as business evolves','Priority support and SLA'] }
            ].map((service, i) => (
              <div key={i} className={`relative p-8 rounded-2xl ${service.highlight ? 'bg-gradient-to-b from-brand-500/10 to-brand-500/5 border border-brand-500/20' : 'bg-white/[0.03] border border-white/5'} transition-all hover:scale-[1.02]`}>
                {service.highlight && <div className="absolute -top-3 left-8 px-3 py-1 bg-brand-500 text-dark text-xs font-bold rounded-full">Most Popular</div>}
                <div className="text-3xl mb-4">{service.icon}</div>
                <h3 className="text-2xl font-bold mb-1">{service.title}</h3>
                <div className="mb-6"><span className="text-3xl font-black text-brand-400">{service.price}</span><span className="text-white/30">{service.period}</span></div>
                <ul className="space-y-3">
                  {service.features.map((feature, j) => (
                    <li key={j} className="flex items-start gap-3 text-sm text-white/60"><span className="text-brand-400 mt-0.5">✓</span>{feature}</li>
                  ))}
                </ul>
                <button onClick={() => setShowModal(true)} className={`mt-8 w-full block text-center py-3.5 rounded-xl font-bold transition-all cursor-pointer ${service.highlight ? 'bg-brand-500 hover:bg-brand-400 text-dark' : 'bg-white/5 hover:bg-white/10 border border-white/10'}`}>
                  Get Started
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How it works */}
      <section className="py-24 px-6 border-t border-white/5">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <p className="text-brand-400 text-sm font-semibold uppercase tracking-widest mb-3">Process</p>
            <h2 className="text-3xl md:text-5xl font-bold">Three Steps to Freedom</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { num: '01', title: 'Map Your Workflow', desc: 'We audit your current process and identify exactly where time is being destroyed. No fluff, just facts.' },
              { num: '02', title: 'Build the System', desc: 'Custom AI automations tailored to how your specific business runs. Not a generic template.' },
              { num: '03', title: 'Watch It Run', desc: 'Your workflows execute automatically. You focus on clients and growth. We handle the busywork.' }
            ].map((step, i) => (
              <div key={i} className="relative">
                <div className="text-6xl font-black text-brand-500/10 mb-4">{step.num}</div>
                <h3 className="text-xl font-bold mb-2">{step.title}</h3>
                <p className="text-white/40 leading-relaxed">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-32 px-6 border-t border-white/5 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-t from-brand-500/5 to-transparent" />
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[400px] h-[400px] bg-brand-500/10 rounded-full blur-[120px]" />
        <div className="relative max-w-3xl mx-auto text-center">
          <h2 className="text-4xl md:text-6xl font-black mb-6">
            Ready to Stop<br /><span className="gradient-text">Doing Busywork?</span>
          </h2>
          <p className="text-white/40 text-lg mb-10 max-w-xl mx-auto">
            Book a free 20-minute automation audit. No pitch, no commitment.
            Just a clear look at what we can automate for you.
          </p>
          <button onClick={() => setShowModal(true)} className="inline-block px-10 py-5 bg-brand-500 hover:bg-brand-400 text-dark font-bold rounded-xl text-lg transition-all hover:scale-105 glow cursor-pointer">
            Book Your Free Audit
          </button>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-6 border-t border-white/5">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <div className="w-7 h-7 rounded-lg bg-gradient-to-br from-brand-400 to-brand-600 flex items-center justify-center font-bold text-dark text-xs">F</div>
            <span className="font-bold text-lg">Fiotta</span>
          </div>
          <p className="text-white/30 text-sm">AI That Works While You Sleep</p>
        </div>
      </footer>
    </main>
  )
}

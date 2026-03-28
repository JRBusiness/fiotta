'use client'

import { useState, useEffect } from 'react'

interface ModalProps {
  isOpen: boolean
  onClose: () => void
}

export default function AuditModal({ isOpen, onClose }: ModalProps) {
  const [form, setForm] = useState({
    name: '',
    email: '',
    business: '',
    painPoint: '',
    budget: '',
    message: ''
  })
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
    return () => { document.body.style.overflow = '' }
  }, [isOpen])

  if (!isOpen) return null

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    
    // Simulate submission - in production, connect to Stripe, Zapier, or API
    await new Promise(r => setTimeout(r, 1000))
    
    // Send email via mailto as fallback
    const subject = encodeURIComponent(`Free Audit Request from ${form.name}`)
    const body = encodeURIComponent(
      `Name: ${form.name}\nEmail: ${form.email}\nBusiness: ${form.business}\nPain Point: ${form.painPoint}\nBudget: ${form.budget}\n\nMessage:\n${form.message}`
    )
    window.location.href = `mailto:fiotta@fiotta.com?subject=${subject}&body=${body}`
    
    setLoading(false)
    setSubmitted(true)
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setForm(prev => ({ ...prev, [e.target.name]: e.target.value }))
  }

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-dark/90 backdrop-blur-sm"
        onClick={onClose}
      />
      
      {/* Modal */}
      <div className="relative w-full max-w-lg bg-[#0f0f0f] border border-white/10 rounded-2xl shadow-2xl max-h-[90vh] overflow-y-auto">
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-white/5">
          <div>
            <h2 className="text-xl font-bold">Book Your Free Audit</h2>
            <p className="text-sm text-white/40 mt-1">20-minute call, no commitment</p>
          </div>
          <button 
            onClick={onClose}
            className="w-10 h-10 rounded-full bg-white/5 hover:bg-white/10 flex items-center justify-center text-white/50 hover:text-white transition-colors text-xl"
          >
            ×
          </button>
        </div>

        {/* Body */}
        <div className="p-6">
          {submitted ? (
            <div className="text-center py-8">
              <div className="text-5xl mb-4">🎉</div>
              <h3 className="text-xl font-bold mb-2">Request Received!</h3>
              <p className="text-white/50 mb-4">
                We have sent your details to fiotta@fiotta.com.<br />
                Expect a response within 24 hours.
              </p>
              <button 
                onClick={onClose}
                className="px-6 py-3 bg-brand-500 hover:bg-brand-400 text-dark font-bold rounded-xl transition-colors"
              >
                Close
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-white/70 mb-1.5">Your Name *</label>
                <input
                  type="text"
                  name="name"
                  required
                  value={form.name}
                  onChange={handleChange}
                  placeholder="Jane Smith"
                  className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-white/20 focus:outline-none focus:border-brand-500/50 focus:bg-white/[0.07] transition-all"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-white/70 mb-1.5">Email *</label>
                <input
                  type="email"
                  name="email"
                  required
                  value={form.email}
                  onChange={handleChange}
                  placeholder="jane@company.com"
                  className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-white/20 focus:outline-none focus:border-brand-500/50 focus:bg-white/[0.07] transition-all"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-white/70 mb-1.5">Business Type *</label>
                <select
                  name="business"
                  required
                  value={form.business}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white focus:outline-none focus:border-brand-500/50 focus:bg-white/[0.07] transition-all [&>option]:bg-dark"
                >
                  <option value="">Select your business type</option>
                  <option value="freelancer">Freelancer / Solo Consultant</option>
                  <option value="agency">Agency (2-10 people)</option>
                  <option value="ecommerce">E-commerce / Online Store</option>
                  <option value="realestate">Real Estate</option>
                  <option value="healthcare">Healthcare / Medical</option>
                  <option value="legal">Legal / Attorney</option>
                  <option value="restaurant">Restaurant / Hospitality</option>
                  <option value="other">Other</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-white/70 mb-1.5">Biggest Workflow Pain Point *</label>
                <textarea
                  name="painPoint"
                  required
                  value={form.painPoint}
                  onChange={handleChange}
                  rows={3}
                  placeholder="e.g., I spend 3 hours daily manually entering leads into my CRM and sending follow-up emails..."
                  className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-white/20 focus:outline-none focus:border-brand-500/50 focus:bg-white/[0.07] transition-all resize-none"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-white/70 mb-1.5">Monthly Budget for Automation</label>
                <select
                  name="budget"
                  value={form.budget}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white focus:outline-none focus:border-brand-500/50 focus:bg-white/[0.07] transition-all [&>option]:bg-dark"
                >
                  <option value="">Prefer not to say</option>
                  <option value="500-1000">$500 - $1,000/month</option>
                  <option value="1000-2500">$1,000 - $2,500/month</option>
                  <option value="2500-5000">$2,500 - $5,000/month</option>
                  <option value="5000+">$5,000+/month</option>
                  <option value="one-time">One-time project (under $5K)</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-white/70 mb-1.5">Anything else we should know?</label>
                <textarea
                  name="message"
                  value={form.message}
                  onChange={handleChange}
                  rows={2}
                  placeholder="Tools you use, team size, specific goals..."
                  className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-white/20 focus:outline-none focus:border-brand-500/50 focus:bg-white/[0.07] transition-all resize-none"
                />
              </div>

              <button
                type="submit"
                disabled={loading}
                className="w-full py-4 bg-brand-500 hover:bg-brand-400 disabled:bg-brand-500/50 text-dark font-bold rounded-xl transition-all hover:scale-[1.02] disabled:scale-100 text-lg"
              >
                {loading ? 'Sending...' : 'Request Free Audit →'}
              </button>

              <p className="text-center text-xs text-white/30">
                No spam. No sales pressure. Just a real conversation about your automation needs.
              </p>
            </form>
          )}
        </div>
      </div>
    </div>
  )
}

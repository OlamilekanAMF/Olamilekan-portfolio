import { useEffect, useRef, useState } from 'react'
import { gsap } from 'gsap'
// ScrollTrigger is registered once in App.tsx — no per-module registration needed
import { 
  Mail, 
  Phone, 
  MapPin, 
  Send, 
  Linkedin, 
  Github, 
  Twitter,
  Calendar,
  CheckCircle,
  Loader2
} from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'

declare global {
  interface Window {
    Calendly: {
      initBadgeWidget: (config: {
        url: string
        text: string
        color: string
        textColor: string
        branding: boolean
      }) => void
      showPopupWidget: (url: string) => void
    }
  }
}

const contactInfo = [
  {
    icon: Mail,
    label: 'Email',
    value: 'amujosafeolamilekan@gmail.com',
    href: 'mailto:amujosafeolamilekan@gmail.com',
    isLink: true,
  },
  {
    icon: Phone,
    label: 'Phone',
    value: '+234 7026758671',
    href: 'tel:+2347026758671',
    isLink: true,
  },
  {
    icon: MapPin,
    label: 'Location',
    value: 'Remote / Worldwide',
    href: null,
    isLink: false,
  },
]

const socialLinks = [
  { icon: Linkedin, href: 'https://linkedin.com', label: 'LinkedIn' },
  { icon: Github, href: 'https://github.com/olamilekanAMF', label: 'GitHub' },
  { icon: Twitter, href: 'https://twitter.com/OAmujosafe', label: 'Twitter' },
]

const projectTypes = [
  'Web Development',
  'Mobile App',
  'AI Automation',
  'AI Integration',
  'Consultation',
  'Other',
]

const budgetRanges = [
  '$1,000 - $5,000',
  '$5,000 - $10,000',
  '$10,000 - $25,000',
  '$25,000+',
  'Not sure yet',
]

export default function Contact() {
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    projectType: '',
    budget: '',
    message: '',
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)
  const sectionRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    // Load Calendly widget
    const script = document.createElement('script')
    script.src = 'https://assets.calendly.com/assets/external/widget.js'
    script.async = true
    document.body.appendChild(script)

    const link = document.createElement('link')
    link.href = 'https://assets.calendly.com/assets/external/widget.css'
    link.rel = 'stylesheet'
    document.head.appendChild(link)

    // Ensure the Calendly badge is fixed to bottom-left
    const style = document.createElement('style')
    style.innerHTML = `
      .calendly-badge-widget, .calendly-badge {
        position: fixed !important;
        bottom: 1.5rem !important;
        left: 1.5rem !important;
        right: auto !important;
        z-index: 99999 !important;
      }
    `
    document.head.appendChild(style)

    // Initialize Calendly after script loads
    script.onload = () => {
      if (window.Calendly) {
        window.Calendly.initBadgeWidget({
          url: 'https://calendly.com/beacondigitals6/30min?hide_event_type_details=1&background_color=000000&text_color=b7b7b7&primary_color=a8e063',
          text: 'Schedule time with me',
          color: '#a8e063',
          textColor: '#464646',
          branding: true,
        })
      }
    }

    return () => {
      if (script.parentNode) document.body.removeChild(script)
      if (link.parentNode) document.head.removeChild(link)
      if (style.parentNode) document.head.removeChild(style)

      const badge = document.querySelector('.calendly-badge-widget, .calendly-badge')
      if (badge && badge.parentNode) badge.parentNode.removeChild(badge)
    }
  }, [])

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        '.contact-content',
        { y: 50, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          stagger: 0.15,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 70%',
            toggleActions: 'play none none none',
          },
        }
      )
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  const handleScheduleClick = () => {
    if (window.Calendly) {
      window.Calendly.showPopupWidget('https://calendly.com/beacondigitals6/30min?hide_event_type_details=1&background_color=000000&text_color=b7b7b7&primary_color=a8e063')
    }
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    try {
      const res = await fetch('https://formspree.io/f/xeelnjlb', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formState),
      })

      if (!res.ok) throw new Error('Failed to send')

      setIsSubmitting(false)
      setIsSubmitted(true)

      // Reset after showing success
      setTimeout(() => {
        setIsSubmitted(false)
        setFormState({
          name: '',
          email: '',
          projectType: '',
          budget: '',
          message: '',
        })
      }, 3000)
    } catch (err) {
      console.error('Contact submit error', err)
      setIsSubmitting(false)
      // Optionally show an error toast here
    }
  }

  return (
    <div ref={sectionRef} className="relative py-24 md:py-32 bg-black overflow-hidden">
      {/* Background */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-lime/5 rounded-full blur-[150px]" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-lime/5 rounded-full blur-[120px]" />

      <div className="w-full px-4 sm:px-6 lg:px-12 xl:px-20">
        <div className="max-w-7xl mx-auto">
          {/* Section header */}
          <div className="contact-content text-center mb-16">
            <span className="text-lime text-sm font-medium uppercase tracking-widest mb-4 block">
              Contact
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4">
              Let&apos;s Build Something Smart
            </h2>
            <p className="text-white/60 max-w-2xl mx-auto">
              Have a project in mind? I&apos;d love to hear about it. 
              Let&apos;s discuss how we can work together.
            </p>
          </div>

          <div className="grid lg:grid-cols-5 gap-12">
            {/* Contact Info - Left Side */}
            <div className="contact-content lg:col-span-2 space-y-8">
              {/* Info cards */}
              <div className="space-y-4">
                {contactInfo.map((item, i) => {
                  const content = (
                    <>
                      <div className="w-12 h-12 rounded-xl bg-lime/10 flex items-center justify-center group-hover:bg-lime/20 transition-colors">
                        <item.icon className="w-5 h-5 text-lime" />
                      </div>
                      <div>
                        <div className="text-white/50 text-sm">{item.label}</div>
                        <div className="text-white font-medium">{item.value}</div>
                      </div>
                    </>
                  )
                  return item.isLink ? (
                    <a
                      key={i}
                      href={item.href!}
                      className="flex items-center gap-4 p-4 rounded-xl bg-white/5 border border-white/10 hover:border-lime/30 transition-colors group"
                    >
                      {content}
                    </a>
                  ) : (
                    <div
                      key={i}
                      className="flex items-center gap-4 p-4 rounded-xl bg-white/5 border border-white/10 group"
                    >
                      {content}
                    </div>
                  )
                })}
              </div>

              {/* Calendly Schedule Section */}
              <div className="p-6 rounded-2xl bg-gradient-to-br from-lime/10 to-lime/5 border border-lime/20">
                <div className="flex items-center gap-3 mb-4">
                  <Calendar className="w-6 h-6 text-lime" />
                  <h3 className="text-white font-semibold">Schedule a Call</h3>
                </div>
                <p className="text-white/60 text-sm mb-4">
                  Prefer to talk? Book a free 30-minute consultation at a time that works for you.
                </p>
                <button 
                  onClick={handleScheduleClick}
                  className="w-full py-3 px-4 rounded-xl bg-lime text-black font-semibold hover:bg-lime/90 transition-colors"
                >
                  Book a Meeting
                </button>
              </div>

              {/* Social links */}
              <div>
                <h3 className="text-white font-semibold mb-4">Follow Me</h3>
                <div className="flex gap-3">
                  {socialLinks.map((social, i) => (
                    <a
                      key={i}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-white/60 hover:text-lime hover:border-lime/30 transition-all"
                      aria-label={social.label}
                    >
                      <social.icon className="w-5 h-5" />
                    </a>
                  ))}
                </div>
              </div>
            </div>

            {/* Contact Form - Right Side */}
            <div className="contact-content lg:col-span-3">
              <div className="p-6 md:p-8 rounded-2xl bg-white/5 border border-white/10">
                {isSubmitted ? (
                  <div className="flex flex-col items-center justify-center py-12 text-center">
                    <div className="w-16 h-16 rounded-full bg-lime/20 flex items-center justify-center mb-4">
                      <CheckCircle className="w-8 h-8 text-lime" />
                    </div>
                    <h3 className="text-2xl font-semibold text-white mb-2">
                      Message Sent!
                    </h3>
                    <p className="text-white/60">
                      Thank you for reaching out. I&apos;ll get back to you within 24 hours.
                    </p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid sm:grid-cols-2 gap-6">
                      {/* Name */}
                      <div>
                        <label htmlFor="contact-name" className="block text-white/60 text-sm mb-2">
                          Your Name *
                        </label>
                        <Input
                          id="contact-name"
                          type="text"
                          placeholder="John Doe"
                          value={formState.name}
                          onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                          required
                          className="bg-white/5 border-white/10 text-white placeholder:text-white/30 focus:border-lime focus:ring-lime/20"
                        />
                      </div>

                      {/* Email */}
                      <div>
                        <label htmlFor="contact-email" className="block text-white/60 text-sm mb-2">
                          Email Address *
                        </label>
                        <Input
                          id="contact-email"
                          type="email"
                          placeholder="john@example.com"
                          value={formState.email}
                          onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                          required
                          className="bg-white/5 border-white/10 text-white placeholder:text-white/30 focus:border-lime focus:ring-lime/20"
                        />
                      </div>
                    </div>

                    <div className="grid sm:grid-cols-2 gap-6">
                      {/* Project Type */}
                      <div>
                        <label htmlFor="contact-project-type" className="block text-white/60 text-sm mb-2">
                          Project Type
                        </label>
                        <Select
                          value={formState.projectType}
                          onValueChange={(value) => setFormState({ ...formState, projectType: value })}
                        >
                          <SelectTrigger className="bg-white/5 border-white/10 text-white focus:ring-lime/20">
                            <SelectValue placeholder="Select project type" />
                          </SelectTrigger>
                          <SelectContent className="bg-dark-50 border-white/10">
                            {projectTypes.map((type) => (
                              <SelectItem key={type} value={type} className="text-white hover:bg-white/10">
                                {type}
                              </SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                      </div>

                      {/* Budget */}
                      <div>
                        <label htmlFor="contact-budget" className="block text-white/60 text-sm mb-2">
                          Budget Range
                        </label>
                        <Select
                          value={formState.budget}
                          onValueChange={(value) => setFormState({ ...formState, budget: value })}
                        >
                          <SelectTrigger className="bg-white/5 border-white/10 text-white focus:ring-lime/20">
                            <SelectValue placeholder="Select budget" />
                          </SelectTrigger>
                          <SelectContent className="bg-dark-50 border-white/10">
                            {budgetRanges.map((range) => (
                              <SelectItem key={range} value={range} className="text-white hover:bg-white/10">
                                {range}
                              </SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                      </div>
                    </div>

                    {/* Message */}
                    <div>
                      <label htmlFor="contact-message" className="block text-white/60 text-sm mb-2">
                        Tell me about your project *
                      </label>
                      <Textarea
                        id="contact-message"
                        placeholder="Describe your project, goals, and any specific requirements..."
                        value={formState.message}
                        onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                        required
                        rows={5}
                        className="bg-white/5 border-white/10 text-white placeholder:text-white/30 focus:border-lime focus:ring-lime/20 resize-none"
                      />
                    </div>

                    {/* Submit */}
                    <Button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full btn-primary disabled:opacity-50"
                    >
                      {isSubmitting ? (
                        <>
                          <Loader2 className="w-5 h-5 mr-2 animate-spin" />
                          Sending...
                        </>
                      ) : (
                        <>
                          <Send className="w-5 h-5 mr-2" />
                          Send Message
                        </>
                      )}
                    </Button>
                  </form>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

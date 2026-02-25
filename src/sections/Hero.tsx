import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ArrowDown, Github, Linkedin, Twitter, } from 'lucide-react'

const socialLinks = [
  { icon: Github, href: 'https://github.com/olamilekanAMF', label: 'GitHub' },
  { icon: Linkedin, href: 'https://linkedin.com/', label: 'LinkedIn' },
  { icon: Twitter, href: 'https://twitter.com/OAmujosafe', label: 'Twitter' },
]

export default function Hero() {
  const heroRef = useRef<HTMLDivElement>(null)
  const titleRef = useRef<HTMLHeadingElement>(null)
  const subtitleRef = useRef<HTMLParagraphElement>(null)
  const ctaRef = useRef<HTMLDivElement>(null)
  const badgeRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Timeline for entrance animations
      const tl = gsap.timeline({ delay: 0.3 })

      // Badge animation
      tl.fromTo(
        badgeRef.current,
        { scale: 0, opacity: 0 },
        { scale: 1, opacity: 1, duration: 0.6, ease: 'back.out(1.7)' }
      )

      // Title animation - character by character
      const titleChars = titleRef.current?.querySelectorAll('.char')
      if (titleChars) {
        tl.fromTo(
          titleChars,
          { y: 100, opacity: 0, rotateX: 90 },
          {
            y: 0,
            opacity: 1,
            rotateX: 0,
            duration: 0.8,
            stagger: 0.03,
            ease: 'power3.out',
          },
          '-=0.3'
        )
      }

      // Subtitle animation
      tl.fromTo(
        subtitleRef.current,
        { y: 30, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.8, ease: 'power3.out' },
        '-=0.4'
      )

      // CTA buttons animation
      tl.fromTo(
        ctaRef.current?.children || [],
        { y: 20, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.6, stagger: 0.1, ease: 'power3.out' },
        '-=0.4'
      )

      // Social links animation
      tl.fromTo(
        '.social-link',
        { x: 20, opacity: 0 },
        { x: 0, opacity: 1, duration: 0.5, stagger: 0.1, ease: 'power3.out' },
        '-=0.3'
      )

      // Floating animation for decorative elements
      gsap.to('.floating-element', {
        y: -20,
        duration: 3,
        repeat: -1,
        yoyo: true,
        ease: 'sine.inOut',
      })
    }, heroRef)

    return () => ctx.revert()
  }, [])

  // Split text into characters
  const splitText = (text: string) => {
    return text.split('').map((char, i) => (
      <span
        key={`${text}-${i}-${char.codePointAt(0)}`}
        className="char inline-block"
        style={{ display: char === ' ' ? 'inline' : 'inline-block' }}
      >
        {char === ' ' ? '\u00A0' : char}
      </span>
    ))
  }

  const scrollToSection = (href: string) => {
    const target = document.querySelector(href)
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <div
      ref={heroRef}
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-black"
    >
      {/* Background gradient effects */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Main gradient orb */}
        <div className="absolute top-1/4 left-1/4 w-[600px] h-[600px] bg-lime/10 rounded-full blur-[150px] animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-lime/5 rounded-full blur-[120px] animate-pulse delay-1000" />
        
        {/* Grid pattern */}
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `linear-gradient(rgba(208, 255, 89, 0.3) 1px, transparent 1px),
                              linear-gradient(90deg, rgba(208, 255, 89, 0.3) 1px, transparent 1px)`, 
            backgroundSize: '60px 60px',
          }}
        />
      </div>

      {/* Floating decorative elements */}
      <div className="floating-element absolute top-32 left-20 w-20 h-20 border border-lime/20 rounded-lg rotate-12 hidden lg:block" />
      <div className="floating-element absolute bottom-40 right-32 w-16 h-16 border border-lime/20 rounded-full hidden lg:block" />
      <div className="floating-element absolute top-1/3 right-20 w-3 h-3 bg-lime rounded-full hidden lg:block" />
      <div className="floating-element absolute bottom-1/3 left-32 w-2 h-2 bg-lime/50 rounded-full hidden lg:block" />

      {/* Content */}
      <div className="relative z-10 w-full px-4 sm:px-6 lg:px-12 xl:px-20 pt-24">
        <div className="max-w-6xl mx-auto">
          {/* Available badge */}
          <div
            ref={badgeRef}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-lime/10 border border-lime/20 mb-8"
          >
            <span className="w-2 h-2 bg-lime rounded-full animate-pulse" />
            <span className="text-lime text-sm font-medium">Available for work</span>
          </div>

          {/* Main headline */}
          <h1
            ref={titleRef}
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold text-white leading-tight mb-6"
            style={{ perspective: '1000px' }}
          >
            <span className="block">{splitText('Building Scalable')}</span>
            <span className="block text-gradient">{splitText('Apps & AI Solutions')}</span>
          </h1>

          {/* Subtitle */}
          <p
            ref={subtitleRef}
            className="text-lg sm:text-xl text-white/60 max-w-2xl mb-10"
          >
            I'm Olamilekan a Full-stack developer specializing in web applications, mobile apps, 
            and AI-powered automation systems. Transforming ideas into 
            high-performance digital experiences.
          </p>

          {/* CTA Buttons */}
          <div ref={ctaRef} className="flex flex-wrap gap-4 mb-16">
            <button
              onClick={() => scrollToSection('#portfolio')}
              className="btn-primary flex items-center gap-2"
            >
              View My Work
              <ArrowDown size={18} />
            </button>
            <button
              onClick={() => scrollToSection('#contact')}
              className="btn-outline"
            >
              Hire Me
            </button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-8 max-w-lg mb-16">
            {[
              { value: '50+', label: 'Projects' },
              { value: '30+', label: 'Clients' },
              { value: '5+', label: 'Years Exp.' },
            ].map((stat) => (
              <div key={stat.label} className="text-center sm:text-left">
                <div className="text-2xl sm:text-3xl font-bold text-lime mb-1">
                  {stat.value}
                </div>
                <div className="text-sm text-white/50">{stat.label}</div>
              </div>
            ))}
          </div>

          {/* Hero image (public/herosection.png) - shown on large screens
              NOTE: To remove the image background fully, replace `public/herosection.png`
              with a transparent-background PNG (alpha channel). CSS cannot remove
              embedded opaque backgrounds. */}
          <div className="hidden lg:block absolute right-8 top-1/2 -translate-y-1/2 z-10">
            <img
              src="/nero-removebg.png"
              alt="Hero graphic"
              className="w-[120px] md:w-[480px] lg:w-[500px] object-contain bg-transparent"
              style={{ background: 'transparent' }}
            />
          </div>
        </div>
      </div>

      {/* Social links - vertical on desktop */}
      <div className="hidden lg:flex fixed right-8 top-1/2 -translate-y-1/2 flex-col gap-4 z-20">
        {socialLinks.map((social) => (
          <a
            key={social.label}
            href={social.href}
            target="_blank"
            rel="noopener noreferrer"
            className="social-link w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-white/50 hover:text-lime hover:border-lime/50 transition-all duration-300"
            aria-label={social.label}
          >
            <social.icon size={18} />
          </a>
        ))}
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2">
        <span className="text-white/40 text-xs uppercase tracking-widest">Scroll</span>
        <div className="w-6 h-10 border-2 border-white/20 rounded-full flex justify-center pt-2">
          <div className="w-1 h-2 bg-lime rounded-full animate-bounce" />
        </div>
      </div>
    </div>
  )
}

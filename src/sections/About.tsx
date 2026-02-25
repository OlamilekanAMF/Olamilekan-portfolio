import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { Code2, Sparkles, Zap, Target } from 'lucide-react'

gsap.registerPlugin(ScrollTrigger)

const highlights = [
  {
    icon: Code2,
    title: 'Clean Code',
    description: 'Writing maintainable, scalable code following best practices',
  },
  {
    icon: Sparkles,
    title: 'Modern Tech',
    description: 'Using cutting-edge technologies and frameworks',
  },
  {
    icon: Zap,
    title: 'Fast Delivery',
    description: 'Efficient development with quick turnaround times',
  },
  {
    icon: Target,
    title: 'Results Driven',
    description: 'Focused on achieving business goals and user satisfaction',
  },
]

export default function About() {
  const sectionRef = useRef<HTMLDivElement>(null)
  const imageRef = useRef<HTMLDivElement>(null)
  const contentRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Image reveal animation
      gsap.fromTo(
        imageRef.current,
        { clipPath: 'circle(0% at 50% 50%)', opacity: 0 },
        {
          clipPath: 'circle(100% at 50% 50%)',
          opacity: 1,
          duration: 1.2,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 70%',
            toggleActions: 'play none none none',
          },
        }
      )

      // Content animation
      gsap.fromTo(
        contentRef.current?.children || [],
        { y: 40, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          stagger: 0.1,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: contentRef.current,
            start: 'top 70%',
            toggleActions: 'play none none none',
          },
        }
      )

      // Highlight cards animation
      gsap.fromTo(
        '.highlight-card',
        { y: 30, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.6,
          stagger: 0.1,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: '.highlights-grid',
            start: 'top 80%',
            toggleActions: 'play none none none',
          },
        }
      )
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  return (
    <div ref={sectionRef} className="relative py-24 md:py-32 bg-black overflow-hidden">
      {/* Background elements */}
      <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-lime/5 rounded-full blur-[150px]" />
      
      <div className="w-full px-4 sm:px-6 lg:px-12 xl:px-20">
        <div className="max-w-7xl mx-auto">
          {/* Section header */}
          <div className="mb-16">
            <span className="text-lime text-sm font-medium uppercase tracking-widest mb-4 block">
              About Me
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white">
              Passionate About Creating
              <span className="text-gradient"> Digital Excellence</span>
            </h2>
          </div>

          {/* Main content grid */}
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center mb-20">
            {/* Image */}
            <div ref={imageRef} className="relative">
              <div className="relative aspect-[4/5] rounded-2xl overflow-hidden">
                <img
                  src="/profile-photo.jpg"
                  alt="Profile"
                  className="w-full h-full object-cover"
                />
                {/* Overlay gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
              </div>
              
              {/* Decorative elements */}
              <div className="absolute -bottom-6 -right-6 w-32 h-32 border-2 border-lime/30 rounded-2xl -z-10" />
              <div className="absolute -top-6 -left-6 w-24 h-24 bg-lime/10 rounded-2xl -z-10" />
              
              {/* Experience badge */}
              <div className="absolute bottom-8 left-8 bg-black/80 backdrop-blur-xl rounded-xl p-4 border border-white/10">
                <div className="text-3xl font-bold text-lime">5+</div>
                <div className="text-sm text-white/60">Years Experience</div>
              </div>
            </div>

            {/* Content */}
            <div ref={contentRef}>
              <h3 className="text-2xl font-semibold text-white mb-6">
                Full-Stack Developer & AI Specialist
              </h3>
              
              <div className="space-y-4 text-white/70 leading-relaxed mb-8">
                <p>
                   My name is Olamilekan I&apos;m a results-driven developer with a passion for building scalable 
                  applications and intelligent automation systems. With over 5 years of 
                  experience in the industry, I&apos;ve helped businesses transform their 
                  digital presence and streamline operations through technology.
                </p>
                <p>
                  My expertise spans across modern web technologies, mobile development, 
                  and AI-powered solutions. I believe in writing clean, maintainable code 
                  that not only works flawlessly today but scales effortlessly for tomorrow.
                </p>
                <p>
                  Whether it&apos;s crafting pixel-perfect user interfaces, architecting 
                  robust backend systems, or implementing cutting-edge AI automation, 
                  I bring a meticulous attention to detail and a commitment to excellence 
                  to every project.
                </p>
              </div>

              {/* Quick info */}
              <div className="grid grid-cols-2 gap-4 mb-8">
                <div>
                  <div className="text-white/40 text-sm mb-1">Location</div>
                  <div className="text-white font-medium">Remote / Worldwide</div>
                </div>
                <div>
                  <div className="text-white/40 text-sm mb-1">Availability</div>
                  <div className="text-lime font-medium">Open to projects</div>
                </div>
                <div>
                  <div className="text-white/40 text-sm mb-1">Email</div>
                  <div className="text-white font-medium">amujosafeOlamilekan@gmail.com</div>
                </div>
                <div>
                  <div className="text-white/40 text-sm mb-1">Languages</div>
                  <div className="text-white font-medium">English</div>
                </div>
              </div>
            </div>
          </div>

          {/* Highlights grid */}
          <div className="highlights-grid grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {highlights.map((item, i) => (
              <div
                key={i}
                className="highlight-card group p-6 rounded-2xl bg-white/5 border border-white/10 hover:border-lime/30 transition-all duration-300 hover:-translate-y-2"
              >
                <div className="w-12 h-12 rounded-xl bg-lime/10 flex items-center justify-center mb-4 group-hover:bg-lime/20 transition-colors">
                  <item.icon className="w-6 h-6 text-lime" />
                </div>
                <h4 className="text-white font-semibold mb-2">{item.title}</h4>
                <p className="text-white/50 text-sm">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

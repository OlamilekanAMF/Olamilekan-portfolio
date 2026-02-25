import { useEffect, useRef, useState } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { Quote, ChevronLeft, ChevronRight, Star } from 'lucide-react'

gsap.registerPlugin(ScrollTrigger)

const testimonials = [
  {
    id: 1,
    name: 'Sarah Johnson',
    role: 'CEO, TechStart Inc.',
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&h=150&fit=crop&crop=face',
    content: 'Working with this developer was an absolute pleasure. They transformed our vision into a stunning, high-performance web application that exceeded all expectations. The attention to detail and commitment to quality is unmatched.',
    rating: 5,
    project: 'SaaS Dashboard',
  },
  {
    id: 2,
    name: 'Michael Chen',
    role: 'Founder, GrowthLabs',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face',
    content: 'Exceptional attention to detail and creative problem-solving skills. The AI automation system they built for us has saved countless hours and dramatically improved our operational efficiency. Highly recommended!',
    rating: 5,
    project: 'AI Automation Platform',
  },
  {
    id: 3,
    name: 'Emily Rodriguez',
    role: 'Director, DesignCo',
    image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face',
    content: 'Delivered beyond our expectations. The mobile app they developed for our fashion brand has received incredible feedback from our users. Professional, responsive, and incredibly talented.',
    rating: 5,
    project: 'E-Commerce Mobile App',
  },
  {
    id: 4,
    name: 'David Park',
    role: 'CTO, DataFlow Systems',
    image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face',
    content: 'The machine learning integration they implemented has transformed how we analyze data. Their technical expertise combined with clear communication made the entire process seamless.',
    rating: 5,
    project: 'ML Model Integration',
  },
  {
    id: 5,
    name: 'Lisa Thompson',
    role: 'Marketing Director, Brandify',
    image: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&h=150&fit=crop&crop=face',
    content: 'Our new website has significantly improved our conversion rates. The design is beautiful, the performance is excellent, and the whole experience working together was fantastic.',
    rating: 5,
    project: 'Corporate Website',
  },
]

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const sectionRef = useRef<HTMLDivElement>(null)
  const carouselRef = useRef<HTMLDivElement>(null)

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length)
  }

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length)
  }

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        '.testimonial-card',
        { y: 50, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
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

  // Auto-advance carousel
  useEffect(() => {
    const interval = setInterval(nextSlide, 6000)
    return () => clearInterval(interval)
  }, [])

  return (
    <div ref={sectionRef} className="relative py-24 md:py-32 bg-black overflow-hidden">
      {/* Background */}
      <div className="absolute top-1/2 right-0 w-[600px] h-[600px] bg-lime/5 rounded-full blur-[150px] -translate-y-1/2" />

      <div className="w-full px-4 sm:px-6 lg:px-12 xl:px-20">
        <div className="max-w-7xl mx-auto">
          {/* Section header */}
          <div className="text-center mb-16">
            <span className="text-lime text-sm font-medium uppercase tracking-widest mb-4 block">
              Testimonials
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4">
              What Clients Say
            </h2>
            <p className="text-white/60 max-w-2xl mx-auto">
              Don&apos;t just take my word for it. Here&apos;s what my clients have to say 
              about working together.
            </p>
          </div>

          {/* Testimonials Carousel */}
          <div className="relative max-w-4xl mx-auto">
            {/* Main testimonial card */}
            <div className="testimonial-card relative overflow-hidden">
              <div
                ref={carouselRef}
                className="flex transition-transform duration-500 ease-out"
                style={{ transform: `translateX(-${currentIndex * 100}%)` }}
              >
                {testimonials.map((testimonial) => (
                  <div
                    key={testimonial.id}
                    className="w-full flex-shrink-0 px-4"
                  >
                    <div className="relative p-8 md:p-12 rounded-3xl bg-white/5 border border-white/10">
                      {/* Quote icon */}
                      <Quote className="absolute top-8 right-8 w-12 h-12 text-lime/20" />

                      {/* Rating */}
                      <div className="flex gap-1 mb-6">
                        {[...Array(testimonial.rating)].map((_, i) => (
                          <Star key={i} className="w-5 h-5 fill-lime text-lime" />
                        ))}
                      </div>

                      {/* Content */}
                      <blockquote className="text-lg md:text-xl text-white/80 leading-relaxed mb-8">
                        &ldquo;{testimonial.content}&rdquo;
                      </blockquote>

                      {/* Author */}
                      <div className="flex items-center gap-4">
                        <img
                          src={testimonial.image}
                          alt={testimonial.name}
                          className="w-14 h-14 rounded-full object-cover border-2 border-lime/30"
                        />
                        <div>
                          <div className="text-white font-semibold">{testimonial.name}</div>
                          <div className="text-white/50 text-sm">{testimonial.role}</div>
                        </div>
                        <div className="ml-auto hidden sm:block">
                          <span className="px-3 py-1 rounded-full bg-lime/10 text-lime text-sm">
                            {testimonial.project}
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Navigation */}
            <div className="flex items-center justify-center gap-4 mt-8">
              <button
                onClick={prevSlide}
                className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center text-white/60 hover:text-lime hover:border-lime/50 transition-colors"
                aria-label="Previous testimonial"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>

              {/* Dots */}
              <div className="flex gap-2">
                {testimonials.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setCurrentIndex(i)}
                    className={`w-2 h-2 rounded-full transition-all duration-300 ${
                      i === currentIndex
                        ? 'w-8 bg-lime'
                        : 'bg-white/20 hover:bg-white/40'
                    }`}
                    aria-label={`Go to testimonial ${i + 1}`}
                  />
                ))}
              </div>

              <button
                onClick={nextSlide}
                className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center text-white/60 hover:text-lime hover:border-lime/50 transition-colors"
                aria-label="Next testimonial"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* Client logos */}
          <div className="mt-20">
            <p className="text-center text-white/40 text-sm mb-8 uppercase tracking-widest">
              Trusted by innovative companies
            </p>
            <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16 opacity-40">
              {['TechStart', 'GrowthLabs', 'DesignCo', 'DataFlow', 'Brandify'].map((company, i) => (
                <span key={i} className="text-xl md:text-2xl font-bold text-white/60">
                  {company}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

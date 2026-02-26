import { useEffect, useRef, useState } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { ChevronDown, HelpCircle } from 'lucide-react'

gsap.registerPlugin(ScrollTrigger)

const faqs = [
  {
    question: 'What services do you offer?',
    answer: 'I offer comprehensive development services including custom web development, mobile app development (iOS & Android), AI automation and workflow systems, and AI integration with machine learning solutions. Each service is tailored to meet your specific business needs and goals.',
  },
  {
    question: 'How long does a typical project take?',
    answer: 'Project timelines vary based on complexity and scope. A simple website might take 2-4 weeks, while a complex web application or mobile app can take 2-4 months. During our initial consultation, I\'ll provide a detailed timeline based on your specific requirements.',
  },
  {
    question: 'What is your pricing structure?',
    answer: 'I offer both fixed-price projects and hourly rates depending on the project type. Web development starts from $3,000, mobile apps from $5,000, and AI automation from $1,500. For complex projects, I provide custom quotes after understanding your requirements.',
  },
  {
    question: 'Do you offer ongoing support and maintenance?',
    answer: 'Yes, I offer various support and maintenance packages to ensure your product continues to run smoothly. This includes bug fixes, security updates, performance optimization, and feature enhancements. We can discuss a maintenance plan that suits your needs.',
  },
  {
    question: 'What technologies do you specialize in?',
    answer: 'I specialize in modern web technologies including React, Next.js, TypeScript, and Node.js. For mobile development, I work with React Native and Flutter. For AI and automation, I use Python, TensorFlow, OpenAI API, and various automation platforms like Zapier, GoHighLevel and n8n.',
  },
  {
    question: 'How do we get started?',
    answer: 'Getting started is easy! Simply reach out through the contact form or schedule a call. We\'ll discuss your project requirements, goals, and timeline. I\'ll then provide a detailed proposal including scope, timeline, and pricing. Once approved, we kick off the project!',
  },
]

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0)
  const sectionRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        '.faq-item',
        { y: 30, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.6,
          stagger: 0.1,
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

  const toggleFaq = (index: number) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <div ref={sectionRef} className="relative py-24 md:py-32 bg-black overflow-hidden">
      {/* Background */}
      <div className="absolute bottom-0 left-1/4 w-[500px] h-[500px] bg-lime/5 rounded-full blur-[150px]" />

      <div className="w-full px-4 sm:px-6 lg:px-12 xl:px-20">
        <div className="max-w-4xl mx-auto">
          {/* Section header */}
          <div className="text-center mb-16">
            <span className="text-lime text-sm font-medium uppercase tracking-widest mb-4 block">
              FAQ
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-white/60 max-w-2xl mx-auto">
              Got questions? I&apos;ve got answers. If you don&apos;t find what you&apos;re looking for, 
              feel free to reach out.
            </p>
          </div>

          {/* FAQ List */}
          <div className="space-y-4" role="list">
            {faqs.map((faq, index) => {
              const isOpen = openIndex === index
              const panelId = `faq-panel-${index}`
              const triggerId = `faq-trigger-${index}`
              return (
                <div
                  key={index}
                  className="faq-item rounded-2xl bg-white/5 border border-white/10 overflow-hidden transition-all duration-300 hover:border-white/20"
                  role="listitem"
                >
                  <h3 className="m-0">
                    <button
                      id={triggerId}
                      onClick={() => toggleFaq(index)}
                      aria-expanded={isOpen}
                      aria-controls={panelId}
                      className="w-full flex items-center justify-between p-6 text-left"
                    >
                      <div className="flex items-center gap-4">
                        <div className="w-10 h-10 rounded-xl bg-lime/10 flex items-center justify-center flex-shrink-0">
                          <HelpCircle className="w-5 h-5 text-lime" />
                        </div>
                        <span className="text-white font-medium text-lg pr-4">
                          {faq.question}
                        </span>
                      </div>
                      <ChevronDown
                        aria-hidden="true"
                        className={`w-5 h-5 text-white/50 flex-shrink-0 transition-transform duration-300 ${
                          isOpen ? 'rotate-180' : ''
                        }`}
                      />
                    </button>
                  </h3>

                  <div
                    id={panelId}
                    role="region"
                    aria-labelledby={triggerId}
                    hidden={!isOpen}
                    className={`overflow-hidden transition-all duration-300 ${
                      isOpen ? 'max-h-96' : 'max-h-0'
                    }`}
                  >
                    <div className="px-6 pb-6 pl-20">
                      <p className="text-white/60 leading-relaxed">
                        {faq.answer}
                      </p>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>

          {/* Still have questions */}
          <div className="mt-12 text-center">
            <p className="text-white/60 mb-4">Still have questions?</p>
            <a
              href="#contact"
              onClick={(e) => {
                e.preventDefault()
                document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })
              }}
              className="inline-flex items-center gap-2 text-lime hover:underline"
            >
              Let&apos;s talk
              <ChevronDown className="w-4 h-4 rotate-[-90deg]" />
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}

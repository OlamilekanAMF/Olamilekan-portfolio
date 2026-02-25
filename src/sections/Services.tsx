import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { 
  Globe, 
  Smartphone, 
  Bot, 
  Brain, 
  ArrowRight, 
  Check,
  MessageSquare,
  Code2,
  Rocket
} from 'lucide-react'

gsap.registerPlugin(ScrollTrigger)

const services = [
  {
    id: 1,
    icon: Globe,
    title: 'Custom Web Development',
    description: 'Build modern, responsive, and high-performance websites tailored to your business needs. From landing pages to complex web applications.',
    features: [
      'Responsive Design',
      'SEO Optimization',
      'Performance Tuning',
      'CMS Integration',
      'API Development',
    ],
    price: 'From $3,000',
    process: ['Discovery', 'Design', 'Development', 'Testing', 'Launch'],
  },
  {
    id: 2,
    icon: Smartphone,
    title: 'Mobile App Development',
    description: 'Create native and cross-platform mobile applications that deliver exceptional user experiences on iOS and Android.',
    features: [
      'iOS & Android',
      'React Native / Flutter',
      'UI/UX Design',
      'App Store Publishing',
      'Maintenance & Support',
    ],
    price: 'From $5,000',
    process: ['Strategy', 'Wireframing', 'Development', 'QA Testing', 'Deployment'],
  },
  {
    id: 3,
    icon: Bot,
    title: 'AI Automation & Workflows',
    description: 'Streamline your business operations with intelligent automation. Connect apps, automate tasks, and boost productivity.',
    features: [
      'Workflow Automation',
      'Zapier / n8n / Make',
      'CRM Integration',
      'Data Processing',
      'Custom Bots',
    ],
    price: 'From $1,500',
    process: ['Audit', 'Planning', 'Setup', 'Testing', 'Optimization'],
  },
  {
    id: 4,
    icon: Brain,
    title: 'AI Integration & ML',
    description: 'Integrate cutting-edge AI capabilities into your products. From chatbots to predictive analytics and custom ML models.',
    features: [
      'OpenAI Integration',
      'Custom ML Models',
      'Chatbots & Assistants',
      'Data Analytics',
      'AI Consulting',
    ],
    price: 'Custom Quote',
    process: ['Consultation', 'Data Analysis', 'Model Design', 'Integration', 'Training'],
  },
]

const processSteps = [
  {
    icon: MessageSquare,
    title: 'Discovery',
    description: 'Understanding your goals, requirements, and vision for the project.',
  },
  {
    icon: Code2,
    title: 'Development',
    description: 'Building your solution with clean, scalable, and maintainable code.',
  },
  {
    icon: Rocket,
    title: 'Delivery',
    description: 'Launching your product and providing ongoing support.',
  },
]

export default function Services() {
  const sectionRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Service cards animation
      gsap.fromTo(
        '.service-card',
        { y: 60, opacity: 0 },
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

      // Process steps animation
      gsap.fromTo(
        '.process-step',
        { y: 40, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.6,
          stagger: 0.2,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: '.process-section',
            start: 'top 80%',
            toggleActions: 'play none none none',
          },
        }
      )
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  const scrollToContact = () => {
    const contactSection = document.querySelector('#contact')
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <div ref={sectionRef} className="relative py-24 md:py-32 bg-black overflow-hidden">
      {/* Background */}
      <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-lime/5 rounded-full blur-[150px]" />
      <div className="absolute bottom-0 right-1/4 w-[400px] h-[400px] bg-lime/5 rounded-full blur-[120px]" />

      <div className="w-full px-4 sm:px-6 lg:px-12 xl:px-20">
        <div className="max-w-7xl mx-auto">
          {/* Section header */}
          <div className="text-center mb-16">
            <span className="text-lime text-sm font-medium uppercase tracking-widest mb-4 block">
              Services
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4">
              What I Can Do For You
            </h2>
            <p className="text-white/60 max-w-2xl mx-auto">
              From concept to deployment, I provide end-to-end development services 
              that help businesses grow and succeed in the digital world.
            </p>
          </div>

          {/* Services grid */}
          <div className="grid md:grid-cols-2 gap-6 mb-24">
            {services.map((service) => (
              <div
                key={service.id}
                className="service-card group relative p-6 md:p-8 rounded-2xl bg-white/5 border border-white/10 hover:border-lime/30 transition-all duration-500"
              >
                {/* Icon */}
                <div className="w-14 h-14 rounded-xl bg-lime/10 flex items-center justify-center mb-6 group-hover:bg-lime/20 transition-colors">
                  <service.icon className="w-7 h-7 text-lime" />
                </div>

                {/* Content */}
                <h3 className="text-xl md:text-2xl font-semibold text-white mb-3 group-hover:text-lime transition-colors">
                  {service.title}
                </h3>
                <p className="text-white/60 mb-6 leading-relaxed">
                  {service.description}
                </p>

                {/* Features */}
                <ul className="space-y-2 mb-6">
                  {service.features.map((feature, i) => (
                    <li key={i} className="flex items-center gap-2 text-white/70 text-sm">
                      <Check className="w-4 h-4 text-lime flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>

                {/* Price & CTA */}
                <div className="flex items-center justify-between pt-4 border-t border-white/10">
                  <div>
                    <span className="text-white/40 text-sm">Starting from</span>
                    <div className="text-lime font-semibold">{service.price}</div>
                  </div>
                  <button
                    onClick={scrollToContact}
                    className="flex items-center gap-2 text-white/70 hover:text-lime transition-colors group/btn"
                  >
                    Get Started
                    <ArrowRight className="w-4 h-4 transition-transform group-hover/btn:translate-x-1" />
                  </button>
                </div>

                {/* Hover glow */}
                <div className="absolute inset-0 rounded-2xl bg-lime/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10" />
              </div>
            ))}
          </div>

          {/* Process Section */}
          <div className="process-section">
            <div className="text-center mb-12">
              <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
                My Development Process
              </h3>
              <p className="text-white/60 max-w-xl mx-auto">
                A streamlined approach to deliver high-quality results on time and within budget.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {processSteps.map((step, i) => (
                <div
                  key={i}
                  className="process-step relative text-center p-6"
                >
                  {/* Step number */}
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 w-8 h-8 rounded-full bg-lime text-black font-bold flex items-center justify-center text-sm">
                    {i + 1}
                  </div>

                  {/* Icon */}
                  <div className="w-16 h-16 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center mx-auto mb-4">
                    <step.icon className="w-8 h-8 text-lime" />
                  </div>

                  <h4 className="text-lg font-semibold text-white mb-2">{step.title}</h4>
                  <p className="text-white/60 text-sm">{step.description}</p>

                  {/* Connector line */}
                  {i < processSteps.length - 1 && (
                    <div className="hidden md:block absolute top-1/2 -right-4 w-8 h-px bg-white/20" />
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* CTA Section */}
          <div className="mt-20 text-center">
            <div className="inline-block p-8 md:p-12 rounded-3xl bg-gradient-to-br from-white/5 to-white/[0.02] border border-white/10">
              <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
                Ready to Start Your Project?
              </h3>
              <p className="text-white/60 mb-6 max-w-md mx-auto">
                Let&apos;s discuss your ideas and turn them into reality. 
                Get a free consultation today.
              </p>
              <button onClick={scrollToContact} className="btn-primary">
                Start Your Project
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

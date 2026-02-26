import { useState, useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { ExternalLink, Github, ChevronRight, ArrowRight } from 'lucide-react'
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog'

gsap.registerPlugin(ScrollTrigger)

type Category = 'All' | 'Web' | 'Mobile' | 'AI' | 'Automation'

interface Project {
  id: number
  title: string
  description: string
  fullDescription: string
  category: Category[]
  image: string
  tech: string[]
  liveUrl: string
  githubUrl: string
  features: string[]
}

const projects: Project[] = [
  {
    id: 1,
    title: 'SaaS Analytics Dashboard',
    description: 'Real-time analytics platform with customizable dashboards',
    fullDescription: 'A comprehensive SaaS analytics dashboard that provides real-time insights into business metrics. Features include customizable widgets, data visualization with interactive charts, user role management, and automated reporting.',
    category: ['Web', 'AI'],
    image: '/project-saas-dashboard.jpg',
    tech: ['React', 'TypeScript', 'Node.js', 'PostgreSQL', 'D3.js'],
    liveUrl: 'https://example.com',
    githubUrl: 'https://github.com/olamilekanAMF',
    features: [
      'Real-time data visualization',
      'Customizable dashboard widgets',
      'User authentication & roles',
      'Automated report generation',
      'Export to PDF/Excel',
    ],
  },
  {
    id: 2,
    title: 'E-Commerce Mobile App',
    description: 'Luxury fashion e-commerce platform with AR try-on',
    fullDescription: 'A premium e-commerce mobile application for a luxury fashion brand. Includes features like AR virtual try-on, personalized recommendations powered by AI, seamless checkout, and real-time inventory tracking.',
    category: ['Mobile'],
    image: '/project-ecommerce-app.jpg',
    tech: ['React Native', 'Firebase', 'Stripe', 'TensorFlow Lite'],
    liveUrl: 'https://example.com',
    githubUrl: 'https://github.com/olamilekanAMF',
    features: [
      'AR virtual try-on',
      'AI-powered recommendations',
      'Secure payment integration',
      'Real-time inventory',
      'Push notifications',
    ],
  },
  {
    id: 3,
    title: 'AI Automation Platform',
    description: 'Workflow automation system with visual builder',
    fullDescription: 'An enterprise-grade automation platform that allows businesses to create complex workflows without coding. Features a visual drag-and-drop builder, 100+ integrations, and AI-powered decision making.',
    category: ['AI', 'Automation'],
    image: '/project-ai-automation.jpg',
    tech: ['Python', 'FastAPI', 'Redis', 'Docker', 'React'],
    liveUrl: 'https://example.com',
    githubUrl: 'https://github.com/olamilekanAMF',
    features: [
      'Visual workflow builder',
      '100+ app integrations',
      'AI decision nodes',
      'Real-time execution',
      'Advanced analytics',
    ],
  },
  {
    id: 4,
    title: 'Fitness Tracking App',
    description: 'Health & fitness app with ML-powered insights',
    fullDescription: 'A comprehensive fitness tracking application that monitors workouts, nutrition, and health metrics. Uses machine learning to provide personalized workout recommendations and predict fitness goals.',
    category: ['Mobile', 'AI'],
    image: '/project-fitness-app.jpg',
    tech: ['Flutter', 'Python', 'TensorFlow', 'HealthKit'],
    liveUrl: 'https://example.com',
    githubUrl: 'https://github.com/olamilekanAMF',
    features: [
      'Workout tracking',
      'Nutrition logging',
      'ML-powered insights',
      'Social challenges',
      'Wearable integration',
    ],
  },
  {
    id: 5,
    title: 'Brand Identity System',
    description: 'Complete brand design system for tech startup',
    fullDescription: 'A comprehensive brand identity system including logo design, color palette, typography guidelines, and marketing materials. Designed for a tech startup in the fintech space.',
    category: ['Web'],
    image: '/project-brand-identity.jpg',
    tech: ['Figma', 'Adobe CC', 'Sketch'],
    liveUrl: 'https://example.com',
    githubUrl: 'https://github.com/olamilekanAMF',
    features: [
      'Logo & mark design',
      'Color system',
      'Typography guidelines',
      'Marketing collateral',
      'Brand guidelines doc',
    ],
  },
  {
    id: 6,
    title: 'ML Model Visualization',
    description: 'Interactive neural network architecture visualizer',
    fullDescription: 'An interactive web application for visualizing and understanding neural network architectures. Allows users to build, train, and visualize ML models in real-time with beautiful 3D representations.',
    category: ['AI', 'Web'],
    image: '/project-ml-model.jpg',
    tech: ['Three.js', 'Python', 'TensorFlow.js', 'React'],
    liveUrl: 'https://example.com',
    githubUrl: 'https://github.com/olamilekanAMF',
    features: [
      '3D network visualization',
      'Real-time training view',
      'Model architecture builder',
      'Export to code',
      'Educational tutorials',
    ],
  },
]

const categories: Category[] = ['All', 'Web', 'Mobile', 'AI', 'Automation']

export default function Portfolio() {
  const [activeCategory, setActiveCategory] = useState<Category>('All')
  const [selectedProject, setSelectedProject] = useState<Project | null>(null)
  const sectionRef = useRef<HTMLDivElement>(null)

  const filteredProjects = activeCategory === 'All'
    ? projects
    : projects.filter((p) => p.category.includes(activeCategory))

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        '.portfolio-item',
        { y: 60, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
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
  }, [filteredProjects])

  return (
    <div ref={sectionRef} className="relative py-24 md:py-32 bg-black overflow-hidden">
      {/* Background */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-lime/5 rounded-full blur-[200px]" />

      <div className="w-full px-4 sm:px-6 lg:px-12 xl:px-20">
        <div className="max-w-7xl mx-auto">
          {/* Section header */}
          <div className="text-center mb-12">
            <span className="text-lime text-sm font-medium uppercase tracking-widest mb-4 block">
              Portfolio
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4">
              Selected Work
            </h2>
            <p className="text-white/60 max-w-2xl mx-auto">
              A collection of projects showcasing my expertise in web development, 
              mobile apps, and AI-powered solutions.
            </p>
          </div>

          {/* Filter tabs */}
          <div className="flex flex-wrap justify-center gap-2 mb-12">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-5 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                  activeCategory === category
                    ? 'bg-lime text-black'
                    : 'bg-white/5 text-white/70 hover:bg-white/10 hover:text-white'
                }`}
              >
                {category}
              </button>
            ))}
          </div>

          {/* Projects grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {filteredProjects.map((project) => (
              <div
                key={project.id}
                className="portfolio-item group relative rounded-2xl overflow-hidden bg-dark-50 border border-white/10 cursor-pointer card-hover"
                onClick={() => setSelectedProject(project)}
              >
                {/* Image */}
                <div className="aspect-[4/3] overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    loading="lazy"
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  {/* Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-300" />
                </div>

                {/* Content */}
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  {/* Categories */}
                  <div className="flex gap-2 mb-3">
                    {project.category.map((cat, i) => (
                      <span
                        key={i}
                        className="px-2 py-1 text-xs rounded-full bg-lime/20 text-lime"
                      >
                        {cat}
                      </span>
                    ))}
                  </div>

                  <h3 className="text-xl font-semibold text-white mb-2 group-hover:text-lime transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-white/60 text-sm line-clamp-2 mb-4">
                    {project.description}
                  </p>

                  {/* Tech stack */}
                  <div className="flex flex-wrap gap-2">
                    {project.tech.slice(0, 3).map((tech, i) => (
                      <span
                        key={i}
                        className="text-xs text-white/40"
                      >
                        {tech}{i < Math.min(project.tech.length, 3) - 1 && ','}
                      </span>
                    ))}
                    {project.tech.length > 3 && (
                      <span className="text-xs text-white/40">
                        +{project.tech.length - 3}
                      </span>
                    )}
                  </div>

                  {/* View project indicator */}
                  <div className="absolute top-4 right-4 w-10 h-10 rounded-full bg-lime/0 group-hover:bg-lime flex items-center justify-center transition-all duration-300 opacity-0 group-hover:opacity-100">
                    <ChevronRight className="w-5 h-5 text-black" />
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* View All Projects Button */}
          <div className="text-center">
            <a
              href="/portfolio"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-lime text-black font-semibold hover:bg-lime/90 transition-all duration-300 hover:-translate-y-1 hover:shadow-glow"
            >
              View All Projects
              <ArrowRight className="w-5 h-5" />
            </a>
          </div>
        </div>
      </div>

      {/* Project Detail Modal */}
      <Dialog open={!!selectedProject} onOpenChange={() => setSelectedProject(null)}>
        <DialogContent className="max-w-4xl bg-dark-50 border-white/10 text-white max-h-[90vh] overflow-y-auto">
          {selectedProject && (
            <>
              {/* Image */}
              <div className="aspect-video rounded-xl overflow-hidden mb-6">
                <img
                  src={selectedProject.image}
                  alt={selectedProject.title}
                  loading="lazy"
                  className="w-full h-full object-cover"
                />
              </div>

              <DialogHeader>
                <div className="flex flex-wrap gap-2 mb-3">
                  {selectedProject.category.map((cat, i) => (
                    <span
                      key={i}
                      className="px-3 py-1 text-sm rounded-full bg-lime/20 text-lime"
                    >
                      {cat}
                    </span>
                  ))}
                </div>
                <DialogTitle className="text-2xl md:text-3xl font-bold text-white">
                  {selectedProject.title}
                </DialogTitle>
              </DialogHeader>

              <div className="space-y-6 mt-4">
                {/* Description */}
                <p className="text-white/70 leading-relaxed">
                  {selectedProject.fullDescription}
                </p>

                {/* Features */}
                <div>
                  <h4 className="text-lg font-semibold text-white mb-3">Key Features</h4>
                  <ul className="grid sm:grid-cols-2 gap-2">
                    {selectedProject.features.map((feature, i) => (
                      <li key={i} className="flex items-center gap-2 text-white/60">
                        <span className="w-1.5 h-1.5 bg-lime rounded-full" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Tech Stack */}
                <div>
                  <h4 className="text-lg font-semibold text-white mb-3">Tech Stack</h4>
                  <div className="flex flex-wrap gap-2">
                    {selectedProject.tech.map((tech, i) => (
                      <span
                        key={i}
                        className="px-3 py-1 rounded-full bg-white/5 text-white/80 text-sm border border-white/10"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Actions */}
                <div className="flex flex-wrap gap-4 pt-4">
                  <a
                    href={selectedProject.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-primary flex items-center gap-2"
                  >
                    <ExternalLink size={18} />
                    Live Demo
                  </a>
                  <a
                    href={selectedProject.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-outline flex items-center gap-2"
                  >
                    <Github size={18} />
                    View Code
                  </a>
                </div>
              </div>
            </>
          )}
        </DialogContent>
      </Dialog>
    </div>
  )
}

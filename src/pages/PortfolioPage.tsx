import { useState, useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { 
  ExternalLink, 
  Github, 
  ChevronRight, 
  ArrowLeft,
  X,
  Calendar,
  User,
  Tag,
  CheckCircle2,
  ArrowUpRight
} from 'lucide-react'
import {
  Dialog,
  DialogContent,
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
  client?: string
  duration?: string
  year?: string
  challenges?: string[]
  solutions?: string[]
  results?: string[]
}

const projects: Project[] = [
  {
    id: 1,
    title: 'SaaS Analytics Dashboard',
    description: 'Real-time analytics platform with customizable dashboards and data visualization',
    fullDescription: 'A comprehensive SaaS analytics dashboard that provides real-time insights into business metrics. The platform features customizable widgets, interactive data visualization, user role management, and automated reporting capabilities. Built with scalability in mind, it handles millions of data points while maintaining sub-second response times.',
    category: ['Web', 'AI'],
    image: '/project-saas-dashboard.jpg',
    tech: ['React', 'TypeScript', 'Node.js', 'PostgreSQL', 'D3.js', 'Redis', 'AWS'],
    liveUrl: 'https://example.com',
    githubUrl: 'https://github.com/olamilekanAMF',
    features: [
      'Real-time data visualization with WebSocket',
      'Customizable dashboard widgets',
      'User authentication & role-based access',
      'Automated report generation & scheduling',
      'Export to PDF, Excel, and CSV formats',
      'Dark/Light theme support',
    ],
    client: 'TechStart Inc.',
    duration: '3 months',
    year: '2024',
    challenges: [
      'Handling real-time data streams from multiple sources',
      'Creating responsive charts that work on all devices',
      'Implementing complex user permission systems',
    ],
    solutions: [
      'Implemented WebSocket connections with automatic reconnection',
      'Used D3.js with responsive containers for charts',
      'Built a flexible RBAC system with middleware protection',
    ],
    results: [
      'Reduced report generation time by 80%',
      'Improved data accessibility for 500+ users',
      'Increased client retention by 35%',
    ],
  },
  {
    id: 2,
    title: 'E-Commerce Mobile App',
    description: 'Luxury fashion e-commerce platform with AI-powered recommendations',
    fullDescription: 'A premium e-commerce mobile application built for a luxury fashion brand. The app features an elegant UI, AR virtual try-on capabilities, AI-powered product recommendations, seamless checkout with multiple payment options, and real-time inventory tracking. The app has achieved a 4.8-star rating on both App Store and Google Play.',
    category: ['Mobile'],
    image: '/project-ecommerce-app.jpg',
    tech: ['React Native', 'Firebase', 'Stripe', 'TensorFlow Lite', ' ARKit', 'Node.js'],
    liveUrl: 'https://example.com',
    githubUrl: 'https://github.com/olamilekanAMF',
    features: [
      'AR virtual try-on for clothing items',
      'AI-powered personalized recommendations',
      'Secure payment integration (Stripe, Apple Pay)',
      'Real-time inventory synchronization',
      'Push notifications for deals & restocks',
      'Wishlist and social sharing',
    ],
    client: 'Luxe Fashion Co.',
    duration: '4 months',
    year: '2024',
    challenges: [
      'Implementing AR try-on with accurate sizing',
      'Optimizing app performance on older devices',
      'Integrating multiple payment gateways',
    ],
    solutions: [
      'Used TensorFlow Lite for body measurement detection',
      'Implemented lazy loading and image optimization',
      'Built a unified payment abstraction layer',
    ],
    results: [
      '4.8★ rating on App Store and Google Play',
      '250K+ downloads in first 6 months',
      '40% increase in mobile conversions',
    ],
  },
  {
    id: 3,
    title: 'AI Automation Platform',
    description: 'Enterprise workflow automation with visual builder and 100+ integrations',
    fullDescription: 'An enterprise-grade automation platform that empowers businesses to create complex workflows without writing code. Features a visual drag-and-drop workflow builder, 100+ app integrations, AI-powered decision nodes, real-time execution monitoring, and advanced analytics. The platform processes over 1 million automations daily.',
    category: ['AI', 'Automation'],
    image: '/project-ai-automation.jpg',
    tech: ['Python', 'FastAPI', 'Redis', 'Docker', 'React', 'PostgreSQL', 'Celery'],
    liveUrl: 'https://example.com',
    githubUrl: 'https://github.com/olamilekanAMF',
    features: [
      'Visual drag-and-drop workflow builder',
      '100+ pre-built app integrations',
      'AI-powered decision and prediction nodes',
      'Real-time execution monitoring',
      'Advanced analytics and reporting',
      'Webhook and API trigger support',
    ],
    client: 'Enterprise Solutions Ltd.',
    duration: '6 months',
    year: '2023',
    challenges: [
      'Building a scalable workflow execution engine',
      'Supporting 100+ third-party integrations',
      'Ensuring zero-downtime deployments',
    ],
    solutions: [
      'Implemented distributed task queue with Celery',
      'Created a plugin architecture for integrations',
      'Used blue-green deployment strategy',
    ],
    results: [
      '1M+ automations processed daily',
      'Saved clients 10,000+ hours/month',
      '99.99% uptime achieved',
    ],
  },
  {
    id: 4,
    title: 'Fitness Tracking App',
    description: 'Health & fitness app with ML-powered insights and wearable integration',
    fullDescription: 'A comprehensive fitness tracking application that monitors workouts, nutrition, sleep, and health metrics. Uses machine learning to provide personalized workout recommendations, predict fitness goals, and adapt to user progress. Integrates with popular wearables and health platforms for seamless data synchronization.',
    category: ['Mobile', 'AI'],
    image: '/project-fitness-app.jpg',
    tech: ['Flutter', 'Python', 'TensorFlow', 'HealthKit', 'Google Fit API', 'Firebase'],
    liveUrl: 'https://example.com',
    githubUrl: 'https://github.com/olamilekanAMF',
    features: [
      'Comprehensive workout tracking',
      'Nutrition and calorie logging',
      'ML-powered personalized insights',
      'Social challenges and leaderboards',
      'Wearable device integration',
      'Progress photos and measurements',
    ],
    client: 'FitLife Technologies',
    duration: '5 months',
    year: '2023',
    challenges: [
      'Creating accurate ML models for fitness prediction',
      'Integrating with multiple wearable APIs',
      'Handling sensitive health data securely',
    ],
    solutions: [
      'Trained custom models on diverse fitness datasets',
      'Built unified abstraction for wearable APIs',
      'Implemented end-to-end encryption for health data',
    ],
    results: [
      '500K+ active users',
      '4.7★ average rating',
      '30% improvement in user fitness goals',
    ],
  },
  {
    id: 5,
    title: 'Brand Identity System',
    description: 'Complete brand design system including logo, guidelines, and marketing materials',
    fullDescription: 'A comprehensive brand identity system designed for a tech startup in the fintech space. The project included logo design, color palette development, typography guidelines, iconography, marketing collateral templates, and a complete brand guidelines document. The modern, trustworthy aesthetic helped establish the company as a serious player in the financial technology sector.',
    category: ['Web'],
    image: '/project-brand-identity.jpg',
    tech: ['Figma', 'Adobe Illustrator', 'Adobe Photoshop', 'After Effects'],
    liveUrl: 'https://example.com',
    githubUrl: 'https://github.com/olamilekanAMF',
    features: [
      'Logo design with variations',
      'Complete color system',
      'Typography guidelines',
      'Marketing collateral templates',
      'Social media kit',
      'Brand guidelines document',
    ],
    client: 'FinTech Startup',
    duration: '2 months',
    year: '2024',
    challenges: [
      'Creating a unique identity in a crowded market',
      'Balancing professionalism with modern appeal',
      'Ensuring consistency across all touchpoints',
    ],
    solutions: [
      'Conducted extensive competitor research',
      'Iterated through 50+ logo concepts',
      'Created comprehensive style guide',
    ],
    results: [
      'Successful brand launch',
      'Featured in design publications',
      'Increased brand recognition by 60%',
    ],
  },
  {
    id: 6,
    title: 'ML Model Visualizer',
    description: 'Interactive 3D neural network architecture visualizer for education',
    fullDescription: 'An interactive web application for visualizing and understanding neural network architectures. Users can build, train, and visualize ML models in real-time with beautiful 3D representations. Designed for educational purposes, it helps students and professionals understand how neural networks work through hands-on experimentation.',
    category: ['AI', 'Web'],
    image: '/project-ml-model.jpg',
    tech: ['Three.js', 'Python', 'TensorFlow.js', 'React', 'WebGL', 'Node.js'],
    liveUrl: 'https://example.com',
    githubUrl: 'https://github.com/olamilekanAMF',
    features: [
      '3D network architecture visualization',
      'Real-time training progress view',
      'Interactive model architecture builder',
      'Export to production-ready code',
      'Educational tutorials and guides',
      'Collaborative model sharing',
    ],
    client: 'AI Education Platform',
    duration: '4 months',
    year: '2023',
    challenges: [
      'Rendering complex 3D networks performantly',
      'Making ML concepts accessible visually',
      'Supporting various network architectures',
    ],
    solutions: [
      'Used Three.js with instanced rendering',
      'Created intuitive visual metaphors',
      'Built modular architecture system',
    ],
    results: [
      '100K+ students using the platform',
      'Featured in university curricula',
      'Open source with 2K+ GitHub stars',
    ],
  },
]

const categories: Category[] = ['All', 'Web', 'Mobile', 'AI', 'Automation']

export default function PortfolioPage() {
  const [activeCategory, setActiveCategory] = useState<Category>('All')
  const [selectedProject, setSelectedProject] = useState<Project | null>(null)
  const [isModalOpen, setIsModalOpen] = useState(false)
  const sectionRef = useRef<HTMLDivElement>(null)
  const heroRef = useRef<HTMLDivElement>(null)

  const filteredProjects = activeCategory === 'All'
    ? projects
    : projects.filter((p) => p.category.includes(activeCategory))

  useEffect(() => {
    // Scroll to top on mount
    window.scrollTo(0, 0)

    const ctx = gsap.context(() => {
      // Hero animation
      gsap.fromTo(
        '.portfolio-hero-content',
        { y: 60, opacity: 0 },
        { y: 0, opacity: 1, duration: 1, ease: 'power3.out' }
      )

      // Project cards animation
      gsap.fromTo(
        '.portfolio-item',
        { y: 80, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          stagger: 0.1,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: '.projects-grid',
            start: 'top 80%',
            toggleActions: 'play none none none',
          },
        }
      )
    }, sectionRef)

    return () => ctx.revert()
  }, [filteredProjects])

  const openProjectModal = (project: Project) => {
    setSelectedProject(project)
    setIsModalOpen(true)
  }

  const closeModal = () => {
    setIsModalOpen(false)
    setTimeout(() => setSelectedProject(null), 300)
  }

  const goBack = () => {
    globalThis.history.back()
  }

  return (
    <div ref={sectionRef} className="min-h-screen bg-black text-white">
      {/* Hero Section */}
      <div ref={heroRef} className="relative pt-32 pb-20 overflow-hidden">
        {/* Background effects */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-lime/10 rounded-full blur-[150px]" />
          <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-lime/5 rounded-full blur-[120px]" />
        </div>

        <div className="relative w-full px-4 sm:px-6 lg:px-12 xl:px-20">
          <div className="max-w-7xl mx-auto">
            {/* Back button */}
            <button
              onClick={goBack}
              className="portfolio-hero-content flex items-center gap-2 text-white/60 hover:text-lime transition-colors mb-8"
            >
              <ArrowLeft className="w-5 h-5" />
              <span>Back to Home</span>
            </button>

            {/* Header */}
            <div className="portfolio-hero-content mb-12">
              <span className="text-lime text-sm font-medium uppercase tracking-widest mb-4 block">
                Portfolio
              </span>
              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6">
                Selected
                <span className="text-gradient"> Work</span>
              </h1>
              <p className="text-lg text-white/60 max-w-2xl">
                A curated collection of projects showcasing my expertise in web development, 
                mobile applications, and AI-powered solutions. Each project represents a 
                unique challenge and innovative solution.
              </p>
            </div>

            {/* Stats */}
            <div className="portfolio-hero-content flex flex-wrap gap-8 mb-12">
              <div>
                <div className="text-3xl font-bold text-lime">50+</div>
                <div className="text-white/50 text-sm">Projects Completed</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-lime">30+</div>
                <div className="text-white/50 text-sm">Happy Clients</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-lime">5+</div>
                <div className="text-white/50 text-sm">Years Experience</div>
              </div>
            </div>

            {/* Filter tabs */}
            <div className="portfolio-hero-content flex flex-wrap gap-2">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setActiveCategory(category)}
                  className={`px-5 py-2.5 rounded-full text-sm font-medium transition-all duration-300 ${
                    activeCategory === category
                      ? 'bg-lime text-black'
                      : 'bg-white/5 text-white/70 hover:bg-white/10 hover:text-white border border-white/10'
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Projects Grid */}
      <div className="w-full px-4 sm:px-6 lg:px-12 xl:px-20 pb-24">
        <div className="max-w-7xl mx-auto">
          <div className="projects-grid grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredProjects.map((project, index) => (
              <div
                key={project.id}
                className="portfolio-item group relative rounded-2xl overflow-hidden bg-dark-50 border border-white/10 cursor-pointer card-hover"
                onClick={() => openProjectModal(project)}
                style={{ animationDelay: `${index * 0.1}s` }}
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
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-transparent opacity-70 group-hover:opacity-90 transition-opacity duration-300" />
                </div>

                {/* Content */}
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  {/* Categories */}
                  <div className="flex gap-2 mb-3">
                    {project.category.map((cat, i) => (
                      <span
                        key={i}
                        className="px-2.5 py-1 text-xs rounded-full bg-lime/20 text-lime font-medium"
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
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tech.slice(0, 4).map((tech, i) => (
                      <span
                        key={i}
                        className="px-2 py-1 text-xs rounded-md bg-white/10 text-white/70"
                      >
                        {tech}
                      </span>
                    ))}
                    {project.tech.length > 4 && (
                      <span className="px-2 py-1 text-xs rounded-md bg-white/10 text-white/70">
                        +{project.tech.length - 4}
                      </span>
                    )}
                  </div>

                  {/* Action buttons */}
                  <div className="flex gap-3 opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-300">
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={(e) => e.stopPropagation()}
                      className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-lime text-black text-sm font-medium hover:bg-lime/90 transition-colors"
                    >
                      <ExternalLink className="w-4 h-4" />
                      Live Demo
                    </a>
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={(e) => e.stopPropagation()}
                      className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white/10 text-white text-sm font-medium hover:bg-white/20 transition-colors"
                    >
                      <Github className="w-4 h-4" />
                      Code
                    </a>
                  </div>
                </div>

                {/* View indicator */}
                <div className="absolute top-4 right-4 w-10 h-10 rounded-full bg-lime/0 group-hover:bg-lime flex items-center justify-center transition-all duration-300 opacity-0 group-hover:opacity-100">
                  <ChevronRight className="w-5 h-5 text-black" />
                </div>
              </div>
            ))}
          </div>

          {/* Empty state */}
          {filteredProjects.length === 0 && (
            <div className="text-center py-20">
              <p className="text-white/50 text-lg">No projects found in this category.</p>
            </div>
          )}
        </div>
      </div>

      {/* Case Study Modal */}
      <Dialog open={isModalOpen} onOpenChange={closeModal}>
        <DialogContent className="max-w-5xl bg-dark-50 border-white/10 text-white max-h-[90vh] overflow-y-auto p-0">
          {selectedProject && (
            <>
              {/* Hero Image */}
              <div className="relative aspect-video">
                <img
                  src={selectedProject.image}
                  alt={selectedProject.title}
                  loading="lazy"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-dark-50 via-transparent to-transparent" />
                
                {/* Close button */}
                <button
                  onClick={closeModal}
                  className="absolute top-4 right-4 w-10 h-10 rounded-full bg-black/50 backdrop-blur-sm flex items-center justify-center text-white hover:bg-black/70 transition-colors">
                  <X className="w-5 h-5" />
                </button>

                {/* Title overlay */}
                <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8">
                  <div className="flex flex-wrap gap-2 mb-4">
                    {selectedProject.category.map((cat, i) => (
                      <span
                        key={i}
                        className="px-3 py-1 text-sm rounded-full bg-lime/20 text-lime font-medium"
                      >
                        {cat}
                      </span>
                    ))}
                  </div>
                  <DialogTitle className="text-3xl md:text-4xl font-bold text-white">
                    {selectedProject.title}
                  </DialogTitle>
                </div>
              </div>

              <div className="p-6 md:p-8 space-y-8">
                {/* Project Meta */}
                <div className="flex flex-wrap gap-6 pb-6 border-b border-white/10">
                  {selectedProject.client && (
                    <div className="flex items-center gap-2">
                      <User className="w-4 h-4 text-lime" />
                      <span className="text-white/60 text-sm">Client:</span>
                      <span className="text-white text-sm">{selectedProject.client}</span>
                    </div>
                  )}
                  {selectedProject.duration && (
                    <div className="flex items-center gap-2">
                      <Calendar className="w-4 h-4 text-lime" />
                      <span className="text-white/60 text-sm">Duration:</span>
                      <span className="text-white text-sm">{selectedProject.duration}</span>
                    </div>
                  )}
                  {selectedProject.year && (
                    <div className="flex items-center gap-2">
                      <Tag className="w-4 h-4 text-lime" />
                      <span className="text-white/60 text-sm">Year:</span>
                      <span className="text-white text-sm">{selectedProject.year}</span>
                    </div>
                  )}
                </div>

                {/* Description */}
                <div>
                  <h3 className="text-xl font-semibold text-white mb-4">About the Project</h3>
                  <p className="text-white/70 leading-relaxed">
                    {selectedProject.fullDescription}
                  </p>
                </div>

                {/* Features */}
                <div>
                  <h3 className="text-xl font-semibold text-white mb-4">Key Features</h3>
                  <div className="grid sm:grid-cols-2 gap-3">
                    {selectedProject.features.map((feature, i) => (
                      <div key={i} className="flex items-start gap-3">
                        <CheckCircle2 className="w-5 h-5 text-lime flex-shrink-0 mt-0.5" />
                        <span className="text-white/70">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Tech Stack */}
                <div>
                  <h3 className="text-xl font-semibold text-white mb-4">Technologies Used</h3>
                  <div className="flex flex-wrap gap-2">
                    {selectedProject.tech.map((tech, i) => (
                      <span
                        key={i}
                        className="px-4 py-2 rounded-lg bg-white/5 text-white/80 text-sm border border-white/10 hover:border-lime/30 hover:text-lime transition-colors"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Challenges & Solutions */}
                {(selectedProject.challenges || selectedProject.solutions) && (
                  <div className="grid md:grid-cols-2 gap-8">
                    {selectedProject.challenges && (
                      <div>
                        <h3 className="text-xl font-semibold text-white mb-4">Challenges</h3>
                        <ul className="space-y-3">
                          {selectedProject.challenges.map((challenge, i) => (
                            <li key={i} className="flex items-start gap-3">
                              <span className="w-1.5 h-1.5 bg-red-400 rounded-full mt-2 flex-shrink-0" />
                              <span className="text-white/70">{challenge}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}
                    {selectedProject.solutions && (
                      <div>
                        <h3 className="text-xl font-semibold text-white mb-4">Solutions</h3>
                        <ul className="space-y-3">
                          {selectedProject.solutions.map((solution, i) => (
                            <li key={i} className="flex items-start gap-3">
                              <span className="w-1.5 h-1.5 bg-lime rounded-full mt-2 flex-shrink-0" />
                              <span className="text-white/70">{solution}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}
                  </div>
                )}

                {/* Results */}
                {selectedProject.results && (
                  <div className="p-6 rounded-2xl bg-lime/5 border border-lime/20">
                    <h3 className="text-xl font-semibold text-white mb-4">Results & Impact</h3>
                    <div className="grid sm:grid-cols-3 gap-4">
                      {selectedProject.results.map((result, i) => (
                        <div key={i} className="flex items-center gap-3">
                          <div className="w-10 h-10 rounded-lg bg-lime/20 flex items-center justify-center flex-shrink-0">
                            <ArrowUpRight className="w-5 h-5 text-lime" />
                          </div>
                          <span className="text-white/80 text-sm">{result}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* Actions */}
                <div className="flex flex-wrap gap-4 pt-4">
                  <a
                    href={selectedProject.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-primary flex items-center gap-2"
                  >
                    <ExternalLink className="w-5 h-5" />
                    View Live Demo
                  </a>
                  <a
                    href={selectedProject.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-outline flex items-center gap-2"
                  >
                    <Github className="w-5 h-5" />
                    View Source Code
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

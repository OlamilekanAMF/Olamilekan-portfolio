import { useState, useEffect } from 'react'
import { Menu, X } from 'lucide-react'
import { gsap } from 'gsap'

const navLinks = [
  { name: 'Home', href: '#home' },
  { name: 'About', href: '#about' },
  { name: 'Skills', href: '#skills' },
  { name: 'Portfolio', href: '#portfolio' },
  { name: 'Services', href: '#services' },
  { name: 'Contact', href: '#contact' },
]

export default function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [activeLink, setActiveLink] = useState('#home')

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100)
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    // Animate nav entrance
    gsap.fromTo(
      '.nav-container',
      { y: -100, opacity: 0 },
      { y: 0, opacity: 1, duration: 1, delay: 0.5, ease: 'power3.out' }
    )
  }, [])

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault()
    setActiveLink(href)
    setIsMobileMenuOpen(false)
    
    const target = document.querySelector(href)
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <>
      <nav
        className={`nav-container fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          isScrolled
            ? 'py-3 bg-black/80 backdrop-blur-xl border-b border-white/5'
            : 'py-6 bg-transparent'
        }`}
      >
        <div className="w-full px-4 sm:px-6 lg:px-12 xl:px-20">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <a
              href="#home"
              onClick={(e) => handleLinkClick(e, '#home')}
              className="flex items-center gap-2 group"
            >
              <div className="w-10 h-10 rounded-lg bg-lime flex items-center justify-center transition-transform duration-300 group-hover:scale-110">
                <span className="text-black font-bold text-xl">OL</span>
              </div>
              <span className="text-white font-semibold text-lg hidden sm:block">
                Olamilekan Portfolio
              </span>
            </a>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center gap-8">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => handleLinkClick(e, link.href)}
                  className={`relative text-sm font-medium transition-colors duration-300 ${
                    activeLink === link.href
                      ? 'text-lime'
                      : 'text-white/70 hover:text-white'
                  }`}
                >
                  {link.name}
                  {activeLink === link.href && (
                    <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-lime rounded-full" />
                  )}
                </a>
              ))}
            </div>

            {/* CTA Button */}
            <div className="hidden lg:block">
              <a
                href="#contact"
                onClick={(e) => handleLinkClick(e, '#contact')}
                className="btn-primary text-sm"
              >
                Let&apos;s Talk
              </a>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="lg:hidden p-2 text-white"
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      <div
        className={`fixed inset-0 z-40 lg:hidden transition-all duration-500 ${
          isMobileMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible'
        }`}
      >
        <div
          className="absolute inset-0 bg-black/90 backdrop-blur-xl"
          onClick={() => setIsMobileMenuOpen(false)}
        />
        <div
          className={`absolute top-20 left-4 right-4 bg-dark-50 rounded-2xl p-6 transition-all duration-500 ${
            isMobileMenuOpen
              ? 'translate-y-0 opacity-100'
              : '-translate-y-10 opacity-0'
          }`}
        >
          <div className="flex flex-col gap-4">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => handleLinkClick(e, link.href)}
                className={`text-lg font-medium py-2 transition-colors ${
                  activeLink === link.href ? 'text-lime' : 'text-white/70'
                }`}
              >
                {link.name}
              </a>
            ))}
            <a
              href="#contact"
              onClick={(e) => handleLinkClick(e, '#contact')}
              className="btn-primary text-center mt-4"
            >
              Let&apos;s Talk
            </a>
          </div>
        </div>
      </div>
    </>
  )
}

import { Github, Linkedin, Twitter, ArrowUp, Heart } from 'lucide-react'
import { useEffect } from 'react'

const footerLinks = {
  navigation: [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Portfolio', href: '/portfolio' },
    { name: 'Services', href: '#services' },
    { name: 'Contact', href: '#contact' },
  ],
  services: [
    { name: 'Web Development', href: '#services' },
    { name: 'Mobile Apps', href: '#services' },
    { name: 'AI Automation', href: '#services' },
    { name: 'AI Integration', href: '#services' },
  ],
  legal: [
    { name: 'Privacy Policy', href: '/privacy' },
    { name: 'Terms of Service', href: '/terms' },
  ],
}

const socialLinks = [
  { icon: Github, href: 'https://github.com/olamilekanAMF', label: 'GitHub' },
  { icon: Linkedin, href: 'https://linkedin.com/', label: 'LinkedIn' },
  { icon: Twitter, href: 'https://twitter.com/OAmujosafe', label: 'Twitter' },
]

export default function Footer() {
  useEffect(() => {
    const script = document.createElement('script')
    script.src = 'https://f.convertkit.com/ckjs/ck.5.js'
    script.async = true
    document.head.appendChild(script)

    return () => {
      if (document.head.contains(script)) {
        document.head.removeChild(script)
      }
    }
  }, [])
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    if (href.startsWith('#')) {
      e.preventDefault()
      const target = document.querySelector(href)
      if (target) {
        target.scrollIntoView({ behavior: 'smooth' })
      }
    }
  }

  return (
    <footer className="relative bg-black border-t border-white/10 overflow-hidden">
      {/* Background marquee text */}
      <div className="absolute inset-0 flex items-center overflow-hidden opacity-[0.03] pointer-events-none">
        <div className="animate-marquee whitespace-nowrap">
          {[...Array(10)].map((_, i) => (
            <span key={i} className="text-[20vw] font-bold text-white mx-8">
              PORTFOLIO
            </span>
          ))}
        </div>
      </div>

      <div className="relative w-full px-4 sm:px-6 lg:px-12 xl:px-20 py-16 md:py-20">
        <div className="max-w-7xl mx-auto">
          {/* Main footer content */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
            {/* Brand */}
            <div className="lg:col-span-1">
              <a href="#home" onClick={(e) => handleLinkClick(e, '#home')} className="flex items-center gap-2 mb-6">
              <div className="w-10 h-10 rounded-lg bg-lime flex items-center justify-center">
                  <span className="text-black font-bold text-xl">OL</span>
                </div>
                <span className="text-white font-semibold text-lg">Olamilekan Portfolio</span>
              </a>
              <p className="text-white/50 text-sm leading-relaxed mb-6">
                Building scalable apps, smart websites, and AI-powered automations. 
                Let&apos;s create something amazing together.
              </p>
              {/* Social links */}
              <div className="flex gap-3">
                {socialLinks.map((social, i) => (
                  <a
                    key={i}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-white/50 hover:text-lime hover:border-lime/30 transition-all"
                    aria-label={social.label}
                  >
                    <social.icon className="w-4 h-4" />
                  </a>
                ))}
              </div>
            </div>

            {/* Navigation */}
            <div>
              <h4 className="text-white font-semibold mb-6">Navigation</h4>
              <ul className="space-y-3">
                {footerLinks.navigation.map((link, i) => (
                  <li key={i}>
                    <a
                      href={link.href}
                      onClick={(e) => handleLinkClick(e, link.href)}
                      className="text-white/50 hover:text-lime transition-colors text-sm"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Services */}
            <div>
              <h4 className="text-white font-semibold mb-6">Services</h4>
              <ul className="space-y-3">
                {footerLinks.services.map((link, i) => (
                  <li key={i}>
                    <a
                      href={link.href}
                      onClick={(e) => handleLinkClick(e, link.href)}
                      className="text-white/50 hover:text-lime transition-colors text-sm"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Newsletter */}
            <div>
              <h4 className="text-white font-semibold mb-6">Stay Updated</h4>
              <p className="text-white/50 text-sm mb-4">
                Subscribe to get the latest updates and insights.
              </p>
              <form action="https://app.kit.com/forms/9134574/subscriptions" className="seva-form formkit-form" method="post" data-sv-form="9134574" data-uid="ba12690e61" data-format="inline" data-version="5" data-options={`{"settings":{"after_subscribe":{"action":"message","success_message":"Success! Now check your email to confirm your subscription.","redirect_url":""},"analytics":{"google":null,"fathom":null,"facebook":null,"segment":null,"pinterest":null,"sparkloop":null,"googletagmanager":null},"modal":{"trigger":"timer","scroll_percentage":null,"timer":5,"devices":"all","show_once_every":15},"powered_by":{"show":true,"url":"https://kit.com/features/forms?utm_campaign=poweredby&amp;utm_content=form&amp;utm_medium=referral&amp;utm_source=dynamic"},"recaptcha":{"enabled":false},"return_visitor":{"action":"show","custom_content":""},"slide_in":{"display_in":"bottom_right","trigger":"timer","scroll_percentage":null,"timer":5,"devices":"all","show_once_every":15},"sticky_bar":{"display_in":"top","trigger":"timer","scroll_percentage":null,"timer":5,"devices":"all","show_once_every":15}},"version":"5"}`}>
                <div data-style="clean">
                  <ul className="formkit-alert formkit-alert-error" data-element="errors" data-group="alert"></ul>
                  <div data-element="fields" data-stacked="false" className="seva-fields formkit-fields">
                    <div className="formkit-field">
                      <input className="formkit-input" name="email_address" aria-label="Email Address" placeholder="Email Address" required type="email" style={{color: 'rgb(255, 255, 255)', borderColor: 'rgba(255, 255, 255, 0.1)', borderRadius: '8px', backgroundColor: 'rgba(255, 255, 255, 0.05)', fontWeight: 400, padding: '12px', width: '100%'}} />
                    </div>
                    <button data-element="submit" className="formkit-submit formkit-submit" style={{color: 'rgb(0, 0, 0)', backgroundColor: 'rgb(168, 224, 99)', borderRadius: '8px', fontWeight: 400, padding: '12px 24px', marginTop: '15px'}}>
                      <div className="formkit-spinner">
                        <div></div>
                        <div></div>
                        <div></div>
                      </div>
                      <span>Subscribe</span>
                    </button>
                  </div>
                  <div className="formkit-powered-by-convertkit-container">
                    <a href="https://kit.com/features/forms?utm_campaign=poweredby&amp;utm_content=form&amp;utm_medium=referral&amp;utm_source=dynamic" data-element="powered-by" className="formkit-powered-by-convertkit" data-variant="dark" target="_blank" rel="nofollow">Built with Kit</a>
                  </div>
                </div>
              </form>
            </div>
          </div>

          {/* Bottom bar */}
          <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="flex flex-wrap items-center justify-center md:justify-start gap-4 text-sm text-white/40">
              <span>&copy; {new Date().getFullYear()} Olamilekan Portfolio. All rights reserved.</span>
              <span className="hidden md:inline">|</span>
              {footerLinks.legal.map((link, i) => (
                <span key={i}>
                  <a href={link.href} className="hover:text-lime transition-colors">
                    {link.name}
                  </a>
                  {i < footerLinks.legal.length - 1 && <span className="mx-2">|</span>}
                </span>
              ))}
            </div>

            <div className="flex items-center gap-4">
              <span className="text-white/40 text-sm flex items-center gap-1">
                Made with <Heart className="w-4 h-4 text-lime fill-lime" /> by Beacon Digitals
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll to top button */}
      <button
        onClick={scrollToTop}
        className="fixed bottom-8 right-8 w-12 h-12 rounded-full bg-lime text-black flex items-center justify-center shadow-glow hover:shadow-glow-lg transition-all duration-300 hover:-translate-y-1 z-40"
        aria-label="Scroll to top"
      >
        <ArrowUp className="w-5 h-5" />
      </button>
    </footer>
  )
}

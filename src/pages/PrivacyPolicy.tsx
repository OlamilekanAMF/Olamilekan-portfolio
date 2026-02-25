import { ArrowLeft } from 'lucide-react'

export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen bg-black text-white">
      <nav className="fixed top-0 left-0 right-0 z-50 py-4 bg-black/80 backdrop-blur-xl border-b border-white/5">
        <div className="w-full px-4 sm:px-6 lg:px-12 xl:px-20">
          <div className="flex items-center justify-between">
            <a href="/" className="flex items-center gap-2 group">
              <div className="w-10 h-10 rounded-lg bg-lime flex items-center justify-center transition-transform duration-300 group-hover:scale-110">
                <span className="text-black font-bold text-xl">O</span>
              </div>
              <span className="text-white font-semibold text-lg">Olamilekan Portfolio</span>
            </a>
            <a
              href="/"
              className="px-4 py-2 rounded-lg bg-white/5 text-white/70 hover:bg-white/10 hover:text-white transition-colors text-sm flex items-center gap-2"
            >
              <ArrowLeft size={14} /> Back
            </a>
          </div>
        </div>
      </nav>

      <main className="pt-28 pb-20 px-4 sm:px-6 lg:px-12 xl:px-20">
        <div className="max-w-4xl mx-auto prose prose-invert text-white/90">
          <h1 className="text-3xl sm:text-4xl font-bold mb-4">Privacy Policy</h1>
          <p className="text-white/60 mb-6">Last updated: February 25, 2026</p>

          <section className="mb-8">
            <h2 className="text-xl font-semibold text-white mb-3">1. Introduction</h2>
            <p className="text-white/60 mb-3">Welcome to Olamilekan Portfolio.</p>
            <p className="text-white/60 mb-3">Your privacy is important to us. This Privacy Policy explains how we collect, use, process, and protect your personal information when you visit this website or interact with our services.</p>
            <p className="text-white/60">By using this website, you agree to the terms outlined in this policy.</p>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-semibold text-white mb-3">2. Information We Collect</h2>
            <p className="text-white/60 mb-4">We may collect the following types of information:</p>
            <h3 className="text-lg font-semibold text-white/80 mb-3">A. Personal Information (Provided by You)</h3>
            <ul className="list-disc pl-6 text-white/60 space-y-2 mb-4">
              <li>Full Name</li>
              <li>Email Address</li>
              <li>Phone Number (if provided)</li>
              <li>Project details or messages submitted through contact forms</li>
            </ul>
            <h3 className="text-lg font-semibold text-white/80 mb-3">B. Automatically Collected Information</h3>
            <ul className="list-disc pl-6 text-white/60 space-y-2">
              <li>IP address</li>
              <li>Browser type and version</li>
              <li>Device information</li>
              <li>Pages visited</li>
              <li>Time spent on pages</li>
              <li>Referring URLs</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-semibold text-white mb-3">3. How We Use Your Information</h2>
            <p className="text-white/60 mb-3">Your information may be used for:</p>
            <ul className="list-disc pl-6 text-white/60 space-y-2">
              <li>Responding to inquiries and project requests</li>
              <li>Providing quotes or service proposals</li>
              <li>Communicating regarding ongoing projects</li>
              <li>Improving website performance and user experience</li>
              <li>Monitoring traffic and analytics</li>
              <li>Preventing fraud and ensuring website security</li>
            </ul>
            <p className="text-white/60 mt-3">We do not sell, rent, or trade your personal information.</p>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-semibold text-white mb-3">4. Legal Basis for Processing</h2>
            <p className="text-white/60 mb-3">We process your data based on:</p>
            <ul className="list-disc pl-6 text-white/60 space-y-2">
              <li><strong>Consent</strong> – When you voluntarily submit your information</li>
              <li><strong>Legitimate Interest</strong> – For communication, analytics, and service improvement</li>
              <li><strong>Contractual Necessity</strong> – When processing is required to deliver services</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-semibold text-white mb-3">5. Cookies & Tracking Technologies</h2>
            <p className="text-white/60 mb-3">This website may use cookies and similar technologies to:</p>
            <ul className="list-disc pl-6 text-white/60 space-y-2">
              <li>Enable essential website functionality</li>
              <li>Analyze traffic and usage patterns</li>
              <li>Improve performance and user experience</li>
            </ul>
            <p className="text-white/60 mt-3">You can manage or disable cookies through your browser settings.</p>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-semibold text-white mb-3">6. Third-Party Services</h2>
            <p className="text-white/60 mb-3">We may use trusted third-party providers for:</p>
            <ul className="list-disc pl-6 text-white/60 space-y-2">
              <li>Website hosting</li>
              <li>Analytics services (e.g., Google Analytics)</li>
              <li>Email communication tools</li>
              <li>CRM systems</li>
              <li>Payment processing (if applicable)</li>
            </ul>
            <p className="text-white/60 mt-3">These providers process data in accordance with their own privacy policies and applicable laws.</p>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-semibold text-white mb-3">7. Data Retention</h2>
            <p className="text-white/60 mb-3">We retain personal information only as long as necessary to:</p>
            <ul className="list-disc pl-6 text-white/60 space-y-2">
              <li>Fulfill the purposes outlined in this policy</li>
              <li>Comply with legal obligations</li>
              <li>Maintain project history and communication records</li>
            </ul>
            <p className="text-white/60 mt-3">You may request deletion of your data at any time.</p>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-semibold text-white mb-3">8. Data Security</h2>
            <p className="text-white/60 mb-3">We implement appropriate technical and organizational measures to protect your personal information from unauthorized access, disclosure, alteration, or destruction.</p>
            <p className="text-white/60">However, no method of transmission over the internet is 100% secure.</p>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-semibold text-white mb-3">9. Your Rights</h2>
            <p className="text-white/60 mb-3">Depending on your jurisdiction (including GDPR or NDPR), you may have the right to:</p>
            <ul className="list-disc pl-6 text-white/60 space-y-2">
              <li>Access your personal data</li>
              <li>Request correction of inaccurate data</li>
              <li>Request deletion of your data</li>
              <li>Withdraw consent</li>
              <li>Object to certain types of processing</li>
              <li>Request data portability</li>
            </ul>
            <p className="text-white/60 mt-3">To exercise your rights, please contact us using the details below.</p>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-semibold text-white mb-3">10. International Data Transfers</h2>
            <p className="text-white/60 mb-3">If you access this website from outside your country, your data may be transferred and processed in other countries where service providers operate.</p>
            <p className="text-white/60">We take reasonable steps to ensure adequate data protection standards are maintained.</p>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-semibold text-white mb-3">11. Changes to This Privacy Policy</h2>
            <p className="text-white/60">We may update this Privacy Policy periodically. Updates will be posted on this page with a revised effective date.</p>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-semibold text-white mb-3">12. Contact Information</h2>
            <p className="text-white/60">If you have any questions about this Privacy Policy or your data, please contact:</p>
            <div className="mt-3 text-white/60">
              <p><strong>Olamilekan Amujosafe</strong></p>
              <p>Email: <a href="mailto:amujosafeolamilekan@gmail.com" className="text-lime">amujosafeolamilekan@gmail.com</a></p>
              <p>Website: Olamilekan Portfolio</p>
            </div>
          </section>
        </div>
      </main>
    </div>
  )
}

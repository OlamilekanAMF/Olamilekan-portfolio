import React from 'react'
import { ArrowLeft } from 'lucide-react'

export default function TermsOfService() {
  return (
    <div className="min-h-screen bg-black text-white">
      <nav className="fixed top-0 left-0 right-0 z-50 py-4 bg-black/80 backdrop-blur-xl border-b border-white/5">
        <div className="w-full px-4 sm:px-6 lg:px-12 xl:px-20">
          <div className="flex items-center justify-between">
            <a href="/" className="flex items-center gap-2 group">
              <div className="w-10 h-10 rounded-lg bg-lime flex items-center justify-center transition-transform duration-300 group-hover:scale-110">
                <span className="text-black font-bold text-xl">OL</span>
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
          <h1 className="text-3xl sm:text-4xl font-bold mb-4">Terms &amp; Conditions</h1>
          <p className="text-white/60 mb-6">Last updated: February 25, 2026</p>


          <section className="mb-8">
            <h2 className="text-xl font-semibold text-white mb-3">1. Introduction</h2>
            <p className="text-white/60">Welcome to Olamilekan Portfolio (“Website”).</p>
            <p className="text-white/60">By accessing or using this website, you agree to be bound by these Terms &amp; Conditions. If you do not agree with any part of these terms, please do not use this website.</p>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-semibold text-white mb-3">2. Use of the Website</h2>
            <p className="text-white/60">This website is provided for informational and professional purposes, including showcasing projects, services, and expertise.</p>
            <p className="text-white/60">You agree not to:</p>
            <ul className="list-disc pl-6 text-white/60 space-y-2">
              <li>Use the website for unlawful purposes</li>
              <li>Attempt to gain unauthorized access to systems or data</li>
              <li>Disrupt website functionality</li>
              <li>Copy or misuse content without permission</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-semibold text-white mb-3">3. Intellectual Property</h2>
            <p className="text-white/60">All content on this website, including:</p>
            <ul className="list-disc pl-6 text-white/60 space-y-2">
              <li>Text</li>
              <li>Code</li>
              <li>Graphics</li>
              <li>Branding</li>
              <li>Logos</li>
              <li>Project materials</li>
            </ul>
            <p className="text-white/60">is the intellectual property of Olamilekan Amujosafe unless otherwise stated. You may not reproduce, distribute, or modify any content without prior written consent.</p>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-semibold text-white mb-3">4. Services &amp; Project Engagement</h2>
            <p className="text-white/60">Any services offered through this website (including web development, automation, mobile app development, or optimization services) are subject to:</p>
            <ul className="list-disc pl-6 text-white/60 space-y-2">
              <li>Separate written agreements</li>
              <li>Project proposals</li>
              <li>Defined scope of work</li>
              <li>Payment terms</li>
            </ul>
            <p className="text-white/60">No service relationship is established solely by browsing this website.</p>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-semibold text-white mb-3">5. Payments (If Applicable)</h2>
            <p className="text-white/60">If payments are processed through third-party platforms:</p>
            <ul className="list-disc pl-6 text-white/60 space-y-2">
              <li>Payment terms will be defined in a separate agreement</li>
              <li>Refund policies will be outlined per project</li>
              <li>Third-party payment processors may apply their own terms</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-semibold text-white mb-3">6. Limitation of Liability</h2>
            <p className="text-white/60">The information on this website is provided “as is” without warranties of any kind. Olamilekan Amujosafe shall not be liable for:</p>
            <ul className="list-disc pl-6 text-white/60 space-y-2">
              <li>Indirect or consequential damages</li>
              <li>Loss of data</li>
              <li>Business interruption</li>
              <li>Errors or inaccuracies on the website</li>
            </ul>
            <p className="text-white/60">Use of this website is at your own risk.</p>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-semibold text-white mb-3">7. External Links</h2>
            <p className="text-white/60">This website may contain links to third-party websites. We are not responsible for the content, privacy policies, or practices of external sites.</p>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-semibold text-white mb-3">8. Privacy</h2>
            <p className="text-white/60">Your use of this website is also governed by our Privacy Policy. Please review it for details on how data is collected and processed.</p>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-semibold text-white mb-3">9. Modifications</h2>
            <p className="text-white/60">We reserve the right to update or modify these Terms &amp; Conditions at any time. Updates will be posted on this page with a revised effective date.</p>
            <p className="text-white/60">Continued use of the website after changes indicates acceptance of the updated terms.</p>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-semibold text-white mb-3">10. Governing Law</h2>
            <p className="text-white/60">These Terms shall be governed by and interpreted in accordance with the laws of [Insert Country], without regard to conflict of law principles.</p>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-semibold text-white mb-3">11. Contact Information</h2>
            <div className="mt-3 text-white/60">
              <p><strong>Olamilekan Amujosafe</strong></p>
              <p>Email: <a href="mailto:amujosafeolamilekan@gmail.com" className="text-lime">amujosafeolamilekan@gmail.com</a></p>
              <p>Website: <a href="/" className="text-lime">Olamilekan Portfolio</a></p>
            </div>
          </section>
        </div>
      </main>
    </div>
  )
}

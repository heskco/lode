import type { Metadata } from 'next'
import Link from 'next/link'
import { LodeLogo } from '@/components/ui/LodeLogo'

export const metadata: Metadata = {
  title: 'Terms of Service | LODE',
  description: 'The terms and conditions that govern your use of the LODE travel data analytics platform.',
}

export default function TermsOfServicePage() {
  return (
    <div className="min-h-screen bg-lode-light-bg font-trebuchet">
      {/* Header */}
      <header className="container mx-auto px-6 py-6 flex items-center justify-between">
        <Link href="/">
          <LodeLogo variant="full" size="md" theme="light" />
        </Link>
        <div className="flex items-center gap-4">
          <a
            href="https://app.go-lode.com/login"
            className="px-6 py-2 text-lode-navy font-semibold hover:text-lode-orange transition-colors"
          >
            Sign in
          </a>
          <a
            href="https://app.go-lode.com/signup"
            className="px-6 py-2 bg-lode-orange text-white font-semibold rounded-lode hover:bg-orange-600 transition-colors shadow-sm hover:shadow-md"
          >
            Get started
          </a>
        </div>
      </header>

      {/* Hero Banner */}
      <section className="bg-lode-navy py-16">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Terms of Service
          </h1>
          <p className="text-lode-slate text-lg max-w-2xl mx-auto">
            Please read these terms carefully before using LODE. By creating an account or using the platform, you agree to be bound by them.
          </p>
          <p className="text-lode-slate text-sm mt-3">Last updated: April 2026</p>
        </div>
      </section>

      <main className="max-w-4xl mx-auto px-6 py-16">

        {/* Intro card */}
        <div className="bg-white rounded-lode shadow-sm border-l-4 border-lode-orange p-8 mb-12">
          <p className="text-lode-navy leading-relaxed">
            These Terms of Service (&quot;Terms&quot;) form a legal agreement between you (or the organisation you represent) and LODE (&quot;we&quot;, &quot;us&quot;, &quot;our&quot;). They govern your access to and use of the LODE travel data analytics platform, including the website at{' '}
            <a href="https://go-lode.com" className="text-lode-orange hover:underline">go-lode.com</a>{' '}
            and the application at{' '}
            <a href="https://app.go-lode.com" className="text-lode-orange hover:underline">app.go-lode.com</a>{' '}
            (together, the &quot;Service&quot;).
          </p>
          <p className="text-lode-navy leading-relaxed mt-4">
            If you are using LODE on behalf of an organisation, you confirm that you have authority to bind that organisation to these Terms.
          </p>
        </div>

        <div className="space-y-12">

          {/* 1. The Service */}
          <Section number="1" title="What LODE provides">
            <p>
              LODE is a travel data analytics platform that allows users to upload, query, and analyse travel and expense data. The Service operates in two modes:
            </p>
            <ul className="mt-4 space-y-2 list-none">
              <li className="flex items-start gap-3">
                <span className="mt-1 w-2 h-2 rounded-full bg-lode-orange flex-shrink-0"></span>
                <span className="text-lode-navy"><span className="font-semibold">Local Lakes</span> — data is stored and processed entirely in your browser. Nothing is uploaded to our servers.</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="mt-1 w-2 h-2 rounded-full bg-lode-orange flex-shrink-0"></span>
                <span className="text-lode-navy"><span className="font-semibold">Cloud Lakes</span> — data is stored in encrypted cloud storage and accessible to authorised members of your organisation.</span>
              </li>
            </ul>
            <p className="mt-4">
              We reserve the right to modify, suspend, or discontinue any part of the Service at any time. Where reasonably practicable, we will give advance notice of material changes.
            </p>
          </Section>

          {/* 2. Accounts */}
          <Section number="2" title="Accounts and registration">
            <p>
              To access the full Service, you must register for an account. You agree to:
            </p>
            <ul className="mt-4 space-y-2 list-none">
              {[
                'Provide accurate, complete, and up-to-date registration information.',
                'Keep your login credentials confidential and not share them with others.',
                'Notify us immediately at info@go-lode.com if you suspect unauthorised access to your account.',
                'Accept responsibility for all activity that occurs under your account.',
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-3">
                  <span className="mt-1 w-2 h-2 rounded-full bg-lode-orange flex-shrink-0"></span>
                  <span className="text-lode-navy">{item}</span>
                </li>
              ))}
            </ul>
            <p className="mt-4">
              We reserve the right to suspend or terminate accounts that violate these Terms or that have been inactive for an extended period, with reasonable notice where possible.
            </p>
          </Section>

          {/* 3. Acceptable use */}
          <Section number="3" title="Acceptable use">
            <p>
              You may use the Service only for lawful purposes and in accordance with these Terms. You must not:
            </p>
            <div className="mt-6 grid md:grid-cols-2 gap-4">
              {[
                ['Upload unlawful content', 'Do not upload data that you do not have the right to process, or that would breach any applicable law or third-party rights.'],
                ['Attempt to circumvent security', 'Do not attempt to probe, scan, or test the vulnerability of the Service, or bypass any authentication or access controls.'],
                ['Interfere with the Service', 'Do not use automated tools to scrape, overload, or disrupt the Service in a way that affects other users.'],
                ['Misrepresent your identity', 'Do not impersonate any person or organisation, or misrepresent your affiliation with any entity.'],
                ['Resell without permission', 'Do not resell, sublicense, or otherwise provide access to the Service to third parties without our prior written consent.'],
                ['Use for unlawful purposes', 'Do not use the Service in connection with fraud, money laundering, or any other illegal activity.'],
              ].map(([title, desc], i) => (
                <div key={i} className="bg-white border border-gray-100 rounded-lode p-4 hover:border-lode-orange transition-all">
                  <h3 className="font-semibold text-lode-navy mb-1">{title}</h3>
                  <p className="text-lode-slate text-sm">{desc}</p>
                </div>
              ))}
            </div>
            <p className="mt-6">
              We reserve the right to investigate suspected violations and to suspend or terminate access to the Service if we reasonably believe a breach has occurred.
            </p>
          </Section>

          {/* 4. Subscriptions and billing */}
          <Section number="4" title="Subscriptions and billing">
            <p>
              Access to paid features of the Service requires an active subscription. The following terms apply to all paid plans.
            </p>
            <div className="mt-6 space-y-4">
              <div className="bg-white border border-gray-100 rounded-lode p-5">
                <h3 className="font-semibold text-lode-navy mb-2">Free trial</h3>
                <p>New accounts receive a 14-day free trial. No credit card is required to start. At the end of the trial, access to paid features will be restricted unless you subscribe.</p>
              </div>
              <div className="bg-white border border-gray-100 rounded-lode p-5">
                <h3 className="font-semibold text-lode-navy mb-2">Billing</h3>
                <p>Subscriptions are billed monthly in advance. Payments are processed by our payment provider, Stripe. By subscribing, you authorise us to charge your payment method on a recurring basis until you cancel.</p>
              </div>
              <div className="bg-white border border-gray-100 rounded-lode p-5">
                <h3 className="font-semibold text-lode-navy mb-2">Cancellation</h3>
                <p>You may cancel your subscription at any time from your account settings. Cancellation takes effect at the end of the current billing period. We do not offer refunds for unused time within a billing period, except where required by law.</p>
              </div>
              <div className="bg-white border border-gray-100 rounded-lode p-5">
                <h3 className="font-semibold text-lode-navy mb-2">Price changes</h3>
                <p>We may change subscription prices from time to time. We will give at least 30 days&apos; notice of any price increase. Continuing to use the Service after that date constitutes acceptance of the new price.</p>
              </div>
            </div>
          </Section>

          {/* 5. Your data */}
          <Section number="5" title="Your data">
            <p>
              You retain full ownership of all data you upload to the Service. By uploading data, you grant LODE a limited licence to process that data solely for the purpose of providing the Service to you.
            </p>
            <p className="mt-3">
              You are responsible for ensuring that you have the right to upload and process any data you add to the platform, including any personal data about employees or travellers. You must have a valid lawful basis under applicable data protection law before uploading personal data to a cloud lake.
            </p>
            <p className="mt-3">
              On account closure, your cloud data will be deleted within 30 days of your written request. Local lake data exists only in your browser and is entirely under your control.
            </p>
            <p className="mt-3">
              For full details of how we handle your data, see our{' '}
              <Link href="/privacy-policy" className="text-lode-orange hover:underline">Privacy Policy</Link>{' '}
              and{' '}
              <Link href="/gdpr" className="text-lode-orange hover:underline">GDPR page</Link>.
            </p>
          </Section>

          {/* 6. Intellectual property */}
          <Section number="6" title="Intellectual property">
            <p>
              All software, design, trademarks, and content that make up the LODE platform are owned by or licensed to us. These Terms do not transfer any intellectual property rights to you.
            </p>
            <p className="mt-3">
              You are granted a limited, non-exclusive, non-transferable licence to access and use the Service for your own internal business purposes during the term of your subscription.
            </p>
            <p className="mt-3">
              You retain all intellectual property rights in the data you upload. We do not claim any ownership over your data.
            </p>
          </Section>

          {/* 7. Disclaimers */}
          <Section number="7" title="Disclaimers">
            <p>
              The Service is provided &quot;as is&quot; and &quot;as available&quot;. To the extent permitted by law, we make no warranties — express or implied — regarding the Service, including warranties of merchantability, fitness for a particular purpose, or uninterrupted availability.
            </p>
            <p className="mt-3">
              AI-generated query suggestions and data summaries are provided for convenience only. You are responsible for reviewing and validating any output before making business decisions based on it. LODE does not guarantee the accuracy, completeness, or suitability of AI-generated content.
            </p>
            <p className="mt-3">
              We do not warrant that the Service will be free from errors, viruses, or other harmful components, though we take reasonable steps to ensure it is secure.
            </p>
          </Section>

          {/* 8. Limitation of liability */}
          <Section number="8" title="Limitation of liability">
            <p>
              To the fullest extent permitted by law, LODE shall not be liable for any indirect, incidental, special, consequential, or punitive damages arising from your use of — or inability to use — the Service.
            </p>
            <p className="mt-3">
              Our total aggregate liability to you for any claim arising under or in connection with these Terms shall not exceed the total fees paid by you to LODE in the 12 months preceding the event giving rise to the claim.
            </p>
            <p className="mt-3">
              Nothing in these Terms limits our liability for death or personal injury caused by negligence, fraud, or any other liability that cannot be excluded or limited under applicable law.
            </p>
          </Section>

          {/* 9. Third-party services */}
          <Section number="9" title="Third-party services">
            <p>
              The Service integrates with third-party providers including AWS, Vercel, Stripe, and an AI provider. Your use of those services is subject to their own terms and policies. We are not responsible for the practices or content of third-party services.
            </p>
            <p className="mt-3">
              Links to third-party websites on our platform do not constitute an endorsement of those sites or their content.
            </p>
          </Section>

          {/* 10. Termination */}
          <Section number="10" title="Termination">
            <p>
              Either party may terminate the agreement formed by these Terms at any time. You may do so by cancelling your subscription and closing your account. We may do so by giving you reasonable notice, or immediately if you materially breach these Terms.
            </p>
            <p className="mt-3">
              On termination, your right to access the Service will cease. Sections relating to intellectual property, disclaimers, limitation of liability, and governing law will survive termination.
            </p>
          </Section>

          {/* 11. Changes */}
          <Section number="11" title="Changes to these terms">
            <p>
              We may update these Terms from time to time. When we make material changes, we will notify you by email (if you have an account) and update the &quot;Last updated&quot; date at the top of this page. Continued use of the Service after the effective date of revised Terms constitutes your acceptance of the changes.
            </p>
            <p className="mt-3">
              If you do not agree to the updated Terms, you should stop using the Service and cancel your subscription.
            </p>
          </Section>

          {/* 12. Governing law */}
          <Section number="12" title="Governing law and disputes">
            <p>
              These Terms are governed by the laws of England and Wales. Any disputes arising from or in connection with these Terms shall be subject to the exclusive jurisdiction of the courts of England and Wales.
            </p>
            <p className="mt-3">
              Before pursuing formal legal action, we encourage you to contact us first at{' '}
              <a href="mailto:info@go-lode.com" className="text-lode-orange hover:underline">info@go-lode.com</a>{' '}
              so that we can try to resolve the matter directly.
            </p>
          </Section>

          {/* 13. Contact */}
          <Section number="13" title="Contact us">
            <p>
              If you have any questions about these Terms or need to get in touch with us:
            </p>
            <div className="mt-4 bg-lode-navy rounded-lode p-6">
              <p className="font-semibold text-lode-orange mb-1">LODE</p>
              <p className="text-white">Email:{' '}
                <a href="mailto:info@go-lode.com" className="text-lode-orange hover:underline">info@go-lode.com</a>
              </p>
            </div>
          </Section>

        </div>
      </main>

      {/* Footer */}
      <footer className="border-t border-gray-200 py-8 mt-8">
        <div className="max-w-4xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-4">
          <LodeLogo variant="full" size="sm" theme="light" />
          <div className="flex gap-6 text-sm text-lode-slate flex-wrap justify-center">
            <Link href="/" className="hover:text-lode-orange transition-colors">Home</Link>
            <Link href="/privacy-policy" className="hover:text-lode-orange transition-colors">Privacy Policy</Link>
            <Link href="/security" className="hover:text-lode-orange transition-colors">Security</Link>
            <Link href="/gdpr" className="hover:text-lode-orange transition-colors">GDPR</Link>
            <Link href="/terms" className="text-lode-orange">Terms of Service</Link>
          </div>
          <p className="text-lode-slate text-sm">&copy; 2026 LODE. All rights reserved.</p>
        </div>
      </footer>
    </div>
  )
}

function Section({ number, title, children }: { number: string; title: string; children: React.ReactNode }) {
  return (
    <section>
      <div className="flex items-center gap-4 mb-4">
        <div className="w-8 h-8 bg-lode-orange rounded-full flex items-center justify-center flex-shrink-0">
          <span className="text-white text-sm font-bold">{number}</span>
        </div>
        <h2 className="text-2xl font-bold text-lode-navy">{title}</h2>
      </div>
      <div className="ml-12 text-lode-slate leading-relaxed space-y-3">
        {children}
      </div>
    </section>
  )
}

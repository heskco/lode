import type { Metadata } from 'next'
import Link from 'next/link'
import { LodeLogo } from '@/components/ui/LodeLogo'

export const metadata: Metadata = {
  title: 'Privacy Policy | LODE',
  description: 'LODE Privacy Policy — how we collect, use, and protect your personal data in accordance with UK GDPR and the Data Protection Act 2018.',
}

export default function PrivacyPolicy() {
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
            Sign In
          </a>
          <a
            href="https://app.go-lode.com/signup"
            className="px-6 py-2 bg-lode-orange text-white font-semibold rounded-lode hover:bg-orange-600 transition-colors shadow-sm hover:shadow-md"
          >
            Get Started
          </a>
        </div>
      </header>

      {/* Hero Banner */}
      <section className="bg-lode-navy py-16">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Privacy Policy
          </h1>
          <p className="text-lode-slate text-lg">
            Last updated: 12 April 2026
          </p>
        </div>
      </section>

      {/* Content */}
      <main className="max-w-4xl mx-auto px-6 py-16">

        {/* Intro */}
        <div className="bg-white rounded-lode shadow-sm border-l-4 border-lode-orange p-8 mb-8">
          <p className="text-lode-navy leading-relaxed">
            LODE (&quot;we&quot;, &quot;us&quot;, &quot;our&quot;) is committed to protecting and respecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your personal data when you visit our website at{' '}
            <a href="https://go-lode.com" className="text-lode-orange hover:underline">go-lode.com</a>{' '}
            or use our travel data analytics platform (collectively, the &quot;Service&quot;).
          </p>
          <p className="text-lode-navy leading-relaxed mt-4">
            This policy is written in accordance with the UK General Data Protection Regulation (UK GDPR) and the Data Protection Act 2018. Please read it carefully.
          </p>
        </div>

        <div className="space-y-10">

          {/* 1. Who We Are */}
          <Section number="1" title="Who We Are">
            <p>
              The data controller responsible for your personal data is:
            </p>
            <div className="mt-4 bg-lode-light-bg rounded-lode p-6 text-lode-navy">
              <p className="font-semibold">LODE</p>
              <p>Email: <a href="mailto:info@go-lode.com" className="text-lode-orange hover:underline">info@go-lode.com</a></p>
            </div>
            <p className="mt-4">
              If you have any questions about how we handle your personal data, please contact us at the address above.
            </p>
          </Section>

          {/* 2. What Data We Collect */}
          <Section number="2" title="What Personal Data We Collect">
            <p>We may collect and process the following categories of personal data:</p>
            <Subsection title="Account and Identity Data">
              <p>Name, email address, job title, and company name when you register for an account or contact us.</p>
            </Subsection>
            <Subsection title="Usage Data">
              <p>Information about how you use the Service, including pages visited, features used, query history, and session duration. This data is collected via cookies and similar technologies (see Section 8).</p>
            </Subsection>
            <Subsection title="Communications Data">
              <p>Any information you provide when you contact us via the enquiry form, email, or other channels, including the content of your messages.</p>
            </Subsection>
            <Subsection title="Billing and Payment Data">
              <p>Subscription tier, billing email, and payment status. We do not store full payment card details — all card transactions are processed by our payment provider, Stripe, under their own privacy policy.</p>
            </Subsection>
            <Subsection title="Travel Data You Upload">
              <p>
                LODE is a data analytics platform. When you upload travel data files (e.g., booking exports, expense reports), that data is stored within your secure, isolated data lake and used solely to provide the Service to you. We do not access, analyse, or share your uploaded travel data for our own purposes.
              </p>
              <p className="mt-2">
                You remain the data controller for any personal data contained within the files you upload. We act as a data processor on your behalf for that data.
              </p>
            </Subsection>
          </Section>

          {/* 3. How We Use Your Data */}
          <Section number="3" title="How We Use Your Personal Data">
            <p>We use your personal data for the following purposes and on the following legal bases:</p>
            <div className="mt-4 overflow-x-auto">
              <table className="w-full text-sm border-collapse">
                <thead>
                  <tr className="bg-lode-navy text-white">
                    <th className="text-left px-4 py-3 rounded-tl-lode">Purpose</th>
                    <th className="text-left px-4 py-3 rounded-tr-lode">Legal Basis (UK GDPR)</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-100">
                  {[
                    ['To create and manage your account', 'Performance of a contract (Art. 6(1)(b))'],
                    ['To provide and operate the Service', 'Performance of a contract (Art. 6(1)(b))'],
                    ['To process payments and manage subscriptions', 'Performance of a contract (Art. 6(1)(b))'],
                    ['To respond to your enquiries and provide support', 'Legitimate interests (Art. 6(1)(f))'],
                    ['To send service-related notifications (e.g., billing, security)', 'Performance of a contract (Art. 6(1)(b))'],
                    ['To send marketing communications (where you have opted in)', 'Consent (Art. 6(1)(a))'],
                    ['To improve and develop the Service', 'Legitimate interests (Art. 6(1)(f))'],
                    ['To comply with legal obligations', 'Legal obligation (Art. 6(1)(c))'],
                  ].map(([purpose, basis], i) => (
                    <tr key={i} className={i % 2 === 0 ? 'bg-white' : 'bg-lode-light-bg'}>
                      <td className="px-4 py-3 text-lode-navy">{purpose}</td>
                      <td className="px-4 py-3 text-lode-slate">{basis}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </Section>

          {/* 4. Data Retention */}
          <Section number="4" title="How Long We Keep Your Data">
            <p>We retain your personal data only for as long as necessary to fulfil the purposes set out in this policy, or as required by law:</p>
            <ul className="mt-4 space-y-2 list-none">
              {[
                ['Account data', 'Retained for the duration of your account plus 2 years after closure, unless a longer period is required by law.'],
                ['Uploaded travel data', 'Retained for the duration of your subscription. Deleted within 30 days of account closure upon your request.'],
                ['Communications', 'Retained for up to 3 years from the date of your last communication.'],
                ['Billing records', 'Retained for 7 years to comply with financial record-keeping requirements.'],
              ].map(([label, desc], i) => (
                <li key={i} className="flex items-start gap-3">
                  <span className="mt-1 w-2 h-2 rounded-full bg-lode-orange flex-shrink-0"></span>
                  <span className="text-lode-navy"><span className="font-semibold">{label}:</span> {desc}</span>
                </li>
              ))}
            </ul>
          </Section>

          {/* 5. Sharing Your Data */}
          <Section number="5" title="Who We Share Your Data With">
            <p>
              We do not sell your personal data. We may share it with trusted third parties only where necessary to deliver the Service:
            </p>
            <ul className="mt-4 space-y-3 list-none">
              {[
                ['Stripe', 'Payment processing. Your payment details are handled directly by Stripe under their privacy policy.'],
                ['Amazon Web Services (AWS)', 'Cloud infrastructure hosting. Data is stored in the EU (eu-west-2, London) region.'],
                ['Vercel', 'Website hosting and delivery.'],
                ['Legal authorities', 'Where required to comply with a legal obligation, court order, or to protect the rights of LODE or others.'],
              ].map(([name, desc], i) => (
                <li key={i} className="flex items-start gap-3 bg-lode-light-bg rounded-lode p-4">
                  <span className="mt-1 w-2 h-2 rounded-full bg-lode-orange flex-shrink-0"></span>
                  <span className="text-lode-navy"><span className="font-semibold">{name}:</span> {desc}</span>
                </li>
              ))}
            </ul>
            <p className="mt-4">
              All third-party processors are bound by data processing agreements that require them to protect your data in accordance with UK GDPR.
            </p>
          </Section>

          {/* 6. International Transfers */}
          <Section number="6" title="International Data Transfers">
            <p>
              Your personal data is primarily stored and processed within the United Kingdom and the European Economic Area (EEA). Where data is transferred outside these regions (for example, to US-based service providers), we ensure appropriate safeguards are in place, including Standard Contractual Clauses (SCCs) approved by the relevant supervisory authority.
            </p>
          </Section>

          {/* 7. Your Rights */}
          <Section number="7" title="Your Rights">
            <p>Under UK GDPR, you have the following rights in relation to your personal data:</p>
            <div className="mt-4 grid md:grid-cols-2 gap-4">
              {[
                ['Right of access', 'You may request a copy of the personal data we hold about you.'],
                ['Right to rectification', 'You may ask us to correct inaccurate or incomplete data.'],
                ['Right to erasure', 'You may request that we delete your personal data, subject to certain conditions.'],
                ['Right to restrict processing', 'You may ask us to limit how we use your data in certain circumstances.'],
                ['Right to data portability', 'You may request your data in a structured, machine-readable format.'],
                ['Right to object', 'You may object to processing based on legitimate interests or for direct marketing.'],
                ['Right to withdraw consent', 'Where we rely on your consent, you may withdraw it at any time.'],
                ['Right to complain', 'You have the right to lodge a complaint with the Information Commissioner\'s Office (ICO).'],
              ].map(([right, desc], i) => (
                <div key={i} className="bg-white border border-gray-100 rounded-lode p-4 hover:border-lode-orange transition-all">
                  <h4 className="font-semibold text-lode-navy mb-1">{right}</h4>
                  <p className="text-lode-slate text-sm">{desc}</p>
                </div>
              ))}
            </div>
            <p className="mt-6">
              To exercise any of these rights, please contact us at{' '}
              <a href="mailto:info@go-lode.com" className="text-lode-orange hover:underline">info@go-lode.com</a>.
              We will respond within one calendar month.
            </p>
            <p className="mt-3">
              You can also contact the ICO directly:{' '}
              <span className="text-lode-navy font-medium">ico.org.uk</span> or by calling 0303 123 1113.
            </p>
          </Section>

          {/* 8. Cookies */}
          <Section number="8" title="Cookies and Tracking Technologies">
            <p>
              We use cookies and similar technologies to operate and improve the Service. Cookies are small text files stored on your device.
            </p>
            <div className="mt-4 overflow-x-auto">
              <table className="w-full text-sm border-collapse">
                <thead>
                  <tr className="bg-lode-navy text-white">
                    <th className="text-left px-4 py-3 rounded-tl-lode">Type</th>
                    <th className="text-left px-4 py-3">Purpose</th>
                    <th className="text-left px-4 py-3 rounded-tr-lode">Basis</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-100">
                  {[
                    ['Strictly necessary', 'Session management, authentication, and security. The Service cannot function without these.', 'Legitimate interests'],
                    ['Functional', 'Remembering your preferences and settings.', 'Legitimate interests'],
                    ['Analytics', 'Understanding how visitors use the site so we can improve it (e.g., page visits, session length).', 'Consent'],
                  ].map(([type, purpose, basis], i) => (
                    <tr key={i} className={i % 2 === 0 ? 'bg-white' : 'bg-lode-light-bg'}>
                      <td className="px-4 py-3 font-semibold text-lode-navy">{type}</td>
                      <td className="px-4 py-3 text-lode-slate">{purpose}</td>
                      <td className="px-4 py-3 text-lode-slate">{basis}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="mt-4">
              You can control cookies through your browser settings. Disabling strictly necessary cookies may affect the functionality of the Service.
            </p>
          </Section>

          {/* 9. Data Security */}
          <Section number="9" title="Data Security">
            <p>
              We take the security of your personal data seriously. Our security measures include:
            </p>
            <ul className="mt-4 space-y-2 list-none">
              {[
                'All data is encrypted in transit using TLS 1.2 or higher.',
                'Data at rest is encrypted using AES-256.',
                'Your uploaded data is stored in an isolated, private data lake accessible only to your organisation.',
                'Access to production systems is restricted to authorised personnel only.',
                'Regular security reviews and vulnerability assessments.',
                'JWT-based authentication with short-lived access tokens and secure refresh token handling.',
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-3">
                  <span className="mt-1 w-2 h-2 rounded-full bg-lode-orange flex-shrink-0"></span>
                  <span className="text-lode-navy">{item}</span>
                </li>
              ))}
            </ul>
            <p className="mt-4">
              Despite these measures, no transmission over the internet is entirely secure. If you believe your data has been compromised, please contact us immediately at{' '}
              <a href="mailto:info@go-lode.com" className="text-lode-orange hover:underline">info@go-lode.com</a>.
            </p>
          </Section>

          {/* 10. Children */}
          <Section number="10" title="Children's Privacy">
            <p>
              The Service is intended for business use and is not directed at children under the age of 16. We do not knowingly collect personal data from anyone under 16. If you believe we have inadvertently collected such data, please contact us and we will delete it promptly.
            </p>
          </Section>

          {/* 11. Changes */}
          <Section number="11" title="Changes to This Policy">
            <p>
              We may update this Privacy Policy from time to time to reflect changes in our practices or legal requirements. When we make material changes, we will notify you by email (if you have an account) and update the &quot;Last updated&quot; date at the top of this page. We encourage you to review this policy periodically.
            </p>
          </Section>

          {/* 12. Contact */}
          <Section number="12" title="Contact Us">
            <p>
              If you have any questions, concerns, or requests regarding this Privacy Policy or our data practices, please contact us:
            </p>
            <div className="mt-4 bg-lode-navy rounded-lode p-6">
              <p className="font-semibold text-lode-orange mb-1">LODE</p>
              <p className="text-white">Email: <a href="mailto:info@go-lode.com" className="text-lode-orange hover:underline">info@go-lode.com</a></p>
            </div>
          </Section>

        </div>
      </main>

      {/* Footer */}
      <footer className="border-t border-gray-200 py-8 mt-8">
        <div className="max-w-4xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-4">
          <LodeLogo variant="full" size="sm" theme="light" />
          <div className="flex gap-6 text-sm text-lode-slate">
            <Link href="/" className="hover:text-lode-orange transition-colors">Home</Link>
            <Link href="/privacy-policy" className="text-lode-orange">Privacy Policy</Link>
            <a href="mailto:info@go-lode.com" className="hover:text-lode-orange transition-colors">Contact</a>
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

function Subsection({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div className="mt-4">
      <h3 className="font-semibold text-lode-navy mb-2">{title}</h3>
      <div className="text-lode-slate leading-relaxed">{children}</div>
    </div>
  )
}

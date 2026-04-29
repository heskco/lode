import type { Metadata } from 'next'
import Link from 'next/link'
import { LodeLogo } from '@/components/ui/LodeLogo'

export const metadata: Metadata = {
  title: 'GDPR Compliance | LODE',
  description: 'How LODE meets its obligations under the UK GDPR and EU GDPR — your rights, our commitments, and the technical measures that protect your personal data.',
}

export default function GDPRPage() {
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
            GDPR Compliance
          </h1>
          <p className="text-lode-slate text-lg max-w-2xl mx-auto">
            LODE is designed from the ground up to comply with the UK GDPR and EU GDPR. Here is what that means for you and your data.
          </p>
          <p className="text-lode-slate text-sm mt-3">Last updated: April 2026</p>
        </div>
      </section>

      <main className="max-w-4xl mx-auto px-6 py-16">

        {/* Intro card */}
        <div className="bg-white rounded-lode shadow-sm border-l-4 border-lode-orange p-8 mb-12">
          <p className="text-lode-navy leading-relaxed">
            The General Data Protection Regulation (GDPR) gives individuals control over their personal data and places obligations on organisations that collect or process it. LODE takes these obligations seriously. This page explains how GDPR applies to our platform, what rights you have, and how to exercise them.
          </p>
          <p className="text-lode-navy leading-relaxed mt-4">
            For full details of how we collect and use personal data, see our{' '}
            <Link href="/privacy-policy" className="text-lode-orange hover:underline">Privacy Policy</Link>.
            For the technical measures we use to protect data, see our{' '}
            <Link href="/security" className="text-lode-orange hover:underline">Security page</Link>.
          </p>
        </div>

        <div className="space-y-12">

          {/* 1. Controller vs Processor */}
          <Section number="1" title="Who controls your data">
            <p>
              GDPR distinguishes between a <strong className="text-lode-navy">data controller</strong> (who decides why and how data is used) and a <strong className="text-lode-navy">data processor</strong> (who processes data on the controller&apos;s behalf). Understanding which role LODE plays is important.
            </p>
            <div className="mt-6 grid md:grid-cols-2 gap-6">
              <div className="bg-white border-2 border-lode-orange rounded-lode p-6">
                <h3 className="font-bold text-lode-navy text-lg mb-3">LODE as controller</h3>
                <p>
                  For your account data — your name, email address, and subscription details — LODE is the data controller. We decide how this information is collected and used, and we are responsible for protecting it in line with GDPR.
                </p>
              </div>
              <div className="bg-white border border-gray-200 rounded-lode p-6">
                <h3 className="font-bold text-lode-navy text-lg mb-3">LODE as processor</h3>
                <p>
                  For the travel data files you upload to the platform — which may contain personal data about employees or travellers — you remain the data controller. LODE acts as a data processor, handling that data solely to provide the service to you.
                </p>
              </div>
            </div>
          </Section>

          {/* 2. Lawful basis */}
          <Section number="2" title="Our lawful basis for processing">
            <p>
              GDPR requires that every use of personal data has a lawful basis. The table below shows the basis we rely on for each type of processing.
            </p>
            <div className="mt-6 overflow-x-auto">
              <table className="w-full text-sm border-collapse">
                <thead>
                  <tr className="bg-lode-navy text-white">
                    <th className="text-left px-4 py-3 rounded-tl-lode">What we do</th>
                    <th className="text-left px-4 py-3 rounded-tr-lode">Legal basis</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-100">
                  {[
                    ['Create and manage your account', 'Performance of a contract — Art. 6(1)(b)'],
                    ['Provide and operate the platform', 'Performance of a contract — Art. 6(1)(b)'],
                    ['Process payments and manage subscriptions', 'Performance of a contract — Art. 6(1)(b)'],
                    ['Respond to support and sales enquiries', 'Legitimate interests — Art. 6(1)(f)'],
                    ['Send service notifications (billing, security)', 'Performance of a contract — Art. 6(1)(b)'],
                    ['Send marketing communications', 'Consent — Art. 6(1)(a) — you can opt out at any time'],
                    ['Improve and develop the platform', 'Legitimate interests — Art. 6(1)(f)'],
                    ['Comply with legal obligations', 'Legal obligation — Art. 6(1)(c)'],
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

          {/* 3. Privacy by design */}
          <Section number="3" title="Privacy by design — built in, not bolted on">
            <p>
              Article 25 of the GDPR requires organisations to build data protection into their systems by default. LODE was designed with this principle at its core. The key technical measures are:
            </p>
            <div className="mt-6 space-y-4">
              {[
                {
                  title: 'Personal data never reaches the AI',
                  body: 'Before any data sample is sent to our AI for analysis, LODE automatically detects and removes columns containing personal information. The AI receives column names and redacted placeholders — never actual values such as names, email addresses, or card numbers.',
                },
                {
                  title: 'Queries run in your browser',
                  body: 'All SQL queries are executed locally inside your browser. Query results are never transmitted to any server. Only you see the output.',
                },
                {
                  title: 'Local lakes never leave your device',
                  body: 'When using local data lakes, files are stored entirely in your browser\'s built-in storage. Nothing is uploaded to LODE\'s servers — the data never leaves your machine.',
                },
                {
                  title: 'Explicit consent for cloud uploads containing PII',
                  body: 'If personal data is detected in a file you are uploading to a cloud lake, the upload pauses. A clear modal lists every type of personal data found, with its GDPR classification, and asks for your explicit acknowledgement before proceeding. You can always cancel.',
                },
                {
                  title: 'Minimum data transmission',
                  body: 'We only send what is necessary. For AI analysis, that is column names, a small redacted data sample, and the total row count. Full datasets are never transmitted.',
                },
              ].map(({ title, body }, i) => (
                <div key={i} className="bg-white border border-gray-100 rounded-lode p-5 hover:border-lode-orange transition-all">
                  <h3 className="font-bold text-lode-navy mb-2">{title}</h3>
                  <p className="text-lode-slate">{body}</p>
                </div>
              ))}
            </div>
          </Section>

          {/* 4. Special categories */}
          <Section number="4" title="Special category data">
            <p>
              Article 9 of the GDPR provides extra protection for sensitive categories of personal data — such as passport numbers, national identity numbers, and financial account details. LODE&apos;s PII detection engine specifically flags these as <strong className="text-lode-navy">Critical</strong> severity and ensures they are redacted before any external processing.
            </p>
            <p className="mt-3">
              If your travel data files contain special category data, you will be warned before any cloud upload proceeds, and you must confirm a lawful basis for processing before continuing.
            </p>
          </Section>

          {/* 5. Your rights */}
          <Section number="5" title="Your rights under GDPR">
            <p>
              The GDPR gives you a clear set of rights over your personal data. Here is what each one means and how to use it.
            </p>
            <div className="mt-6 grid md:grid-cols-2 gap-4">
              {[
                {
                  right: 'Right of access',
                  desc: 'You can ask us for a copy of all personal data we hold about you. We will provide it within one calendar month.',
                },
                {
                  right: 'Right to rectification',
                  desc: 'If any data we hold about you is inaccurate or incomplete, you can ask us to correct it.',
                },
                {
                  right: 'Right to erasure',
                  desc: 'You can ask us to delete your personal data. Subject to any legal obligations, we will remove it from our systems.',
                },
                {
                  right: 'Right to restrict processing',
                  desc: 'In certain circumstances, you can ask us to limit what we do with your data while a dispute is resolved.',
                },
                {
                  right: 'Right to data portability',
                  desc: 'You can request your personal data in a structured, machine-readable format so you can transfer it elsewhere.',
                },
                {
                  right: 'Right to object',
                  desc: 'You can object to processing based on our legitimate interests, or to receiving direct marketing at any time.',
                },
                {
                  right: 'Right to withdraw consent',
                  desc: 'Where we rely on your consent (for example, marketing emails), you can withdraw it at any time with no penalty.',
                },
                {
                  right: 'Right to complain',
                  desc: 'If you believe we have not handled your data correctly, you have the right to complain to the relevant supervisory authority.',
                },
              ].map(({ right, desc }, i) => (
                <div key={i} className="bg-white border border-gray-100 rounded-lode p-4 hover:border-lode-orange transition-all">
                  <h3 className="font-semibold text-lode-navy mb-1">{right}</h3>
                  <p className="text-lode-slate text-sm">{desc}</p>
                </div>
              ))}
            </div>
            <div className="mt-6 bg-lode-light-bg rounded-lode p-5">
              <p className="text-lode-navy">
                To exercise any of these rights, email us at{' '}
                <a href="mailto:info@go-lode.com" className="text-lode-orange hover:underline font-semibold">info@go-lode.com</a>.
                We will respond within one calendar month.
              </p>
            </div>
          </Section>

          {/* 6. Supervisory authority */}
          <Section number="6" title="Supervisory authority">
            <p>
              LODE operates primarily under UK GDPR, regulated by the <strong className="text-lode-navy">Information Commissioner&apos;s Office (ICO)</strong>.
            </p>
            <p className="mt-3">
              If you are based in the EU, your local data protection authority has jurisdiction over complaints relating to EU GDPR.
            </p>
            <div className="mt-4 bg-lode-light-bg rounded-lode p-5 space-y-2 text-lode-navy text-sm">
              <p><span className="font-semibold">ICO website:</span> ico.org.uk</p>
              <p><span className="font-semibold">ICO helpline:</span> 0303 123 1113</p>
              <p className="text-lode-slate">We would always prefer to resolve any concern directly — please contact us first and we will do our best to help.</p>
            </div>
          </Section>

          {/* 7. Sub-processors */}
          <Section number="7" title="Sub-processors">
            <p>
              As a data processor for your uploaded travel data, LODE uses a small number of trusted third-party sub-processors. We have data processing agreements in place with each of them.
            </p>
            <div className="mt-6 space-y-3">
              {[
                {
                  name: 'Amazon Web Services (AWS)',
                  purpose: 'Cloud infrastructure and file storage, hosted in the EU (London, eu-west-2 region).',
                },
                {
                  name: 'Vercel',
                  purpose: 'Website hosting and serverless function execution.',
                },
                {
                  name: 'Anthropic (AI provider)',
                  purpose: 'AI analysis of redacted data samples for query generation. Raw personal data is never transmitted. SOC 2 Type II certified.',
                },
                {
                  name: 'Stripe',
                  purpose: 'Payment processing. Stripe handles card data directly — LODE does not store payment card details.',
                },
              ].map(({ name, purpose }, i) => (
                <div key={i} className="flex items-start gap-4 bg-white rounded-lode p-4 border border-gray-100">
                  <span className="mt-1.5 w-2 h-2 rounded-full bg-lode-orange flex-shrink-0"></span>
                  <div>
                    <span className="font-semibold text-lode-navy">{name}: </span>
                    <span className="text-lode-slate">{purpose}</span>
                  </div>
                </div>
              ))}
            </div>
          </Section>

          {/* 8. Data transfers */}
          <Section number="8" title="International data transfers">
            <p>
              Your personal data is primarily stored and processed within the UK and the European Economic Area (EEA). Where any transfer outside these regions is necessary (for example, to US-based service providers), we ensure appropriate safeguards are in place — including Standard Contractual Clauses (SCCs) approved by the relevant supervisory authority.
            </p>
          </Section>

          {/* CTA */}
          <section className="bg-lode-navy rounded-lode p-8 text-center">
            <h2 className="text-2xl font-bold text-lode-orange mb-3">Questions about your data?</h2>
            <p className="text-gray-300 mb-6 max-w-xl mx-auto">
              Whether you want to exercise a right, understand how your data is used, or raise a concern, we are here to help.
            </p>
            <a
              href="mailto:info@go-lode.com?subject=GDPR%20Enquiry"
              className="inline-block px-8 py-3 bg-lode-orange text-white font-semibold rounded-lode hover:bg-orange-600 transition-all shadow-md hover:shadow-lg"
            >
              Contact us
            </a>
          </section>

        </div>
      </main>

      {/* Footer */}
      <footer className="border-t border-gray-200 py-8 mt-8">
        <div className="max-w-4xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-4">
          <LodeLogo variant="full" size="sm" theme="light" />
          <div className="flex gap-6 text-sm text-lode-slate">
            <Link href="/" className="hover:text-lode-orange transition-colors">Home</Link>
            <Link href="/privacy-policy" className="hover:text-lode-orange transition-colors">Privacy Policy</Link>
            <Link href="/security" className="hover:text-lode-orange transition-colors">Security</Link>
            <Link href="/gdpr" className="text-lode-orange">GDPR</Link>
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

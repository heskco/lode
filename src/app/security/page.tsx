import type { Metadata } from 'next'
import Link from 'next/link'
import { LodeLogo } from '@/components/ui/LodeLogo'

export const metadata: Metadata = {
  title: 'Security | LODE',
  description: 'How LODE keeps your travel data private and secure — PII detection, GDPR compliance, encryption at rest, and browser-first architecture.',
}

export default function SecurityPage() {
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
            Security &amp; Data Privacy
          </h1>
          <p className="text-lode-slate text-lg max-w-2xl mx-auto">
            LODE is built privacy-first. Your travel data stays under your control — and personal information never reaches an AI model.
          </p>
        </div>
      </section>

      <main className="max-w-4xl mx-auto px-6 py-16">

        {/* Key highlights */}
        <div className="bg-white rounded-lode shadow-sm border-l-4 border-lode-orange p-8 mb-12">
          <h2 className="text-xl font-bold text-lode-navy mb-5">At a glance</h2>
          <ul className="space-y-3">
            {[
              'PII detected and stripped before any data reaches our AI — personal information never leaves your environment',
              'Every redaction event is logged with timestamp, file name, and affected columns',
              'Cloud uploads pause and require your explicit acknowledgement if personal data is detected',
              'All SQL queries run in your browser — query results are never transmitted to any server',
              'Cloud files are encrypted at rest with AES-256',
              'Short-lived session tokens with automatic inactivity timeout',
              'Multi-tenant architecture with role-based access control — data is isolated per organisation',
            ].map((item, i) => (
              <li key={i} className="flex items-start gap-3">
                <span className="text-lode-orange font-bold mt-0.5 flex-shrink-0">✓</span>
                <span className="text-lode-navy">{item}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="space-y-12">

          {/* 1. Two modes */}
          <Section number="1" title="Two ways to store your data — you choose">
            <p>
              LODE operates in two modes, and in both, your data stays private.
            </p>
            <div className="mt-6 grid md:grid-cols-2 gap-6">
              <div className="bg-white border-2 border-lode-orange rounded-lode p-6">
                <h3 className="font-bold text-lode-navy text-lg mb-3">Local Lakes</h3>
                <p>
                  Files are stored entirely inside your browser using the browser&apos;s built-in storage. Nothing is uploaded to any server. Processing, storage, and all SQL queries happen on your own device. Your data never leaves your machine.
                </p>
              </div>
              <div className="bg-white border border-gray-200 rounded-lode p-6">
                <h3 className="font-bold text-lode-navy text-lg mb-3">Cloud Lakes</h3>
                <p>
                  Files are stored in encrypted cloud storage hosted in the EU, backed by AWS infrastructure. This enables team collaboration and persistent access across devices. All access is authenticated and isolated per organisation.
                </p>
              </div>
            </div>
            <p className="mt-4">
              In both modes, a PII detection and redaction pipeline runs on every file before any AI analysis takes place.
            </p>
          </Section>

          {/* 2. PII */}
          <Section number="2" title="PII detection and redaction">
            <p>
              Before any data sample is sent to our AI for analysis, LODE scans it for personally identifiable information. This is the core of our GDPR compliance.
            </p>

            <Subsection title="What we detect">
              <p>LODE automatically detects the following categories of personal data:</p>
              <div className="mt-4 overflow-x-auto">
                <table className="w-full text-sm border-collapse">
                  <thead>
                    <tr className="bg-lode-navy text-white">
                      <th className="text-left px-4 py-3 rounded-tl-lode">Data type</th>
                      <th className="text-left px-4 py-3">Severity</th>
                      <th className="text-left px-4 py-3 rounded-tr-lode">GDPR article</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-100">
                    {[
                      ['Email address', 'High', 'Article 4(1) — Personal Data'],
                      ['Phone number', 'High', 'Article 4(1) — Personal Data'],
                      ['Date of birth', 'High', 'Article 4(1) — Personal Data'],
                      ['National ID', 'High', 'Article 9 — Special Categories'],
                      ['Passport number', 'High', 'Article 9 — Special Categories'],
                      ['Driver licence', 'High', 'Article 9 — Special Categories'],
                      ['Social Security Number', 'Critical', 'Article 9 — Special Categories'],
                      ['Credit card number', 'Critical', 'Article 9 — Financial Data'],
                      ['Bank account number', 'Critical', 'Article 9 — Financial Data'],
                      ['IP address', 'Medium', 'Article 4(1) — Online Identifiers'],
                    ].map(([type, severity, article], i) => (
                      <tr key={i} className={i % 2 === 0 ? 'bg-white' : 'bg-lode-light-bg'}>
                        <td className="px-4 py-3 text-lode-navy font-medium">{type}</td>
                        <td className="px-4 py-3">
                          <span className={`px-2 py-0.5 rounded-full text-xs font-semibold ${
                            severity === 'Critical' ? 'bg-red-100 text-red-700' :
                            severity === 'High' ? 'bg-orange-100 text-lode-orange' :
                            'bg-yellow-100 text-yellow-700'
                          }`}>{severity}</span>
                        </td>
                        <td className="px-4 py-3 text-lode-slate text-sm">{article}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </Subsection>

            <Subsection title="How redaction works">
              <p>
                Before a data sample is sent to the AI, LODE scans each column across the first few rows. Any column that contains a PII pattern has every value in that column replaced with <code className="bg-lode-light-bg px-1.5 py-0.5 rounded text-sm text-lode-navy font-mono">[REDACTED]</code> in the sample. The AI receives column names and redacted placeholders — never the actual values.
              </p>
              <p className="mt-3">
                This redaction runs independently on both the client side (in your browser) and the server side (on cloud uploads), giving you two layers of protection.
              </p>
            </Subsection>

            <Subsection title="Audit trail">
              <p>
                Every redaction event generates a structured log entry recording the timestamp, the file name, and the list of columns that were redacted (or a confirmation that no PII was found). This trail is available in our server logs and can be used to verify that personal data was removed before any AI call was made.
              </p>
            </Subsection>

            <Subsection title="GDPR warning modal">
              <p>
                For cloud uploads, if personal data is detected the upload is paused. A modal lists every detected PII type with its severity and the relevant GDPR article, and requires your explicit acknowledgement before the upload continues. You always have the option to cancel.
              </p>
              <p className="mt-2">
                For local lakes, a warning is shown but the upload is not blocked — since the data stays entirely on your own device.
              </p>
            </Subsection>
          </Section>

          {/* 3. Auth */}
          <Section number="3" title="Authentication and session management">
            <p>
              All user sessions are protected by short-lived tokens and automatic inactivity timeouts.
            </p>
            <div className="mt-6 overflow-x-auto">
              <table className="w-full text-sm border-collapse">
                <thead>
                  <tr className="bg-lode-navy text-white">
                    <th className="text-left px-4 py-3 rounded-tl-lode">Event</th>
                    <th className="text-left px-4 py-3">Timing</th>
                    <th className="text-left px-4 py-3 rounded-tr-lode">What happens</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-100">
                  {[
                    ['Token refresh', 'Every 14 minutes', 'Session silently renewed before expiry'],
                    ['Inactivity warning', '28 minutes of inactivity', 'Modal shown with 2-minute countdown'],
                    ['Automatic logout', '30 minutes of inactivity', 'Session terminated, all tokens cleared'],
                  ].map(([event, timing, action], i) => (
                    <tr key={i} className={i % 2 === 0 ? 'bg-white' : 'bg-lode-light-bg'}>
                      <td className="px-4 py-3 text-lode-navy font-medium">{event}</td>
                      <td className="px-4 py-3 text-lode-slate">{timing}</td>
                      <td className="px-4 py-3 text-lode-slate">{action}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="mt-4">
              Access tokens are held only in memory — never written to browser storage — which limits exposure in the event of a cross-site scripting attack. All API routes require a valid token; unauthenticated requests are rejected.
            </p>
          </Section>

          {/* 4. Access control */}
          <Section number="4" title="Multi-tenant access control">
            <p>
              LODE is a multi-tenant platform. Every organisation is fully isolated — users can only access data within their own organisation. Cross-organisation access is blocked at the API layer.
            </p>
            <p className="mt-3">
              Five permission levels cover the full range of use cases, from platform administrators to individual end users within a client organisation. Data lake access is always scoped to the authenticated user&apos;s organisation.
            </p>
          </Section>

          {/* 5. Cloud storage */}
          <Section number="5" title="Cloud file storage">
            <p>
              Cloud files are stored in AWS S3, hosted in the EU (London region), with server-side AES-256 encryption enforced by bucket policy. Uploads that do not include the required encryption header are automatically rejected.
            </p>
            <p className="mt-3">
              Files are never accessible via a public URL. All file access goes through authenticated API endpoints that verify your session and organisation membership before returning any data.
            </p>
            <p className="mt-3">
              File metadata (column names, row counts, PII scan results) is stored in a separate database. Raw file content is never stored in the metadata database.
            </p>
          </Section>

          {/* 6. What the AI sees */}
          <Section number="6" title="What the AI receives — and what it never does">
            <p>
              LODE uses an external AI service to generate query suggestions and data summaries. The following table is a complete record of what is and is not transmitted.
            </p>
            <div className="mt-6 overflow-x-auto">
              <table className="w-full text-sm border-collapse">
                <thead>
                  <tr className="bg-lode-navy text-white">
                    <th className="text-left px-4 py-3 rounded-tl-lode">Data</th>
                    <th className="text-left px-4 py-3">Sent to AI?</th>
                    <th className="text-left px-4 py-3 rounded-tr-lode">Notes</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-100">
                  {[
                    ['File name', 'Yes', 'Used to contextualise the analysis'],
                    ['Column names and data types', 'Yes', 'Structural metadata — no personal values'],
                    ['First few rows (redacted)', 'Yes', 'PII columns replaced with [REDACTED] before sending'],
                    ['Total row count', 'Yes', 'Aggregate figure only'],
                    ['Full file content', 'Never', '—'],
                    ['Raw PII values', 'Never', 'Redacted before any AI call'],
                    ['Query results', 'Never', 'All queries run in-browser only'],
                    ['User identity', 'Never', '—'],
                  ].map(([data, sent, notes], i) => (
                    <tr key={i} className={i % 2 === 0 ? 'bg-white' : 'bg-lode-light-bg'}>
                      <td className="px-4 py-3 text-lode-navy font-medium">{data}</td>
                      <td className="px-4 py-3">
                        <span className={`px-2 py-0.5 rounded-full text-xs font-semibold ${
                          sent === 'Yes' ? 'bg-blue-50 text-blue-700' : 'bg-red-50 text-red-700'
                        }`}>{sent}</span>
                      </td>
                      <td className="px-4 py-3 text-lode-slate">{notes}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="mt-4">
              Our AI provider is SOC 2 Type II certified. API requests are not used to train models under the current API policy. A zero-data-retention option is available for enterprise customers.
            </p>
          </Section>

          {/* 7. Network */}
          <Section number="7" title="Network security">
            <ul className="space-y-3 list-none">
              {[
                'All communication is encrypted in transit over TLS 1.3 (HTTPS).',
                'API keys and secrets are stored as environment variables on the server — they are never included in client-side code.',
                'Cloud storage is configured to prevent public access. No files are ever directly addressable via a public URL.',
                'SQL queries run inside a sandboxed WebAssembly engine in your browser, preventing SQL injection from affecting any external system.',
                'React\'s built-in output escaping protects against cross-site scripting (XSS) attacks.',
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-3">
                  <span className="mt-1 w-2 h-2 rounded-full bg-lode-orange flex-shrink-0"></span>
                  <span className="text-lode-navy">{item}</span>
                </li>
              ))}
            </ul>
          </Section>

          {/* 8. GDPR compliance */}
          <Section number="8" title="GDPR compliance">
            <div className="overflow-x-auto">
              <table className="w-full text-sm border-collapse">
                <thead>
                  <tr className="bg-lode-navy text-white">
                    <th className="text-left px-4 py-3 rounded-tl-lode">Requirement</th>
                    <th className="text-left px-4 py-3">How we meet it</th>
                    <th className="text-left px-4 py-3 rounded-tr-lode">Status</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-100">
                  {[
                    ['Data minimisation (Article 5)', 'PII columns stripped before AI; only structural metadata sent for query generation', '✓'],
                    ['Lawful basis (Article 6)', 'GDPR modal requires acknowledgement of legal basis before cloud upload', '✓'],
                    ['Special category data (Article 9)', 'Critical PII (SSN, credit card, passport) flagged separately with elevated severity', '✓'],
                    ['Right to erasure (Article 17)', 'Users delete files via the UI; cloud files are removed from storage and metadata database', '✓'],
                    ['Data processor obligations', 'AI provider DPA in place; only metadata transmitted — no raw PII', '✓'],
                    ['Privacy by design (Article 25)', 'PII scan is mandatory and cannot be bypassed; redaction is fully automated', '✓'],
                    ['Retention limits (Article 5(1)(e))', '3-year cloud retention; local data is entirely user-controlled', '✓'],
                  ].map(([req, impl, status], i) => (
                    <tr key={i} className={i % 2 === 0 ? 'bg-white' : 'bg-lode-light-bg'}>
                      <td className="px-4 py-3 text-lode-navy font-medium">{req}</td>
                      <td className="px-4 py-3 text-lode-slate">{impl}</td>
                      <td className="px-4 py-3 text-center">
                        <span className="text-green-600 font-bold">{status}</span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </Section>

          {/* 9. Retention */}
          <Section number="9" title="Data retention">
            <div className="overflow-x-auto">
              <table className="w-full text-sm border-collapse">
                <thead>
                  <tr className="bg-lode-navy text-white">
                    <th className="text-left px-4 py-3 rounded-tl-lode">Where data is stored</th>
                    <th className="text-left px-4 py-3">Retention</th>
                    <th className="text-left px-4 py-3 rounded-tr-lode">Deleted when</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-100">
                  {[
                    ['Your browser (local lakes)', 'User-controlled', 'You delete the file or clear your browser data'],
                    ['Cloud storage (cloud lakes)', '3 years', 'You delete the file, or your account is closed'],
                    ['Cloud metadata database', '3 years', 'Cascades automatically when the file is deleted'],
                    ['Serverless processing memory', 'None', 'Discarded when the function completes — not persisted'],
                    ['AI provider', '30 days', 'Per the AI provider\'s standard data retention policy'],
                  ].map(([location, retention, trigger], i) => (
                    <tr key={i} className={i % 2 === 0 ? 'bg-white' : 'bg-lode-light-bg'}>
                      <td className="px-4 py-3 text-lode-navy font-medium">{location}</td>
                      <td className="px-4 py-3 text-lode-slate">{retention}</td>
                      <td className="px-4 py-3 text-lode-slate">{trigger}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </Section>

          {/* Contact */}
          <section className="bg-lode-navy rounded-lode p-8 text-center">
            <h2 className="text-2xl font-bold text-lode-orange mb-3">Have a security question?</h2>
            <p className="text-gray-300 mb-6 max-w-xl mx-auto">
              If you have a concern about how your data is handled, or would like to report a potential vulnerability, please contact us directly.
            </p>
            <a
              href="mailto:info@go-lode.com?subject=Security%20Enquiry"
              className="inline-block px-8 py-3 bg-lode-orange text-white font-semibold rounded-lode hover:bg-orange-600 transition-all shadow-md hover:shadow-lg"
            >
              Contact our team
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
            <Link href="/security" className="text-lode-orange">Security</Link>
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

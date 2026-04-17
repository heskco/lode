'use client'

import { useState } from 'react'
import { LodeLogo } from '@/components/ui/LodeLogo'

export default function Home() {
  const [contactForm, setContactForm] = useState({
    name: '',
    email: '',
    company: '',
    message: ''
  })
  const [contactStatus, setContactStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle')
  const [contactMessage, setContactMessage] = useState('')

  const handleContactSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setContactStatus('loading')
    setContactMessage('')

    // Simulate form submission (replace with actual API call)
    setTimeout(() => {
      setContactStatus('success')
      setContactMessage('Thank you for your message! We\'ll get back to you soon.')
      setContactForm({ name: '', email: '', company: '', message: '' })
      setTimeout(() => {
        setContactStatus('idle')
        setContactMessage('')
      }, 5000)
    }, 1000)
  }

  return (
    <div className="min-h-screen bg-lode-light-bg font-trebuchet">
      {/* Header */}
      <header className="container mx-auto px-6 py-6 flex items-center justify-between">
        <LodeLogo variant="full" size="md" theme="light" />
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

      {/* Hero Section */}
      <section className="container mx-auto px-6 py-20 md:py-32">
        <div className="max-w-5xl mx-auto text-center">
          <p className="text-xl md:text-2xl text-lode-orange mb-12 leading-relaxed max-w-3xl mx-auto">
            AI-POWERED TRAVEL ANALYTICS
          </p>
          <h1 className="text-5xl md:text-7xl font-bold text-lode-orange mb-10 leading-tight">
            <span className="text-lode-navy">Stop drowning in spreadsheets.</span> <span className="text-lode-orange">Start making decisions.</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-lode-slate mb-12 leading-relaxed max-w-3xl mx-auto">
            Every hour you spend building reports is an hour that policy violations go unnoticed and money goes down the drain. LODE turns your scattered travel data into clear, instant answers — so nothing gets missed again.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <a
              href="https://app.go-lode.com/signup"
              className="px-8 py-4 bg-lode-orange text-white font-semibold rounded-lode hover:bg-orange-600 transition-all shadow-md hover:shadow-lg text-lg"
            >
              Start 14-day free trial
            </a>
            <a
              href="mailto:info@go-lode.com?subject=Demo%20Request"
              className="px-8 py-4 bg-lode-navy text-white font-semibold rounded-lode hover:bg-orange-600 transition-all shadow-md hover:shadow-lg text-lg"
            >
              Request a demo
            </a>
          </div>

          {/* Hero Feature Pills */}
          <div className="flex flex-wrap justify-center gap-3">
            <div className="px-4 py-2 bg-white rounded-full border border-gray-200 text-sm text-lode-navy">
              ✓ Data never leaves your browser
            </div>
            <div className="px-4 py-2 bg-white rounded-full border border-gray-200 text-sm text-lode-navy">
              ✓ Up and running in minutes
            </div>
            <div className="px-4 py-2 bg-white rounded-full border border-gray-200 text-sm text-lode-navy">
              ✓ No technical skills needed
            </div>
            <div className="px-4 py-2 bg-white rounded-full border border-gray-200 text-sm text-lode-navy">
              ✓ Works across all your data sources
            </div>
          </div>
        </div>
      </section>

       {/* Product Screenshots - Papers on a table */}
      <section>
          <div className="relative mb-12 max-w-5xl mx-auto py-10 px-4">
            {/* Decorative blurs */}
            <div className="absolute -bottom-6 -right-6 w-48 h-48 bg-lode-orange opacity-10 rounded-full blur-3xl -z-10"></div>
            <div className="absolute -top-6 -left-6 w-48 h-48 bg-lode-navy opacity-10 rounded-full blur-3xl -z-10"></div>

            <div className="flex items-start justify-center">
              {/* Card 1 - left, tilted left, drops down a bit */}
              <div
                className="flex-shrink-0 bg-white rounded-lode shadow-xl border border-gray-200 p-2 overflow-hidden"
                style={{
                  width: '38%',
                  marginRight: '-9.5%',
                  transform: 'rotate(-5deg) translateY(24px)',
                  position: 'relative',
                  zIndex: 2,
                }}
              >
                <img src="/product-dashboard.png" alt="LODE Dashboard" className="rounded-lode w-full h-auto" />
              </div>

              {/* Card 2 - center, slight tilt, on top */}
              <div
                className="flex-shrink-0 bg-white rounded-lode shadow-2xl border border-gray-200 p-2 overflow-hidden"
                style={{
                  width: '38%',
                  transform: 'rotate(1.5deg)',
                  position: 'relative',
                  zIndex: 3,
                }}
              >
                <img
                  src="/query-chart.png"
                  alt="LODE Dashboard - Privacy-First AI-Powered Travel Analytics showing data lakes, AI queries, and file management"
                  className="rounded-lode w-full h-auto"
                />
              </div>

              {/* Card 3 - right, tilted right, drops down */}
              <div
                className="flex-shrink-0 bg-white rounded-lode shadow-xl border border-gray-200 p-2 overflow-hidden"
                style={{
                  width: '38%',
                  marginLeft: '-9.5%',
                  transform: 'rotate(-3deg) translateY(36px)',
                  position: 'relative',
                  zIndex: 1,
                }}
              >
                <img src="/query-table.png" alt="LODE Dashboard" className="rounded-lode w-full h-auto" />
              </div>
            </div>
          </div>
      </section>

      {/* Pain Point Hook Section */}
      <section className="px-6 py-16" style={{ backgroundColor: '#F5F7FA' }}>
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-lode-navy mb-4">
              Sound familiar?
            </h2>
            <p className="text-xl text-lode-slate max-w-2xl mx-auto">
              Whether you manage travel for one company or one hundred, the story is the same. Month after month, the same slow, manual grind.
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-6">
            {/* Pain Point 1 */}
            <div className="relative p-6 bg-white border-l-4 border-lode-orange rounded-lode shadow-sm">
              <div className="flex items-start mb-3">
                <div className="w-10 h-10 rounded-lode flex items-center justify-center mr-3 flex-shrink-0" style={{ backgroundColor: '#FFF0E6' }}>
                  <svg className="w-6 h-6 text-lode-orange" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="text-lg font-bold text-lode-navy">You're buried in spreadsheets</h3>
              </div>
              <p className="text-lode-slate">
                Hours every month copy-pasting data from booking tools, credit cards, and expense systems — just to build a basic report that's already out of date.
              </p>
            </div>

            {/* Pain Point 2 */}
            <div className="relative p-6 bg-white border-l-4 border-lode-orange rounded-lode shadow-sm">
              <div className="flex items-start mb-3">
                <div className="w-10 h-10 rounded-lode flex items-center justify-center mr-3 flex-shrink-0" style={{ backgroundColor: '#FFF0E6' }}>
                  <svg className="w-6 h-6 text-lode-orange" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="text-lg font-bold text-lode-navy">Savings are hiding in plain sight</h3>
              </div>
              <p className="text-lode-slate">
                Missed early-booking discounts. Hotels above the rate cap. Suppliers you've overpaid for years. The answers are in your data — but finding them feels impossible.
              </p>
            </div>

            {/* Pain Point 3 */}
            <div className="relative p-6 bg-white border-l-4 border-lode-orange rounded-lode shadow-sm">
              <div className="flex items-start mb-3">
                <div className="w-10 h-10 rounded-lode flex items-center justify-center mr-3 flex-shrink-0" style={{ backgroundColor: '#FFF0E6' }}>
                  <svg className="w-6 h-6 text-lode-orange" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 7h16M4 12h16M4 17h10" />
                  </svg>
                </div>
                <h3 className="text-lg font-bold text-lode-navy">Your data is scattered everywhere</h3>
              </div>
              <p className="text-lode-slate">
                Travel data lives in multiple systems. Getting a complete picture means endless exports, merges, and pivot tables.
              </p>
            </div>

            {/* Pain Point 4 */}
            <div className="relative p-6 bg-white border-l-4 border-lode-orange rounded-lode shadow-sm">
              <div className="flex items-start mb-3">
                <div className="w-10 h-10 rounded-lode flex items-center justify-center mr-3 flex-shrink-0" style={{ backgroundColor: '#FFF0E6' }}>
                  <svg className="w-6 h-6 text-lode-orange" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                  </svg>
                </div>
                <h3 className="text-lg font-bold text-lode-navy">Enterprise tools are out of reach</h3>
              </div>
              <p className="text-lode-slate">
                Tableau and Power BI either cost a fortune, need a data engineer to set up, or require uploading sensitive employee data to the cloud.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Transition Statement */}
      <section className="container mx-auto px-6 py-16">
        <div className="text-center">
            <div className="inline-block p-6 bg-lode-navy rounded-lode">
              <p className="text-4xl font-semibold text-lode-orange mb-4">
                There's a better way to work.
              </p>
              <p className="text-xl md:text-2xl text-lode-slate leading-relaxed max-w-3xl mx-auto">
                LODE brings all your data together for enterprise-grade analytics — without the enterprise cost, complexity, or privacy risk.
              </p>
            </div>
          </div>
      </section>

      {/* Features Section */}
      <section className="container mx-auto px-6 py-20 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-lode-navy mb-4">
              Everything you need to take control of your travel data
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Feature 1 */}
            <div className="p-8 bg-lode-light-bg rounded-lode border border-gray-100 hover:border-lode-orange transition-all">
              <div className="w-14 h-14 bg-lode-orange rounded-lode flex items-center justify-center mb-4">
                <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-lode-navy mb-3">AI-powered analytics</h3>
              <p className="text-lode-slate leading-relaxed">
                Ask questions in plain English and get answers in seconds. No analyst, no waiting, no technical knowledge required. Just ask — and know.
              </p>
            </div>

            {/* Feature 2 */}
            <div className="p-8 bg-lode-light-bg rounded-lode border border-gray-100 hover:border-lode-orange transition-all">
              <div className="w-14 h-14 bg-lode-orange rounded-lode flex items-center justify-center mb-4">
                <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-lode-navy mb-3">Policy compliance</h3>
              <p className="text-lode-slate leading-relaxed">
                Upload your travel policy once. LODE flags non-compliant bookings automatically and in real time — before the money leaves the account.
              </p>
            </div>

            {/* Feature 3 */}
            <div className="p-8 bg-lode-light-bg rounded-lode border border-gray-100 hover:border-lode-orange transition-all">
              <div className="w-14 h-14 bg-lode-orange rounded-lode flex items-center justify-center mb-4">
                <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-lode-navy mb-3">GDPR & data security</h3>
              <p className="text-lode-slate leading-relaxed">
                Your data stays in your region, encrypted and isolated. Full GDPR compliance is built into the architecture, not bolted on.
              </p>
            </div>

            {/* Feature 4 */}
            <div className="p-8 bg-lode-light-bg rounded-lode border border-gray-100 hover:border-lode-orange transition-all">
              <div className="w-14 h-14 bg-lode-orange rounded-lode flex items-center justify-center mb-4">
                <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-lode-navy mb-3">Real-time queries</h3>
              <p className="text-lode-slate leading-relaxed">
                Millions of records queried in seconds. Whether you're running a spot check or a full programme review, LODE keeps up.
              </p>
            </div>

            {/* Feature 5 */}
            <div className="p-8 bg-lode-light-bg rounded-lode border border-gray-100 hover:border-lode-orange transition-all">
              <div className="w-14 h-14 bg-lode-orange rounded-lode flex items-center justify-center mb-4">
                <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-lode-navy mb-3">Multi-tenant architecture</h3>
              <p className="text-lode-slate leading-relaxed">
                Managing multiple clients? Each one gets their own fully isolated environment, with white-label options included.
              </p>
            </div>

            {/* Feature 6 */}
            <div className="p-8 bg-lode-light-bg rounded-lode border border-gray-100 hover:border-lode-orange transition-all">
              <div className="w-14 h-14 bg-lode-orange rounded-lode flex items-center justify-center mb-4">
                <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-lode-navy mb-3">Custom dashboards</h3>
              <p className="text-lode-slate leading-relaxed">
                Build the view your stakeholders actually want — KPIs, trends, benchmarks — and share it in one click.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* What LODE Means for You */}
      <section className="container mx-auto px-6 py-20 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-lode-navy mb-4">
              What LODE means for your working week
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Feature 1 */}
            <div className="p-8 bg-lode-light-bg rounded-lode border border-gray-100 hover:border-lode-orange transition-all">
              <div className="w-14 h-14 bg-lode-orange rounded-lode flex items-center justify-center mb-4">
                <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-lode-navy mb-3">Get your time back</h3>
              <p className="text-lode-slate leading-relaxed">
                Cut monthly reporting time from 3–5 hours to under 30 minutes. Spend that time on work that drives results — supplier negotiations, policy improvements, strategic planning.
              </p>
            </div>

            {/* Feature 2 */}
            <div className="p-8 bg-lode-light-bg rounded-lode border border-gray-100 hover:border-lode-orange transition-all">
              <div className="w-14 h-14 bg-lode-orange rounded-lode flex items-center justify-center mb-4">
                <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-lode-navy mb-3">Uncover hidden savings</h3>
              <p className="text-lode-slate leading-relaxed">
                Spot booking patterns you'd never catch manually. Identify which routes, suppliers, and departments are costing you more than they should — and go to the table with hard numbers.
              </p>
            </div>

            {/* Feature 3 */}
            <div className="p-8 bg-lode-light-bg rounded-lode border border-gray-100 hover:border-lode-orange transition-all">
              <div className="w-14 h-14 bg-lode-orange rounded-lode flex items-center justify-center mb-4">
                <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-lode-navy mb-3">Stay ahead of policy breaches</h3>
              <p className="text-lode-slate leading-relaxed">
                Spot non-compliant bookings before they become a pattern, and keep your travel programme on track without chasing down receipts or waiting for month-end to find out what happened.
              </p>
            </div>

            {/* Feature 4 */}
            <div className="p-8 bg-lode-light-bg rounded-lode border border-gray-100 hover:border-lode-orange transition-all">
              <div className="w-14 h-14 bg-lode-orange rounded-lode flex items-center justify-center mb-4">
                <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-lode-navy mb-3">Report on ESG with confidence</h3>
              <p className="text-lode-slate leading-relaxed">
                Calculate CO2 emissions by airline, route, and department. Give your board the sustainability data they're asking for — without hours of manual calculation.
              </p>
            </div>

            {/* Feature 5 */}
            <div className="p-8 bg-lode-light-bg rounded-lode border border-gray-100 hover:border-lode-orange transition-all">
              <div className="w-14 h-14 bg-lode-orange rounded-lode flex items-center justify-center mb-4">
                <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 12l3-3 3 3 4-4M8 21l4-4 4 4M3 4h18M4 4h16v12a1 1 0 01-1 1H5a1 1 0 01-1-1V4z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-lode-navy mb-3">Walk into every meeting prepared</h3>
              <p className="text-lode-slate leading-relaxed">
                Answer ad hoc questions in minutes, not days. Back your recommendations with data, and build the kind of credibility that gets you a seat at the table.
              </p>
            </div>

            {/* Feature 6 */}
            <div className="p-8 bg-lode-light-bg rounded-lode border border-gray-100 hover:border-lode-orange transition-all">
              <div className="w-14 h-14 bg-lode-orange rounded-lode flex items-center justify-center mb-4">
                <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-lode-navy mb-3">Sleep soundly on compliance</h3>
              <p className="text-lode-slate leading-relaxed">
                All processing happens in your browser. Employee personally identifiable information (PII), passport numbers, corporate card data — none of it ever leaves your device.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Solutions by Client Type */}
      <section className="container mx-auto px-6 py-20">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-lode-navy mb-4">
              Built for corporate travel teams, TMCs, and resellers
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Corporate Travel Managers */}
            <div className="bg-white p-8 rounded-lode shadow-md border-2 border-transparent hover:border-lode-orange transition-all">
              <div className="w-16 h-16 bg-lode-navy rounded-lode flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-lode-orange" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-lode-navy mb-4">
                Corporate travel managers
              </h3>
              <p className="text-lode-slate mb-6">
                Take control of your travel programme with deep insights into policy, costs, and traveller behaviour.
              </p>
              <ul className="space-y-3 text-lode-navy">
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-lode-orange mt-0.5 mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Policy compliance monitoring and alerts</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-lode-orange mt-0.5 mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Cost centre and department-level analytics</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-lode-orange mt-0.5 mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Traveller behaviour insights and patterns</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-lode-orange mt-0.5 mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Budget tracking and forecasting tools</span>
                </li>
              </ul>
            </div>

            {/* TMCs */}
            <div className="bg-white p-8 rounded-lode shadow-md border-2 border-transparent hover:border-lode-orange transition-all">
              <div className="w-16 h-16 bg-lode-navy rounded-lode flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-lode-orange" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-lode-navy mb-4">
                Travel management companies
              </h3>
              <p className="text-lode-slate mb-6">
                Merge analytics across all your clients. Perfect for multi-client reporting and benchmarking.
              </p>
              <ul className="space-y-3 text-lode-navy">
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-lode-orange mt-0.5 mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Multi-client dashboard with aggregate analytics</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-lode-orange mt-0.5 mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Cross-client benchmarking and performance metrics</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-lode-orange mt-0.5 mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Commission tracking and revenue analytics</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-lode-orange mt-0.5 mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>White-label reporting for your clients</span>
                </li>
              </ul>
            </div>

            {/* Resellers */}
            <div className="bg-white p-8 rounded-lode shadow-md border-2 border-transparent hover:border-lode-orange transition-all">
              <div className="w-16 h-16 bg-lode-navy rounded-lode flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-lode-orange" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 8v8m-4-5v5m-4-2v2m-2 4h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-lode-navy mb-4">
                Resellers & partners
              </h3>
              <p className="text-lode-slate mb-6">
                White-label solution with client management tools. Grow your analytics offering effortlessly.
              </p>
              <ul className="space-y-3 text-lode-navy">
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-lode-orange mt-0.5 mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Full white-label branding options</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-lode-orange mt-0.5 mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Centralised client management portal</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-lode-orange mt-0.5 mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Flexible pricing and billing models</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-lode-orange mt-0.5 mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Partner support and training resources</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="container mx-auto px-6 py-20 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-lode-navy mb-4">
              Simple, transparent pricing
            </h2>
            <p className="text-xl text-lode-slate max-w-2xl mx-auto">
              Choose the plan that fits your needs. All plans include unlimited queries and core features. No hidden costs.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Free Trial */}
            <div className="bg-lode-light-bg p-8 rounded-lode border-2 border-gray-200 hover:border-lode-orange transition-all">
              <div className="mb-6">
                <h3 className="text-2xl font-bold text-lode-navy mb-2">Free Trial</h3>
                <div className="text-4xl font-bold text-lode-navy mb-2">
                  14 Days
                </div>
                <p className="text-lode-slate">Explore LODE with your own data. No credit card required</p>
              </div>
              <ul className="space-y-4 mb-8">
                <li className="flex items-start text-lode-navy">
                  <svg className="w-5 h-5 text-lode-orange mt-0.5 mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Local data lakes (browser storage)</span>
                </li>
                <li className="flex items-start text-lode-navy">
                  <svg className="w-5 h-5 text-lode-orange mt-0.5 mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Unlimited AI-powered queries</span>
                </li>
                <li className="flex items-start text-lode-navy">
                  <svg className="w-5 h-5 text-lode-orange mt-0.5 mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Ask questions in natural language</span>
                </li>
                <li className="flex items-start text-lode-navy">
                  <svg className="w-5 h-5 text-lode-orange mt-0.5 mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Export to CSV/Excel</span>
                </li>
                <li className="flex items-start text-lode-slate">
                  <svg className="w-5 h-5 text-gray-400 mt-0.5 mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                  <span>No cloud storage</span>
                </li>
                <li className="flex items-start text-lode-slate">
                  <svg className="w-5 h-5 text-gray-400 mt-0.5 mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                  <span>No sharing or collaboration</span>
                </li>
              </ul>
              <a
                href="https://app.go-lode.com/signup"
                className="block w-full px-6 py-3 text-center bg-lode-navy text-white font-semibold rounded-lode hover:bg-opacity-90 transition-all"
              >
                Start your free trial today
              </a>
            </div>

            {/* Corporate Direct Tier */}
            <div className="bg-white p-8 rounded-lode border-2 border-lode-orange shadow-lg relative">
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                <span className="bg-lode-orange text-white px-4 py-1 rounded-full text-sm font-semibold">
                  Most Popular
                </span>
              </div>
              <div className="mb-6">
                <h3 className="text-2xl font-bold text-lode-navy mb-2">Corporate Direct</h3>
                <div className="text-4xl font-bold text-lode-navy mb-2">
                  €499
                  <span className="text-lg font-normal text-lode-slate">/month</span>
                </div>
                <p className="text-lode-slate">For corporate travel teams who need full visibility.</p>
              </div>
              <ul className="space-y-4 mb-8">
                <li className="flex items-start text-lode-navy">
                  <svg className="w-5 h-5 text-lode-orange mt-0.5 mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="font-semibold">Everything in Free, plus:</span>
                </li>
                <li className="flex items-start text-lode-navy">
                  <svg className="w-5 h-5 text-lode-orange mt-0.5 mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Unlimited users</span>
                </li>
                <li className="flex items-start text-lode-navy">
                  <svg className="w-5 h-5 text-lode-orange mt-0.5 mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Cloud storage & collaboration</span>
                </li>
                <li className="flex items-start text-lode-navy">
                  <svg className="w-5 h-5 text-lode-orange mt-0.5 mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Policy compliance monitoring</span>
                </li>
                <li className="flex items-start text-lode-navy">
                  <svg className="w-5 h-5 text-lode-orange mt-0.5 mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Real-time dashboards</span>
                </li>
                <li className="flex items-start text-lode-navy">
                  <svg className="w-5 h-5 text-lode-orange mt-0.5 mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Priority email support</span>
                </li>
              </ul>
              <a
                href="https://app.go-lode.com/signup"
                className="block w-full px-6 py-3 text-center bg-lode-orange text-white font-semibold rounded-lode hover:bg-orange-600 transition-all shadow-md hover:shadow-lg"
              >
                Sign up now
              </a>
            </div>

            {/* TMC/Reseller Tier */}
            <div className="bg-lode-light-bg p-8 rounded-lode border-2 border-gray-200 hover:border-lode-orange transition-all">
              <div className="mb-6">
                <h3 className="text-2xl font-bold text-lode-navy mb-2">TMC/Reseller</h3>
                <div className="text-4xl font-bold text-lode-navy mb-2">
                  €1,500
                  <span className="text-lg font-normal text-lode-slate">/month</span>
                </div>
                <p className="text-lode-slate">For TMCs wanting to offer analytics as a value-added service</p>
              </div>
              <ul className="space-y-4 mb-8">
                <li className="flex items-start text-lode-navy">
                  <svg className="w-5 h-5 text-lode-orange mt-0.5 mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="font-semibold">Everything in Corporate Direct, plus:</span>
                </li>
                <li className="flex items-start text-lode-navy">
                  <svg className="w-5 h-5 text-lode-orange mt-0.5 mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Multi-client management</span>
                </li>
                <li className="flex items-start text-lode-navy">
                  <svg className="w-5 h-5 text-lode-orange mt-0.5 mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>White-label options</span>
                </li>
                <li className="flex items-start text-lode-navy">
                  <svg className="w-5 h-5 text-lode-orange mt-0.5 mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Advanced integrations</span>
                </li>
              </ul>
              <a
                href="mailto:info@go-lode.com?subject=TMC%20Inquiry"
                className="block w-full px-6 py-3 text-center bg-lode-navy text-white font-semibold rounded-lode hover:bg-opacity-90 transition-all"
              >
                Contact sales
              </a>
            </div>
          </div>

          {/* Enterprise Note */}
          <div className="mt-8 p-6 bg-lode-navy rounded-lode text-center">
            <h4 className="text-2xl font-bold text-white mb-3">Need custom volume pricing, specific data integrations, or 24/7 support?</h4>
            <p className="text-gray-300 mb-4">
              We offer tailored solutions for organisations with advanced requirements.
            </p>
            <a
              href="mailto:info@go-lode.com?subject=Enterprise%20Inquiry"
              className="inline-block px-8 py-3 bg-lode-orange text-white font-semibold rounded-lode hover:bg-orange-600 transition-all shadow-md hover:shadow-lg"
            >
              Talk to our enterprise team
            </a>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="container mx-auto px-6 py-20">
        <div className="max-w-4xl mx-auto bg-lode-navy rounded-lode p-12 text-center">
          <h2 className="text-4xl md:text-4xl font-bold text-lode-orange mb-6">
            Your first insight is only one LODE away...
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            No credit card. No setup. No waiting. Just answers.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://app.go-lode.com/signup"
              className="px-8 py-4 bg-lode-orange text-white font-semibold rounded-lode hover:bg-lode-navy-600 transition-all shadow-lg hover:shadow-xl text-lg"
            >
              Start your free trial today

            </a>
            <a
              href="mailto:info@go-lode.com?subject=Demo%20Request"
              className="px-8 py-4 bg-lode-slate text-white font-semibold rounded-lode hover:bg-lode-slate-100 transition-all text-lg"
            >
              Book a live demo
            </a>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="container mx-auto px-6 py-20 bg-white">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-lode-navy mb-4">
              We're here when you need us
            </h2>
            <p className="text-xl text-lode-slate">
              Got a question? Not sure if LODE is right for you?
            </p>
            <br/>
            <p className="text-xl text-lode-slate">
              Whether you're weighing up your options, ready to get started, or just want to see LODE in action, you're in the right place. Let us show you what LODE can do with your data.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            {/* Contact Info */}
            <div>
              <h3 className="text-2xl font-bold text-lode-navy mb-6">Contact information</h3>

              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="w-12 h-12 bg-lode-navy rounded-lode flex items-center justify-center mr-4 flex-shrink-0">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-semibold text-lode-navy mb-1">Email</h4>
                    <a href="mailto:info@go-lode.com" className="text-lode-orange hover:underline">
                      info@go-lode.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="w-12 h-12 bg-lode-navy rounded-lode flex items-center justify-center mr-4 flex-shrink-0">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-semibold text-lode-navy mb-1">Support hours</h4>
                    <p className="text-lode-slate">Monday - Friday: 9 AM - 6 PM GMT</p>
                    <p className="text-lode-slate">Enterprise: 24/7 support</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="w-12 h-12 bg-lode-navy rounded-lode flex items-center justify-center mr-4 flex-shrink-0">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-semibold text-lode-navy mb-1">Sales enquiries</h4>
                    <p className="text-lode-slate">For enterprise pricing and demos</p>
                    <a href="mailto:info@go-lode.com?subject=Sales%20Inquiry" className="text-lode-orange hover:underline">
                      contact our sales team
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div>
              <form onSubmit={handleContactSubmit} className="space-y-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-semibold text-lode-navy mb-2">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    value={contactForm.name}
                    onChange={(e) => setContactForm({ ...contactForm, name: e.target.value })}
                    required
                    disabled={contactStatus === 'loading'}
                    className="w-full px-4 py-3 rounded-lode border border-gray-300 focus:outline-none focus:ring-2 focus:ring-lode-orange focus:border-transparent text-lode-navy disabled:opacity-50 bg-white"
                    placeholder="Your name"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-semibold text-lode-navy mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    value={contactForm.email}
                    onChange={(e) => setContactForm({ ...contactForm, email: e.target.value })}
                    required
                    disabled={contactStatus === 'loading'}
                    className="w-full px-4 py-3 rounded-lode border border-gray-300 focus:outline-none focus:ring-2 focus:ring-lode-orange focus:border-transparent text-lode-navy disabled:opacity-50 bg-white"
                    placeholder="your@email.com"
                  />
                </div>

                <div>
                  <label htmlFor="name" className="block text-sm font-semibold text-lode-navy mb-2">
                    Company
                  </label>
                  <input
                    type="text"
                    id="company"
                    value={contactForm.company}
                    onChange={(e) => setContactForm({ ...contactForm, company: e.target.value })}
                    required
                    disabled={contactStatus === 'loading'}
                    className="w-full px-4 py-3 rounded-lode border border-gray-300 focus:outline-none focus:ring-2 focus:ring-lode-orange focus:border-transparent text-lode-navy disabled:opacity-50 bg-white"
                    placeholder="Your company"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-semibold text-lode-navy mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    value={contactForm.message}
                    onChange={(e) => setContactForm({ ...contactForm, message: e.target.value })}
                    required
                    disabled={contactStatus === 'loading'}
                    rows={5}
                    className="w-full px-4 py-3 rounded-lode border border-gray-300 focus:outline-none focus:ring-2 focus:ring-lode-orange focus:border-transparent text-lode-navy disabled:opacity-50 bg-white resize-none"
                    placeholder="How can we help you?"
                  />
                </div>

                <button
                  type="submit"
                  disabled={contactStatus === 'loading'}
                  className="w-full px-6 py-4 bg-lode-orange text-white font-semibold rounded-lode hover:bg-orange-600 transition-all disabled:opacity-50 disabled:cursor-not-allowed shadow-md hover:shadow-lg"
                >
                  {contactStatus === 'loading' ? 'Sending...' : 'Send message'}
                </button>

                {contactMessage && (
                  <div className={`p-4 rounded-lode ${
                    contactStatus === 'success'
                      ? 'bg-green-50 text-lode-success border border-lode-success'
                      : 'bg-red-50 text-lode-error border border-lode-error'
                  }`}>
                    {contactMessage}
                  </div>
                )}
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="container mx-auto px-6 py-12 border-t border-gray-200">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            {/* Company */}
            <div>
              <h4 className="font-bold text-lode-navy mb-4">Company</h4>
              <ul className="space-y-2">
                <li>
                  <a href="#" className="text-lode-slate hover:text-lode-orange transition-colors">
                    About Us
                  </a>
                </li>
                <li>
                  <a href="mailto:info@go-lode.com" className="text-lode-slate hover:text-lode-orange transition-colors">
                    Contact
                  </a>
                </li>
                <li>
                  <a href="#" className="text-lode-slate hover:text-lode-orange transition-colors">
                    Careers
                  </a>
                </li>
              </ul>
            </div>

            {/* Product */}
            <div>
              <h4 className="font-bold text-lode-navy mb-4">Product</h4>
              <ul className="space-y-2">
                <li>
                  <a href="#" className="text-lode-slate hover:text-lode-orange transition-colors">
                    Features
                  </a>
                </li>
                <li>
                  <a href="#" className="text-lode-slate hover:text-lode-orange transition-colors">
                    Pricing
                  </a>
                </li>
                <li>
                  <a href="#" className="text-lode-slate hover:text-lode-orange transition-colors">
                    Security
                  </a>
                </li>
              </ul>
            </div>

            {/* Resources */}
            <div>
              <h4 className="font-bold text-lode-navy mb-4">Resources</h4>
              <ul className="space-y-2">
                <li>
                  <a href="#" className="text-lode-slate hover:text-lode-orange transition-colors">
                    Documentation
                  </a>
                </li>
                <li>
                  <a href="#" className="text-lode-slate hover:text-lode-orange transition-colors">
                    API Reference
                  </a>
                </li>
                <li>
                  <a href="#" className="text-lode-slate hover:text-lode-orange transition-colors">
                    Support
                  </a>
                </li>
              </ul>
            </div>

            {/* Legal */}
            <div>
              <h4 className="font-bold text-lode-navy mb-4">Legal</h4>
              <ul className="space-y-2">
                <li>
                  <a href="/privacy-policy" className="text-lode-slate hover:text-lode-orange transition-colors">
                    Privacy Policy
                  </a>
                </li>
                <li>
                  <a href="#" className="text-lode-slate hover:text-lode-orange transition-colors">
                    Terms of Service
                  </a>
                </li>
                <li>
                  <a href="#" className="text-lode-slate hover:text-lode-orange transition-colors">
                    GDPR
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div className="pt-8 border-t border-gray-200 flex flex-col md:flex-row justify-between items-center">
            <div className="mb-4 md:mb-0">
              <LodeLogo variant="full" size="sm" theme="light" />
            </div>
            <div className="text-lode-slate text-sm">
              &copy; 2026 LODE. All rights reserved.
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}

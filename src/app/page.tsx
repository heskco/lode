'use client'

import { useState } from 'react'
import { LodeLogo } from '@/components/ui/LodeLogo'

export default function Home() {
  const [contactForm, setContactForm] = useState({
    name: '',
    email: '',
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
      setContactForm({ name: '', email: '', message: '' })
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

      {/* Hero Section */}
      <section className="container mx-auto px-6 py-20 md:py-32">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Column - Text Content */}
            <div className="text-center lg:text-left">
              <h1 className="text-5xl md:text-7xl font-bold text-lode-navy mb-6 leading-tight">
                AI-POWERED TRAVEL ANALYTICS
                <br />
                <span className="text-lode-orange">Stop drowning in spreadsheets. Start making decisions.</span>
              </h1>

              <p className="text-xl md:text-2xl text-lode-slate mb-12 leading-relaxed">
                Every hour you spend building reports is an hour that policy violations go unnoticed and money goes down the drain. LODE turns your scattered travel data into clear, instant answers — so nothing gets missed again.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-8">
                <a
                  href="https://app.go-lode.com/signup"
                  className="px-8 py-4 bg-lode-orange text-white font-semibold rounded-lode hover:bg-orange-600 transition-all shadow-md hover:shadow-lg text-lg"
                >
                  Start 14-Day Free Trial
                </a>
                <a
              href="mailto:info@go-lode.com?subject=Demo%20Request"
              className="px-8 py-4 bg-lode-orange text-white font-semibold rounded-lode hover:bg-orange-600 transition-all shadow-md hover:shadow-lg text-lg"
                >
              Request a demo
            </a>
              </div>

              {/* Hero Feature Pills */}
              <div className="flex flex-wrap justify-center lg:justify-start gap-3">
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

            {/* Right Column - Product Screenshot */}
            <div className="relative">
              <div className="bg-white rounded-lode shadow-2xl border border-gray-200 p-2 overflow-hidden">
                <img
                  src="/product-dashboard.png"
                  alt="LODE Dashboard - Privacy-First AI-Powered Travel Analytics showing data lakes, AI queries, and file management"
                  className="rounded-lode w-full h-auto"
                />
              </div>
              {/* Decorative elements */}
              <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-lode-orange opacity-10 rounded-full blur-3xl -z-10"></div>
              <div className="absolute -top-6 -left-6 w-32 h-32 bg-lode-navy opacity-10 rounded-full blur-3xl -z-10"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Pain Point Hook Section */}
      <section className="px-6 py-16" style={{ backgroundColor: '#F5F7FA' }}>
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-lode-navy mb-4">
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
                <h3 className="text-lg font-bold text-lode-navy">Data Scattered Everywhere</h3>
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

          {/* Transition Statement */}
          <div className="mt-12 text-center">
            <div className="inline-block p-6 bg-lode-navy rounded-lode">
              <p className="text-xl font-semibold text-lode-orange mb-2">
                There's a better way to work.
              </p>
              <p className="text-white">
                LODE brings all your data together for enterprise-grade analytics — without the enterprise cost, complexity, or privacy risk.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="container mx-auto px-6 py-20 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-lode-navy mb-4">
              Everything You Need to Master Travel Data
            </h2>
            <p className="text-xl text-lode-slate max-w-2xl mx-auto">
              Built for travel professionals who demand speed, security, and actionable insights.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Feature 1 */}
            <div className="p-8 bg-lode-light-bg rounded-lode border border-gray-100 hover:border-lode-orange transition-all">
              <div className="w-14 h-14 bg-lode-orange rounded-lode flex items-center justify-center mb-4">
                <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-lode-navy mb-3">AI-Powered Analytics</h3>
              <p className="text-lode-slate leading-relaxed">
                Ask questions in natural language and get instant answers. No SQL required.
                Our AI understands travel data and surfaces insights automatically.
              </p>
            </div>

            {/* Feature 2 */}
            <div className="p-8 bg-lode-light-bg rounded-lode border border-gray-100 hover:border-lode-orange transition-all">
              <div className="w-14 h-14 bg-lode-orange rounded-lode flex items-center justify-center mb-4">
                <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-lode-navy mb-3">Policy Compliance</h3>
              <p className="text-lode-slate leading-relaxed">
                Upload your travel policy and automatically flag non-compliant bookings.
                Get real-time alerts and enforce rules before spending happens.
              </p>
            </div>

            {/* Feature 3 */}
            <div className="p-8 bg-lode-light-bg rounded-lode border border-gray-100 hover:border-lode-orange transition-all">
              <div className="w-14 h-14 bg-lode-orange rounded-lode flex items-center justify-center mb-4">
                <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-lode-navy mb-3">GDPR & Data Security</h3>
              <p className="text-lode-slate leading-relaxed">
                Enterprise-grade security with complete data isolation. Your data stays in your
                region, encrypted at rest and in transit. Full GDPR compliance built-in.
              </p>
            </div>

            {/* Feature 4 */}
            <div className="p-8 bg-lode-light-bg rounded-lode border border-gray-100 hover:border-lode-orange transition-all">
              <div className="w-14 h-14 bg-lode-orange rounded-lode flex items-center justify-center mb-4">
                <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-lode-navy mb-3">Real-Time Queries</h3>
              <p className="text-lode-slate leading-relaxed">
                Query millions of records in seconds. Our modern data architecture ensures
                lightning-fast performance, even with complex analytical workloads.
              </p>
            </div>

            {/* Feature 5 */}
            <div className="p-8 bg-lode-light-bg rounded-lode border border-gray-100 hover:border-lode-orange transition-all">
              <div className="w-14 h-14 bg-lode-orange rounded-lode flex items-center justify-center mb-4">
                <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-lode-navy mb-3">Multi-Tenant Architecture</h3>
              <p className="text-lode-slate leading-relaxed">
                Perfect for TMCs and resellers. Manage multiple clients with complete data
                isolation, white-label options, and granular access controls.
              </p>
            </div>

            {/* Feature 6 */}
            <div className="p-8 bg-lode-light-bg rounded-lode border border-gray-100 hover:border-lode-orange transition-all">
              <div className="w-14 h-14 bg-lode-orange rounded-lode flex items-center justify-center mb-4">
                <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-lode-navy mb-3">Custom Dashboards</h3>
              <p className="text-lode-slate leading-relaxed">
                Build and share custom dashboards tailored to your needs. Track KPIs,
                benchmark performance, and visualise trends with interactive charts.
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
            {/* TMCs */}
            <div className="bg-white p-8 rounded-lode shadow-md border-2 border-transparent hover:border-lode-orange transition-all">
              <div className="w-16 h-16 bg-lode-navy rounded-lode flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-lode-orange" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-lode-navy mb-4">
                Travel Management Companies
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
                Resellers & Partners
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
                  <span>Centralized client management portal</span>
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

            {/* Corporate Travel Managers */}
            <div className="bg-white p-8 rounded-lode shadow-md border-2 border-transparent hover:border-lode-orange transition-all">
              <div className="w-16 h-16 bg-lode-navy rounded-lode flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-lode-orange" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-lode-navy mb-4">
                Corporate Travel Managers
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
                  <span>Cost center and department-level analytics</span>
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
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="container mx-auto px-6 py-20 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-lode-navy mb-4">
              Simple, Transparent Pricing
            </h2>
            <p className="text-xl text-lode-slate max-w-2xl mx-auto">
              Choose the plan that fits your needs. All plans include unlimited queries and core features.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Free Trial */}
            <div className="bg-lode-light-bg p-8 rounded-lode border-2 border-gray-200 hover:border-lode-orange transition-all">
              <div className="mb-6">
                <h3 className="text-2xl font-bold text-lode-navy mb-2">Free Trial</h3>
                <div className="text-4xl font-bold text-lode-navy mb-2">
                  14 Days
                  <span className="text-lg font-normal text-lode-slate block mt-1">No credit card required</span>
                </div>
                <p className="text-lode-slate">Perfect for exploring travel analytics</p>
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
                  <span>Unlimited queries</span>
                </li>
                <li className="flex items-start text-lode-navy">
                  <svg className="w-5 h-5 text-lode-orange mt-0.5 mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>AI-powered natural language queries</span>
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
                Start 14-Day Free Trial
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
                <p className="text-lode-slate">For corporate travel programmes</p>
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
                Start 14-Day Free Trial
              </a>
            </div>

            {/* TMC/Reseller Tier */}
            <div className="bg-lode-light-bg p-8 rounded-lode border-2 border-gray-200 hover:border-lode-orange transition-all">
              <div className="mb-6">
                <h3 className="text-2xl font-bold text-lode-navy mb-2">TMC / Reseller</h3>
                <div className="text-4xl font-bold text-lode-navy mb-2">
                  €1,500
                  <span className="text-lg font-normal text-lode-slate">/month</span>
                </div>
                <p className="text-lode-slate text-sm mb-1">+ €300/month per client</p>
                <p className="text-lode-slate">For travel management companies</p>
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
                  <span>Dedicated account manager</span>
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
                Contact Sales
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
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Your first insight is only one LODE away...
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            No credit card. No setup. No waiting. Just answers.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://app.go-lode.com/signup"
              className="px-8 py-4 bg-lode-orange text-white font-semibold rounded-lode hover:bg-orange-600 transition-all shadow-lg hover:shadow-xl text-lg"
            >
              Start your free trial today

            </a>
            <a
              href="mailto:info@go-lode.com?subject=Demo%20Request"
              className="px-8 py-4 bg-white text-lode-navy font-semibold rounded-lode hover:bg-gray-100 transition-all text-lg"
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
            
            <p className="text-xl text-lode-slate">
              Whether you're weighing up your options, ready to get started, or just want to see LODE in action, you're in the right place. Let us show you what LODE can do with your own data.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            {/* Contact Info */}
            <div>
              <h3 className="text-2xl font-bold text-lode-navy mb-6">Contact Information</h3>

              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="w-12 h-12 bg-lode-orange rounded-lode flex items-center justify-center mr-4 flex-shrink-0">
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
                  <div className="w-12 h-12 bg-lode-orange rounded-lode flex items-center justify-center mr-4 flex-shrink-0">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-semibold text-lode-navy mb-1">Support Hours</h4>
                    <p className="text-lode-slate">Monday - Friday: 9am - 6pm GMT</p>
                    <p className="text-lode-slate">Enterprise: 24/7 Support</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="w-12 h-12 bg-lode-orange rounded-lode flex items-center justify-center mr-4 flex-shrink-0">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-semibold text-lode-navy mb-1">Sales Inquiries</h4>
                    <p className="text-lode-slate">For enterprise pricing and demos</p>
                    <a href="mailto:info@go-lode.com?subject=Sales%20Inquiry" className="text-lode-orange hover:underline">
                      Contact our sales team
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
                  {contactStatus === 'loading' ? 'Sending...' : 'Send Message'}
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

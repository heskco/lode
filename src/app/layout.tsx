import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'LODE - Travel Data Intelligence Platform',
  description: 'Transform your travel data into actionable insights. Coming soon.',
  keywords: 'travel data, business intelligence, data analytics, TMC, travel management',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}

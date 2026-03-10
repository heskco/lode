import { NextRequest, NextResponse } from 'next/server'

// Simple in-memory store for demo (in production, use a database or email service)
const waitlist: string[] = []

export async function POST(request: NextRequest) {
  try {
    const { email } = await request.json()

    // Validate email
    if (!email || typeof email !== 'string') {
      return NextResponse.json(
        { error: 'Email is required' },
        { status: 400 }
      )
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: 'Please enter a valid email address' },
        { status: 400 }
      )
    }

    // Check if email already exists
    if (waitlist.includes(email.toLowerCase())) {
      return NextResponse.json(
        { error: 'This email is already on the waitlist' },
        { status: 400 }
      )
    }

    // Add to waitlist
    waitlist.push(email.toLowerCase())

    // Log to console (in production, save to database or send to email service)
    console.log('New waitlist signup:', email)
    console.log('Total waitlist subscribers:', waitlist.length)

    // TODO: In production, you can:
    // 1. Save to DynamoDB or PostgreSQL
    // 2. Send to AWS SES / SendGrid / Mailchimp
    // 3. Add to CRM
    // 4. Send confirmation email

    return NextResponse.json(
      {
        success: true,
        message: 'Successfully added to waitlist'
      },
      { status: 200 }
    )
  } catch (error) {
    console.error('Waitlist signup error:', error)
    return NextResponse.json(
      { error: 'An error occurred. Please try again.' },
      { status: 500 }
    )
  }
}

// Optional: GET endpoint to view waitlist (remove in production or add authentication)
export async function GET() {
  return NextResponse.json({
    count: waitlist.length,
    // Don't expose actual emails in production
    emails: process.env.NODE_ENV === 'development' ? waitlist : undefined
  })
}

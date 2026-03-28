import { NextResponse } from 'next/server'

interface FormData {
  name: string
  email: string
  business: string
  painPoint: string
  budget: string
  message: string
}

export async function POST(request: Request) {
  try {
    const data: FormData = await request.json()
    const { name, email, business, painPoint, budget, message } = data

    if (!name || !email || !business || !painPoint) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      )
    }

    const resendApiKey = process.env.RESEND_API_KEY
    if (!resendApiKey) {
      // Demo mode - log and return success
      console.log('Audit form submission (no API key):', data)
      return NextResponse.json({ 
        success: true, 
        message: 'Demo mode - form data logged to console' 
      })
    }

    const { Resend } = await import('resend')
    const resend = new Resend(resendApiKey)

    await resend.emails.send({
      from: 'Fiotta <fiotta@fiotta.com>',
      to: ['fiotta@fiotta.com'],
      replyTo: email,
      subject: `Free Audit Request from ${name}`,
      html: `
        <h2>New Audit Request</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Business Type:</strong> ${business}</p>
        <p><strong>Pain Point:</strong> ${painPoint}</p>
        <p><strong>Budget:</strong> ${budget || 'Not specified'}</p>
        <p><strong>Message:</strong> ${message || 'None'}</p>
      `,
      text: `
New Audit Request

Name: ${name}
Email: ${email}
Business Type: ${business}
Pain Point: ${painPoint}
Budget: ${budget || 'Not specified'}
Message: ${message || 'None'}
      `
    })

    return NextResponse.json({ success: true })
  } catch (error) {
    console.error('Email send error:', error)
    return NextResponse.json(
      { error: 'Failed to send email' },
      { status: 500 }
    )
  }
}

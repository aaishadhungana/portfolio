import { NextResponse } from 'next/server'
import { supabase } from '@/lib/supabase'
import { resend } from '@/lib/resend'

function isValidEmail(email: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)
}

export async function POST(request: Request) {
  try {
    const { email } = await request.json()

    if (!email || !isValidEmail(email)) {
      return NextResponse.json(
        { error: 'Please provide a valid email address.' },
        { status: 400 }
      )
    }

    const { error: insertError } = await supabase
      .from('subscribers')
      .insert({ email })

    if (insertError) {
      if (insertError.code === '23505') {
        return NextResponse.json(
          { error: 'This email is already subscribed.' },
          { status: 409 }
        )
      }

      console.error('Supabase insert error:', insertError)
      return NextResponse.json(
        { error: 'Something went wrong. Please try again.' },
        { status: 500 }
      )
    }

    try {
      await resend.emails.send({
        from: 'onboarding@resend.dev',
        to: email,
        subject: 'Welcome to the newsletter!',
        html: `
          <div style="font-family: sans-serif; max-width: 480px; margin: 0 auto;">
            <h2>Thanks for subscribing yayyy </h2>
            <p>
              You're now on the list for updates on new projects,
              articles, and things I'm learning. Glad to have you here :)
            </p>
          </div>
        `,
      })
    } catch (emailError) {
      console.error('Resend send error:', emailError)
      
    }

    return NextResponse.json(
      { message: 'Subscribed successfully!' },
      { status: 201 }
    )
  } catch (err) {
    console.error('Subscribe route error:', err)
    return NextResponse.json(
      { error: 'Something went wrong. Please try again.' },
      { status: 500 }
    )
  }
}
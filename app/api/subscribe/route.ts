import { NextResponse } from 'next/server'
import { supabase } from '@/lib/supabase'

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
      // Postgres unique constraint violation code
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
'use client'

import { useState } from 'react'
import type React from 'react'
import { Send, CheckCircle2, AlertCircle } from 'lucide-react'

type Status = 'idle' | 'submitting' | 'success' | 'error'

function isValidEmail(email: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)
}

export default function Newsletter() {
  const [email, setEmail] = useState('')
  const [status, setStatus] = useState<Status>('idle')
  const [message, setMessage] = useState('')

const handleSubmit = async (e: React.SyntheticEvent<HTMLFormElement>) => {    
    e.preventDefault()

    if (!isValidEmail(email)) {
      setStatus('error')
      setMessage('Please enter a valid email address.')
      return
    }

    setStatus('submitting')
    setMessage('')

    
    await new Promise((resolve) => setTimeout(resolve, 1000))

    setStatus('success')
    setMessage("You're subscribed! (backend not connected yet)")
    setEmail('')
  }

  return (
    <section className="mx-auto max-w-2xl px-6 py-24 text-center">
      <h2 className="mb-4 text-3xl font-bold text-white">
        Join The <span className="text-primary">Newsletter</span>
      </h2>
      <p className="mb-8 text-white/60">
        Get occasional updates on new projects, articles, and things I'm learning.
      </p>

      <form
        onSubmit={handleSubmit}
        className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-center"
      >
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="you@example.com"
          required
          className="w-full rounded-xl border border-white/10 bg-white/5 px-5 py-3 text-sm text-white placeholder-white/40 backdrop-blur outline-none transition-colors focus:border-primary/50 sm:w-80"
        />
        <button
          type="submit"
          disabled={status === 'submitting'}
          className="flex items-center justify-center gap-2 rounded-xl bg-primary px-6 py-3 text-sm font-medium text-white transition-transform hover:scale-105 disabled:cursor-not-allowed disabled:opacity-60"
        >
          <Send size={16} />
          {status === 'submitting' ? 'Subscribing...' : 'Subscribe'}
        </button>
      </form>

      {message && (
        <p
          className={`mt-4 flex items-center justify-center gap-2 text-sm ${
            status === 'error' ? 'text-red-400' : 'text-green-400'
          }`}
        >
          {status === 'error' ? (
            <AlertCircle size={16} />
          ) : (
            <CheckCircle2 size={16} />
          )}
          {message}
        </p>
      )}
    </section>
  )
}
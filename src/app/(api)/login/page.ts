'use client'
import { useState } from 'react'
import { useRouter } from 'next/navigation'

export default function LoginPage() {
  const [code, setCode] = useState('')
  const [error, setError] = useState('')
  const router = useRouter()

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    const res = await fetch('/api/login', {
      method: 'POST',
      body: JSON.stringify({ code }),
    })

    if (res.ok) {
      router.push('/')
    } else {
      setError('Invalid secret code')
    }
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <form onSubmit={handleSubmit} className="bg-white p-6 rounded shadow space-y-4">
        <h1 className="text-xl font-semibold">Enter Secret Code</h1>
        <input
          type="password"
          value={code}
          onChange={(e) => setCode(e.target.value)}
          className="w-full p-2 border rounded"
        />
        <button className="bg-black text-white px-4 py-2 rounded" type="submit">Login</button>
        {error && <p className="text-red-500">{error}</p>}
      </form>
    </div>
  )
        }

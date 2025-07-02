import { NextRequest, NextResponse } from 'next/server'

export async function POST(req: NextRequest) {
  const body = await req.json()
  const secret = process.env.SECRET_CODE

  if (body.code === secret) {
    const res = NextResponse.json({ success: true })
    res.cookies.set('auth', 'true', { httpOnly: true, path: '/' })
    return res
  }

  return NextResponse.json({ success: false }, { status: 401 })
}

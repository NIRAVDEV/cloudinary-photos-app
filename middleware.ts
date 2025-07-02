import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

export function middleware(request: NextRequest) {
  const auth = request.cookies.get('auth')?.value

  // Skip middleware for login and public assets
  if (
    request.nextUrl.pathname.startsWith('/login') ||
    request.nextUrl.pathname.startsWith('/api') ||
    request.nextUrl.pathname.startsWith('/_next') ||
    request.nextUrl.pathname.startsWith('/favicon.ico')
  ) {
    return NextResponse.next()
  }

  if (auth !== 'valid') {
    return NextResponse.redirect(new URL('/login', request.url))
  }

  return NextResponse.next()
}

export const config = {
  matcher: [
    /*
     * Match all paths except:
     * - static files (_next)
     * - login page
     * - api routes
    */
    '/((?!_next|login|api|favicon.ico).*)',
  ]
}

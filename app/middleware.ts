import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

export function middleware(request: NextRequest) {
  // Check if the user is authenticated
  const isAuthenticated = request.cookies.get('isAuthenticated')

  // If the user is not authenticated and tries to access a protected route, redirect to sign-in page
  if (!isAuthenticated && request.nextUrl.pathname.startsWith('/Home')) {
    return NextResponse.redirect(new URL('/SignInPage', request.url))
  }

  // Continue to the requested page
  return NextResponse.next()
}

export const config = {
  matcher: ['/dashboard/:path*']
}

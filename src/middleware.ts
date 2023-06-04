import { NextResponse } from 'next/server'
import { withAuth } from 'next-auth/middleware'

export default withAuth(
  function middleware(req) {
    if (req.nextUrl.pathname.startsWith('/s_admin') && req.nextauth.token?.role !== 'S_ADMIN') {
      req.nextUrl.pathname = '/auth/login'

      return NextResponse.redirect(req.nextUrl)
    }
    if (req.nextUrl.pathname.startsWith('/admin') && req.nextauth.token?.role !== 'ADMIN') {
      req.nextUrl.pathname = '/auth/login'

      return NextResponse.redirect(req.nextUrl)
    }
  },
  {
    callbacks: {
      authorized: ({ token }) => !!token,
    },
  }
)

export const config = { matcher: ['/s_admin/:path*', '/admin/:path*'] }

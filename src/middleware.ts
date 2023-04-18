import type { NextRequest } from 'next/server'
import { NextResponse } from 'next/server'

export async function middleware(req: NextRequest) {
  // const jwt = req.cookies.get("refreshToken");
  // const {pathname} = req.nextUrl;
  // if (jwt || pathname.includes("/auth/login")) {
  //     return NextResponse.next();
  // }
  // if (!jwt && (pathname.startsWith("/admin") || pathname.startsWith("/s_admin") || pathname.length === 1)) {
  //     req.nextUrl.pathname = "/auth/login";
  //     return NextResponse.redirect(req.nextUrl);
  // }
}

import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { CookieKey } from "./constants/cookie-key";

export function middleware(request: NextRequest) {
  const token = request.cookies.get(CookieKey.AUTH_TOKEN);

  if (request.nextUrl.pathname === "/login") {
    if (token) {
      return NextResponse.redirect(new URL("/profile", request.url));
    }
    return NextResponse.next();
  }

  if (request.nextUrl.pathname === "/cart") {
    if (!token) {
      return NextResponse.redirect(new URL("/login", request.url));
    }
  }
  return NextResponse.next();
}

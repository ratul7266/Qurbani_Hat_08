import { NextResponse } from "next/server";

export function middleware(request) {
  const isLoggedIn = true; // auth check later

  if (
    request.nextUrl.pathname.startsWith("/animals/") &&
    !isLoggedIn
  ) {
    return NextResponse.redirect(new URL("/sign-up", request.url));
  }

  return NextResponse.next();
}
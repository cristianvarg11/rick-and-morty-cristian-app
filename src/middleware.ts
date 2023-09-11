import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(request: NextRequest) {
  const token = request.cookies.get("api_token");

  if (!token) {
    const url = request.nextUrl.clone();
    url.pathname = "/auth";

    return NextResponse.redirect(url);
  }

  return NextResponse.next();
}

// Protected routes
export const config = {
  matcher: [
    "/",
    "/characters/",
    "/episodes",
    "/characters/form",
    "/characters/form/:id*",
  ],
};

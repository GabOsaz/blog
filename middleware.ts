import { NextResponse, NextRequest } from "next/server";

export const config = {
  matcher: ["/explore", "/profile", "/login", "/register"],
};

export function middleware(req: NextRequest, res: NextResponse) {
  const token = req.cookies.get("token")?.value;

  if (
    req.nextUrl.pathname.startsWith("/login") ||
    req.nextUrl.pathname.startsWith("/register")
  ) {
    if (token) {
      req.nextUrl.pathname = "/";
      return NextResponse.redirect(req.nextUrl);
    }
  }

  if (
    req.nextUrl.pathname.startsWith("/explore") ||
    req.nextUrl.pathname.startsWith("/profile")
  ) {
    if (!token) {
      req.nextUrl.pathname = "/login";
    } else {
      req.nextUrl.pathname = "/";
    }

    return NextResponse.redirect(req.nextUrl);
  }
}

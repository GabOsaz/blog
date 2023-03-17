import { NextResponse, NextRequest } from "next/server";

export const config = {
    matcher: ['/explore', '/profile']
}

export function middleware(req: NextRequest, res: NextResponse) {
    const token = req.cookies.get("token")?.value

    if (!token) {
        req.nextUrl.pathname = '/login'
    } else {
        req.nextUrl.pathname = '/'
    }

    return NextResponse.redirect(req.nextUrl)
}

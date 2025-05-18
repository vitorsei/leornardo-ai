import { NextRequest, NextResponse } from 'next/server';

export function middleware(req: NextRequest) {
    const { pathname } = req.nextUrl;
    const isPublicPath = pathname === '/' || pathname === '/user';

    let user = null;
    const cookie = req.cookies.get("user")?.value;

    if (cookie) {
        try {
            user = JSON.parse(cookie);
        } catch (err) {
            console.warn("Invalid user cookie", err);
        }
    }

    if (!user && !isPublicPath) {
        return NextResponse.redirect(new URL('/user', req.url));
    }

    return NextResponse.next();
}

export const config = {
    matcher: ['/((?!_next|favicon.ico|.*\\..*|api|login).*)'],
};

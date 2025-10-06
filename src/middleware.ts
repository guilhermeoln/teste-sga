import { NextResponse, type NextRequest } from "next/server";
import { CacheKeysEnum } from "./types";

const PRIVATE_ROUTES = ["/tasks", "/logs"];

const PUBLIC_ROUTES = ["/login"];

export function middleware(request: NextRequest) {
  const user = request.cookies.get(CacheKeysEnum.USER)?.value;
  const url = request.nextUrl.clone();
  const { pathname } = url;

  if (!user && PRIVATE_ROUTES.some((route) => pathname.startsWith(route))) {
    return NextResponse.redirect(new URL("/login", request.url));
  }

  if (user && PUBLIC_ROUTES.includes(pathname)) {
    return NextResponse.redirect(new URL("/tasks", request.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/tasks/:path*", "/logs/:path*", "/login"],
};

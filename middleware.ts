import { NextResponse, type NextRequest } from "next/server";
import { isAdmin, unauthorized } from "@/lib/auth";

const PUBLIC_PATHS = ["/admin/login", "/api/admin/session"];

// UX gate only: every /api/admin route handler also checks the session itself.
export async function middleware(req: NextRequest) {
  const { pathname } = req.nextUrl;
  if (PUBLIC_PATHS.includes(pathname) || (await isAdmin(req))) {
    return NextResponse.next();
  }
  if (pathname.startsWith("/api/")) return unauthorized();
  return NextResponse.redirect(new URL("/admin/login", req.url));
}

export const config = {
  matcher: ["/admin/:path*", "/api/admin/:path*"],
};

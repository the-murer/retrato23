import { NextResponse } from "next/server";
import { createHash, timingSafeEqual } from "node:crypto";
import { createSession, SESSION_COOKIE, SESSION_MAX_AGE } from "@/lib/auth";

const digest = (value: string) => createHash("sha256").update(value).digest();

// Login
export async function POST(req: Request) {
  const expected = process.env.ADMIN_PASSWORD;
  if (!expected || !process.env.SESSION_SECRET) {
    return NextResponse.json({ error: "Admin não configurado" }, { status: 500 });
  }

  const { password } = await req.json().catch(() => ({}));
  if (typeof password !== "string" || !timingSafeEqual(digest(password), digest(expected))) {
    return NextResponse.json({ error: "Senha incorreta" }, { status: 401 });
  }

  const res = NextResponse.json({ ok: true });
  res.cookies.set(SESSION_COOKIE, await createSession(), {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: "strict",
    path: "/",
    maxAge: SESSION_MAX_AGE,
  });
  return res;
}

// Logout
export async function DELETE() {
  const res = NextResponse.json({ ok: true });
  res.cookies.delete(SESSION_COOKIE);
  return res;
}

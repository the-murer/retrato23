// Single-admin session: the cookie holds "<expiry>.<hmac(expiry)>" signed with SESSION_SECRET.
// Uses Web Crypto so it runs in both middleware (edge) and route handlers (node).
import { NextResponse, type NextRequest } from "next/server";

export const SESSION_COOKIE = "admin_session";
export const SESSION_MAX_AGE = 60 * 60 * 24 * 7; // 7 days, in seconds

const encoder = new TextEncoder();

async function hmacKey() {
  const secret = process.env.SESSION_SECRET;
  if (!secret) throw new Error("SESSION_SECRET is not set");
  return crypto.subtle.importKey(
    "raw",
    encoder.encode(secret),
    { name: "HMAC", hash: "SHA-256" },
    false,
    ["sign", "verify"]
  );
}

const toHex = (buf: ArrayBuffer) =>
  [...new Uint8Array(buf)].map((b) => b.toString(16).padStart(2, "0")).join("");

const fromHex = (hex: string) =>
  new Uint8Array((hex.match(/../g) ?? []).map((h) => parseInt(h, 16)));

export async function createSession() {
  const expiry = String(Date.now() + SESSION_MAX_AGE * 1000);
  const sig = await crypto.subtle.sign("HMAC", await hmacKey(), encoder.encode(expiry));
  return `${expiry}.${toHex(sig)}`;
}

export async function verifySession(token: string | undefined) {
  const [expiry, sig] = token?.split(".") ?? [];
  if (!expiry || !sig || !/^[0-9a-f]{64}$/.test(sig) || Number(expiry) < Date.now()) {
    return false;
  }
  try {
    // crypto.subtle.verify compares in constant time
    return await crypto.subtle.verify("HMAC", await hmacKey(), fromHex(sig), encoder.encode(expiry));
  } catch {
    return false; // fail closed when SESSION_SECRET is missing
  }
}

export function isAdmin(req: NextRequest) {
  return verifySession(req.cookies.get(SESSION_COOKIE)?.value);
}

export const unauthorized = () =>
  NextResponse.json({ error: "Não autorizado" }, { status: 401 });

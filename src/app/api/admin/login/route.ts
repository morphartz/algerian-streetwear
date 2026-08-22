import { NextResponse } from "next/server";
import { z } from "zod";
import { createSessionToken, setAdminSession } from "@/lib/auth";
import crypto from "node:crypto";

const loginSchema = z.object({
  email: z.string().email().max(255),
  password: z.string().min(8).max(200),
});

function hash(value: string) {
  return crypto.createHash("sha256").update(value).digest("hex");
}

function timingSafeEqualHex(a: string, b: string) {
  const aa = Buffer.from(a, "hex");
  const bb = Buffer.from(b, "hex");
  return aa.length === bb.length && crypto.timingSafeEqual(aa, bb);
}

export async function POST(request: Request) {
  try {
    const input = loginSchema.parse(await request.json());
    const expectedEmail = process.env.ADMIN_EMAIL;
    const expectedPasswordHash = process.env.ADMIN_PASSWORD_HASH;

    if (!expectedEmail || !expectedPasswordHash) {
      return NextResponse.json(
        { error: "Admin authentication is not configured." },
        { status: 503 },
      );
    }

    const emailMatches = input.email.trim().toLowerCase() === expectedEmail.trim().toLowerCase();
    const passwordMatches = timingSafeEqualHex(hash(input.password), expectedPasswordHash);

    if (!emailMatches || !passwordMatches) {
      return NextResponse.json({ error: "Invalid credentials." }, { status: 401 });
    }

    await setAdminSession(expectedEmail, "OWNER");
    return NextResponse.json({ ok: true, redirect: "/admin" });
  } catch {
    return NextResponse.json({ error: "Invalid request." }, { status: 400 });
  }
}

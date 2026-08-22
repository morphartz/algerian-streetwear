import { NextResponse } from 'next/server';
import { z } from 'zod';
import { createSupabaseServerClient } from '@/lib/supabase/server';

const schema = z.object({ email: z.string().email().max(255), password: z.string().min(8).max(200) });

export async function POST(request: Request) {
  try {
    const { email, password } = schema.parse(await request.json());
    const supabase = await createSupabaseServerClient();
    const { error } = await supabase.auth.signInWithPassword({ email: email.trim().toLowerCase(), password });
    if (error) return NextResponse.json({ error: 'Invalid credentials.' }, { status: 401 });
    return NextResponse.json({ ok: true, redirect: '/admin' });
  } catch {
    return NextResponse.json({ error: 'Invalid request.' }, { status: 400 });
  }
}

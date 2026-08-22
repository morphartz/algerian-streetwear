"use client";

import { FormEvent, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function AdminLoginPage() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setError("");
    setLoading(true);

    try {
      const response = await fetch("/api/admin/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      });

      const data = (await response.json().catch(() => ({}))) as { error?: string; redirect?: string };

      if (!response.ok) {
        setError(data.error ?? "Unable to sign in.");
        return;
      }

      router.replace(data.redirect ?? "/admin");
      router.refresh();
    } catch {
      setError("Unable to connect. Please try again.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <main className="admin-login">
      <div className="login-panel">
        <Link className="brand" href="/">MORPH<span>ZY</span></Link>
        <p className="eyebrow">PRIVATE ACCESS</p>
        <h1>Admin login</h1>
        <p className="login-copy">Sign in to manage the storefront, products, orders, inventory, campaigns and content.</p>

        <form onSubmit={handleSubmit} className="login-form" noValidate>
          <label>
            Email
            <input
              name="email"
              type="email"
              value={email}
              onChange={(event) => setEmail(event.target.value)}
              required
              autoComplete="email"
              autoCapitalize="none"
              spellCheck={false}
            />
          </label>

          <label>
            Password
            <input
              name="password"
              type="password"
              value={password}
              onChange={(event) => setPassword(event.target.value)}
              required
              autoComplete="current-password"
            />
          </label>

          {error ? <p className="login-error" role="alert">{error}</p> : null}

          <button type="submit" className="button button-light" disabled={loading}>
            {loading ? "Signing in…" : "Sign in"}
          </button>
        </form>

        <Link href="/" className="login-back">← Back to storefront</Link>
      </div>
    </main>
  );
}

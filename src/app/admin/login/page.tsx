import Link from "next/link"

export default function AdminLoginPage() {
  return (
    <main className="admin-login">
      <div className="login-panel">
        <Link className="brand" href="/">MORPH<span>ZY</span></Link>
        <p className="eyebrow">PRIVATE ACCESS</p>
        <h1>Admin login</h1>
        <form action="/admin" method="get" className="login-form">
          <label>Email<input name="email" type="email" required autoComplete="email" /></label>
          <label>Password<input name="password" type="password" required autoComplete="current-password" /></label>
          <button type="submit" className="button button-light">Sign in</button>
        </form>
        <p className="login-disclaimer">Authentication is a placeholder route until the production auth provider is connected.</p>
      </div>
    </main>
  )
}

import Link from "next/link"

const controls = [
  ["Products", "Create, edit, publish, variants, colors, sizes, stock"],
  ["Categories & collections", "Build navigation without touching code"],
  ["Homepage builder", "Reorder, hide, duplicate and publish sections"],
  ["Orders", "COD orders, delivery, status timeline and customer details"],
  ["Inventory", "Variant-level stock and low-stock warnings"],
  ["Promotions", "Coupons, discounts, campaigns and free shipping"],
  ["Customization", "Mockups, templates, artwork and design requests"],
  ["Appearance", "Logo, colors, typography, header and footer"],
]

export default function AdminPage() {
  return (
    <main className="admin-shell">
      <header className="admin-topbar">
        <Link className="brand" href="/">MORPH<span>ZY</span></Link>
        <span className="admin-label">CONTROL CENTER</span>
        <Link className="admin-exit" href="/">View storefront →</Link>
      </header>
      <section className="admin-hero">
        <p className="eyebrow">ADMIN / OWNER</p>
        <h1>Control the entire store.</h1>
        <p>One back office for products, orders, content, inventory, customization and the visual system.</p>
      </section>
      <section className="admin-grid">
        {controls.map(([title, copy], index) => (
          <article className="admin-card" key={title}>
            <span>{String(index + 1).padStart(2, "0")}</span>
            <h2>{title}</h2>
            <p>{copy}</p>
            <button type="button">Open module</button>
          </article>
        ))}
      </section>
      <section className="admin-note">
        <p className="eyebrow">SECURITY</p>
        <h2>Private by default.</h2>
        <p>Real admin authentication must be backed by your production auth/database credentials. Never put admin passwords in the frontend or repository.</p>
      </section>
    </main>
  )
}

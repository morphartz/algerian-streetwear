import Link from "next/link";
import { redirect } from "next/navigation";
import { getAdminSession } from "@/lib/auth";

const controls = [
  ["Products", "Create, edit, publish, variants, colors, sizes, stock"],
  ["Categories & collections", "Build navigation without touching code"],
  ["Homepage builder", "Reorder, hide, duplicate and publish sections"],
  ["Orders", "COD orders, delivery, status timeline and customer details"],
  ["Inventory", "Variant-level stock and low-stock warnings"],
  ["Promotions", "Coupons, discounts, campaigns and free shipping"],
  ["Customization", "Mockups, templates, artwork and design requests"],
  ["Appearance", "Logo, colors, typography, header and footer"],
] as const;

export default async function AdminPage() {
  const session = await getAdminSession();
  if (!session) redirect("/admin/login");

  return (
    <main className="admin-shell">
      <header className="admin-topbar">
        <Link className="brand" href="/">MORPH<span>ZY</span></Link>
        <span className="admin-label">CONTROL CENTER</span>
        <div>
          <span className="admin-user">{session.email}</span>
          <form action="/api/admin/logout" method="post" style={{ display: "inline" }}>
            <button className="admin-exit" type="submit">Logout</button>
          </form>
        </div>
      </header>
      <section className="admin-hero">
        <p className="eyebrow">ADMIN / {session.role}</p>
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
        <p className="eyebrow">SESSION</p>
        <h2>Authenticated.</h2>
        <p>You are signed in as the owner. Module-specific permissions can now be layered onto the role system.</p>
      </section>
    </main>
  );
}

import Link from "next/link"

const products = [
  { name: "Oversized Tee 001", price: "3,900 DA", tag: "NEW", tone: "ink" },
  { name: "Football Culture Tee", price: "4,500 DA", tag: "DROP 01", tone: "white" },
  { name: "Heavyweight Hoodie", price: "6,900 DA", tag: "BEST SELLER", tone: "charcoal" },
  { name: "Utility Cargo", price: "7,900 DA", tag: "LIMITED", tone: "olive" },
]

export default function HomePage() {
  return (
    <main>
      <header className="site-header">
        <Link className="brand" href="/">MORPH<span>ZY</span></Link>
        <nav className="desktop-nav" aria-label="Primary navigation">
          <Link href="#shop">Shop</Link>
          <Link href="#drops">Drops</Link>
          <Link href="#custom">Customize</Link>
          <Link href="#story">Journal</Link>
        </nav>
        <div className="header-actions">
          <Link href="/track">Track order</Link>
          <button aria-label="Open shopping bag">Bag (0)</button>
        </div>
      </header>

      <section className="hero">
        <div className="hero-copy">
          <p className="eyebrow">ALGÉRIE / STREETWEAR / 001</p>
          <h1>WEAR<br /><em>YOUR</em><br />CULTURE.</h1>
          <p className="hero-text">Independent Algerian streetwear. Limited drops, custom pieces and graphics built for everyday rotation.</p>
          <div className="hero-actions">
            <Link className="button button-light" href="#shop">Shop the drop</Link>
            <Link className="button button-ghost" href="#custom">Design yours</Link>
          </div>
        </div>
        <div className="hero-art" aria-label="Editorial fashion artwork">
          <div className="hero-sticker">DZ / 16 / 2026</div>
          <div className="hero-orb" />
          <div className="hero-grid" />
        </div>
      </section>

      <section className="ticker" aria-label="Highlights">
        <span>CASUAL / FOOTBALL / ANIME / ORIGINAL ART</span>
        <span>COD ACROSS ALGERIA</span>
        <span>58 WILAYAS</span>
      </section>

      <section id="drops" className="drop-banner">
        <div>
          <p className="eyebrow">DROP 001</p>
          <h2>MADE HERE.<br />WORN EVERYWHERE.</h2>
        </div>
        <div className="drop-meta">
          <strong>LIVE NOW</strong>
          <span>Limited quantities / Algeria</span>
        </div>
      </section>

      <section id="shop" className="section">
        <div className="section-heading">
          <div>
            <p className="eyebrow">SHOP</p>
            <h2>Current rotation</h2>
          </div>
          <Link href="#shop" className="underlined">View all products →</Link>
        </div>
        <div className="product-grid">
          {products.map((product, index) => (
            <article className="product-card" key={product.name}>
              <div className={`product-image ${product.tone}`}>
                <span>{String(index + 1).padStart(2, "0")}</span>
                <small>{product.tag}</small>
              </div>
              <div className="product-info">
                <div><h3>{product.name}</h3><p>Unisex / Algeria</p></div>
                <strong>{product.price}</strong>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section id="custom" className="custom-section">
        <div>
          <p className="eyebrow">CUSTOM STUDIO</p>
          <h2>YOUR IDEA.<br />OUR GARMENT.</h2>
          <p>Upload artwork, add text and build a one-off piece. The editor is designed for mobile first, because apparently people now run entire businesses from a phone.</p>
          <Link className="button button-light" href="/customize">Start customizing</Link>
        </div>
        <div className="custom-spec">
          <span>01</span><b>CHOOSE</b><small>TEE / HOODIE / CAP</small>
          <span>02</span><b>UPLOAD</b><small>PNG / JPG / SVG</small>
          <span>03</span><b>ORDER</b><small>CASH ON DELIVERY</small>
        </div>
      </section>

      <section id="story" className="manifesto">
        <p className="eyebrow">THE MANIFESTO</p>
        <h2>NOT MERCH.<br /><em>A POINT OF VIEW.</em></h2>
      </section>

      <footer className="site-footer">
        <div><Link className="brand" href="/">MORPH<span>ZY</span></Link><p>Independent Algerian streetwear.</p></div>
        <div className="footer-links"><Link href="#shop">Shop</Link><Link href="#custom">Customize</Link><Link href="/track">Track order</Link><Link href="mailto:hello@example.com">Contact</Link></div>
        <div className="footer-note">FR / AR<br />COD / 58 WILAYAS</div>
      </footer>
    </main>
  )
}

const products = [
  { name: "ALG Tee / Black", price: "3,900 DA" },
  { name: "Algiers Oversized Hoodie", price: "7,900 DA" },
  { name: "DZ Track Jacket", price: "8,900 DA" },
];

export default function Home() {
  return (
    <main>
      <header className="container nav">
        <a className="brand" href="#">ALG/STREET</a>
        <nav className="navlinks" aria-label="Main navigation">
          <a href="#shop">Shop</a><a href="#story">Story</a><a href="#contact">Contact</a>
        </nav>
        <span aria-label="Cart">Cart (0)</span>
      </header>

      <section className="hero">
        <div>
          <p>MADE IN ALGERIA · BUILT FOR THE STREET</p>
          <h1>LOCAL ROOTS.<br />GLOBAL ATTITUDE.</h1>
          <p>Contemporary Algerian streetwear built around culture, identity and everyday movement.</p>
          <a className="cta" href="#shop">Shop the collection</a>
        </div>
      </section>

      <section className="container section" id="shop">
        <div className="section-head"><h2>Latest drop</h2><span>COD available across Algeria</span></div>
        <div className="grid">
          {products.map((product) => <article className="product" key={product.name}>
            <div className="product-image">PRODUCT IMAGE</div>
            <div className="product-body"><span className="product-title">{product.name}</span><span className="price">{product.price}</span></div>
          </article>)}
        </div>
      </section>

      <section className="container section" id="story">
        <h2>Built here.<br />Worn everywhere.</h2>
        <p style={{maxWidth:620,lineHeight:1.8,color:"var(--muted)"}}>A focused platform for Algerian streetwear: sharp product presentation, transparent pricing, local delivery and a storefront that treats the brand like a real fashion label rather than an online catalogue.</p>
      </section>

      <footer id="contact"><div className="container">ALG/STREET · Algeria · Cash on delivery</div></footer>
    </main>
  );
}

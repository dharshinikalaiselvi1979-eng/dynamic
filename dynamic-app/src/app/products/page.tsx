// app/products/page.tsx
// Task 3: Static products index page
// This is a STATIC route at /products — no dynamic segments here.

import Link from "next/link";

export default function ProductsIndexPage() {
  const products = [
    { id: "shoe-001", name: "Running Shoes", price: 99.99, emoji: "👟", category: "Footwear" },
    { id: "shirt-001", name: "T-Shirt", price: 29.99, emoji: "👕", category: "Clothing" },
    { id: "hat-001", name: "Baseball Cap", price: 19.99, emoji: "🧢", category: "Accessories" },
  ];

  return (
    <div style={{ maxWidth: "900px", margin: "0 auto", padding: "60px 24px" }}>
      {/* Header */}
      <div style={{ marginBottom: "48px" }}>
        <div
          style={{
            display: "inline-block",
            padding: "6px 16px",
            borderRadius: "20px",
            background: "var(--accent-glow)",
            border: "1px solid rgba(99, 102, 241, 0.3)",
            fontSize: "12px",
            fontWeight: 600,
            color: "var(--accent-light)",
            marginBottom: "16px",
            letterSpacing: "0.05em",
          }}
        >
          STATIC ROUTE → /products
        </div>
        <h1
          style={{
            fontSize: "40px",
            fontWeight: 800,
            letterSpacing: "-0.03em",
            marginBottom: "12px",
          }}
        >
          🛍️ Products
        </h1>
        <p style={{ fontSize: "16px", color: "var(--text-muted)", lineHeight: 1.6 }}>
          This is a <strong>static</strong> route. Click any product to visit its <code style={{ color: "var(--accent-light)", background: "var(--surface-light)", padding: "2px 8px", borderRadius: "4px" }}>[id]</code> dynamic route.
        </p>
      </div>

      {/* Product Grid */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
          gap: "20px",
        }}
      >
        {products.map((product) => (
          <Link
            key={product.id}
            href={`/products/${product.id}`}
            className="product-card"
          >
            <div style={{ fontSize: "48px", marginBottom: "16px" }}>{product.emoji}</div>
            <span
              style={{
                fontSize: "11px",
                fontWeight: 600,
                padding: "3px 10px",
                borderRadius: "6px",
                background: "var(--accent-glow)",
                color: "var(--accent-light)",
                marginBottom: "12px",
                display: "inline-block",
              }}
            >
              {product.category}
            </span>
            <h2 style={{ fontSize: "20px", fontWeight: 700, marginBottom: "8px" }}>{product.name}</h2>
            <p style={{ fontSize: "24px", fontWeight: 800, color: "var(--accent-light)", marginBottom: "12px" }}>
              ${product.price}
            </p>
            <code
              style={{
                fontSize: "12px",
                fontFamily: "var(--font-mono)",
                color: "var(--text-muted)",
                background: "var(--surface-light)",
                padding: "4px 10px",
                borderRadius: "4px",
              }}
            >
              params.id = &quot;{product.id}&quot;
            </code>
          </Link>
        ))}
      </div>
    </div>
  );
}

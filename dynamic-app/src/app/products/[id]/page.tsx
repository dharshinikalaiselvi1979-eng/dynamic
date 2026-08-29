// app/products/[id]/page.tsx
// Task 4: Dynamic product page using [id] segment
// This route captures a single URL segment as the product ID.
// When an invalid ID is requested, calling notFound() falls back to the global app/not-found.tsx.

import { notFound } from "next/navigation";
import Link from "next/link";

const products: Record<
  string,
  {
    name: string;
    price: number;
    emoji: string;
    category: string;
    description: string;
  }
> = {
  "shoe-001": {
    name: "Running Shoes",
    price: 99.99,
    emoji: "👟",
    category: "Footwear",
    description:
      "High-performance running shoes with advanced cushioning technology. Perfect for long-distance runs and daily training sessions.",
  },
  "shirt-001": {
    name: "T-Shirt",
    price: 29.99,
    emoji: "👕",
    category: "Clothing",
    description:
      "Premium cotton t-shirt with a modern fit. Available in multiple colors. Machine washable and designed for everyday comfort.",
  },
  "hat-001": {
    name: "Baseball Cap",
    price: 19.99,
    emoji: "🧢",
    category: "Accessories",
    description:
      "Classic baseball cap with adjustable strap. One size fits all. UV-protective fabric for outdoor activities.",
  },
};

export default async function ProductPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const product = products[id];

  // Call notFound() if the product does not exist
  // Falls back to global app/not-found.tsx since /products has no segment not-found.tsx
  if (!product) {
    notFound();
  }

  return (
    <div style={{ maxWidth: "700px", margin: "0 auto", padding: "60px 24px" }}>
      {/* Breadcrumb */}
      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: "8px",
          marginBottom: "32px",
          fontSize: "14px",
        }}
      >
        <Link
          href="/"
          style={{ color: "var(--text-muted)", textDecoration: "none" }}
        >
          Home
        </Link>
        <span style={{ color: "var(--text-muted)" }}>/</span>
        <Link
          href="/products"
          style={{ color: "var(--text-muted)", textDecoration: "none" }}
        >
          Products
        </Link>
        <span style={{ color: "var(--text-muted)" }}>/</span>
        <span style={{ color: "var(--accent-light)" }}>{id}</span>
      </div>

      {/* Param Badge */}
      <div
        style={{
          display: "inline-block",
          padding: "8px 16px",
          borderRadius: "8px",
          background: "var(--accent-glow)",
          border: "1px solid rgba(99, 102, 241, 0.3)",
          fontSize: "13px",
          fontFamily: "var(--font-mono)",
          color: "var(--accent-light)",
          marginBottom: "32px",
        }}
      >
        params.id = &quot;{id}&quot;
      </div>

      {/* Product Card */}
      <div
        style={{
          background: "var(--surface)",
          border: "1px solid var(--border)",
          borderRadius: "16px",
          padding: "40px",
          textAlign: "center",
          marginBottom: "24px",
        }}
      >
        <div style={{ fontSize: "72px", marginBottom: "20px" }}>
          {product.emoji}
        </div>
        <span
          style={{
            fontSize: "11px",
            fontWeight: 600,
            padding: "3px 10px",
            borderRadius: "6px",
            background: "var(--accent-glow)",
            color: "var(--accent-light)",
            display: "inline-block",
            marginBottom: "16px",
          }}
        >
          {product.category}
        </span>
        <h1
          style={{
            fontSize: "36px",
            fontWeight: 800,
            letterSpacing: "-0.02em",
            marginBottom: "8px",
          }}
        >
          {product.name}
        </h1>
        <p
          style={{
            fontSize: "14px",
            color: "var(--text-muted)",
            marginBottom: "4px",
          }}
        >
          Product ID: {id}
        </p>
        <p
          style={{
            fontSize: "32px",
            fontWeight: 800,
            color: "var(--accent-light)",
            marginBottom: "20px",
          }}
        >
          ${product.price}
        </p>
        <p
          style={{
            fontSize: "16px",
            color: "var(--text-muted)",
            lineHeight: 1.6,
            maxWidth: "500px",
            margin: "0 auto",
          }}
        >
          {product.description}
        </p>
      </div>

      {/* Reviews Link */}
      <Link
        href={`/products/${id}/reviews`}
        className="review-link-card"
        style={{ marginBottom: "24px" }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <div>
            <h3
              style={{ fontSize: "16px", fontWeight: 700, marginBottom: "4px" }}
            >
              ⭐ View Reviews
            </h3>
            <p style={{ fontSize: "13px", color: "var(--text-muted)" }}>
              Nested static route: /products/{id}/reviews
            </p>
          </div>
          <span style={{ fontSize: "20px", color: "var(--text-muted)" }}>
            →
          </span>
        </div>
      </Link>

      {/* How it works */}
      <div
        style={{
          background: "var(--surface)",
          border: "1px solid var(--border)",
          borderRadius: "12px",
          padding: "24px",
        }}
      >
        <h3
          style={{
            fontSize: "16px",
            fontWeight: 700,
            marginBottom: "12px",
            color: "var(--accent-light)",
          }}
        >
          🔧 Mixed Route Details
        </h3>
        <p
          style={{
            fontSize: "14px",
            color: "var(--text-muted)",
            lineHeight: 1.6,
            marginBottom: "8px",
          }}
        >
          <code
            style={{
              background: "var(--surface-light)",
              padding: "2px 6px",
              borderRadius: "4px",
            }}
          >
            /products
          </code>{" "}
          is a <strong>static</strong> route (products/page.tsx).
        </p>
        <p
          style={{
            fontSize: "14px",
            color: "var(--text-muted)",
            lineHeight: 1.6,
            marginBottom: "8px",
          }}
        >
          <code
            style={{
              background: "var(--surface-light)",
              padding: "2px 6px",
              borderRadius: "4px",
            }}
          >
            /products/{id}
          </code>{" "}
          is a <strong>dynamic</strong> route (products/[id]/page.tsx).
        </p>
        <p
          style={{
            fontSize: "14px",
            color: "var(--text-muted)",
            lineHeight: 1.6,
          }}
        >
          <code
            style={{
              background: "var(--surface-light)",
              padding: "2px 6px",
              borderRadius: "4px",
            }}
          >
            /products/{id}/reviews
          </code>{" "}
          is a <strong>nested static</strong> route inside a dynamic one.
        </p>
      </div>

      {/* Back link */}
      <div style={{ marginTop: "32px" }}>
        <Link
          href="/products"
          style={{
            display: "inline-block",
            padding: "10px 24px",
            borderRadius: "8px",
            border: "1px solid var(--border)",
            color: "var(--foreground)",
            textDecoration: "none",
            fontSize: "14px",
            fontWeight: 500,
          }}
        >
          ← All Products
        </Link>
      </div>
    </div>
  );
}

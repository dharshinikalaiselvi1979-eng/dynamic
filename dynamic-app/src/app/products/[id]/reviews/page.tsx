// app/products/[id]/reviews/page.tsx
// Task 3: Nested static route inside a dynamic segment
// This demonstrates that static routes can be nested inside dynamic ones.
// /products/[id]/reviews is a static route nested inside [id]

import Link from "next/link";

// Pre-render review pages for each product ID at build time
export async function generateStaticParams() {
  return [
    { id: "shoe-001" },
    { id: "shirt-001" },
    { id: "hat-001" },
  ];
}

export default async function ReviewsPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;

  // Mock reviews data
  const reviewsData: Record<string, { reviewer: string; rating: number; comment: string }[]> = {
    "shoe-001": [
      { reviewer: "Alice", rating: 5, comment: "Best running shoes I've ever owned! Great cushioning." },
      { reviewer: "Bob", rating: 4, comment: "Very comfortable but runs a bit small. Order half size up." },
      { reviewer: "Carol", rating: 5, comment: "Used these for a marathon. Absolutely fantastic performance." },
    ],
    "shirt-001": [
      { reviewer: "Dave", rating: 4, comment: "Nice fabric, fits true to size. Love the quality." },
      { reviewer: "Eve", rating: 5, comment: "Super soft and comfortable. Will buy more colors!" },
    ],
    "hat-001": [
      { reviewer: "Frank", rating: 5, comment: "Perfect fit with the adjustable strap. Great sun protection." },
      { reviewer: "Grace", rating: 3, comment: "Good cap but the color faded after a few washes." },
      { reviewer: "Hank", rating: 4, comment: "Classic design. Exactly what I was looking for." },
    ],
  };

  const reviews = reviewsData[id] || [];
  const avgRating = reviews.length > 0
    ? (reviews.reduce((sum, r) => sum + r.rating, 0) / reviews.length).toFixed(1)
    : "N/A";

  return (
    <div style={{ maxWidth: "700px", margin: "0 auto", padding: "60px 24px" }}>
      {/* Breadcrumb */}
      <div style={{ display: "flex", alignItems: "center", gap: "8px", marginBottom: "32px", fontSize: "14px", flexWrap: "wrap" }}>
        <Link href="/" style={{ color: "var(--text-muted)", textDecoration: "none" }}>Home</Link>
        <span style={{ color: "var(--text-muted)" }}>/</span>
        <Link href="/products" style={{ color: "var(--text-muted)", textDecoration: "none" }}>Products</Link>
        <span style={{ color: "var(--text-muted)" }}>/</span>
        <Link href={`/products/${id}`} style={{ color: "var(--text-muted)", textDecoration: "none" }}>{id}</Link>
        <span style={{ color: "var(--text-muted)" }}>/</span>
        <span style={{ color: "var(--accent-light)" }}>reviews</span>
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
        params.id = &quot;{id}&quot;  (nested static: /reviews)
      </div>

      {/* Header */}
      <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: "32px" }}>
        <div>
          <h1 style={{ fontSize: "32px", fontWeight: 800, letterSpacing: "-0.02em", marginBottom: "4px" }}>
            ⭐ Reviews
          </h1>
          <p style={{ fontSize: "14px", color: "var(--text-muted)" }}>
            Product: {id} · {reviews.length} review{reviews.length !== 1 ? "s" : ""} · Avg: {avgRating}/5
          </p>
        </div>
      </div>

      {/* Reviews List */}
      {reviews.length > 0 ? (
        <div style={{ display: "flex", flexDirection: "column", gap: "16px", marginBottom: "32px" }}>
          {reviews.map((review, index) => (
            <div
              key={index}
              style={{
                background: "var(--surface)",
                border: "1px solid var(--border)",
                borderRadius: "12px",
                padding: "20px 24px",
              }}
            >
              <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: "8px" }}>
                <span style={{ fontWeight: 700, fontSize: "15px" }}>{review.reviewer}</span>
                <span style={{ fontSize: "14px", color: "#fbbf24" }}>
                  {"★".repeat(review.rating)}{"☆".repeat(5 - review.rating)}
                </span>
              </div>
              <p style={{ fontSize: "14px", color: "var(--text-muted)", lineHeight: 1.6 }}>{review.comment}</p>
            </div>
          ))}
        </div>
      ) : (
        <div
          style={{
            background: "var(--surface)",
            border: "1px solid var(--border)",
            borderRadius: "12px",
            padding: "40px",
            textAlign: "center",
            marginBottom: "32px",
          }}
        >
          <p style={{ fontSize: "16px", color: "var(--text-muted)" }}>No reviews found for product &quot;{id}&quot;.</p>
        </div>
      )}

      {/* How it works */}
      <div
        style={{
          background: "var(--surface)",
          border: "1px solid var(--border)",
          borderRadius: "12px",
          padding: "24px",
        }}
      >
        <h3 style={{ fontSize: "16px", fontWeight: 700, marginBottom: "12px", color: "var(--accent-light)" }}>
          🔧 Nested Route Details
        </h3>
        <p style={{ fontSize: "14px", color: "var(--text-muted)", lineHeight: 1.6 }}>
          This page lives at <code style={{ background: "var(--surface-light)", padding: "2px 6px", borderRadius: "4px" }}>app/products/[id]/reviews/page.tsx</code>. The <code style={{ background: "var(--surface-light)", padding: "2px 6px", borderRadius: "4px" }}>reviews</code> folder is a <strong>static</strong> route nested inside the <strong>dynamic</strong> <code style={{ background: "var(--surface-light)", padding: "2px 6px", borderRadius: "4px" }}>[id]</code> segment. The <code style={{ background: "var(--surface-light)", padding: "2px 6px", borderRadius: "4px" }}>id</code> param is still available here because this page is inside the <code style={{ background: "var(--surface-light)", padding: "2px 6px", borderRadius: "4px" }}>[id]</code> folder.
        </p>
      </div>

      {/* Back link */}
      <div style={{ marginTop: "32px", display: "flex", gap: "12px" }}>
        <Link
          href={`/products/${id}`}
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
          ← Back to Product
        </Link>
        <Link
          href="/products"
          style={{
            display: "inline-block",
            padding: "10px 24px",
            borderRadius: "8px",
            border: "1px solid var(--border)",
            color: "var(--text-muted)",
            textDecoration: "none",
            fontSize: "14px",
            fontWeight: 500,
          }}
        >
          All Products
        </Link>
      </div>
    </div>
  );
}

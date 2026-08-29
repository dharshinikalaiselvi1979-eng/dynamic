import Link from "next/link";

export default function HomePage() {
  const routes = [
    {
      title: "Blog Posts",
      description: "Dynamic [slug] route — one template for all blog posts",
      href: "/blog",
      icon: "📝",
      tag: "[slug]",
      examples: ["/blog/my-first-post", "/blog/hello-world", "/blog/nextjs-routing"],
    },
    {
      title: "Documentation",
      description: "Catch-all [...catchAll] route — handles unlimited depth",
      href: "/docs/getting-started",
      icon: "📚",
      tag: "[...catchAll]",
      examples: ["/docs/getting-started", "/docs/api/authentication", "/docs/guides/advanced/setup"],
    },
    {
      title: "Products",
      description: "Mixed static + dynamic [id] routes with nested reviews",
      href: "/products",
      icon: "🛍️",
      tag: "[id]",
      examples: ["/products", "/products/shoe-001", "/products/shoe-001/reviews"],
    },
    {
      title: "Dashboard",
      description: "Streaming with loading.tsx and component-level Suspense boundaries",
      href: "/dashboard",
      icon: "📊",
      tag: "<Suspense>",
      examples: ["/dashboard (Live Feed: 1s, Stats: 2s, Chart: 3s)"],
    },
  ];

  return (
    <div style={{ maxWidth: "1200px", margin: "0 auto", padding: "80px 24px" }}>
      {/* Hero */}
      <div style={{ textAlign: "center", marginBottom: "80px" }}>
        <div
          style={{
            display: "inline-block",
            padding: "6px 16px",
            borderRadius: "20px",
            background: "var(--accent-glow)",
            border: "1px solid rgba(99, 102, 241, 0.3)",
            fontSize: "13px",
            fontWeight: 600,
            color: "var(--accent-light)",
            marginBottom: "24px",
            letterSpacing: "0.05em",
          }}
        >
          NEXT.JS APP ROUTER
        </div>
        <h1
          style={{
            fontSize: "clamp(36px, 5vw, 64px)",
            fontWeight: 800,
            lineHeight: 1.1,
            letterSpacing: "-0.03em",
            marginBottom: "20px",
            background: "linear-gradient(135deg, #fff 0%, #6366f1 50%, #a5b4fc 100%)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
          }}
        >
          Dynamic Segments &<br />Catch-All Routes
        </h1>
        <p
          style={{
            fontSize: "18px",
            color: "var(--text-muted)",
            maxWidth: "600px",
            margin: "0 auto",
            lineHeight: 1.6,
          }}
        >
          Explore how Next.js uses <code style={{ color: "var(--accent-light)", background: "var(--surface-light)", padding: "2px 8px", borderRadius: "4px", fontSize: "15px" }}>[slug]</code>,{" "}
          <code style={{ color: "var(--accent-light)", background: "var(--surface-light)", padding: "2px 8px", borderRadius: "4px", fontSize: "15px" }}>[...catchAll]</code>, and mixed routes to build flexible URL patterns.
        </p>
      </div>

      {/* Route Cards */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(340px, 1fr))",
          gap: "24px",
        }}
      >
        {routes.map((route) => (
          <Link
            key={route.href}
            href={route.href}
            className="route-card"
          >
            <div style={{ fontSize: "36px", marginBottom: "16px" }}>{route.icon}</div>
            <div style={{ display: "flex", alignItems: "center", gap: "12px", marginBottom: "12px" }}>
              <h2 style={{ fontSize: "22px", fontWeight: 700, letterSpacing: "-0.01em" }}>{route.title}</h2>
              <span
                style={{
                  fontSize: "12px",
                  fontFamily: "var(--font-mono)",
                  padding: "4px 10px",
                  borderRadius: "6px",
                  background: "var(--accent-glow)",
                  color: "var(--accent-light)",
                  fontWeight: 600,
                }}
              >
                {route.tag}
              </span>
            </div>
            <p style={{ fontSize: "14px", color: "var(--text-muted)", lineHeight: 1.6, marginBottom: "20px" }}>
              {route.description}
            </p>
            <div style={{ display: "flex", flexDirection: "column", gap: "6px" }}>
              {route.examples.map((ex) => (
                <code
                  key={ex}
                  style={{
                    fontSize: "12px",
                    fontFamily: "var(--font-mono)",
                    color: "var(--text-muted)",
                    background: "var(--surface-light)",
                    padding: "4px 10px",
                    borderRadius: "4px",
                  }}
                >
                  {ex}
                </code>
              ))}
            </div>
          </Link>
        ))}
      </div>

      {/* Route Structure Diagram */}
      <div
        style={{
          marginTop: "80px",
          background: "var(--surface)",
          border: "1px solid var(--border)",
          borderRadius: "16px",
          padding: "40px",
        }}
      >
        <h2 style={{ fontSize: "24px", fontWeight: 700, marginBottom: "24px", letterSpacing: "-0.01em" }}>
          📁 Route Structure
        </h2>
        <pre
          style={{
            fontFamily: "var(--font-mono)",
            fontSize: "14px",
            lineHeight: 1.8,
            color: "var(--text-muted)",
            overflow: "auto",
          }}
        >
{`app/
├── page.tsx                          → /  (Home)
├── blog/
│   ├── page.tsx                      → /blog  (Blog Index)
│   └── [slug]/
│       └── page.tsx                  → /blog/:slug  (Dynamic)
├── docs/
│   └── [...catchAll]/
│       └── page.tsx                  → /docs/*  (Catch-All)
├── dashboard/
│   ├── loading.tsx                   → /dashboard  (Route-level Loading)
│   └── page.tsx                      → /dashboard  (Streaming Suspense)
└── products/
    ├── page.tsx                      → /products  (Static Index)
    └── [id]/
        ├── page.tsx                  → /products/:id  (Dynamic)
        └── reviews/
            └── page.tsx              → /products/:id/reviews  (Nested)`}
        </pre>
      </div>
    </div>
  );
}

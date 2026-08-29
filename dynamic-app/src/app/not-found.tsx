// app/not-found.tsx
// Task 1: Global Not Found Page
// This serves as the fallback 404 page for the entire application.

import Link from "next/link";

export default function GlobalNotFound() {
  return (
    <main
      style={{
        padding: "80px 24px",
        maxWidth: "600px",
        margin: "0 auto",
        textAlign: "center",
      }}
    >
      <div
        style={{
          display: "inline-block",
          padding: "6px 16px",
          borderRadius: "20px",
          background: "rgba(248, 113, 113, 0.1)",
          border: "1px solid rgba(248, 113, 113, 0.2)",
          fontSize: "13px",
          fontWeight: 600,
          color: "var(--error)",
          marginBottom: "16px",
        }}
      >
        HTTP 404
      </div>

      <h1
        style={{
          fontSize: "4rem",
          fontWeight: 900,
          margin: "0.5rem 0",
          letterSpacing: "-0.04em",
          background: "linear-gradient(135deg, #f87171, #fb7185, #fda4af)",
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
        }}
      >
        404
      </h1>

      <h2
        style={{
          fontSize: "24px",
          fontWeight: 700,
          marginBottom: "12px",
        }}
      >
        Page Not Found
      </h2>

      <p
        style={{
          fontSize: "16px",
          color: "var(--text-muted)",
          lineHeight: 1.6,
          marginBottom: "32px",
        }}
      >
        Sorry, the page you are looking for does not exist. It may have been
        moved, deleted, or the URL may be incorrect.
      </p>

      <nav
        style={{
          marginTop: "2rem",
          display: "flex",
          gap: "1rem",
          justifyContent: "center",
        }}
      >
        <Link
          href="/"
          style={{
            display: "inline-block",
            padding: "12px 24px",
            borderRadius: "10px",
            background: "linear-gradient(135deg, #6366f1, #818cf8)",
            color: "#fff",
            textDecoration: "none",
            fontWeight: 600,
            fontSize: "14px",
            boxShadow: "0 4px 14px rgba(99, 102, 241, 0.3)",
          }}
        >
          ← Go Home
        </Link>
        <Link
          href="/blog"
          style={{
            display: "inline-block",
            padding: "12px 24px",
            borderRadius: "10px",
            background: "var(--surface)",
            border: "1px solid var(--border)",
            color: "var(--foreground)",
            textDecoration: "none",
            fontWeight: 600,
            fontSize: "14px",
          }}
        >
          Browse Blog
        </Link>
      </nav>
    </main>
  );
}

// app/blog/not-found.tsx
// Task 2: Blog-Specific Not Found Page
// This page takes precedence over the global 404 for any missing resource under /blog/*

import Link from "next/link";

export default function BlogNotFound() {
  return (
    <main
      style={{
        padding: "60px 24px",
        maxWidth: "680px",
        margin: "0 auto",
      }}
    >
      {/* Breadcrumbs */}
      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: "8px",
          marginBottom: "24px",
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
          href="/blog"
          style={{ color: "var(--text-muted)", textDecoration: "none" }}
        >
          Blog
        </Link>
        <span style={{ color: "var(--text-muted)" }}>/</span>
        <span style={{ color: "var(--error)" }}>404 Not Found</span>
      </div>

      {/* Badge */}
      <div
        style={{
          display: "inline-block",
          padding: "6px 14px",
          borderRadius: "20px",
          background: "rgba(248, 113, 113, 0.12)",
          border: "1px solid rgba(248, 113, 113, 0.25)",
          fontSize: "12px",
          fontWeight: 600,
          color: "var(--error)",
          marginBottom: "16px",
        }}
      >
        SEGMENT 404 → /blog/*
      </div>

      <h1
        style={{
          fontSize: "32px",
          fontWeight: 800,
          letterSpacing: "-0.02em",
          marginBottom: "12px",
        }}
      >
        Post Not Found
      </h1>

      <p
        style={{
          fontSize: "16px",
          color: "var(--text-muted)",
          lineHeight: 1.6,
          marginBottom: "32px",
        }}
      >
        The blog post you are looking for does not exist. It may have been
        removed or the slug may be incorrect.
      </p>

      {/* Recent Posts Section */}
      <section
        style={{
          marginTop: "2rem",
          padding: "24px",
          backgroundColor: "var(--surface)",
          border: "1px solid var(--border)",
          borderRadius: "14px",
          marginBottom: "32px",
        }}
      >
        <h2
          style={{
            marginTop: 0,
            fontSize: "18px",
            fontWeight: 700,
            marginBottom: "16px",
            color: "var(--foreground)",
          }}
        >
          Recent Posts
        </h2>
        <ul
          style={{
            listStyle: "none",
            padding: 0,
            margin: 0,
            display: "flex",
            flexDirection: "column",
            gap: "12px",
          }}
        >
          <li>
            <Link
              href="/blog/my-first-post"
              style={{
                color: "var(--accent-light)",
                textDecoration: "none",
                fontSize: "15px",
                fontWeight: 500,
                display: "inline-flex",
                alignItems: "center",
                gap: "6px",
              }}
            >
              📄 My First Post
            </Link>
          </li>
          <li>
            <Link
              href="/blog/hello-world"
              style={{
                color: "var(--accent-light)",
                textDecoration: "none",
                fontSize: "15px",
                fontWeight: 500,
                display: "inline-flex",
                alignItems: "center",
                gap: "6px",
              }}
            >
              🌐 Hello World
            </Link>
          </li>
          <li>
            <Link
              href="/blog/nextjs-routing"
              style={{
                color: "var(--accent-light)",
                textDecoration: "none",
                fontSize: "15px",
                fontWeight: 500,
                display: "inline-flex",
                alignItems: "center",
                gap: "6px",
              }}
            >
              ⚡ Next.js Routing
            </Link>
          </li>
        </ul>
      </section>

      {/* Navigation */}
      <nav style={{ marginTop: "2rem", display: "flex", gap: "1rem" }}>
        <Link
          href="/blog"
          style={{
            display: "inline-block",
            padding: "10px 22px",
            borderRadius: "8px",
            background: "linear-gradient(135deg, #6366f1, #818cf8)",
            color: "#fff",
            textDecoration: "none",
            fontWeight: 600,
            fontSize: "14px",
          }}
        >
          ← All Posts
        </Link>
        <Link
          href="/"
          style={{
            display: "inline-block",
            padding: "10px 22px",
            borderRadius: "8px",
            background: "var(--surface)",
            border: "1px solid var(--border)",
            color: "var(--foreground)",
            textDecoration: "none",
            fontWeight: 600,
            fontSize: "14px",
          }}
        >
          Go Home
        </Link>
      </nav>
    </main>
  );
}

// app/docs/page.tsx
// Edge Case Handling: Handling the root /docs path (0 segments)
// [...catchAll] requires 1+ segments (/docs/foo).
// Adding app/docs/page.tsx ensures /docs renders cleanly without 404ing!
// Alternatively, [[...catchAll]] (optional catch-all) handles both 0 and 1+ segments in one file.

import Link from "next/link";

export default function DocsIndexPage() {
  const docSections = [
    {
      title: "Getting Started",
      path: "/docs/getting-started",
      desc: "Quickstart guide and setup instructions (1 segment: ['getting-started'])",
      tag: "1 Segment",
    },
    {
      title: "API Reference",
      path: "/docs/api",
      desc: "Root API documentation overview (1 segment: ['api'])",
      tag: "1 Segment",
    },
    {
      title: "API: Authentication",
      path: "/docs/api/authentication",
      desc: "API security, OAuth, and API tokens (2 segments: ['api', 'authentication'])",
      tag: "2 Segments",
    },
    {
      title: "API: Webhooks",
      path: "/docs/api/webhooks",
      desc: "Handling asynchronous webhooks and callbacks (2 segments: ['api', 'webhooks'])",
      tag: "2 Segments",
    },
    {
      title: "Guides: Advanced Setup",
      path: "/docs/guides/advanced-setup",
      desc: "Production deployments and config (2 segments: ['guides', 'advanced-setup'])",
      tag: "2 Segments",
    },
    {
      title: "Guides: Deep Config",
      path: "/docs/guides/advanced/setup/config",
      desc: "Deeply nested configuration guide (4 segments: ['guides', 'advanced', 'setup', 'config'])",
      tag: "4 Segments",
    },
  ];

  return (
    <div style={{ maxWidth: "1000px", margin: "0 auto", padding: "60px 24px" }}>
      {/* Breadcrumb */}
      <div style={{ display: "flex", alignItems: "center", gap: "8px", marginBottom: "32px", fontSize: "14px" }}>
        <Link href="/" style={{ color: "var(--text-muted)", textDecoration: "none" }}>Home</Link>
        <span style={{ color: "var(--text-muted)" }}>/</span>
        <span style={{ color: "var(--accent-light)" }}>Docs (Index)</span>
      </div>

      <div style={{ marginBottom: "40px" }}>
        <div
          style={{
            display: "inline-block",
            padding: "6px 14px",
            borderRadius: "20px",
            background: "var(--accent-glow)",
            border: "1px solid rgba(99, 102, 241, 0.3)",
            fontSize: "12px",
            fontWeight: 600,
            color: "var(--accent-light)",
            marginBottom: "16px",
          }}
        >
          EDGE CASE RESOLUTION
        </div>
        <h1 style={{ fontSize: "36px", fontWeight: 800, letterSpacing: "-0.02em", marginBottom: "12px" }}>
          📚 Documentation Hub
        </h1>
        <p style={{ fontSize: "16px", color: "var(--text-muted)", maxWidth: "700px", lineHeight: 1.6 }}>
          Welcome to the documentation root at <code style={{ color: "var(--accent-light)" }}>/docs</code>.
          This page resolves the missing segment edge case when using catch-all routes.
        </p>
      </div>

      {/* Edge Case Concept Explanation Card */}
      <div
        style={{
          background: "var(--surface)",
          border: "1px solid var(--border)",
          borderRadius: "16px",
          padding: "28px",
          marginBottom: "40px",
        }}
      >
        <h3 style={{ fontSize: "18px", fontWeight: 700, marginBottom: "16px", color: "var(--accent-light)" }}>
          💡 Edge Case Concept: Catch-All vs Optional Catch-All
        </h3>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: "20px" }}>
          <div style={{ background: "var(--surface-light)", padding: "20px", borderRadius: "10px" }}>
            <h4 style={{ fontSize: "15px", fontWeight: 700, marginBottom: "8px", color: "#f87171" }}>
              Standard Catch-All: <code>[...catchAll]</code>
            </h4>
            <p style={{ fontSize: "13px", color: "var(--text-muted)", lineHeight: 1.6, marginBottom: "8px" }}>
              Matches <strong>1 or more</strong> segments (e.g. <code>/docs/a</code>, <code>/docs/a/b</code>).
            </p>
            <p style={{ fontSize: "13px", color: "var(--text-muted)", lineHeight: 1.6 }}>
              ⚠️ Visiting bare <code>/docs</code> triggers a <strong>404 Not Found</strong> unless an <code>app/docs/page.tsx</code> index file is provided.
            </p>
          </div>
          <div style={{ background: "var(--surface-light)", padding: "20px", borderRadius: "10px" }}>
            <h4 style={{ fontSize: "15px", fontWeight: 700, marginBottom: "8px", color: "#34d399" }}>
              Optional Catch-All: <code>[[...catchAll]]</code>
            </h4>
            <p style={{ fontSize: "13px", color: "var(--text-muted)", lineHeight: 1.6, marginBottom: "8px" }}>
              Matches <strong>0 or more</strong> segments (including bare <code>/docs</code>).
            </p>
            <p style={{ fontSize: "13px", color: "var(--text-muted)", lineHeight: 1.6 }}>
              ✨ When visiting <code>/docs</code>, <code>params.catchAll</code> is <code>undefined</code>.
            </p>
          </div>
        </div>
      </div>

      {/* Docs Grid */}
      <h2 style={{ fontSize: "22px", fontWeight: 700, marginBottom: "20px" }}>Available Documentation Topics</h2>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
          gap: "20px",
          marginBottom: "40px",
        }}
      >
        {docSections.map((sec) => (
          <Link
            key={sec.path}
            href={sec.path}
            style={{
              display: "block",
              background: "var(--surface)",
              border: "1px solid var(--border)",
              borderRadius: "12px",
              padding: "24px",
              textDecoration: "none",
              color: "inherit",
              transition: "transform 0.2s ease, border-color 0.2s ease",
            }}
          >
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "12px" }}>
              <span style={{ fontSize: "16px", fontWeight: 700, color: "var(--foreground)" }}>{sec.title}</span>
              <span
                style={{
                  fontSize: "11px",
                  fontWeight: 600,
                  padding: "3px 8px",
                  borderRadius: "6px",
                  background: "var(--accent-glow)",
                  color: "var(--accent-light)",
                  fontFamily: "var(--font-mono)",
                }}
              >
                {sec.tag}
              </span>
            </div>
            <p style={{ fontSize: "13px", color: "var(--text-muted)", lineHeight: 1.6, marginBottom: "16px" }}>
              {sec.desc}
            </p>
            <code style={{ fontSize: "12px", fontFamily: "var(--font-mono)", color: "var(--accent-light)" }}>
              {sec.path} →
            </code>
          </Link>
        ))}
      </div>
    </div>
  );
}

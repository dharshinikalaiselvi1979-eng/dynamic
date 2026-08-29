// app/docs/[...catchAll]/page.tsx
// Task 2: Catch-All Route [...catchAll] for Documentation
// The [...catchAll] syntax captures UNLIMITED URL segments as an array.
// params.catchAll will be an array of strings from the URL path.

import Link from "next/link";

export default async function DocsPage({
  params,
}: {
  params: Promise<{ catchAll: string[] }>;
}) {
  const { catchAll } = await params;

  const path = catchAll.join(" / ");
  const depth = catchAll.length;

  // Mock documentation content based on the path
  const docsContent: Record<string, { title: string; description: string }> = {
    "getting-started": {
      title: "Getting Started",
      description: "Welcome to our documentation! This guide will help you set up your development environment and create your first project.",
    },
    "api": {
      title: "API Reference",
      description: "Complete API reference for all available endpoints, authentication methods, and response formats.",
    },
    "api/authentication": {
      title: "Authentication",
      description: "Learn how to authenticate your API requests using API keys, OAuth tokens, and session-based authentication.",
    },
    "api/webhooks": {
      title: "Webhooks",
      description: "Set up webhooks to receive real-time notifications when events occur in your application.",
    },
    "guides": {
      title: "Guides",
      description: "Step-by-step guides covering common use cases and advanced configurations.",
    },
    "guides/advanced-setup": {
      title: "Advanced Setup",
      description: "Configure your application for production deployment with advanced settings, environment variables, and optimization techniques.",
    },
    "guides/advanced/setup/config": {
      title: "Configuration",
      description: "Deep dive into configuration options for advanced setup scenarios including custom middleware and routing rules.",
    },
  };

  const key = catchAll.join("/");
  const doc = docsContent[key];

  // Sidebar links for navigation
  const sidebarLinks = [
    { path: "getting-started", label: "Getting Started", depth: 1 },
    { path: "api", label: "API Reference", depth: 1 },
    { path: "api/authentication", label: "Authentication", depth: 2 },
    { path: "api/webhooks", label: "Webhooks", depth: 2 },
    { path: "guides", label: "Guides", depth: 1 },
    { path: "guides/advanced-setup", label: "Advanced Setup", depth: 2 },
  ];

  return (
    <div style={{ display: "flex", maxWidth: "1200px", margin: "0 auto", minHeight: "calc(100vh - 130px)" }}>
      {/* Sidebar */}
      <aside
        style={{
          width: "260px",
          flexShrink: 0,
          borderRight: "1px solid var(--border)",
          padding: "32px 20px",
        }}
      >
        <h3
          style={{
            fontSize: "11px",
            fontWeight: 700,
            textTransform: "uppercase",
            letterSpacing: "0.1em",
            color: "var(--text-muted)",
            marginBottom: "16px",
          }}
        >
          Documentation
        </h3>
        <nav style={{ display: "flex", flexDirection: "column", gap: "4px" }}>
          {sidebarLinks.map((link) => (
            <Link
              key={link.path}
              href={`/docs/${link.path}`}
              style={{
                padding: "8px 12px",
                paddingLeft: link.depth === 2 ? "28px" : "12px",
                borderRadius: "6px",
                fontSize: "14px",
                color: key === link.path ? "var(--accent-light)" : "var(--text-muted)",
                background: key === link.path ? "var(--accent-glow)" : "transparent",
                textDecoration: "none",
                fontWeight: key === link.path ? 600 : 400,
                transition: "all 0.2s ease",
              }}
            >
              {link.label}
            </Link>
          ))}
        </nav>
      </aside>

      {/* Content */}
      <div style={{ flex: 1, padding: "40px 48px" }}>
        {/* Breadcrumb */}
        <div style={{ display: "flex", alignItems: "center", gap: "8px", marginBottom: "24px", fontSize: "14px", flexWrap: "wrap" }}>
          <Link href="/" style={{ color: "var(--text-muted)", textDecoration: "none" }}>Home</Link>
          <span style={{ color: "var(--text-muted)" }}>/</span>
          <span style={{ color: "var(--text-muted)" }}>Docs</span>
          {catchAll.map((segment, i) => (
            <span key={i} style={{ display: "flex", alignItems: "center", gap: "8px" }}>
              <span style={{ color: "var(--text-muted)" }}>/</span>
              <span style={{ color: i === catchAll.length - 1 ? "var(--accent-light)" : "var(--text-muted)" }}>
                {segment}
              </span>
            </span>
          ))}
        </div>

        {/* Catch-all params display */}
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
          params.catchAll = [{catchAll.map((s, i) => `"${s}"${i < catchAll.length - 1 ? ", " : ""}`)}]
        </div>

        {/* Page content */}
        <section>
          <h1
            style={{
              fontSize: "36px",
              fontWeight: 800,
              letterSpacing: "-0.02em",
              marginBottom: "16px",
            }}
          >
            📚 {doc ? doc.title : catchAll[catchAll.length - 1]?.replace(/-/g, " ").replace(/\b\w/g, (c) => c.toUpperCase())}
          </h1>

          <div
            style={{
              background: "var(--surface)",
              border: "1px solid var(--border)",
              borderRadius: "12px",
              padding: "24px",
              marginBottom: "24px",
            }}
          >
            <p style={{ fontSize: "16px", lineHeight: 1.8, color: "var(--text-muted)" }}>
              {doc
                ? doc.description
                : `This is a dynamically rendered documentation page for the path "${catchAll.join("/")}". The catch-all route handles this URL without needing a dedicated file.`}
            </p>
          </div>

          {/* Route Info Card */}
          <div
            style={{
              background: "var(--surface)",
              border: "1px solid var(--border)",
              borderRadius: "12px",
              padding: "24px",
              marginBottom: "24px",
            }}
          >
            <h3 style={{ fontSize: "16px", fontWeight: 700, marginBottom: "16px", color: "var(--accent-light)" }}>
              🔧 Catch-All Route Details
            </h3>

            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "16px", marginBottom: "16px" }}>
              <div>
                <div style={{ fontSize: "12px", color: "var(--text-muted)", marginBottom: "4px", fontWeight: 600, textTransform: "uppercase", letterSpacing: "0.05em" }}>
                  Current Path
                </div>
                <code style={{ fontSize: "14px", fontFamily: "var(--font-mono)", color: "var(--foreground)" }}>
                  {path}
                </code>
              </div>
              <div>
                <div style={{ fontSize: "12px", color: "var(--text-muted)", marginBottom: "4px", fontWeight: 600, textTransform: "uppercase", letterSpacing: "0.05em" }}>
                  Depth
                </div>
                <code style={{ fontSize: "14px", fontFamily: "var(--font-mono)", color: "var(--foreground)" }}>
                  {depth} segment{depth !== 1 ? "s" : ""}
                </code>
              </div>
            </div>

            {/* Segments list */}
            <div style={{ fontSize: "12px", color: "var(--text-muted)", marginBottom: "8px", fontWeight: 600, textTransform: "uppercase", letterSpacing: "0.05em" }}>
              Segments
            </div>
            <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: "6px" }}>
              {catchAll.map((segment, index) => (
                <li
                  key={index}
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "12px",
                    padding: "8px 12px",
                    background: "var(--surface-light)",
                    borderRadius: "6px",
                  }}
                >
                  <span
                    style={{
                      fontSize: "11px",
                      fontWeight: 700,
                      padding: "2px 8px",
                      borderRadius: "4px",
                      background: "var(--accent-glow)",
                      color: "var(--accent-light)",
                      fontFamily: "var(--font-mono)",
                    }}
                  >
                    [{index}]
                  </span>
                  <code style={{ fontSize: "14px", fontFamily: "var(--font-mono)", color: "var(--foreground)" }}>
                    {segment}
                  </code>
                </li>
              ))}
            </ul>
          </div>

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
              💡 How [...catchAll] works
            </h3>
            <p style={{ fontSize: "14px", color: "var(--text-muted)", lineHeight: 1.6 }}>
              This page lives at <code style={{ background: "var(--surface-light)", padding: "2px 6px", borderRadius: "4px" }}>app/docs/[...catchAll]/page.tsx</code>. The three dots <code style={{ background: "var(--surface-light)", padding: "2px 6px", borderRadius: "4px" }}>...</code> tell Next.js to capture <strong>all</strong> remaining URL segments as an array. Unlike <code style={{ background: "var(--surface-light)", padding: "2px 6px", borderRadius: "4px" }}>[slug]</code> which captures exactly one segment, <code style={{ background: "var(--surface-light)", padding: "2px 6px", borderRadius: "4px" }}>[...catchAll]</code> handles unlimited depth.
            </p>
          </div>
        </section>
      </div>
    </div>
  );
}

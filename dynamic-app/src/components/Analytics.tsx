// components/Analytics.tsx
// Task 3: Client Component that accesses NEXT_PUBLIC_ environment variables
// These variables are embedded into the client-side JavaScript bundle.

"use client";

export default function Analytics() {
  const gaId = process.env.NEXT_PUBLIC_ANALYTICS_ID;
  const appName = process.env.NEXT_PUBLIC_APP_NAME;
  const apiUrl = process.env.NEXT_PUBLIC_API_URL;

  return (
    <div
      style={{
        padding: "12px 20px",
        background: "var(--surface)",
        border: "1px solid var(--border)",
        borderRadius: "8px",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        flexWrap: "wrap",
        gap: "12px",
        fontSize: "13px",
        color: "var(--text-muted)",
        margin: "16px auto",
        maxWidth: "1200px",
      }}
    >
      <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
        <span style={{ fontSize: "16px" }}>📊</span>
        <span>
          <strong>Client Env App:</strong> {appName || "Not configured"}
        </span>
      </div>
      <div style={{ display: "flex", alignItems: "center", gap: "16px" }}>
        <span>
          <strong>Analytics ID:</strong>{" "}
          <code
            style={{
              color: "var(--accent-light)",
              background: "var(--surface-light)",
              padding: "2px 6px",
              borderRadius: "4px",
            }}
          >
            {gaId || "not-set"}
          </code>
        </span>
        <span>
          <strong>Public API:</strong>{" "}
          <code
            style={{
              color: "var(--accent-light)",
              background: "var(--surface-light)",
              padding: "2px 6px",
              borderRadius: "4px",
            }}
          >
            {apiUrl || "not-set"}
          </code>
        </span>
      </div>
    </div>
  );
}

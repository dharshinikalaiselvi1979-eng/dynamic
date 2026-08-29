// app/dashboard/loading.tsx
// Task 1: Route-level loading skeleton for the dashboard page
// Automatically displayed by Next.js while the page is preparing/streaming

export default function DashboardLoading() {
  return (
    <div
      style={{
        maxWidth: "1000px",
        margin: "0 auto",
        padding: "40px 24px",
      }}
    >
      <div
        style={{
          display: "inline-block",
          padding: "6px 14px",
          borderRadius: "20px",
          background: "rgba(99, 102, 241, 0.12)",
          border: "1px solid rgba(99, 102, 241, 0.25)",
          fontSize: "12px",
          fontWeight: 600,
          color: "var(--accent-light)",
          marginBottom: "16px",
        }}
      >
        ROUTE LEVEL → loading.tsx
      </div>

      <h1
        style={{
          fontSize: "32px",
          fontWeight: 800,
          letterSpacing: "-0.02em",
          marginBottom: "2rem",
        }}
      >
        Dashboard
      </h1>

      {/* User stats skeleton */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
          gap: "1rem",
          marginBottom: "2rem",
        }}
      >
        {[1, 2, 3].map((i) => (
          <div
            key={i}
            className="skeleton-pulse"
            style={{
              height: "115px",
              backgroundColor: "var(--surface)",
              border: "1px solid var(--border)",
              borderRadius: "12px",
            }}
          />
        ))}
      </div>

      {/* Chart skeleton */}
      <div
        className="skeleton-pulse"
        style={{
          height: "300px",
          backgroundColor: "var(--surface)",
          border: "1px solid var(--border)",
          borderRadius: "12px",
          marginBottom: "2rem",
        }}
      />

      {/* Feed skeleton */}
      <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
        {[1, 2, 3].map((i) => (
          <div
            key={i}
            className="skeleton-pulse"
            style={{
              height: "60px",
              backgroundColor: "var(--surface)",
              border: "1px solid var(--border)",
              borderRadius: "10px",
            }}
          />
        ))}
      </div>

      <style>{`
        @keyframes pulse {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.4; }
        }
        .skeleton-pulse {
          animation: pulse 1.5s cubic-bezier(0.4, 0, 0.6, 1) infinite;
        }
      `}</style>
    </div>
  );
}

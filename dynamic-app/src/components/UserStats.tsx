// components/UserStats.tsx
// Task 2: Async component simulating a 2-second database query

export default async function UserStats() {
  // Simulate a 2-second database query
  await new Promise((resolve) => setTimeout(resolve, 2000));

  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
        gap: "1rem",
        marginBottom: "2rem",
      }}
    >
      <div
        style={{
          padding: "1.5rem",
          background: "var(--surface)",
          border: "1px solid var(--border)",
          borderRadius: "12px",
        }}
      >
        <h3
          style={{
            fontSize: "14px",
            color: "var(--text-muted)",
            marginBottom: "8px",
          }}
        >
          Active Users
        </h3>
        <p
          style={{
            fontSize: "2rem",
            fontWeight: 800,
            color: "var(--foreground)",
            margin: "0 0 4px 0",
          }}
        >
          1,234
        </p>
        <span style={{ fontSize: "12px", color: "var(--success)" }}>
          +12% from last week
        </span>
      </div>

      <div
        style={{
          padding: "1.5rem",
          background: "var(--surface)",
          border: "1px solid var(--border)",
          borderRadius: "12px",
        }}
      >
        <h3
          style={{
            fontSize: "14px",
            color: "var(--text-muted)",
            marginBottom: "8px",
          }}
        >
          Total Revenue
        </h3>
        <p
          style={{
            fontSize: "2rem",
            fontWeight: 800,
            color: "var(--foreground)",
            margin: "0 0 4px 0",
          }}
        >
          $56.2K
        </p>
        <span style={{ fontSize: "12px", color: "var(--success)" }}>
          +8.4% this month
        </span>
      </div>

      <div
        style={{
          padding: "1.5rem",
          background: "var(--surface)",
          border: "1px solid var(--border)",
          borderRadius: "12px",
        }}
      >
        <h3
          style={{
            fontSize: "14px",
            color: "var(--text-muted)",
            marginBottom: "8px",
          }}
        >
          Conversion Rate
        </h3>
        <p
          style={{
            fontSize: "2rem",
            fontWeight: 800,
            color: "var(--foreground)",
            margin: "0 0 4px 0",
          }}
        >
          3.2%
        </p>
        <span style={{ fontSize: "12px", color: "var(--warning)" }}>
          +0.5% vs average
        </span>
      </div>
    </div>
  );
}

// components/AnalyticsChart.tsx
// Task 2: Async component simulating a 3-second database query (slowest component)

export default async function AnalyticsChart() {
  // Simulate a 3-second database query
  await new Promise((resolve) => setTimeout(resolve, 3000));

  return (
    <div
      style={{
        height: "300px",
        background: "var(--surface)",
        border: "1px solid var(--border)",
        borderRadius: "12px",
        padding: "24px",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        marginBottom: "2rem",
      }}
    >
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <h3 style={{ fontSize: "18px", fontWeight: 700, margin: 0 }}>
          📊 Analytics & Traffic Overview
        </h3>
        <span
          style={{
            fontSize: "12px",
            padding: "4px 10px",
            background: "rgba(99, 102, 241, 0.15)",
            color: "var(--accent-light)",
            borderRadius: "6px",
            fontWeight: 600,
          }}
        >
          Loaded in 3.0s
        </span>
      </div>

      <div
        style={{
          display: "flex",
          alignItems: "flex-end",
          justifyContent: "space-around",
          height: "180px",
          paddingTop: "20px",
          gap: "12px",
        }}
      >
        {[
          { day: "Mon", val: 40 },
          { day: "Tue", val: 65 },
          { day: "Wed", val: 85 },
          { day: "Thu", val: 55 },
          { day: "Fri", val: 95 },
          { day: "Sat", val: 75 },
          { day: "Sun", val: 60 },
        ].map((item) => (
          <div
            key={item.day}
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              gap: "8px",
              flex: 1,
            }}
          >
            <div
              style={{
                width: "100%",
                maxWidth: "40px",
                height: `${item.val * 1.5}px`,
                background: "linear-gradient(180deg, #818cf8, #6366f1)",
                borderRadius: "6px 6px 0 0",
              }}
            />
            <span style={{ fontSize: "12px", color: "var(--text-muted)" }}>
              {item.day}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}

// components/LiveFeed.tsx
// Task 2: Async component simulating a 1-second database query (fastest component)

export default async function LiveFeed() {
  // Simulate a 1-second database query (fastest)
  await new Promise((resolve) => setTimeout(resolve, 1000));

  const events = [
    {
      id: 1,
      title: "New user signup: alex@example.com",
      time: "2 min ago",
      icon: "👤",
    },
    {
      id: 2,
      title: "Order #4829 completed ($129.00)",
      time: "5 min ago",
      icon: "💳",
    },
    {
      id: 3,
      title: "Deployment v2.15 successful to production",
      time: "12 min ago",
      icon: "🚀",
    },
  ];

  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <h2 style={{ fontSize: "20px", fontWeight: 700, margin: 0 }}>
          ⚡ Live Feed
        </h2>
        <span
          style={{
            fontSize: "12px",
            padding: "4px 10px",
            background: "rgba(52, 211, 153, 0.15)",
            color: "var(--success)",
            borderRadius: "6px",
            fontWeight: 600,
          }}
        >
          Loaded in 1.0s (Fastest)
        </span>
      </div>

      {events.map((event) => (
        <div
          key={event.id}
          style={{
            padding: "16px 20px",
            background: "var(--surface)",
            border: "1px solid var(--border)",
            borderRadius: "10px",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
            <span style={{ fontSize: "20px" }}>{event.icon}</span>
            <p style={{ margin: 0, fontSize: "14px", fontWeight: 500 }}>
              {event.title}
            </p>
          </div>
          <span style={{ fontSize: "12px", color: "var(--text-muted)" }}>
            {event.time}
          </span>
        </div>
      ))}
    </div>
  );
}

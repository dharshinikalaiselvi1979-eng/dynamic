// app/dashboard/page.tsx
// Task 3: Wrap async components in Suspense boundaries
// This enables streaming and parallel fetching where fast components appear first

import { Suspense } from "react";
import UserStats from "@/components/UserStats";
import AnalyticsChart from "@/components/AnalyticsChart";
import LiveFeed from "@/components/LiveFeed";

export default function DashboardPage() {
  return (
    <div
      style={{
        maxWidth: "1000px",
        margin: "0 auto",
        padding: "40px 24px",
      }}
    >
      <div style={{ marginBottom: "2rem" }}>
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
          STREAMING & SUSPENSE BOUNDARIES
        </div>
        <h1
          style={{
            fontSize: "32px",
            fontWeight: 800,
            letterSpacing: "-0.02em",
            marginBottom: "8px",
          }}
        >
          Dashboard
        </h1>
        <p
          style={{
            fontSize: "15px",
            color: "var(--text-muted)",
            lineHeight: 1.6,
          }}
        >
          Components load in parallel and stream independently without blocking the page.
        </p>
      </div>

      {/* User Stats - 2 second delay */}
      <Suspense
        fallback={
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
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  color: "var(--text-muted)",
                  fontSize: "13px",
                }}
              >
                Loading user stats...
              </div>
            ))}
          </div>
        }
      >
        <UserStats />
      </Suspense>

      {/* Analytics Chart - 3 second delay (slowest) */}
      <Suspense
        fallback={
          <div
            className="skeleton-pulse"
            style={{
              height: "300px",
              backgroundColor: "var(--surface)",
              border: "1px solid var(--border)",
              borderRadius: "12px",
              marginBottom: "2rem",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              color: "var(--text-muted)",
              fontSize: "14px",
            }}
          >
            📊 Loading chart analytics (3s query)...
          </div>
        }
      >
        <AnalyticsChart />
      </Suspense>

      {/* Live Feed - 1 second delay (fastest) */}
      <Suspense
        fallback={
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "1rem",
            }}
          >
            {[1, 2, 3].map((i) => (
              <div
                key={i}
                className="skeleton-pulse"
                style={{
                  height: "60px",
                  backgroundColor: "var(--surface)",
                  border: "1px solid var(--border)",
                  borderRadius: "10px",
                  display: "flex",
                  alignItems: "center",
                  padding: "0 20px",
                  color: "var(--text-muted)",
                  fontSize: "13px",
                }}
              >
                Loading live feed event {i}...
              </div>
            ))}
          </div>
        }
      >
        <LiveFeed />
      </Suspense>

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

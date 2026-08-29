// app/articles/client-comparison/page.tsx
// Task 3: Client Component comparison page using 'use client', useState, and useEffect
// Demonstrates the traditional client-side data fetching anti-pattern vs Server Components.

"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

interface Article {
  id: number;
  title: string;
  body: string;
}

export default function ArticlesClientComparisonPage() {
  const [articles, setArticles] = useState<Article[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  // Client-Side data fetching anti-pattern: causes bundle bloat, layout shift, and SEO issues
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((res) => res.json())
      .then((data) => {
        setArticles(data.slice(0, 5));
        setLoading(false);
      })
      .catch(() => {
        setArticles([
          {
            id: 1,
            title: "Client-Fetched Article Demo",
            body: "This article was fetched using useEffect after the browser loaded and parsed the JS bundle.",
          },
        ]);
        setLoading(false);
      });
  }, []);

  return (
    <main
      style={{
        padding: "60px 24px",
        maxWidth: "840px",
        margin: "0 auto",
      }}
    >
      {/* Badges */}
      <div style={{ marginBottom: "36px" }}>
        <div
          style={{
            display: "flex",
            gap: "8px",
            flexWrap: "wrap",
            marginBottom: "16px",
          }}
        >
          <span
            style={{
              padding: "6px 14px",
              borderRadius: "20px",
              background: "rgba(251, 191, 36, 0.15)",
              color: "var(--warning)",
              border: "1px solid rgba(251, 191, 36, 0.3)",
              fontSize: "12px",
              fontWeight: 600,
            }}
          >
            CLIENT COMPONENT (&apos;use client&apos;)
          </span>
          <span
            style={{
              padding: "6px 14px",
              borderRadius: "20px",
              background: "rgba(248, 113, 113, 0.15)",
              color: "var(--error)",
              border: "1px solid rgba(248, 113, 113, 0.3)",
              fontSize: "12px",
              fontWeight: 600,
            }}
          >
            ANTI-PATTERN: useEffect DATA FETCH
          </span>
        </div>

        <h1
          style={{
            fontSize: "36px",
            fontWeight: 800,
            letterSpacing: "-0.02em",
            marginBottom: "12px",
          }}
        >
          🔄 Articles (Client-Fetched Anti-Pattern)
        </h1>
        <p
          style={{
            fontSize: "16px",
            color: "var(--text-muted)",
            lineHeight: 1.6,
          }}
        >
          This component marks <code style={{ color: "var(--warning)" }}>&apos;use client&apos;</code>{" "}
          and fetches data inside a <code style={{ color: "var(--warning)" }}>useEffect</code> hook.
          Notice how the browser had to download the JavaScript bundle first before starting the fetch.
        </p>
      </div>

      {/* Comparison Nav Tabs */}
      <div
        style={{
          display: "flex",
          gap: "12px",
          marginBottom: "32px",
          padding: "6px",
          background: "var(--surface)",
          border: "1px solid var(--border)",
          borderRadius: "10px",
          width: "fit-content",
        }}
      >
        <Link
          href="/articles"
          style={{
            padding: "8px 18px",
            borderRadius: "6px",
            background: "transparent",
            color: "var(--text-muted)",
            textDecoration: "none",
            fontSize: "13px",
            fontWeight: 500,
          }}
        >
          ← Back to Server Component
        </Link>
        <Link
          href="/articles/client-comparison"
          style={{
            padding: "8px 18px",
            borderRadius: "6px",
            background: "linear-gradient(135deg, #fbbf24, #f59e0b)",
            color: "#000",
            textDecoration: "none",
            fontSize: "13px",
            fontWeight: 700,
          }}
        >
          ✓ Client Component (Current)
        </Link>
      </div>

      {/* Loading state or content */}
      {loading ? (
        <div
          style={{
            padding: "40px",
            background: "var(--surface)",
            border: "1px solid var(--border)",
            borderRadius: "14px",
            textAlign: "center",
            color: "var(--text-muted)",
          }}
        >
          <div
            style={{
              display: "inline-block",
              width: "24px",
              height: "24px",
              border: "3px solid var(--border)",
              borderTop: "3px solid var(--warning)",
              borderRadius: "50%",
              animation: "spin 1s linear infinite",
              marginBottom: "16px",
            }}
          />
          <p style={{ margin: 0, fontSize: "14px" }}>
            Client fetching data in useEffect... (Waterfall delay)
          </p>
          <style>{`
            @keyframes spin { 0% { transform: rotate(0deg); } 100% { transform: rotate(360deg); } }
          `}</style>
        </div>
      ) : (
        <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
          {articles.map((article) => (
            <article
              key={article.id}
              style={{
                padding: "24px",
                background: "var(--surface)",
                border: "1px solid var(--border)",
                borderRadius: "14px",
              }}
            >
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "10px",
                  marginBottom: "10px",
                }}
              >
                <span
                  style={{
                    fontSize: "11px",
                    fontWeight: 700,
                    padding: "3px 8px",
                    borderRadius: "4px",
                    background: "rgba(251, 191, 36, 0.15)",
                    color: "var(--warning)",
                  }}
                >
                  POST #{article.id}
                </span>
                <span
                  style={{
                    fontSize: "12px",
                    color: "var(--warning)",
                    fontWeight: 500,
                  }}
                >
                  ⚠ Client-Rendered
                </span>
              </div>
              <h2
                style={{
                  fontSize: "20px",
                  fontWeight: 700,
                  marginBottom: "8px",
                  lineHeight: 1.3,
                }}
              >
                {article.title}
              </h2>
              <p
                style={{
                  fontSize: "15px",
                  color: "var(--text-muted)",
                  lineHeight: 1.6,
                  margin: 0,
                }}
              >
                {article.body}
              </p>
            </article>
          ))}
        </div>
      )}

      {/* Detailed Side-by-Side Comparison */}
      <div
        style={{
          marginTop: "48px",
          padding: "28px",
          background: "var(--surface)",
          border: "1px solid var(--border)",
          borderRadius: "14px",
        }}
      >
        <h3
          style={{
            fontSize: "18px",
            fontWeight: 700,
            marginBottom: "20px",
            color: "var(--foreground)",
          }}
        >
          ⚖️ Side-by-Side Comparison
        </h3>

        <div style={{ overflowX: "auto" }}>
          <table
            style={{
              width: "100%",
              borderCollapse: "collapse",
              fontSize: "14px",
              textAlign: "left",
            }}
          >
            <thead>
              <tr style={{ borderBottom: "1px solid var(--border)" }}>
                <th style={{ padding: "12px 8px", color: "var(--text-muted)" }}>
                  Feature
                </th>
                <th style={{ padding: "12px 8px", color: "var(--success)" }}>
                  Server Component (Default)
                </th>
                <th style={{ padding: "12px 8px", color: "var(--warning)" }}>
                  Client Component (&apos;use client&apos;)
                </th>
              </tr>
            </thead>
            <tbody>
              <tr style={{ borderBottom: "1px solid var(--border)" }}>
                <td style={{ padding: "12px 8px", fontWeight: 600 }}>
                  Execution Environment
                </td>
                <td style={{ padding: "12px 8px", color: "var(--success)" }}>
                  Runs only on the server
                </td>
                <td style={{ padding: "12px 8px" }}>
                  Runs on server + hydrates in browser
                </td>
              </tr>
              <tr style={{ borderBottom: "1px solid var(--border)" }}>
                <td style={{ padding: "12px 8px", fontWeight: 600 }}>
                  async / await
                </td>
                <td style={{ padding: "12px 8px", color: "var(--success)" }}>
                  ✅ Native async support
                </td>
                <td style={{ padding: "12px 8px", color: "var(--error)" }}>
                  ❌ Cannot be async
                </td>
              </tr>
              <tr style={{ borderBottom: "1px solid var(--border)" }}>
                <td style={{ padding: "12px 8px", fontWeight: 600 }}>
                  Data Fetching
                </td>
                <td style={{ padding: "12px 8px", color: "var(--success)" }}>
                  Direct await / DB query
                </td>
                <td style={{ padding: "12px 8px" }}>
                  Requires useEffect / SWR / React Query
                </td>
              </tr>
              <tr style={{ borderBottom: "1px solid var(--border)" }}>
                <td style={{ padding: "12px 8px", fontWeight: 600 }}>
                  Client JS Bundle
                </td>
                <td style={{ padding: "12px 8px", color: "var(--success)" }}>
                  0 KB (Zero bundle cost)
                </td>
                <td style={{ padding: "12px 8px" }}>
                  Ships component + dependencies
                </td>
              </tr>
              <tr>
                <td style={{ padding: "12px 8px", fontWeight: 600 }}>
                  Direct Secret Access
                </td>
                <td style={{ padding: "12px 8px", color: "var(--success)" }}>
                  ✅ Safe (never reaches client)
                </td>
                <td style={{ padding: "12px 8px", color: "var(--error)" }}>
                  ❌ Unsafe (exposes to browser)
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </main>
  );
}

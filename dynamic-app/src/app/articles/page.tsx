// app/articles/page.tsx
// Task 1: Async Server Component that fetches data directly on the server
// NO 'use client' directive. This component executes exclusively on the server.

import Link from "next/link";

interface Article {
  id: number;
  title: string;
  body: string;
}

export default async function ArticlesPage() {
  // Direct server-side data fetching with await - no useEffect or useState required
  let articles: Article[] = [];
  try {
    const res = await fetch("https://jsonplaceholder.typicode.com/posts", {
      next: { revalidate: 60 },
    });
    if (res.ok) {
      const data = await res.json();
      articles = data.slice(0, 5);
    }
  } catch {
    // Fallback static data if network is unavailable
    articles = [
      {
        id: 1,
        title: "Server Components: Zero Client JavaScript",
        body: "Server Components execute on the server and stream ready HTML to the browser without shipping component code to client bundle.",
      },
      {
        id: 2,
        title: "Direct Database & Backend Access",
        body: "Query databases, secrets, and internal services directly in your component body without building API layers.",
      },
      {
        id: 3,
        title: "Improved Performance and SEO",
        body: "Search engine bots receive complete, hydrated HTML on first request with zero waterfall delays.",
      },
    ];
  }

  return (
    <main style={{ padding: "60px 24px", maxWidth: "840px", margin: "0 auto" }}>
      {/* Header & Badges */}
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
              background: "rgba(52, 211, 153, 0.15)",
              color: "var(--success)",
              border: "1px solid rgba(52, 211, 153, 0.3)",
              fontSize: "12px",
              fontWeight: 600,
            }}
          >
            SERVER COMPONENT (DEFAULT)
          </span>
          <span
            style={{
              padding: "6px 14px",
              borderRadius: "20px",
              background: "rgba(99, 102, 241, 0.15)",
              color: "var(--accent-light)",
              border: "1px solid rgba(99, 102, 241, 0.3)",
              fontSize: "12px",
              fontWeight: 600,
            }}
          >
            async / await DIRECT FETCH
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
          📰 Articles (Server-Fetched)
        </h1>
        <p
          style={{
            fontSize: "16px",
            color: "var(--text-muted)",
            lineHeight: 1.6,
          }}
        >
          This page renders entirely on the server. Data is fetched directly in the
          component body with{" "}
          <code
            style={{
              color: "var(--accent-light)",
              background: "var(--surface-light)",
              padding: "2px 6px",
              borderRadius: "4px",
            }}
          >
            await
          </code>
          . Zero client-side JavaScript is sent for this component logic.
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
            background: "linear-gradient(135deg, #6366f1, #818cf8)",
            color: "#fff",
            textDecoration: "none",
            fontSize: "13px",
            fontWeight: 600,
          }}
        >
          ✓ Server Component (Current)
        </Link>
        <Link
          href="/articles/client-comparison"
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
          ⇄ Client Component Comparison
        </Link>
      </div>

      {/* Articles List */}
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
                  background: "var(--accent-glow)",
                  color: "var(--accent-light)",
                }}
              >
                POST #{article.id}
              </span>
              <span
                style={{
                  fontSize: "12px",
                  color: "var(--success)",
                  fontWeight: 500,
                }}
              >
                ● Direct Server Stream
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

      {/* Superpowers explanation */}
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
            marginBottom: "16px",
            color: "var(--accent-light)",
          }}
        >
          ⚡ Key Superpowers of Server Components
        </h3>
        <ul
          style={{
            paddingLeft: "20px",
            color: "var(--text-muted)",
            lineHeight: 1.8,
            fontSize: "14px",
            margin: 0,
          }}
        >
          <li>
            <strong>No Client JS Bundle Bloat:</strong> Component code & heavy
            libraries stay on the server.
          </li>
          <li>
            <strong>Direct Backend Access:</strong> Query databases & access
            server environment secrets securely.
          </li>
          <li>
            <strong>No useEffect/useState Boilerplate:</strong> Simply declare{" "}
            <code style={{ color: "var(--accent-light)" }}>async</code> and{" "}
            <code style={{ color: "var(--accent-light)" }}>await</code> data.
          </li>
          <li>
            <strong>Automatic SEO:</strong> Search crawlers get instant, fully
            rendered semantic HTML.
          </li>
        </ul>
      </div>
    </main>
  );
}

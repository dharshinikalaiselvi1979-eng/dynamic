import Link from "next/link";

export default function BlogIndexPage() {
  const posts = [
    {
      slug: "my-first-post",
      title: "My First Post",
      excerpt: "This is the content of the first post on our platform.",
      date: "Aug 25, 2026",
      readTime: "3 min read",
      tag: "Getting Started",
    },
    {
      slug: "hello-world",
      title: "Hello World",
      excerpt: "A classic introduction to the world of web development.",
      date: "Aug 22, 2026",
      readTime: "2 min read",
      tag: "Introduction",
    },
    {
      slug: "nextjs-routing",
      title: "Understanding Next.js Routing",
      excerpt: "Dynamic routes make building flexible apps easy and intuitive.",
      date: "Aug 18, 2026",
      readTime: "5 min read",
      tag: "Next.js",
    },
  ];

  return (
    <div style={{ maxWidth: "800px", margin: "0 auto", padding: "60px 24px" }}>
      {/* Header */}
      <div style={{ marginBottom: "48px" }}>
        <div
          style={{
            display: "inline-block",
            padding: "6px 16px",
            borderRadius: "20px",
            background: "var(--accent-glow)",
            border: "1px solid rgba(99, 102, 241, 0.3)",
            fontSize: "12px",
            fontWeight: 600,
            color: "var(--accent-light)",
            marginBottom: "16px",
            letterSpacing: "0.05em",
          }}
        >
          STATIC ROUTE → /blog
        </div>
        <h1
          style={{
            fontSize: "40px",
            fontWeight: 800,
            letterSpacing: "-0.03em",
            marginBottom: "12px",
          }}
        >
          📝 Blog
        </h1>
        <p style={{ fontSize: "16px", color: "var(--text-muted)", lineHeight: 1.6 }}>
          Click any post below to see the <code style={{ color: "var(--accent-light)", background: "var(--surface-light)", padding: "2px 8px", borderRadius: "4px" }}>[slug]</code> dynamic route in action.
        </p>
      </div>

      {/* Post List */}
      <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
        {posts.map((post) => (
          <Link
            key={post.slug}
            href={`/blog/${post.slug}`}
            className="post-card"
          >
            <div style={{ display: "flex", alignItems: "center", gap: "12px", marginBottom: "8px" }}>
              <span
                style={{
                  fontSize: "11px",
                  fontWeight: 600,
                  padding: "3px 10px",
                  borderRadius: "6px",
                  background: "var(--accent-glow)",
                  color: "var(--accent-light)",
                }}
              >
                {post.tag}
              </span>
              <span style={{ fontSize: "13px", color: "var(--text-muted)" }}>{post.date}</span>
              <span style={{ fontSize: "13px", color: "var(--text-muted)" }}>·</span>
              <span style={{ fontSize: "13px", color: "var(--text-muted)" }}>{post.readTime}</span>
            </div>
            <h2 style={{ fontSize: "20px", fontWeight: 700, marginBottom: "6px" }}>{post.title}</h2>
            <p style={{ fontSize: "14px", color: "var(--text-muted)", lineHeight: 1.5 }}>{post.excerpt}</p>
            <div style={{ marginTop: "12px" }}>
              <code
                style={{
                  fontSize: "12px",
                  fontFamily: "var(--font-mono)",
                  color: "var(--text-muted)",
                  background: "var(--surface-light)",
                  padding: "4px 10px",
                  borderRadius: "4px",
                }}
              >
                params.slug = &quot;{post.slug}&quot;
              </code>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}

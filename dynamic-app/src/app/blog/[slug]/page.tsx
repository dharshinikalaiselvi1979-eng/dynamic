// app/blog/[slug]/page.tsx
// Task 1: Single Dynamic Segment [slug] for Blog Posts
// The folder name [slug] tells Next.js this route captures exactly ONE URL segment.
// params.slug will contain the value from the URL (e.g., "my-first-post").

import Link from "next/link";
import { notFound } from "next/navigation";

// Statically generate routes at build time (SSG)
export async function generateStaticParams() {
  return [
    { slug: "my-first-post" },
    { slug: "hello-world" },
    { slug: "nextjs-routing" },
  ];
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  // In a real app, you would fetch the post from a database using params.slug
  const posts: Record<string, { title: string; content: string; date: string; readTime: string; tag: string }> = {
    "my-first-post": {
      title: "My First Post",
      content:
        "This is the content of the first post. In a production app, this content would be fetched from a CMS or database using the slug parameter. The dynamic segment [slug] captures the URL part after /blog/ and passes it into this component as params.slug.",
      date: "Aug 25, 2026",
      readTime: "3 min read",
      tag: "Getting Started",
    },
    "hello-world": {
      title: "Hello World",
      content:
        "A classic introduction to the world of web development. This page demonstrates that the same page.tsx template renders different content based on the URL. Whether you visit /blog/hello-world or /blog/my-first-post, this single file handles both.",
      date: "Aug 22, 2026",
      readTime: "2 min read",
      tag: "Introduction",
    },
    "nextjs-routing": {
      title: "Understanding Next.js Routing",
      content:
        "Dynamic routes make building flexible apps easy. With a single [slug] folder, you can serve unlimited blog post URLs without creating a file for each one. The slug value is extracted from the URL and passed to your component via the params prop.",
      date: "Aug 18, 2026",
      readTime: "5 min read",
      tag: "Next.js",
    },
  };

  const post = posts[slug];

  // Handle post not found
  if (!post) {
    return (
      <div style={{ maxWidth: "700px", margin: "0 auto", padding: "80px 24px", textAlign: "center" }}>
        <div style={{ fontSize: "64px", marginBottom: "24px" }}>🔍</div>
        <h1 style={{ fontSize: "32px", fontWeight: 800, marginBottom: "12px" }}>Post Not Found</h1>
        <p style={{ fontSize: "16px", color: "var(--text-muted)", marginBottom: "8px" }}>
          No blog post matches the slug:
        </p>
        <code
          style={{
            display: "inline-block",
            fontSize: "16px",
            fontFamily: "var(--font-mono)",
            padding: "8px 20px",
            borderRadius: "8px",
            background: "rgba(248, 113, 113, 0.1)",
            color: "#f87171",
            border: "1px solid rgba(248, 113, 113, 0.2)",
            marginBottom: "32px",
          }}
        >
          &quot;{slug}&quot;
        </code>
        <div>
          <Link
            href="/blog"
            style={{
              display: "inline-block",
              padding: "12px 28px",
              borderRadius: "10px",
              background: "linear-gradient(135deg, #6366f1, #818cf8)",
              color: "#fff",
              textDecoration: "none",
              fontWeight: 600,
              fontSize: "14px",
            }}
          >
            ← Back to Blog
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div style={{ maxWidth: "700px", margin: "0 auto", padding: "60px 24px" }}>
      {/* Breadcrumb */}
      <div style={{ display: "flex", alignItems: "center", gap: "8px", marginBottom: "32px", fontSize: "14px" }}>
        <Link href="/" style={{ color: "var(--text-muted)", textDecoration: "none" }}>Home</Link>
        <span style={{ color: "var(--text-muted)" }}>/</span>
        <Link href="/blog" style={{ color: "var(--text-muted)", textDecoration: "none" }}>Blog</Link>
        <span style={{ color: "var(--text-muted)" }}>/</span>
        <span style={{ color: "var(--accent-light)" }}>{slug}</span>
      </div>

      {/* Param Badge */}
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
          marginBottom: "24px",
        }}
      >
        params.slug = &quot;{slug}&quot;
      </div>

      {/* Article */}
      <article>
        <div style={{ display: "flex", alignItems: "center", gap: "12px", marginBottom: "16px" }}>
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

        <h1
          style={{
            fontSize: "36px",
            fontWeight: 800,
            letterSpacing: "-0.02em",
            lineHeight: 1.2,
            marginBottom: "24px",
          }}
        >
          {post.title}
        </h1>

        <div
          style={{
            background: "var(--surface)",
            border: "1px solid var(--border)",
            borderRadius: "12px",
            padding: "24px",
            marginBottom: "32px",
          }}
        >
          <p style={{ fontSize: "16px", lineHeight: 1.8, color: "var(--text-muted)" }}>{post.content}</p>
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
            🔧 How this route works
          </h3>
          <p style={{ fontSize: "14px", color: "var(--text-muted)", lineHeight: 1.6, marginBottom: "12px" }}>
            This page lives at <code style={{ background: "var(--surface-light)", padding: "2px 6px", borderRadius: "4px" }}>app/blog/[slug]/page.tsx</code>. The folder name <code style={{ background: "var(--surface-light)", padding: "2px 6px", borderRadius: "4px" }}>[slug]</code> captures exactly one URL segment.
          </p>
          <p style={{ fontSize: "14px", color: "var(--text-muted)", lineHeight: 1.6 }}>
            URL: <code style={{ background: "var(--surface-light)", padding: "2px 6px", borderRadius: "4px" }}>/blog/{slug}</code> → params: <code style={{ background: "var(--surface-light)", padding: "2px 6px", borderRadius: "4px" }}>{"{"} slug: &quot;{slug}&quot; {"}"}</code>
          </p>
        </div>
      </article>

      {/* Back link */}
      <div style={{ marginTop: "40px" }}>
        <Link
          href="/blog"
          style={{
            display: "inline-block",
            padding: "10px 24px",
            borderRadius: "8px",
            border: "1px solid var(--border)",
            color: "var(--foreground)",
            textDecoration: "none",
            fontSize: "14px",
            fontWeight: 500,
            transition: "all 0.2s ease",
          }}
        >
          ← All Posts
        </Link>
      </div>
    </div>
  );
}

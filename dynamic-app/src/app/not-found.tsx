import Link from "next/link";

export default function NotFound() {
  return (
    <div style={{ maxWidth: "600px", margin: "100px auto", padding: "0 24px", textAlign: "center" }}>
      <div style={{ fontSize: "72px", marginBottom: "20px" }}>🧭</div>
      <h1 style={{ fontSize: "36px", fontWeight: 800, letterSpacing: "-0.02em", marginBottom: "12px" }}>
        404 - Page Not Found
      </h1>
      <p style={{ fontSize: "16px", color: "var(--text-muted)", lineHeight: 1.6, marginBottom: "32px" }}>
        The route or dynamic segment you requested does not exist or has exceeded available routes.
      </p>
      <Link
        href="/"
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
        ← Return Home
      </Link>
    </div>
  );
}

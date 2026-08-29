import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Link from "next/link";
import "./globals.css";
import Analytics from "@/components/Analytics";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Dynamic Routes Demo | Next.js",
  description:
    "Demonstrating dynamic segments [slug], catch-all routes [...catchAll], and mixed static/dynamic routing in Next.js App Router.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} antialiased`}
    >
      <body
        style={{
          minHeight: "100vh",
          display: "flex",
          flexDirection: "column",
          background: "var(--background)",
          color: "var(--foreground)",
        }}
      >
        {/* Navigation */}
        <nav className="site-nav">
          <div className="nav-inner">
            <Link href="/" className="nav-logo">
              ⚡ DynamicRoutes
            </Link>
            <div style={{ display: "flex", gap: "8px" }}>
              {[
                { href: "/blog", label: "Blog" },
                { href: "/docs/getting-started", label: "Docs" },
                { href: "/products", label: "Products" },
                { href: "/api/test", label: "Env API" },
              ].map((link) => (
                <Link key={link.href} href={link.href} className="nav-link">
                  {link.label}
                </Link>
              ))}
            </div>
          </div>
        </nav>

        {/* Client Environment Variables Demo Bar */}
        <div style={{ padding: "0 24px" }}>
          <Analytics />
        </div>

        {/* Main content */}
        <main style={{ flex: 1 }}>{children}</main>

        {/* Footer */}
        <footer
          style={{
            borderTop: "1px solid var(--border)",
            padding: "24px",
            textAlign: "center",
            fontSize: "13px",
            color: "var(--text-muted)",
          }}
        >
          Dynamic Segments & Environment Variables — Next.js App Router Demo
        </footer>
      </body>
    </html>
  );
}

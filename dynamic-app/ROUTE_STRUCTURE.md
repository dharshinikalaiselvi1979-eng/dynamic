# Route Structure Documentation

## Task 4: Route Architecture Explanation

This document explains the dynamic routing architecture built for this Next.js application.

---

## Overview

| Route Pattern | Type | File Location | Params Received |
|---|---|---|---|
| `/` | Static | `app/page.tsx` | None |
| `/blog` | Static | `app/blog/page.tsx` | None |
| `/blog/[slug]` | Dynamic (`[slug]`) | `app/blog/[slug]/page.tsx` | `{ slug: string }` |
| `/docs/*` | Catch-All (`[...catchAll]`) | `app/docs/[...catchAll]/page.tsx` | `{ catchAll: string[] }` |
| `/products` | Static | `app/products/page.tsx` | None |
| `/products/[id]` | Dynamic (`[id]`) | `app/products/[id]/page.tsx` | `{ id: string }` |
| `/products/[id]/reviews` | Nested Static + Dynamic | `app/products/[id]/reviews/page.tsx` | `{ id: string }` |

---

## Folder Structure

```
app/
├── page.tsx                          → /  (Home - Static)
├── layout.tsx                        → Root layout with navigation
│
├── blog/
│   ├── page.tsx                      → /blog  (Blog Index - Static)
│   └── [slug]/
│       └── page.tsx                  → /blog/:slug  (Single Dynamic Segment)
│
├── docs/
│   └── [...catchAll]/
│       └── page.tsx                  → /docs/*  (Catch-All Route)
│
└── products/
    ├── page.tsx                      → /products  (Products Index - Static)
    └── [id]/
        ├── page.tsx                  → /products/:id  (Single Dynamic Segment)
        └── reviews/
            └── page.tsx              → /products/:id/reviews  (Nested Static)
```

---

## Route Details

### 1. Blog Posts — `[slug]` (Single Dynamic Segment)

**Why [slug]?** Blog post URLs have exactly ONE variable part — the post slug. We don't need to handle /blog/a/b/c, only /blog/some-post-name. A single dynamic segment `[slug]` is the perfect fit.

**Params received:** `{ slug: string }`

**Example URLs and params:**
- `/blog/my-first-post` → `params.slug = "my-first-post"`
- `/blog/hello-world` → `params.slug = "hello-world"`
- `/blog/nextjs-routing` → `params.slug = "nextjs-routing"`

---

### 2. Documentation — `[...catchAll]` (Catch-All Route)

**Why [...catchAll]?** Documentation can go many levels deep — /docs/api, /docs/api/authentication, /docs/guides/advanced/setup/config. A single `[slug]` can only capture one segment. We need `[...catchAll]` to capture unlimited depth.

**Params received:** `{ catchAll: string[] }`

**Example URLs and params:**
- `/docs/getting-started` → `params.catchAll = ["getting-started"]`
- `/docs/api/authentication` → `params.catchAll = ["api", "authentication"]`
- `/docs/guides/advanced/setup/config` → `params.catchAll = ["guides", "advanced", "setup", "config"]`

---

### 3. Products — Mixed Static + Dynamic Routes

**Why this pattern?** Products need a static index page (/products) plus dynamic individual pages (/products/shoe-001). Inside each product, there's a static reviews page. This demonstrates that static and dynamic segments can coexist at every level.

**Params received:**
- `/products` → No params (static)
- `/products/[id]` → `{ id: string }`
- `/products/[id]/reviews` → `{ id: string }` (static route inherits parent's dynamic param)

**Example URLs and params:**
- `/products` → No params
- `/products/shoe-001` → `params.id = "shoe-001"`
- `/products/shirt-001` → `params.id = "shirt-001"`
- `/products/hat-001` → `params.id = "hat-001"`
- `/products/shoe-001/reviews` → `params.id = "shoe-001"`

---

## Key Concepts

1. **`[slug]`** captures exactly **one** URL segment as a **string**
2. **`[...catchAll]`** captures **unlimited** URL segments as a **string array**
3. **`[[...catchAll]]`** (double brackets) makes the catch-all **optional** — also matches the bare path
4. The **folder name** inside brackets becomes the **param key** (e.g., `[id]` → `params.id`)
5. **Static and dynamic routes coexist** — `/products` (static) and `/products/[id]` (dynamic) work side by side
6. **Nested static routes** inside dynamic segments inherit the parent's dynamic params

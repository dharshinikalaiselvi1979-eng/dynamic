# Next.js Dynamic Routing Architecture & Technical Guide

## Comprehensive Guide: Dynamic Segments, Catch-All Routes, Static Generation & Route Priority

---

## 1. Overview Matrix

| Route Pattern | Routing Type | File Path | Extracted `params` | Matched URL Examples |
|---|---|---|---|---|
| `/` | Static Route | `app/page.tsx` | `{}` (None) | `/` |
| `/blog` | Static Route | `app/blog/page.tsx` | `{}` (None) | `/blog` |
| `/blog/[slug]` | Dynamic Route (`[slug]`) | `app/blog/[slug]/page.tsx` | `{ slug: string }` | `/blog/my-first-post`, `/blog/hello-world` |
| `/docs` | Static Index | `app/docs/page.tsx` | `{}` (None) | `/docs` |
| `/docs/*` | Catch-All (`[...catchAll]`) | `app/docs/[...catchAll]/page.tsx` | `{ catchAll: string[] }` | `/docs/api`, `/docs/api/authentication`, `/docs/guides/setup/config` |
| `/products` | Static Route | `app/products/page.tsx` | `{}` (None) | `/products` |
| `/products/[id]` | Dynamic Route (`[id]`) | `app/products/[id]/page.tsx` | `{ id: string }` | `/products/shoe-001`, `/products/shirt-001` |
| `/products/[id]/reviews` | Nested Static in Dynamic | `app/products/[id]/reviews/page.tsx` | `{ id: string }` | `/products/shoe-001/reviews` |

---

## 2. Dynamic Routing Syntax Explained

### A. Single Dynamic Segment: `[slug]` / `[id]`
- **Syntax:** Folder enclosed in single brackets: `[paramName]`
- **Behavior:** Matches **exactly one** dynamic segment in the URL path.
- **Parameters Received:** Object containing a single string: `{ slug: "my-first-post" }`.
- **Use Cases:** Blog posts (`/blog/[slug]`), user profiles (`/users/[username]`), product details (`/products/[id]`).
- **Limitation:** Will not match nested paths (e.g., `/blog/post/comments` will fail or look for a nested folder).

### B. Catch-All Route: `[...catchAll]`
- **Syntax:** Folder with rest operator `...` inside single brackets: `[...catchAll]`
- **Behavior:** Matches **one or more** segments at unlimited depth.
- **Parameters Received:** Object containing an array of strings: `{ catchAll: ["api", "authentication"] }`.
- **Use Cases:** Deep documentation (`/docs/api/v1/auth`), file system explorers, nested category trees.
- **Crucial Rule:** Does NOT match the base folder without segments (`/docs` returns 404 unless `app/docs/page.tsx` is defined).

### C. Optional Catch-All Route: `[[...catchAll]]`
- **Syntax:** Double brackets: `[[...catchAll]]`
- **Behavior:** Matches **zero or more** segments, including the root path without any segments.
- **Parameters Received:**
  - When visiting `/docs`: `{ catchAll: undefined }`
  - When visiting `/docs/api`: `{ catchAll: ["api"] }`
- **Use Cases:** Self-contained documentation portals where the index page and nested pages share a single layout/template.

---

## 3. Handling Edge Cases Gracefully

### 1. Missing Segments
- **Problem:** When using `[...catchAll]`, requesting the root `/docs` has 0 segments, resulting in an unhandled 404.
- **Solution:** 
  - Provide an `app/docs/page.tsx` static index page to cleanly handle `/docs`, OR
  - Use `[[...catchAll]]` (Optional Catch-All) where `params.catchAll` is checked for `undefined` or empty array.

### 2. Unknown or Non-Existent Slugs / IDs
- **Problem:** A user visits `/blog/non-existent-article` or `/products/invalid-id-999`.
- **Solution:**
  - Check against your data source or database.
  - Call `notFound()` from `next/navigation` to trigger the Next.js `not-found.tsx` component and return an official HTTP 404 status code:
  ```tsx
  import { notFound } from "next/navigation";

  if (!post) {
    notFound();
  }
  ```

### 3. Extra or Out-of-Bounds Segments in Dynamic Routes
- **Problem:** Requesting `/blog/my-first-post/extra-segment` on a `[slug]` route.
- **Solution:** Next.js App Router strictly enforces segment count. Single `[slug]` will automatically reject extra subpaths unless handled by a catch-all route or subfolder.

---

## 4. `generateStaticParams` & Pre-Rendering (SSG)

### What is `generateStaticParams`?
In Next.js App Router, `generateStaticParams` works alongside dynamic route segments to statically generate (pre-render) routes at build time instead of on-demand at request time (Static Site Generation).

### Implementation for Single Dynamic Segment (`[slug]`):
```tsx
// app/blog/[slug]/page.tsx
export async function generateStaticParams() {
  const posts = await getBlogPosts();
  return posts.map((post) => ({
    slug: post.slug,
  }));
}
```

### Implementation for Catch-All (`[...catchAll]`):
For catch-all routes, each item in the returned array must provide an array of strings representing each URL segment:
```tsx
// app/docs/[...catchAll]/page.tsx
export async function generateStaticParams() {
  return [
    { catchAll: ["getting-started"] },
    { catchAll: ["api"] },
    { catchAll: ["api", "authentication"] },
    { catchAll: ["guides", "advanced-setup"] },
  ];
}
```

### `dynamicParams` Configuration:
You can control how Next.js handles dynamic segments that were *not* pre-rendered at build time:
```tsx
export const dynamicParams = true; // (Default) Paths not in generateStaticParams are generated on-demand
export const dynamicParams = false; // Unknown paths immediately return 404
```

---

## 5. Next.js Route Priority & Specificity Hierarchy

When multiple routes could potentially match a given URL, Next.js evaluates and resolves them in a deterministic order from most specific to least specific:

```
┌─────────────────────────────────────────────────────────────────┐
│ 1. Predefined / Static Routes      (e.g., /products/featured)    │ (Highest Priority)
├─────────────────────────────────────────────────────────────────┤
│ 2. Dynamic Segment Routes         (e.g., /products/[id])        │
├─────────────────────────────────────────────────────────────────┤
│ 3. Catch-All Routes               (e.g., /docs/[...catchAll])   │
├─────────────────────────────────────────────────────────────────┤
│ 4. Optional Catch-All Routes      (e.g., /docs/[[...catchAll]]) │ (Lowest Priority)
└─────────────────────────────────────────────────────────────────┘
```

### Resolution Example:
If your application has the following route files:
1. `app/products/featured/page.tsx` (Static)
2. `app/products/[id]/page.tsx` (Dynamic)
3. `app/products/[...all]/page.tsx` (Catch-All)

- Visiting `/products/featured` matches **Static Route (1)** (`app/products/featured/page.tsx`).
- Visiting `/products/shoe-001` matches **Dynamic Route (2)** (`app/products/[id]/page.tsx`).
- Visiting `/products/shoe-001/details/specs` matches **Catch-All Route (3)** (`app/products/[...all]/page.tsx`).

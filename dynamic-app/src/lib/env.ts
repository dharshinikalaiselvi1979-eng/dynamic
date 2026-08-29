// lib/env.ts
// Task 4: Environment variable validation module
// Validates required environment variables at startup/build time and throws if missing.

export function requireEnv(name: string): string {
  const value = process.env[name];
  if (value === undefined || value === "") {
    throw new Error(
      `Missing required environment variable: ${name}. ` +
        `Check .env.local or your environment configuration.`
    );
  }
  return value;
}

// Export validated env object for structured, type-safe access
export const env = {
  // Server-only secrets (strictly accessible on server runtime)
  database: {
    url: requireEnv("DATABASE_URL"),
  },
  api: {
    secretKey: requireEnv("API_SECRET_KEY"),
  },
  jwt: {
    secret: requireEnv("JWT_SECRET"),
  },
  stripe: {
    secretKey: requireEnv("STRIPE_SECRET_KEY"),
  },

  // Public variables (safe for client, with sensible fallbacks)
  public: {
    apiUrl: process.env.NEXT_PUBLIC_API_URL || "http://localhost:3000/api",
    appName: process.env.NEXT_PUBLIC_APP_NAME || "DynamicRoutes App",
    stripePublishableKey:
      process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY || "not-set",
    analyticsId: process.env.NEXT_PUBLIC_ANALYTICS_ID || "not-set",
  },
};

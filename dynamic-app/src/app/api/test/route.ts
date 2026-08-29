// app/api/test/route.ts
// Task 4: Route Handler utilizing the validated env module

import { env } from "@/lib/env";

export async function GET() {
  // If any required secret (e.g. DATABASE_URL) is missing, env throws immediately
  const dbHost = env.database.url.includes("@")
    ? env.database.url.split("@")[1]
    : "configured";

  return Response.json({
    success: true,
    message: "Environment variables loaded and validated successfully",
    appName: env.public.appName,
    databaseHost: dbHost,
    hasApiKey: Boolean(env.api.secretKey),
    hasJwtSecret: Boolean(env.jwt.secret),
    hasStripeKey: Boolean(env.stripe.secretKey),
    timestamp: new Date().toISOString(),
  });
}

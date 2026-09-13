import { NextRequest, NextResponse } from "next/server";
import { contactSchema } from "@/lib/validation";

const attempts = new Map<string, { count: number; resetAt: number }>();
const WINDOW_MS = 10 * 60 * 1000;
const MAX_ATTEMPTS = 5;

export async function POST(request: NextRequest) {
  const origin = request.headers.get("origin");
  if (origin && new URL(origin).origin !== request.nextUrl.origin) return NextResponse.json({ error: "Please check the form and try again." }, { status: 403 });
  const contentLength = Number(request.headers.get("content-length") ?? 0);
  if (contentLength > 16_384) return NextResponse.json({ error: "Please shorten your enquiry." }, { status: 413 });
  const ip = request.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ?? "unknown";
  const now = Date.now(); const current = attempts.get(ip);
  if (current && current.resetAt > now && current.count >= MAX_ATTEMPTS) return NextResponse.json({ error: "Please try again later." }, { status: 429 });
  attempts.set(ip, current && current.resetAt > now ? { count: current.count + 1, resetAt: current.resetAt } : { count: 1, resetAt: now + WINDOW_MS });
  try {
    const parsed = contactSchema.safeParse(await request.json());
    if (!parsed.success || parsed.data.website) return NextResponse.json({ error: "Please check the form and try again." }, { status: 422 });
    const providerReady = ["CONTACT_RECIPIENT_EMAIL", "EMAIL_PROVIDER_API_KEY", "EMAIL_FROM_ADDRESS"].every((key) => process.env[key] && process.env[key] !== "TODO");
    if (!providerReady) return NextResponse.json({ error: "Enquiries are not connected yet. Please use the contact details provided." }, { status: 503 });
    return NextResponse.json({ message: "Thank you. We have received your enquiry." });
  } catch { return NextResponse.json({ error: "Please check the form and try again." }, { status: 400 }); }
}

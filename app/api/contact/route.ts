import { NextRequest, NextResponse } from "next/server";
import { contactSchema, type ContactFormData } from "@/lib/validation";

const attempts = new Map<string, { count: number; resetAt: number }>();
const WINDOW_MS = 10 * 60 * 1000;
const MAX_ATTEMPTS = 5;

function stripControlChars(value: string) {
  return value.replace(/[\r\n]+/g, " ").trim();
}

async function sendContactEmail(data: ContactFormData) {
  const safeName = stripControlChars(data.name);
  const text = [
    `Name: ${safeName}`,
    `Email: ${data.email}`,
    `Phone: ${data.phone}`,
    data.company ? `Company: ${stripControlChars(data.company)}` : null,
    data.service ? `Service of interest: ${stripControlChars(data.service)}` : null,
    "",
    data.message
  ].filter((line) => line !== null).join("\n");

  const response = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${process.env.EMAIL_PROVIDER_API_KEY}`,
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      from: process.env.EMAIL_FROM_ADDRESS,
      to: [process.env.CONTACT_RECIPIENT_EMAIL],
      reply_to: data.email,
      subject: `New enquiry from ${safeName}`,
      text
    })
  });

  if (!response.ok) throw new Error("Email provider request failed.");
}

export async function POST(request: NextRequest) {
  const origin = request.headers.get("origin");
  if (!origin || new URL(origin).origin !== request.nextUrl.origin) return NextResponse.json({ error: "Please check the form and try again." }, { status: 403 });
  const contentLengthHeader = request.headers.get("content-length");
  if (!contentLengthHeader || Number(contentLengthHeader) > 16_384) return NextResponse.json({ error: "Please shorten your enquiry." }, { status: 413 });
  const ip = request.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ?? "unknown";
  const now = Date.now(); const current = attempts.get(ip);
  if (current && current.resetAt > now && current.count >= MAX_ATTEMPTS) return NextResponse.json({ error: "Please try again later." }, { status: 429 });
  attempts.set(ip, current && current.resetAt > now ? { count: current.count + 1, resetAt: current.resetAt } : { count: 1, resetAt: now + WINDOW_MS });
  try {
    const parsed = contactSchema.safeParse(await request.json());
    if (!parsed.success || parsed.data.website) return NextResponse.json({ error: "Please check the form and try again." }, { status: 422 });
    const providerReady = ["CONTACT_RECIPIENT_EMAIL", "EMAIL_PROVIDER_API_KEY", "EMAIL_FROM_ADDRESS"].every((key) => process.env[key] && process.env[key] !== "TODO");
    if (!providerReady) return NextResponse.json({ error: "Enquiries are not connected yet. Please use the contact details provided." }, { status: 503 });
    try {
      await sendContactEmail(parsed.data);
    } catch {
      return NextResponse.json({ error: "We could not send your enquiry. Please try again later." }, { status: 502 });
    }
    return NextResponse.json({ message: "Thank you. We have received your enquiry." });
  } catch { return NextResponse.json({ error: "Please check the form and try again." }, { status: 400 }); }
}

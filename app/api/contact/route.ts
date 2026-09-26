import { NextRequest, NextResponse } from "next/server";
import { contactSchema } from "@/lib/validation";

const attempts = new Map<string, { count: number; resetAt: number }>();
const WINDOW_MS = 10 * 60 * 1000;
const MAX_ATTEMPTS = 5;

export async function POST(request: NextRequest) {
  // CSRF protection
  const origin = request.headers.get("origin");
  if (!origin || new URL(origin).origin !== request.nextUrl.origin) {
    return NextResponse.json(
      { error: "Please check the form and try again." },
      { status: 403 }
    );
  }

  // Content-length validation
  const contentLengthHeader = request.headers.get("content-length");
  if (!contentLengthHeader || Number(contentLengthHeader) > 16_384) {
    return NextResponse.json(
      { error: "Please shorten your enquiry." },
      { status: 413 }
    );
  }

  // Rate limiting
  const ip = request.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ?? "unknown";
  const now = Date.now();
  const current = attempts.get(ip);

  if (current && current.resetAt > now && current.count >= MAX_ATTEMPTS) {
    return NextResponse.json(
      { error: "Too many submissions. Please try again in a few minutes." },
      { status: 429 }
    );
  }

  attempts.set(
    ip,
    current && current.resetAt > now
      ? { count: current.count + 1, resetAt: current.resetAt }
      : { count: 1, resetAt: now + WINDOW_MS }
  );

  let body: unknown;
  try {
    body = await request.json();
  } catch (error) {
    console.error("Request parsing error:", error);
    return NextResponse.json(
      { error: "Please check the form and try again." },
      { status: 400 }
    );
  }

  // Schema enforces the honeypot field (website) must be empty, so this
  // also rejects bot submissions that fill it in.
  const parsed = contactSchema.safeParse(body);
  if (!parsed.success) {
    return NextResponse.json(
      { error: "Please check the form and try again." },
      { status: 422 }
    );
  }

  const formspreeFormId = process.env.FORMSPREE_FORM_ID;
  if (!formspreeFormId) {
    return NextResponse.json(
      { error: "Form is not configured. Please contact support." },
      { status: 503 }
    );
  }

  const { name, email, phone, company, service, message } = parsed.data;
  const formData = new FormData();
  formData.append("name", name);
  formData.append("email", email);
  formData.append("phone", phone);
  if (company) formData.append("company", company);
  if (service) formData.append("service", service);
  formData.append("message", message);
  formData.append("_replyto", email);
  formData.append("_subject", "New website enquiry");

  try {
    const response = await fetch(`https://formspree.io/f/${formspreeFormId}`, {
      method: "POST",
      headers: { Accept: "application/json" },
      body: formData
    });

    // Formspree's response body is provider-generated JSON (e.g. {"ok":true} or
    // {"errors":[...]}) with no submitter data in it, so it's safe to log in full.
    const responseBody = await response.text();

    if (!response.ok) {
      console.error("Formspree submission failed:", response.status, responseBody);
      return NextResponse.json(
        { error: "We could not send your enquiry. Please try again later." },
        { status: 502 }
      );
    }

    console.log("Formspree accepted submission:", response.status, responseBody);

    return NextResponse.json({
      message: "Thank you. We have received your enquiry and will get back to you soon."
    });
  } catch (error) {
    console.error("Formspree request error:", error);
    return NextResponse.json(
      { error: "We could not send your enquiry. Please try again later." },
      { status: 502 }
    );
  }
}

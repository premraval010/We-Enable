import "server-only";
import { Resend } from "resend";

/**
 * Thin email helper used by the form server actions. Server-only.
 *
 * - No RESEND_API_KEY set → logs the payload and reports success (dev / preview
 *   without a key still works; the submission is visible in server logs).
 * - Key set → sends via Resend and reports whether it actually went out.
 *
 * Env:
 * - RESEND_API_KEY, the Resend API key (never commit it).
 * - RESEND_FROM, verified sender, e.g. "WeEnable <noreply@weenable.org>".
 *                      Defaults to Resend's onboarding sender for first-run tests.
 * - NOTIFICATIONS_TO, optional override that routes ALL notifications to one
 *                      address (useful before weenable.org is verified in Resend,
 *                      when you can only send to your own account email).
 */
const apiKey = process.env.RESEND_API_KEY;
const resend = apiKey ? new Resend(apiKey) : null;

const FROM = process.env.RESEND_FROM ?? "WeEnable <onboarding@resend.dev>";

export type MailInput = {
  to: string;
  subject: string;
  text: string;
  replyTo?: string;
};

const escapeHtml = (s: string) =>
  s
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;");

/** Wrap the plain-text body in a simple, brand-tinted HTML email. */
function toHtml(subject: string, text: string) {
  const body = escapeHtml(text).replace(/\n/g, "<br>");
  return `<!doctype html><html><body style="margin:0;background:#f7f3ee;font-family:Arial,Helvetica,sans-serif;color:#100d08">
  <div style="max-width:560px;margin:0 auto;padding:32px 20px">
    <div style="background:#fdfaf6;border:1px solid #dfdad4;border-radius:16px;padding:28px">
      <p style="margin:0 0 4px;font-size:12px;font-weight:700;letter-spacing:1px;text-transform:uppercase;color:#b45a2b">WeEnable</p>
      <h1 style="margin:0 0 16px;font-size:18px;color:#100d08">${escapeHtml(subject)}</h1>
      <div style="font-size:15px;line-height:1.6;color:#3f3a33">${body}</div>
    </div>
    <p style="margin:16px 4px 0;font-size:12px;color:#8a8378">Sent from the weenable.org website.</p>
  </div></body></html>`;
}

export async function sendNotification(
  input: MailInput,
): Promise<{ ok: boolean }> {
  const to = process.env.NOTIFICATIONS_TO || input.to;

  if (!resend) {
    console.info("[email] RESEND_API_KEY not set, would send:", { ...input, to });
    return { ok: true };
  }

  try {
    const { error } = await resend.emails.send({
      from: FROM,
      to,
      replyTo: input.replyTo,
      subject: input.subject,
      text: input.text,
      html: toHtml(input.subject, input.text),
    });
    if (error) {
      console.error("[email] Resend returned an error:", error);
      return { ok: false };
    }
    return { ok: true };
  } catch (err) {
    console.error("[email] send threw:", err);
    return { ok: false };
  }
}

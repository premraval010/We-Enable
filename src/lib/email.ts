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
 * - RESEND_API_KEY   — the Resend API key (never commit it).
 * - RESEND_FROM      — verified sender, e.g. "WeEnable <noreply@weenable.org>".
 *                      Defaults to Resend's onboarding sender for first-run tests.
 * - NOTIFICATIONS_TO — optional override that routes ALL notifications to one
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

export async function sendNotification(
  input: MailInput,
): Promise<{ ok: boolean }> {
  const to = process.env.NOTIFICATIONS_TO || input.to;

  if (!resend) {
    console.info("[email] RESEND_API_KEY not set — would send:", { ...input, to });
    return { ok: true };
  }

  try {
    const { error } = await resend.emails.send({
      from: FROM,
      to,
      replyTo: input.replyTo,
      subject: input.subject,
      text: input.text,
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

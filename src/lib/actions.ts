"use server";

import { z } from "zod";
import type { FormState } from "./form-state";
import { sendNotification } from "./email";
import { org } from "@/content/site";

/** Flatten a ZodError into a simple field→message map. */
function fieldErrors(error: z.ZodError): Record<string, string> {
  const out: Record<string, string> = {};
  for (const issue of error.issues) {
    const key = String(issue.path[0] ?? "form");
    if (!out[key]) out[key] = issue.message;
  }
  return out;
}

/** Standard error state when email delivery fails. */
function deliveryFailed(inbox: string): FormState {
  return {
    ok: false,
    message: `Sorry, we couldn't send that just now. Please email us directly at ${inbox}.`,
  };
}

const email = z.string().trim().email("Enter a valid email address.");
const requiredText = (label: string) =>
  z.string().trim().min(1, `${label} is required.`);

// --- Newsletter -------------------------------------------------------------
const newsletterSchema = z.object({ email });

export async function subscribeNewsletter(
  _prev: FormState,
  formData: FormData,
): Promise<FormState> {
  const parsed = newsletterSchema.safeParse({
    email: formData.get("email"),
  });
  if (!parsed.success) {
    return { ok: false, message: "Please check your email.", errors: fieldErrors(parsed.error) };
  }

  // Interim: notify the team of the signup. Later this can push into a Resend
  // Audience (resend.contacts.create) or a dedicated newsletter provider.
  const { ok } = await sendNotification({
    to: org.emails.general,
    replyTo: parsed.data.email,
    subject: "New newsletter subscriber",
    text: `New newsletter signup: ${parsed.data.email}`,
  });
  if (!ok) return deliveryFailed(org.emails.general);

  return {
    ok: true,
    message: "You're on the list. One email a month, nothing else.",
  };
}

// --- Giving enquiry (online checkout arrives in a later phase) --------------
const givingSchema = z.object({
  name: requiredText("Full name"),
  email,
  program: requiredText("Program"),
  amount: z.string().trim().optional(),
  message: z.string().trim().optional(),
});

export async function submitGivingEnquiry(
  _prev: FormState,
  formData: FormData,
): Promise<FormState> {
  const parsed = givingSchema.safeParse({
    name: formData.get("name"),
    email: formData.get("email"),
    program: formData.get("program"),
    amount: formData.get("amount"),
    message: formData.get("message"),
  });
  if (!parsed.success) {
    return {
      ok: false,
      message: "Please fix the highlighted fields.",
      errors: fieldErrors(parsed.error),
    };
  }

  const { name, email: from, program, amount, message } = parsed.data;
  const { ok } = await sendNotification({
    to: org.emails.general,
    replyTo: from,
    subject: `New giving enquiry, ${program}`,
    text: [
      `Name: ${name}`,
      `Email: ${from}`,
      `Program: ${program}`,
      `Amount: ${amount || "(not specified)"}`,
      "",
      message || "(no message)",
    ].join("\n"),
  });
  if (!ok) return deliveryFailed(org.emails.general);

  return {
    ok: true,
    message:
      "Thank you. Our team will email you within two business days to set up your gift.",
  };
}

// --- Contact ----------------------------------------------------------------
const contactSchema = z.object({
  name: requiredText("Full name"),
  email,
  topic: requiredText("Topic"),
  message: z.string().trim().min(10, "Please add a little more detail (10+ characters)."),
});

export async function submitContact(
  _prev: FormState,
  formData: FormData,
): Promise<FormState> {
  const parsed = contactSchema.safeParse({
    name: formData.get("name"),
    email: formData.get("email"),
    topic: formData.get("topic"),
    message: formData.get("message"),
  });
  if (!parsed.success) {
    return {
      ok: false,
      message: "Please fix the highlighted fields.",
      errors: fieldErrors(parsed.error),
    };
  }

  const { name, email: from, topic, message } = parsed.data;
  const { ok } = await sendNotification({
    to: org.emails.general,
    replyTo: from,
    subject: `New contact (${topic})`,
    text: `Name: ${name}\nEmail: ${from}\nTopic: ${topic}\n\n${message}`,
  });
  if (!ok) return deliveryFailed(org.emails.general);

  return {
    ok: true,
    message: "Thank you. Someone on our team will reply within two business days.",
  };
}

// --- Volunteer --------------------------------------------------------------
const volunteerSchema = z.object({
  name: requiredText("Full name"),
  email,
  skills: z.string().trim().min(1, "Select at least one skill."),
  availability: requiredText("Availability"),
  location: requiredText("Location"),
});

export async function submitVolunteer(
  _prev: FormState,
  formData: FormData,
): Promise<FormState> {
  const parsed = volunteerSchema.safeParse({
    name: formData.get("name"),
    email: formData.get("email"),
    skills: formData.get("skills"),
    availability: formData.get("availability"),
    location: formData.get("location"),
  });
  if (!parsed.success) {
    return {
      ok: false,
      message: "Please fix the highlighted fields.",
      errors: fieldErrors(parsed.error),
    };
  }

  const { name, email: from, skills, availability, location } = parsed.data;
  const { ok } = await sendNotification({
    to: org.emails.general,
    replyTo: from,
    subject: "New volunteer application",
    text: [
      `Name: ${name}`,
      `Email: ${from}`,
      `Skills: ${skills}`,
      `Availability: ${availability}`,
      `Location: ${location}`,
    ].join("\n"),
  });
  if (!ok) return deliveryFailed(org.emails.general);

  return {
    ok: true,
    message: "Thanks for stepping up. We'll be in touch with a match shortly.",
  };
}

// --- Partnership inquiry ----------------------------------------------------
const partnershipSchema = z.object({
  organisation: requiredText("Organisation name"),
  email,
  orgType: requiredText("Organisation type"),
  message: z.string().trim().min(10, "Please add a little more detail (10+ characters)."),
});

export async function submitPartnership(
  _prev: FormState,
  formData: FormData,
): Promise<FormState> {
  const parsed = partnershipSchema.safeParse({
    organisation: formData.get("organisation"),
    email: formData.get("email"),
    orgType: formData.get("orgType"),
    message: formData.get("message"),
  });
  if (!parsed.success) {
    return {
      ok: false,
      message: "Please fix the highlighted fields.",
      errors: fieldErrors(parsed.error),
    };
  }

  const { organisation, email: from, orgType, message } = parsed.data;
  const { ok } = await sendNotification({
    to: org.emails.partners,
    replyTo: from,
    subject: `New partnership enquiry, ${organisation}`,
    text: `Organisation: ${organisation}\nType: ${orgType}\nEmail: ${from}\n\n${message}`,
  });
  if (!ok) return deliveryFailed(org.emails.partners);

  return {
    ok: true,
    message: "Received. Our partnerships team will reach out to scope a conversation.",
  };
}

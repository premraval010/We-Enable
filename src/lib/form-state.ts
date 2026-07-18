/**
 * Shared form-state types + initial value. Kept OUT of the "use server" actions
 * module, which may only export async functions (server actions).
 */
export type FormState = {
  ok: boolean;
  message: string;
  /** Field-level errors keyed by field name. */
  errors?: Record<string, string>;
};

export const initialFormState: FormState = { ok: false, message: "" };

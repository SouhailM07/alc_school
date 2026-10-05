"use server";

import { inquirySchema } from "@/lib/inquiry-schema";

export type InquiryState = {
  ok: boolean;
  message: string;
  errors?: Record<string, string>;
  values?: Record<string, string>;
};

const initialState: InquiryState = { ok: false, message: "" };

async function deliverInquiry(data: { name: string; phone: string; course: string; message?: string }) {
  const webhook = process.env.INQUIRY_WEBHOOK_URL;
  if (webhook) {
    try {
      const res = await fetch(webhook, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...data, source: "alc-website", at: new Date().toISOString() }),
      });
      if (!res.ok) throw new Error(`webhook ${res.status}`);
      return;
    } catch (err) {
      console.error("[inquiry] webhook delivery failed:", err);
      throw new Error("La transmission a échoué. Appelez-nous au 0550 59 02 88.");
    }
  }
  const apiKey = process.env.RESEND_API_KEY;
  const to = process.env.INQUIRY_TO_EMAIL;
  if (apiKey && to) {
    try {
      const res = await fetch("https://api.resend.com/emails", {
        method: "POST",
        headers: { Authorization: `Bearer ${apiKey}`, "Content-Type": "application/json" },
        body: JSON.stringify({
          from: "ALC Website <inscriptions@alc-dz.net>",
          to: [to],
          subject: `Nouvelle demande — ${data.course} (${data.name})`,
          text: `Nom: ${data.name}\nTéléphone: ${data.phone}\nFormation: ${data.course}\nMessage: ${data.message || "—"}`,
        }),
      });
      if (!res.ok) throw new Error(`resend ${res.status}`);
      return;
    } catch (err) {
      console.error("[inquiry] resend delivery failed:", err);
      throw new Error("La transmission a échoué. Appelez-nous au 0550 59 02 88.");
    }
  }
  console.log("[inquiry] (no provider configured)", data);
}

export async function submitInquiry(_prev: InquiryState, formData: FormData): Promise<InquiryState> {
  void initialState;
  const raw = {
    name: String(formData.get("name") ?? ""),
    phone: String(formData.get("phone") ?? ""),
    course: String(formData.get("course") ?? ""),
    message: String(formData.get("message") ?? ""),
    website: String(formData.get("website") ?? ""),
  };
  const parsed = inquirySchema.safeParse(raw);
  if (!parsed.success) {
    const errors: Record<string, string> = {};
    for (const issue of parsed.error.issues) {
      const key = String(issue.path[0] ?? "form");
      if (!errors[key]) errors[key] = issue.message;
    }
    return {
      ok: false,
      message: "Vérifiez les champs indiqués.",
      errors,
      values: { name: raw.name, phone: raw.phone, course: raw.course, message: raw.message },
    };
  }
  try {
    await deliverInquiry({ name: parsed.data.name, phone: parsed.data.phone, course: parsed.data.course, message: parsed.data.message });
    return { ok: true, message: "ok" };
  } catch (err) {
    return { ok: false, message: err instanceof Error ? err.message : "Une erreur est survenue. Appelez-nous au 0550 59 02 88." };
  }
}

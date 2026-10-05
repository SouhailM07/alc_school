"use client";

import { useActionState, useEffect, useRef, useState } from "react";
import { FaCheck, FaSpinner } from "react-icons/fa6";
import { contactSection } from "@/content/site";
import { inquirySchema } from "@/lib/inquiry-schema";
import { submitInquiry } from "@/app/actions/inquiry";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";

export function ContactForm() {
  const [state, action, pending] = useActionState(submitInquiry, { ok: false, message: "" });
  const [clientErrors, setClientErrors] = useState<Record<string, string>>({});
  const [course, setCourse] = useState(state.values?.course ?? "");
  const formRef = useRef<HTMLFormElement>(null);

  useEffect(() => {
    if (state.ok) formRef.current?.querySelector<HTMLElement>("[data-success]")?.focus();
  }, [state.ok]);

  if (state.ok) {
    return (
      <div data-success tabIndex={-1} role="status" className="rounded-[10px] border border-green-200 bg-green-50 p-8 text-center outline-none">
        <span aria-hidden className="mx-auto grid size-12 place-items-center rounded-full bg-green-600 text-white">
          <FaCheck />
        </span>
        <h3 className="mt-4 font-heading text-xl font-bold text-brand-navy">Demande envoyée</h3>
        <p className="mt-2 text-sm leading-6 text-slate-700">{contactSection.successMessage}</p>
        <p className="mt-3 text-sm text-slate-600">
          Besoin d&apos;une réponse immédiate ?{" "}
          <a href="tel:+213550590288" className="font-bold text-brand-navy underline decoration-brand-gold decoration-2 underline-offset-4">
            Appelez-nous
          </a>
        </p>
      </div>
    );
  }

  const errors = { ...clientErrors, ...state.errors };

  return (
    <form
      ref={formRef}
      action={async (fd) => {
        fd.set("course", course);
        setClientErrors({});
        const parsed = inquirySchema.safeParse({
          name: String(fd.get("name") ?? ""),
          phone: String(fd.get("phone") ?? ""),
          course,
          message: String(fd.get("message") ?? ""),
          website: "",
        });
        if (!parsed.success) {
          const e: Record<string, string> = {};
          for (const issue of parsed.error.issues) {
            const k = String(issue.path[0] ?? "form");
            if (!e[k]) e[k] = issue.message;
          }
          setClientErrors(e);
          return;
        }
        return action(fd);
      }}
      noValidate
      className="rounded-[10px] border border-border bg-white p-6 shadow-[0_2px_16px_rgba(10,37,69,0.06)] sm:p-8"
      aria-describedby={state.message && !state.ok ? "form-error" : undefined}
    >
      {/* honeypot */}
      <input type="text" name="website" tabIndex={-1} autoComplete="off" className="hidden" aria-hidden value="" readOnly />
      <div className="grid gap-5 sm:grid-cols-2">
        <div className="grid gap-1.5">
          <Label htmlFor="name">Nom complet *</Label>
          <Input id="name" name="name" autoComplete="name" placeholder="Votre nom" defaultValue={state.values?.name} aria-invalid={!!errors.name} aria-describedby={errors.name ? "name-error" : undefined} />
          {errors.name && <p id="name-error" role="alert" className="text-xs font-medium text-red-700">{errors.name}</p>}
        </div>
        <div className="grid gap-1.5">
          <Label htmlFor="phone">Téléphone *</Label>
          <Input id="phone" name="phone" inputMode="tel" autoComplete="tel" placeholder="0550 59 02 88" defaultValue={state.values?.phone} aria-invalid={!!errors.phone} aria-describedby={errors.phone ? "phone-error" : undefined} />
          {errors.phone && <p id="phone-error" role="alert" className="text-xs font-medium text-red-700">{errors.phone}</p>}
        </div>
      </div>
      <div className="mt-5 grid gap-1.5">
        <Label htmlFor="course">Formation souhaitée *</Label>
        <Select value={course} onValueChange={(v) => setCourse(v ?? "")}>
          <SelectTrigger id="course" className="w-full" aria-invalid={!!errors.course}>
            <SelectValue placeholder="Choisissez une formation" />
          </SelectTrigger>
          <SelectContent>
            {contactSection.courseOptions.map((o) => (
              <SelectItem key={o} value={o}>{o}</SelectItem>
            ))}
          </SelectContent>
        </Select>
        <input type="hidden" name="course" value={course} />
        {errors.course && <p role="alert" className="text-xs font-medium text-red-700">{errors.course}</p>}
      </div>
      <div className="mt-5 grid gap-1.5">
        <Label htmlFor="message">Message (optionnel)</Label>
        <Textarea id="message" name="message" rows={4} maxLength={1000} placeholder="Votre niveau actuel, vos objectifs, vos disponibilités…" defaultValue={state.values?.message} />
      </div>
      {state.message && !state.ok && (
        <p id="form-error" role="alert" className="mt-4 rounded-md bg-red-50 px-3 py-2 text-sm font-medium text-red-800">
          {state.message}
        </p>
      )}
      <Button type="submit" disabled={pending} size="lg" className="mt-6 h-12 w-full bg-brand-gold text-base font-bold text-brand-navy hover:bg-brand-gold-hover">
        {pending ? (
          <>
            <FaSpinner aria-hidden className="animate-spin" /> Envoi en cours…
          </>
        ) : (
          "Envoyer ma demande"
        )}
      </Button>
      <p className="mt-3 text-center text-xs text-slate-500">En envoyant, vous acceptez d&apos;être recontacté par ALC. Aucune donnée n&apos;est partagée.</p>
    </form>
  );
}

export function Logo({ compact = false }: { compact?: boolean }) {
  return (
    <span className="inline-flex items-center gap-2" aria-label="ALC — Algerian Learning Centers">
      <span
        aria-hidden
        className="grid size-8 place-items-center rounded-md bg-brand-navy font-heading text-sm font-bold text-white"
      >
        A
        <span className="-ml-3 mt-3 size-1.5 rounded-full bg-brand-gold" />
      </span>
      {!compact && (
        <span className="leading-none">
          <span className="block font-heading text-lg font-bold tracking-tight text-brand-navy">
            ALC
          </span>
          <span className="block text-[10px] font-medium tracking-wide text-brand-slate uppercase">
            Algerian Learning Centers
          </span>
        </span>
      )}
    </span>
  );
}

with open("src/components/brand/logo.tsx", "r") as f:
    content = f.read()

# Replace with Next Image
new_logo_component = """import Image from "next/image";

export function Logo({ compact = false, inverted = false }: { compact?: boolean; inverted?: boolean }) {
  return (
    <span className="inline-flex items-center" aria-label="ALC — Advanced Learning Centre">
      <Image 
        src="/images/alc-logo.png" 
        alt="ALC Advanced Learning Centre Logo" 
        width={compact ? 40 : 160} 
        height={compact ? 40 : 160} 
        className={compact ? "size-10 object-contain" : "w-28 sm:w-36 h-auto object-contain"} 
        priority
      />
    </span>
  );
}
"""

with open("src/components/brand/logo.tsx", "w") as f:
    f.write(new_logo_component)

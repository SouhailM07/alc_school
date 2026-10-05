with open("src/components/brand/logo.tsx", "r") as f:
    content = f.read()

content = content.replace(
    "export function Logo({ compact = false }: { compact?: boolean }) {",
    "export function Logo({ compact = false, inverted = false }: { compact?: boolean; inverted?: boolean }) {"
)
content = content.replace(
    'text-brand-dark">\n            ALC',
    '${inverted ? "text-white" : "text-brand-dark"}`}>\n            ALC'
)
content = content.replace(
    'className="block font-heading',
    'className={`block font-heading'
)

# And let's adjust the icon block:
# It's currently: bg-brand-dark ... text-white
# If inverted, maybe it should be bg-brand-slate-light ... text-brand-dark or bg-white text-brand-dark
content = content.replace(
    'className="grid size-8 place-items-center rounded-md bg-brand-dark font-heading text-sm font-bold text-white"',
    'className={`grid size-8 place-items-center rounded-md ${inverted ? "bg-white text-brand-dark" : "bg-brand-dark text-white"} font-heading text-sm font-bold`}'
)

with open("src/components/brand/logo.tsx", "w") as f:
    f.write(content)

with open("src/components/layout/site-footer.tsx", "r") as f:
    footer_content = f.read()

footer_content = footer_content.replace("<Logo />", "<Logo inverted />")

with open("src/components/layout/site-footer.tsx", "w") as f:
    f.write(footer_content)


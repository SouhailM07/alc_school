with open("src/components/brand/logo.tsx", "r") as f:
    content = f.read()

content = content.replace(
    'className={compact ? "size-10 object-contain" : "w-28 sm:w-36 h-auto object-contain"}',
    'className={`object-contain ${compact ? "size-10" : "w-28 sm:w-36 h-auto"} ${inverted ? "bg-white p-2 rounded-lg" : ""}`}'
)

with open("src/components/brand/logo.tsx", "w") as f:
    f.write(content)

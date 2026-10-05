with open("src/components/brand/logo.tsx", "r") as f:
    content = f.read()

# Replace the size classes
# className={`object-contain ${compact ? "size-10" : "w-28 sm:w-36 h-auto"} ${inverted ? "bg-white p-2 rounded-lg" : ""}`} 

new_class = 'className={`object-contain ${compact ? "size-10" : inverted ? "size-24 bg-white p-2 rounded-xl" : "size-12 sm:size-14"} transition-transform`}'

content = content.replace(
    'className={`object-contain ${compact ? "size-10" : "w-28 sm:w-36 h-auto"} ${inverted ? "bg-white p-2 rounded-lg" : ""}`}',
    new_class
)

with open("src/components/brand/logo.tsx", "w") as f:
    f.write(content)

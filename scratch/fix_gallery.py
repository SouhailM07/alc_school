import re

with open("src/components/sections/gallery.tsx", "r") as f:
    content = f.read()

# Fix grid class
content = content.replace('className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4"', 'className="mt-10 grid grid-flow-dense gap-4 sm:grid-cols-2 lg:grid-cols-3"')

# Fix Reveal and figure
# We need className={cn("h-full", g.wide && "sm:col-span-2")}
# Reveal key={g.src} delay={(i % 4) * 0.06} className={cn(g.wide && "sm:col-span-2 lg:col-span-2")}>
old_reveal = 'className={cn(g.wide && "sm:col-span-2 lg:col-span-2")}'
new_reveal = 'className={cn("h-full", g.wide && "sm:col-span-2 lg:col-span-2")}'
content = content.replace(old_reveal, new_reveal)

old_figure = 'className="group overflow-hidden rounded-[10px] border border-border"'
new_figure = 'className="group flex h-64 sm:h-72 lg:h-80 w-full overflow-hidden rounded-[10px] border border-border"'
content = content.replace(old_figure, new_figure)

old_img_class = 'className="aspect-[4/3] w-full object-cover transition duration-500 group-hover:scale-[1.03]"'
new_img_class = 'className="h-full w-full object-cover transition duration-500 group-hover:scale-[1.03]"'
content = content.replace(old_img_class, new_img_class)

with open("src/components/sections/gallery.tsx", "w") as f:
    f.write(content)

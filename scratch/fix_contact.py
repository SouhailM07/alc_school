with open("src/components/contact/contact-form.tsx", "r") as f:
    content = f.read()

# Add flex flex-col h-full to the form
old_class = 'className="rounded-[10px] border border-border bg-white p-6 shadow-[0_2px_16px_rgba(10,37,69,0.06)] sm:p-8"'
new_class = 'className="flex h-full flex-col rounded-[10px] border border-border bg-white p-6 shadow-[0_2px_16px_rgba(10,37,69,0.06)] sm:p-8"'
content = content.replace(old_class, new_class)

with open("src/components/contact/contact-form.tsx", "w") as f:
    f.write(content)

with open("src/components/sections/contact-section.tsx", "r") as f:
    content = f.read()

# Add h-full to Reveal in contact-section
content = content.replace('<Reveal>', '<Reveal className="h-full">')
content = content.replace('<Reveal delay={0.1}>', '<Reveal delay={0.1} className="h-full">')

with open("src/components/sections/contact-section.tsx", "w") as f:
    f.write(content)

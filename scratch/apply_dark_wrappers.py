import re

def process_heading():
    with open('src/components/sections/section-heading.tsx', 'r') as f:
        content = f.read()
    
    # Remove inline style for color in section-heading
    content = re.sub(r' style={{ color:.*?}}', '', content)
    # Ensure text-brand-green is in the class list
    if 'text-brand-green' not in content:
        content = content.replace('tracking-widest uppercase"', 'tracking-widest text-brand-green uppercase"')

    with open('src/components/sections/section-heading.tsx', 'w') as f:
        f.write(content)


def process_testimonials():
    with open('src/components/sections/testimonials.tsx', 'r') as f:
        content = f.read()

    # Change background
    content = content.replace('bg-white', 'bg-brand-dark')
    
    # Add dark={true} to SectionHeading
    content = content.replace('<SectionHeading', '<SectionHeading dark={true}')
    
    # The text outside the cards is the illustrative paragraph:
    # <p className="mt-3 inline-block rounded-md bg-amber-50 px-3 py-1 text-xs font-semibold text-amber-800">
    # That is fine.
    
    with open('src/components/sections/testimonials.tsx', 'w') as f:
        f.write(content)

def process_footer():
    with open('src/components/layout/site-footer.tsx', 'r') as f:
        content = f.read()
    
    # Background to dark
    content = content.replace('bg-white', 'bg-brand-dark')
    
    # Update text colors
    content = content.replace('text-slate-600', 'text-slate-300')
    content = content.replace('text-slate-500', 'text-slate-400')
    content = content.replace('text-brand-dark', 'text-white')
    # Except hover:border-white might be better than hover:border-brand-dark if it was border-brand-dark
    content = content.replace('border-brand-dark', 'border-white')
    
    with open('src/components/layout/site-footer.tsx', 'w') as f:
        f.write(content)

process_heading()
process_testimonials()
process_footer()

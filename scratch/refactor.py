import os
import re

def process_file(filepath):
    with open(filepath, 'r') as f:
        content = f.read()

    new_content = content
    
    # 1. Icons, underlines, borders, dots -> brand-green
    new_content = new_content.replace('text-brand-gold', 'text-brand-green')
    new_content = new_content.replace('decoration-brand-gold', 'decoration-brand-green')
    new_content = new_content.replace('border-brand-gold', 'border-brand-green')
    new_content = new_content.replace('bg-brand-gold/10', 'bg-brand-green/10')
    new_content = new_content.replace('bg-brand-gold/20', 'bg-brand-green/20')
    
    # Specific elements that should be green (dots, lines)
    new_content = new_content.replace('size-1.5 rounded-full bg-brand-gold', 'size-1.5 rounded-full bg-brand-green')
    new_content = new_content.replace('h-px w-6 bg-brand-gold', 'h-px w-6 bg-brand-green')
    new_content = new_content.replace('bg-brand-gold focus:px-4', 'bg-brand-medium focus:px-4') # Skip to next?
    
    # 2. Buttons: bg-brand-gold -> bg-brand-medium
    # Remaining bg-brand-gold should be buttons or similar CTA elements
    new_content = new_content.replace('bg-brand-gold', 'bg-brand-medium')
    new_content = new_content.replace('hover:bg-brand-gold-hover', 'hover:bg-brand-dark')
    
    # 3. Text in Buttons: For buttons that have bg-brand-medium, their text shouldn't be text-brand-navy anymore, it should be text-white
    # Let's find classes containing bg-brand-medium and text-brand-navy, and change text-brand-navy to text-white.
    def replace_btn_text(match):
        inner = match.group(1)
        inner = inner.replace('text-brand-navy', 'text-white')
        return 'className="' + inner + '"'
    
    # We look for className="..." that contains bg-brand-medium
    new_content = re.sub(r'className="([^"]*bg-brand-medium[^"]*)"', replace_btn_text, new_content)
    
    # 4. General renames
    new_content = new_content.replace('brand-navy-light', 'brand-medium')
    new_content = new_content.replace('brand-navy', 'brand-dark')
    
    # Fix inline styles with gold color: #B07C1A -> #2E8540 (brand-green)
    new_content = new_content.replace('#B07C1A', '#2E8540')
    
    if new_content != content:
        with open(filepath, 'w') as f:
            f.write(new_content)
        print(f"Updated {filepath}")

for root, dirs, files in os.walk('src'):
    for file in files:
        if file.endswith('.tsx') or file.endswith('.ts'):
            process_file(os.path.join(root, file))


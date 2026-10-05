with open("src/app/globals.css", "r") as f:
    content = f.read()

# Replace brand colors block
old_brand = """  /* Brand Colors */
  --color-brand-navy: #0A2545;
  --color-brand-navy-light: #16365D;
  --color-brand-gold: #F4B942;
  --color-brand-gold-hover: #E3A62F;
  --color-brand-slate: #64748B;
  --color-brand-slate-light: #F8FAFC;

  /* Shadcn Semantic Mapping */
  --color-primary: var(--color-brand-gold);
  --color-primary-foreground: var(--color-brand-navy);
  --color-secondary: var(--color-brand-navy-light);
  --color-secondary-foreground: #FFFFFF;
  --color-muted: var(--color-brand-slate-light);
  --color-muted-foreground: var(--color-brand-slate);
  --color-accent: var(--color-brand-slate-light);
  --color-accent-foreground: var(--color-brand-navy);
  
  --color-border: #E2E8F0;
  --color-input: #E2E8F0;
  --color-ring: var(--color-brand-gold);"""

new_brand = """  /* Brand Colors */
  --color-brand-dark: #11325B;
  --color-brand-medium: #1D70B8;
  --color-brand-green: #2E8540;
  --color-brand-text: #1E293B;
  --color-brand-slate: #64748B;
  --color-brand-slate-light: #F8FAFC;

  /* Shadcn Semantic Mapping */
  --color-primary: var(--color-brand-medium);
  --color-primary-foreground: #FFFFFF;
  --color-secondary: var(--color-brand-dark);
  --color-secondary-foreground: #FFFFFF;
  --color-muted: var(--color-brand-slate-light);
  --color-muted-foreground: var(--color-brand-slate);
  --color-accent: var(--color-brand-slate-light);
  --color-accent-foreground: var(--color-brand-dark);
  
  --color-border: #E2E8F0;
  --color-input: #E2E8F0;
  --color-ring: var(--color-brand-medium);"""

content = content.replace(old_brand, new_brand)

# Replace :root block
old_root = """:root {
  --background: #FFFFFF;
  --foreground: var(--color-brand-navy);
  --radius: 6px;
}"""

new_root = """:root {
  --background: #FFFFFF;
  --foreground: var(--color-brand-text);
  --radius: 6px;
}"""

content = content.replace(old_root, new_root)

# Replace focus-visible and selection
old_focus = """  :focus-visible {
    outline: 2px solid #F4B942;
    outline-offset: 2px;
    border-radius: 4px;
  }

  ::selection {
    background: #F4B942;
    color: #0A2545;
  }"""

new_focus = """  :focus-visible {
    outline: 2px solid var(--color-brand-medium);
    outline-offset: 2px;
    border-radius: 4px;
  }

  ::selection {
    background: var(--color-brand-green);
    color: #FFFFFF;
  }"""

content = content.replace(old_focus, new_focus)

with open("src/app/globals.css", "w") as f:
    f.write(content)

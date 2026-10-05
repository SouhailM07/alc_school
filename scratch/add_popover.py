with open("src/app/globals.css", "r") as f:
    content = f.read()

# Add popover variables to globals.css
new_colors = """  --color-accent: var(--color-brand-slate-light);
  --color-accent-foreground: var(--color-brand-dark);
  
  --color-popover: #FFFFFF;
  --color-popover-foreground: var(--color-brand-text);"""

content = content.replace("""  --color-accent: var(--color-brand-slate-light);
  --color-accent-foreground: var(--color-brand-dark);""", new_colors)

with open("src/app/globals.css", "w") as f:
    f.write(content)

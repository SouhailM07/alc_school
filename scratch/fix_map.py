import re

with open("src/components/contact/location-card.tsx", "r") as f:
    content = f.read()

# Fix h-64 to h-full for the iframe and button inside flex-1
content = content.replace('className="h-64 w-full border-0"', 'className="h-full min-h-[16rem] w-full border-0"')
content = content.replace('className="flex h-64 w-full flex-col', 'className="flex h-full min-h-[16rem] w-full flex-col')

with open("src/components/contact/location-card.tsx", "w") as f:
    f.write(content)

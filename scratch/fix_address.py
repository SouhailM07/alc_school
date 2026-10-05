with open("src/content/site.ts", "r") as f:
    content = f.read()

content = content.replace(
    'address: "Rue des Frères Bouadou, Bir Mourad Raïs, Alger"',
    'address: "602, Chéraga 16016"'
)
content = content.replace(
    'mapsQuery: "ALC Algerian Learning Centers Bir Mourad Raïs Alger"',
    'mapsQuery: "ALC SCHOOL Cheraga"'
)
content = content.replace(
    'Bir Mourad Raïs, Alger',
    'Chéraga, Alger'
)
content = content.replace(
    'Bir Mourad Raïs',
    'Chéraga'
)

with open("src/content/site.ts", "w") as f:
    f.write(content)

# Also update footer text which might have "Bir Mourad Raïs" hardcoded? Let's check footer!

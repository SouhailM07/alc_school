with open("src/content/site.ts", "r") as f:
    content = f.read()

content = content.replace('phoneMobile: "0550 59 02 88"', 'phoneMobile: "0779 32 71 27"')
content = content.replace('phoneMobileHref: "tel:+213550590288"', 'phoneMobileHref: "tel:+213779327127"')
content = content.replace('whatsappHref: "https://wa.me/213550590288"', 'whatsappHref: "https://wa.me/213779327127"')
content = content.replace('Appeler le 0550 59 02 88', 'Appeler le 0779 32 71 27')
content = content.replace('tel:+213550590288', 'tel:+213779327127')
content = content.replace('placeholder="0550 59 02 88"', 'placeholder="0779 32 71 27"')

with open("src/content/site.ts", "w") as f:
    f.write(content)

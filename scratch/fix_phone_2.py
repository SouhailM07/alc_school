def replace_in_file(filepath):
    with open(filepath, "r") as f:
        content = f.read()

    content = content.replace("0550 59 02 88", "0779 32 71 27")

    with open(filepath, "w") as f:
        f.write(content)

replace_in_file("src/app/actions/inquiry.ts")
replace_in_file("src/lib/inquiry-schema.ts")
replace_in_file("src/components/contact/contact-form.tsx")

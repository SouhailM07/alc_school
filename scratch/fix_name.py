import os

def replace_in_file(filepath):
    with open(filepath, "r") as f:
        content = f.read()

    new_content = content.replace("Algerian Learning Centers", "Advanced Learning Centre")

    if new_content != content:
        with open(filepath, "w") as f:
            f.write(new_content)

for root, dirs, files in os.walk("src"):
    for file in files:
        if file.endswith(".ts") or file.endswith(".tsx"):
            replace_in_file(os.path.join(root, file))

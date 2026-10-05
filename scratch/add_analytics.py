with open("src/app/layout.tsx", "r") as f:
    content = f.read()

# Add import
import_stmt = 'import { Analytics } from "@vercel/analytics/next";\n'
content = content.replace('import { seo, siteUrl } from "@/content/site";', 'import { seo, siteUrl } from "@/content/site";\n' + import_stmt)

# Add component
body_end = "      </body>\n    </html>"
content = content.replace(body_end, "        <Analytics />\n      </body>\n    </html>")

with open("src/app/layout.tsx", "w") as f:
    f.write(content)

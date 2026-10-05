with open("src/app/layout.tsx", "r") as f:
    content = f.read()

# Add import
import_stmt = 'import { SpeedInsights } from "@vercel/speed-insights/next";\n'
content = content.replace('import { Analytics } from "@vercel/analytics/next";', 'import { Analytics } from "@vercel/analytics/next";\n' + import_stmt)

# Add component
body_end = "        <Analytics />\n      </body>\n    </html>"
content = content.replace(body_end, "        <Analytics />\n        <SpeedInsights />\n      </body>\n    </html>")

with open("src/app/layout.tsx", "w") as f:
    f.write(content)

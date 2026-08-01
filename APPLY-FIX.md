# Apply the Mermaid fix

Copy these files into the repository root, preserving the folders:

- `assets/js/render-mermaid.js`
- `_layouts/default.html`
- `dada-bhagwan-akram-vignan.md`
- `hindu-philosophy-schools.md`
- `swaminarayan-philosophy.md`
- `mermaid-test.md`

The three content pages contain page-level Mermaid script tags. This intentionally avoids depending only on the selected Jekyll layout.

After GitHub Pages deploys, visit `/mermaid-test/`. It should show two connected boxes.

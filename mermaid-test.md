---
layout: default
title: Mermaid Test
permalink: /mermaid-test/
---

# Mermaid rendering test

When Mermaid is working, the following appears as two connected boxes—not as code.

```mermaid
flowchart LR
    A[Mermaid loaded] --> B[Diagram rendered]
```

<!-- Mermaid rendering: page-level fallback independent of the selected layout. -->
<script defer src="https://cdn.jsdelivr.net/npm/mermaid@11.16.0/dist/mermaid.min.js"></script>
<script defer src="{{ '/assets/js/render-mermaid.js' | relative_url }}"></script>

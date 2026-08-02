(function () {
  'use strict';

  if (window.__hinduSiteMermaidStarted) return;
  window.__hinduSiteMermaidStarted = true;

  const diagramStart = /^(?:\s*%%[^\n]*\n)*\s*(flowchart|graph|sequenceDiagram|classDiagram|stateDiagram(?:-v2)?|erDiagram|journey|gantt|pie|quadrantChart|requirementDiagram|gitGraph|mindmap|timeline|zenuml|sankey-beta|xychart-beta|block-beta|packet-beta|architecture-beta|kanban)\b/;

  function isMermaidBlock(code) {
    return (
      code.classList.contains('language-mermaid') ||
      code.classList.contains('lang-mermaid') ||
      Boolean(code.closest('.language-mermaid')) ||
      diagramStart.test(code.textContent.trim())
    );
  }

  function replaceCodeBlocks() {
    const codeBlocks = Array.from(document.querySelectorAll('pre code')).filter(isMermaidBlock);
    const diagrams = [];

    codeBlocks.forEach((code, index) => {
      const source = code.textContent.trim();
      const diagram = document.createElement('pre');
      diagram.className = 'mermaid';
      diagram.id = `mermaid-diagram-${index + 1}`;
      diagram.textContent = source;

      const rougeWrapper = code.closest('.highlighter-rouge');
      const pre = code.closest('pre');
      const target = rougeWrapper || pre;

      if (target) {
        target.replaceWith(diagram);
        diagrams.push(diagram);
      }
    });

    return diagrams;
  }

  async function renderMermaid() {
    const diagrams = replaceCodeBlocks();
    if (!diagrams.length) return;

    if (!window.mermaid) {
      console.error('Mermaid library did not load. Check whether cdn.jsdelivr.net is blocked.');
      return;
    }

    window.mermaid.initialize({
      startOnLoad: false,
      securityLevel: 'loose',
      theme: 'default',
      flowchart: {
        htmlLabels: true,
        useMaxWidth: true
      }
    });

    // Render one diagram at a time so one syntax error does not block the rest.
    for (const diagram of diagrams) {
      try {
        await window.mermaid.run({ nodes: [diagram] });
      } catch (error) {
        diagram.classList.add('mermaid-render-error');
        console.error(`Could not render ${diagram.id}:`, error);
      }
    }
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', renderMermaid, { once: true });
  } else {
    renderMermaid();
  }
})();

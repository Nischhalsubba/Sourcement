# Sourcement UI: regression and release acceptance

This playbook applies to the maintained static interface, styles and scripts at repository root. The repository uses a Gulp build workflow and includes **index.html**, **aboutus.html**, **kitchensink.html**, **js/**, **style.css** and **assets/**.

## Quality goals

A change is ready for release only when core navigation and content remain usable with pointer and keyboard, layout works at typical viewport sizes, and generated assets correspond to the intended source.

## Test matrix

| Area | Acceptance checks |
| --- | --- |
| Navigation | Links are accurate, current page is apparent, focus is visible, and back/forward works |
| Responsive | No essential content clipped at 375, 768, 1024 and 1440 px; spacing and hierarchy remain coherent |
| Accessibility | Semantic landmarks, reasonable heading order, meaningful image alternatives, contrast and zoom readability |
| Motion | Reduced-motion preference does not hide information or block input |
| Forms | When present, labels and validation are clear; errors do not falsely claim successful submission |
| Script interactions | All supported controls work with keyboard and pointer, including empty/error states |
| Visual assets | Images and fonts load from committed paths, with permission and attribution where needed |
| SEO/content | Public claims are accurate and titles/descriptions correspond to the actual page |

## Repeatable commands

The repository provides a root **package.json** with Gulp scripts:

~~~bash
npm install
npm run build
~~~

For preview of the root HTML pages:

~~~bash
python -m http.server 8000
~~~

The Gulp build is a tooling check, not proof of accessibility or external data accuracy. Record whether commands passed or failed; if a build relies on older packages, capture the error instead of silently disabling a gate.

## PR review evidence

For each modification provide:

1. Changed files and user journey affected.
2. Before/after explanation and any associated screenshot.
3. Commands, results and relevant runtime versions.
4. Browser, viewport, keyboard and reduced-motion checks actually performed.
5. Any asset-license, link-target, data/privacy or third-party integration considerations.
6. Known limitations, deployment prerequisites and rollback plan.

## Rollback and incident handling

If a changed script breaks navigation, a form falsely implies completion, or assets disappear from a published page, revert the smallest focused change and re-run the acceptance matrix. Keep a note of what failed and how the corrected release was verified.

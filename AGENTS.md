# Repository Instructions

## Setup

Inspect the repository's Gulp configuration and package scripts before choosing commands. For built static output, a local server can be used:

```bash
python -m http.server 8000
```

## Architecture

Sourcement is a static resource-management UI concept using modular SCSS, ES6 JavaScript, Gulp automation, and Glide.js.

## Change rules

- Edit SCSS and source JavaScript rather than generated or minified output when source exists.
- Keep application code separate from vendor bundles.
- Preserve the lightweight-performance intent, but measure current file sizes before publishing numbers.
- Keep sample tariff and resource data clearly conceptual.
- Do not add a heavy framework without a real interaction or maintenance requirement.

## Verification

1. Confirm package and Gulp commands from repository files.
2. Build source assets when applicable.
3. Serve the output locally.
4. Test navigation, resource cards, carousel, and responsive behavior.
5. Check console errors and missing assets.
6. Measure final CSS and JavaScript sizes.
7. Review keyboard access, focus, contrast, and reduced motion.
8. Verify the GitHub Pages deployment before linking it as live.

## Do not

- Do not repeat historical performance targets as current measurements.
- Do not present sample data as a production tariff system.
- Do not edit vendor files as application source.
- Do not present the repository thumbnail as a browser screenshot.
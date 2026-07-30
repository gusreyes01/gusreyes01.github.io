# gusreyes01.github.io

An accessible, dependency-light profile hosted with GitHub Pages.

## Local development

The site is static and can be opened directly, or served from the repository
root with any local HTTP server. Node.js 22 or newer is required for quality
checks.

```bash
npm ci
npm run check
```

Use `npm run format` after editing HTML, CSS, or documentation.

## Structure

- `index.html` contains the profile page.
- `404.html` provides a useful GitHub Pages fallback.
- `assets/styles.css` contains the responsive visual system.
- `tests/site.test.mjs` protects key metadata, landmarks, and link safety.

## Security and privacy

The site contains no analytics or client-side JavaScript. It applies a
restrictive content security policy on the main page. Report security concerns
using the process in [SECURITY.md](SECURITY.md).

## Contributing

Small accessibility, browser-compatibility, and documentation improvements are
welcome. Read [CONTRIBUTING.md](CONTRIBUTING.md) before opening a pull request.

# QR code component — frosted glass and animated comets

A custom interpretation of the [QR code component challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/qr-code-component-iux_sIO_H). The original compact QR-card layout is reworked with a black background, an indigo accent, a frosted glass card, and animated comet trails.

This is an intentional visual adaptation rather than a pixel-perfect reproduction of the supplied design. The QR code links to [marin-sveg on GitHub](https://github.com/marin-sveg).

## Links

- Repository: https://github.com/marin-sveg/qr-code-component
- Intended GitHub Pages URL: https://marin-sveg.github.io/qr-code-component/ (available once Pages has been enabled and deployment finishes)

## Built with

- Semantic HTML with a main landmark and a descriptive heading
- CSS Grid for centering and responsive CSS for narrow screens
- Translucent gradients, `backdrop-filter`, and diffuse shadows for the glass effect
- CSS keyframes and a small vanilla JavaScript script for comet trails
- A local SVG QR code with error correction level M and a four-module quiet zone
- `prefers-reduced-motion` to respect the visitor's motion preference

No framework, build step, paid API, or QR-generation service is required at runtime. Manrope is loaded from Google Fonts; Arial is the fallback if it is unavailable. The card's translucent fill remains visible in browsers without backdrop-filter support.

## Run locally

Open `index.html` in a browser, or serve this directory with any static HTTP server. All site assets use relative paths so the page can run under a GitHub Pages project URL.

## Project structure

```text
index.html     Page content and profile links
styles.css     Layout, glass effect, indigo palette, and animation
app.js         Creates the decorative comet elements
qr.svg         QR code linking to the GitHub profile
github.svg     GitHub icon mask
favicon.svg    Browser tab icon
.nojekyll      Serves the site as plain static files
```

## Implementation notes

The QR code has an opaque pale background and dark indigo modules to preserve contrast against the transparent card. The glass effect is limited to the surrounding card. Decorative animation is hidden from assistive technologies, and links have visible keyboard-focus states.

The implementation was developed with assistance from OpenAI Codex. The visual direction and subsequent changes were specified by the project owner.

## Feedback

Feedback is welcome on QR readability across phone cameras, keyboard navigation, and the performance of backdrop blur and comet animation on mobile devices.

## Acknowledgments

Challenge by [Frontend Mentor](https://www.frontendmentor.io/). Profile: [marin-sveg](https://github.com/marin-sveg). Supplied Figma files and reference screenshots are not included in this repository.

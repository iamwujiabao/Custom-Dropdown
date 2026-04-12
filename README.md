# Custom Dropdown

A lightweight, accessible custom dropdown menu built with vanilla HTML, CSS, and JavaScript — no dependencies required.

## Features

- Three visual states: default, open, and selected
- Animated checkmark on the active selection
- Seamless trigger-to-list border on open (no visual gap)
- Keyboard accessible: `Enter`/`Space` to toggle, `Escape` to close
- Closes on outside click
- ARIA attributes (`role`, `aria-haspopup`, `aria-expanded`) for screen reader support
- IIFE-scoped JavaScript — zero global namespace pollution

## Project Structure

```
├── index.html   # Markup and DOM structure
├── styles.css   # All styling, including font import
└── script.js    # Dropdown logic wrapped in an IIFE
```

## Getting Started

No build step or server required. Just open `index.html` directly in a browser:

```bash
open index.html
```

Or serve it locally with any static file server:

```bash
npx serve .
# or
python3 -m http.server
```

## How It Works

### States

| State | Description |
|---|---|
| Default | Shows "Select an Item" placeholder with a down chevron |
| Open | Chevron rotates upward; the option list animates in below the trigger |
| Selected | Chosen item label appears in the trigger; a filled checkmark marks the active option in the list |

### JavaScript

The script (`script.js`) runs inside an IIFE to keep all variables local. It handles three event types:

- **Click on trigger** — toggles open/closed state
- **Click on an item** — updates the label, marks the item as selected, and closes the list
- **Click outside** — closes the list if it is open

### CSS

`styles.css` drives all transitions. The open state is toggled by adding/removing the `.open` class on both `.dd-trigger` and `.dd-list`. The selected checkmark uses `opacity` and `transform: scale()` for its pop-in animation.

## Customization

| What | Where | How |
|---|---|---|
| Dropdown width | `.dd-wrapper` in `styles.css` | Change the `width` value |
| Options | `index.html` | Add or remove `.dd-item` divs; update `data-value` attributes accordingly |
| Placeholder text | `index.html` | Edit the text inside `#triggerLabel` |
| Fonts | Top of `styles.css` | Swap the `@import` URL and update `font-family` on `.dd-root` |
| Colors | `.dd-trigger`, `.dd-check`, `.dd-item` in `styles.css` | Update `background`, `border-color`, and `color` values |

## Browser Support

Works in all modern browsers (Chrome, Firefox, Safari, Edge). No polyfills needed.

## License

MIT

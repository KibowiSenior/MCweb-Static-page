# Minecraft Server Landing Page – spymc.xyz

A standalone, single‑file HTML landing page for a Minecraft server. It features a vintage CRT aesthetic with subtle glitch effects, a copy‑to‑clipboard IP button, and links to Discord and the server store. The page is fully configurable via a simple JavaScript object and includes SEO meta tags for better discoverability.
## Screenshots

![Dashboard](https://i.ibb.co/zWX7P7fr/Screenshot-2026-08-05-031719.png)

## Features

- **Minecraft‑style pixel font** – uses *Press Start 2P* for the main title and UI text.
- **Old‑TV / CRT effect** – scanlines, vignette (dark edges), and a gentle flicker for a retro feel.
- **Glitch title** – the server name has a subtle glitch animation with split‑colour displacement.
- **IP copy** – the "Join" button copies the server IP to the clipboard and shows a confirmation toast.
- **Social / Store links** – buttons for Discord and Store open in new tabs.
- **Fully responsive** – adapts to mobile, tablet, and desktop screens.
- **SEO‑ready** – includes meta tags for title, description, keywords, Open Graph, and Twitter Card.
- **Easy configuration** – all server details (IP, Discord invite, Store URL) are stored in a single config object.

## Quick Start

1. Download the `index.html` file.
2. Open it in any text editor.
3. Find the `CONFIG` object near the bottom of the file (inside the `<script>` tag).
4. Replace the placeholder values with your own:
   ```javascript
   const CONFIG = {
     ip: "your.server.ip",
     discord: "https://discord.gg/your-invite",
     store: "https://your-store-url.com"
   };
   ```
5. Save the file and open it in your browser – the page will display your server details.

## Customization

The page is designed to be easy to tweak without touching complex code.

### Change the background image

The background image is loaded from a URL in the CSS. Locate the `background-image` property in the `body` selector:

```css
background-image: 
  linear-gradient(rgba(0, 0, 0, 0.75), rgba(0, 0, 0, 0.75)),
  url('https://i.ibb.co/JWQwTrMn/wp8324581-8k-minecraft-wallpapers.png');
```

Replace the URL with your own image link. You can also adjust the opacity of the dark overlay by changing the `rgba(0, 0, 0, 0.75)` values.

### Modify the subtitle text

The descriptive text below the title is in the `<div class="subtitle">`:

```html
<div class="subtitle">
  <span>a premium survival community</span><br />
  <span>where legends are forged</span>
</div>
```

Replace the text with your own tagline.

### Adjust the CRT effect intensity

The CRT overlay is defined in the `body::before` pseudo‑element. You can tune the vignette darkness, scanline opacity, or flicker speed:

- `radial-gradient(ellipse at center, transparent 55%, rgba(0,0,0,0.6) 100%)` – controls the vignette; change the `0.6` to make it darker or lighter.
- `rgba(0, 0, 0, 0.08)` – scanline opacity; increase for more visible lines.
- `animation: flicker 0.15s infinite alternate;` – change `0.15s` to adjust flicker speed.

### Change button colours

Each button has a dedicated class (e.g., `.btn-discord`, `.btn-store`, `.btn-join`). You can modify their `background` and `border-color` properties in the CSS.

## SEO Considerations

The page includes all essential meta tags for search engines and social sharing:

- `<title>` – the page title.
- `<meta name="description">` – a concise summary.
- `<meta name="keywords">` – relevant keywords.
- `<link rel="canonical">` – preferred URL.
- Open Graph (`og:title`, `og:description`, `og:image`) for social sharing.
- Twitter Card (`twitter:card`, `twitter:image`) for Twitter previews.

Make sure to update the `og:image` URL to your own banner if you change the background.

## Technologies Used

- **HTML5** – semantic markup.
- **CSS3** – custom animations, responsive design, pseudo‑elements.
- **JavaScript (ES6)** – clipboard API, toast notifications, configuration.
- **Font Awesome** – free icons for Discord, store, and copy.
- **Google Fonts** – Press Start 2P (Minecraft‑style pixel font).

## Browser Compatibility

Works on all modern browsers that support:
- CSS `backdrop-filter` (Chrome, Firefox, Safari, Edge).
- Clipboard API (or fallback to `execCommand` for older browsers).

## License

This project is free to use and modify for any purpose. No attribution required.

## Support

For issues or customisation help, open a ticket in your Discord server or contact the server administrator.

---

**Enjoy your Minecraft server landing page!**

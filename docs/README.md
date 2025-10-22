# Ottic Landing Page - Static Site

This is a static HTML/CSS/JavaScript version of the Ottic landing page, optimized for GitHub Pages deployment.

## 📁 Structure

```
docs/
├── index.html          # Main landing page
├── privacy.html        # Privacy policy
├── terms.html          # Terms of service
├── styles.css          # All styles (converted from Tailwind)
├── script.js           # Vanilla JavaScript (no React/Next.js)
├── manifest.json       # PWA manifest
├── robots.txt          # SEO robots file
├── og-image.png        # Open Graph image
└── testimonials/       # Testimonial images
```

## 🚀 Features

All features from the Next.js version have been preserved:

- ✅ Responsive design
- ✅ Dark/light theme toggle (localStorage)
- ✅ Animated typing placeholder
- ✅ Interactive suggestions with rotation
- ✅ Scrolling announcement bar
- ✅ Testimonials carousel
- ✅ FAQ accordion
- ✅ Login modal
- ✅ Auto-resizing textarea
- ✅ SEO optimized (meta tags, structured data)
- ✅ Privacy & Terms pages

## 🛠 Technologies

- **HTML5**: Semantic markup
- **CSS3**: Custom properties (CSS variables) for theming
- **Vanilla JavaScript**: No frameworks or dependencies
- **Google Fonts**: Roboto Mono, Space Mono, Fira Code

## 🌐 Deployment

### GitHub Pages

This site is configured to deploy automatically via GitHub Actions:

1. Push to the `main` branch
2. GitHub Actions workflow runs automatically
3. Site deploys from the `/docs` directory
4. Available at `https://<username>.github.io/<repo-name>/`

### Local Testing

To test locally, use any static server:

```bash
# Using Python
cd docs
python -m http.server 8000

# Using Node.js
npx serve docs

# Using PHP
cd docs
php -S localhost:8000
```

Then visit `http://localhost:8000`

## 🎨 Theming

The site supports light and dark themes:

- Theme preference is saved to `localStorage`
- Toggle button in the header
- CSS custom properties for all colors
- Automatic system preference detection

## 📝 Customization

### Colors

Edit CSS variables in `styles.css`:

```css
:root {
  --primary: oklch(0.8757 0.2316 151.6216);
  --background: oklch(1.0000 0 0);
  /* ... */
}

.dark {
  --primary: oklch(0.8757 0.2316 151.6216);
  --background: oklch(0.2375 0.0300 157.3397);
  /* ... */
}
```

### Content

- **Suggestions**: Edit the `suggestionSets` array in `script.js`
- **Testimonials**: Edit the `testimonials` array in `script.js`
- **FAQs**: Edit the `faqs` array in `script.js`
- **Announcements**: Edit the `announcements` array in `script.js`

## ⚡ Performance

- No build step required
- No JavaScript frameworks
- Minimal dependencies (only Google Fonts)
- Fast initial load
- Total page size: ~50KB (excluding images)

## 📱 Browser Support

- Chrome/Edge (latest)
- Firefox (latest)
- Safari (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## 🔒 Privacy & Legal

- Privacy Policy: `/privacy.html`
- Terms of Service: `/terms.html`

## 📄 License

Same as the original project.

---

**Built with Ottic** ✨

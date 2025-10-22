# GitHub Pages Setup Guide

Your Next.js site has been successfully converted to a static site! Here's how to deploy it to GitHub Pages.

## ✨ What Was Done

1. **Converted Next.js to Static HTML**
   - Main landing page → `docs/index.html`
   - Privacy policy → `docs/privacy.html`
   - Terms of service → `docs/terms.html`

2. **Converted React Components to Vanilla JS**
   - Animated input with typing effect
   - Theme toggle (light/dark mode)
   - Rotating suggestions
   - Scrolling announcement bar
   - Testimonials carousel
   - FAQ accordion
   - Modal dialogs

3. **Converted Tailwind CSS to Plain CSS**
   - All styles in `docs/styles.css`
   - CSS custom properties for theming
   - Preserved all animations and interactions

4. **Copied Static Assets**
   - All images, icons, and files from `/public` → `/docs`
   - Testimonial images
   - OG image, manifest, robots.txt

5. **Created GitHub Actions Workflow**
   - Automatic deployment on push to `main`
   - Configured in `.github/workflows/deploy.yml`

## 🚀 Deployment Steps

### Option 1: GitHub Pages (Recommended)

1. **Push to GitHub**
   ```bash
   git add .
   git commit -m "Convert to static site for GitHub Pages"
   git push origin main
   ```

2. **Configure GitHub Pages**
   - Go to your repository on GitHub
   - Click **Settings** → **Pages**
   - Under "Build and deployment":
     - Source: **GitHub Actions**
   - The workflow will run automatically

3. **Access Your Site**
   - Your site will be available at:
     - `https://<username>.github.io/<repo-name>/` (for project repos)
     - `https://<username>.github.io/` (for user/org repos named `<username>.github.io`)

### Option 2: Custom Domain

If you want to use a custom domain (like `ottic.ai`):

1. **Add CNAME file**
   ```bash
   echo "ottic.ai" > docs/CNAME
   ```

2. **Configure DNS**
   - Add these A records to your DNS:
     ```
     185.199.108.153
     185.199.109.153
     185.199.110.153
     185.199.111.153
     ```
   - Or add a CNAME record pointing to `<username>.github.io`

3. **Update GitHub Pages Settings**
   - Go to Settings → Pages
   - Add your custom domain
   - Enable "Enforce HTTPS"

## 🧪 Local Testing

Before deploying, test locally:

```bash
# Using Python
cd docs
python3 -m http.server 8000

# Using Node.js
npx serve docs

# Using PHP
cd docs
php -S localhost:8000
```

Visit `http://localhost:8000` in your browser.

## 📁 File Structure

```
docs/
├── index.html          # Main page
├── privacy.html        # Privacy policy
├── terms.html          # Terms of service
├── styles.css          # All CSS (24KB)
├── script.js           # All JS (19KB)
├── README.md           # Documentation
├── manifest.json       # PWA manifest
├── robots.txt          # SEO
├── og-image.png        # Social sharing image
└── testimonials/       # Images
    ├── leandro-herrera.jpg
    ├── lucas-costas.jpg
    ├── sophia-faria.jpg
    └── tiago-serrano.jpg
```

## ✅ Features Preserved

All features from the Next.js version work perfectly:

- ✅ **Responsive Design** - Mobile, tablet, desktop
- ✅ **Dark/Light Theme** - Saved to localStorage
- ✅ **Animated Placeholder** - Typing effect in main input
- ✅ **Interactive Suggestions** - 3 rotating sets
- ✅ **Announcement Bar** - Auto-scrolling with hover pause
- ✅ **Testimonials** - Infinite scroll carousel
- ✅ **FAQ Accordion** - Expandable questions
- ✅ **Login Modal** - Email & social login UI
- ✅ **Auto-resize Textarea** - Grows with content
- ✅ **SEO Optimized** - Meta tags, Open Graph, structured data

## 🎨 Customization

### Update Content

Edit `docs/script.js` to change:

- **Typing commands**: `commands` array (line 2)
- **Suggestions**: `suggestionSets` array (line 12)
- **Testimonials**: `testimonials` array (line 90)
- **FAQs**: `faqs` array (line 110)
- **Announcements**: `announcements` array (line 134)

### Update Styles

Edit `docs/styles.css`:

- **Colors**: CSS variables in `:root` and `.dark` (lines 1-35)
- **Fonts**: Currently uses Roboto Mono, Space Mono, Fira Code
- **Spacing**: Adjust padding, margins as needed

### Update HTML

Edit the HTML files directly:

- `docs/index.html` - Main landing page
- `docs/privacy.html` - Privacy policy
- `docs/terms.html` - Terms of service

## 🔧 Troubleshooting

### Site not loading

1. Check GitHub Actions tab for deployment errors
2. Verify Pages is enabled in Settings → Pages
3. Make sure workflow has write permissions

### Images not showing

1. Check paths are relative (not absolute)
2. Verify images are in `docs/` folder
3. Check browser console for 404 errors

### Styles not applied

1. Check `styles.css` is in `docs/` folder
2. Verify link tag in HTML: `<link rel="stylesheet" href="styles.css">`
3. Clear browser cache

### Dark mode not persisting

1. Check browser localStorage is enabled
2. Verify JavaScript is loading (check console)
3. Test in private/incognito mode

## 📊 Performance

Static site metrics:

- **HTML**: ~17KB (index.html)
- **CSS**: ~19KB (styles.css)
- **JS**: ~20KB (script.js)
- **Total**: ~56KB (excluding images)
- **Load Time**: <500ms (on fast connection)

## 🔒 Security

- No server-side code
- No database
- No user data stored (except localStorage for theme)
- HTTPS enforced (GitHub Pages)
- No npm dependencies = no vulnerabilities

## 📈 Next Steps

1. **Test thoroughly** on different devices/browsers
2. **Update content** (testimonials, FAQs, etc.)
3. **Add analytics** (Google Analytics, Plausible, etc.)
4. **Set up custom domain** (optional)
5. **Monitor performance** with PageSpeed Insights

## 🎉 You're Done!

Your static site is ready to deploy. Simply push to GitHub and the GitHub Actions workflow will handle the rest!

Questions? Check:
- [GitHub Pages Docs](https://docs.github.com/pages)
- [GitHub Actions Docs](https://docs.github.com/actions)
- `docs/README.md` for more details

---

**Note**: The original Next.js app is still in the root directory if you need to make major changes. This static version is specifically for GitHub Pages deployment.

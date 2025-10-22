# 🚀 Deployment Checklist for GitHub Pages

Use this checklist to deploy your static site to GitHub Pages.

## ✅ Pre-Deployment Checklist

### 1. Test Locally
- [ ] Run local server: `cd docs && python3 -m http.server 8000`
- [ ] Visit `http://localhost:8000`
- [ ] Test all pages:
  - [ ] Home page loads correctly
  - [ ] Privacy page works
  - [ ] Terms page works
- [ ] Test all features:
  - [ ] Theme toggle (light/dark)
  - [ ] Animated typing placeholder
  - [ ] Suggestion buttons work
  - [ ] Suggestion rotation works
  - [ ] FAQ accordion expands/collapses
  - [ ] Login modal opens/closes
  - [ ] All links work
- [ ] Test responsive design:
  - [ ] Desktop (1920px+)
  - [ ] Laptop (1280px)
  - [ ] Tablet (768px)
  - [ ] Mobile (375px)
- [ ] Test in different browsers:
  - [ ] Chrome
  - [ ] Firefox
  - [ ] Safari
  - [ ] Edge

### 2. Review Content
- [ ] Check all text for typos
- [ ] Verify testimonials are showing
- [ ] Verify all images load
- [ ] Check footer links
- [ ] Verify email addresses are correct
- [ ] Check social media links

### 3. SEO Check
- [ ] Open Graph image exists (`/docs/og-image.png`)
- [ ] Meta descriptions are set
- [ ] Title tags are correct
- [ ] Structured data (JSON-LD) is present
- [ ] Robots.txt exists
- [ ] All internal links use relative paths

## 🔧 GitHub Setup

### 4. Repository Setup
- [ ] Code is committed to git
- [ ] Repository is pushed to GitHub
- [ ] Repository is public (or you have GitHub Pro for private repos)
- [ ] Branch is `main` (or update workflow to match your branch)

### 5. GitHub Pages Configuration
- [ ] Go to repository Settings
- [ ] Click on "Pages" in the left sidebar
- [ ] Under "Build and deployment":
  - [ ] Source: **GitHub Actions**
- [ ] Save changes

### 6. Workflow Check
- [ ] File `.github/workflows/deploy.yml` exists
- [ ] Workflow has correct permissions in the file
- [ ] Go to Actions tab on GitHub
- [ ] Check if workflow ran successfully
- [ ] View deployment in Environment section

## 🌐 Domain Setup (Optional)

### 7. Custom Domain (if using)
- [ ] Create `docs/CNAME` file with your domain
- [ ] Configure DNS records:
  ```
  Type: A
  Name: @
  Value: 185.199.108.153
  
  Type: A
  Name: @
  Value: 185.199.109.153
  
  Type: A
  Name: @
  Value: 185.199.110.153
  
  Type: A
  Name: @
  Value: 185.199.111.153
  ```
  Or use a CNAME:
  ```
  Type: CNAME
  Name: www
  Value: <username>.github.io
  ```
- [ ] Wait for DNS propagation (can take up to 48 hours)
- [ ] Go to Settings → Pages
- [ ] Add custom domain
- [ ] Enable "Enforce HTTPS"

## 📊 Post-Deployment

### 8. Verify Deployment
- [ ] Visit your GitHub Pages URL
- [ ] Test all features again (same as step 1)
- [ ] Check console for errors (F12)
- [ ] Verify SSL certificate (should show 🔒)
- [ ] Test from different devices
- [ ] Test from different networks

### 9. Performance Check
- [ ] Run PageSpeed Insights: https://pagespeed.web.dev/
- [ ] Target score: 90+ for all metrics
- [ ] Fix any issues found

### 10. Analytics (Optional)
- [ ] Set up Google Analytics
- [ ] Set up Google Search Console
- [ ] Add analytics script to HTML files
- [ ] Verify tracking is working

## 📈 Monitoring

### 11. Regular Checks
- [ ] Set up uptime monitoring (UptimeRobot, etc.)
- [ ] Monitor GitHub Actions for failed deployments
- [ ] Check analytics weekly
- [ ] Update content regularly

## 🎉 Launch!

Once all checkboxes are complete:
- [ ] Announce the new site
- [ ] Update any old links
- [ ] Share on social media
- [ ] Celebrate! 🎊

## 🔥 Quick Deploy Commands

```bash
# 1. Test locally
cd docs
python3 -m http.server 8000
# Visit http://localhost:8000, test everything
# Press Ctrl+C to stop

# 2. Commit and push
git add .
git commit -m "Deploy static site to GitHub Pages"
git push origin main

# 3. Wait for GitHub Actions to complete
# Check: https://github.com/<username>/<repo>/actions

# 4. Visit your site
# https://<username>.github.io/<repo>/
```

## 🆘 Troubleshooting

### Site not loading
1. Check Actions tab for errors
2. Verify Pages is enabled
3. Check branch name matches workflow
4. Wait 5 minutes and try again

### 404 errors
1. Check file paths are relative
2. Verify files are in `/docs` folder
3. Check capitalization (case-sensitive)

### Styles not working
1. Check browser console for errors
2. Verify `styles.css` path in HTML
3. Clear browser cache
4. Check CSS file is in `/docs`

### JavaScript not working
1. Check browser console for errors
2. Verify `script.js` path in HTML
3. Check for syntax errors in JS

## 📞 Need Help?

- GitHub Pages Docs: https://docs.github.com/pages
- GitHub Actions Docs: https://docs.github.com/actions
- Community Forum: https://github.community/

---

**Remember**: GitHub Pages deployments can take a few minutes. Be patient!

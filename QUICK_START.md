# ⚡ Quick Start Guide

Get your portfolio up and running in 5 minutes!

## 1️⃣ Installation (2 minutes)

```bash
# Clone (or download) the project
cd sanghamitra-portfolio

# Install dependencies
npm install

# Start development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser. 🎉

## 2️⃣ Customize Content (2 minutes)

Edit `data/portfolio.json` with your information:

```json
{
  "profile": {
    "name": "YOUR NAME",
    "headline": "YOUR HEADLINE",
    "title": "Your tagline",
    "email": "your@email.com",
    "socialLinks": {
      "linkedin": "https://linkedin.com/in/yourprofile",
      "github": "https://github.com/yourprofile",
      "twitter": "https://twitter.com/yourprofile"
    }
  },
  "experience": [
    {
      "id": "job-1",
      "company": "Company Name",
      "role": "Your Role",
      "startDate": "2024-01",
      "endDate": "present",
      ...
    }
  ],
  "products": [...],
  "education": [...],
  "achievements": [...]
}
```

**That's it!** No code changes needed. Your site updates automatically. ✨

## 3️⃣ Deploy (1 minute)

### Deploy to Vercel (Recommended)

```bash
npm install -g vercel
vercel
```

Follow the prompts. Your site is live! 🚀

### Deploy to Netlify

```bash
npm install -g netlify-cli
npm run build
netlify deploy --prod --dir=.next
```

## 📋 Project Structure at a Glance

```
📁 app/
  ├── layout.tsx          ← SEO & metadata
  ├── page.tsx            ← All sections combined
  └── globals.css         ← Styles

📁 components/
  ├── Hero.tsx            ← Landing section
  ├── Timeline.tsx        ← Career journey
  ├── Products.tsx        ← Product showcase
  ├── SkillsDashboard.tsx ← Skills visualization
  ├── Education.tsx       ← Education history
  └── Achievements.tsx    ← Awards & recognition

📁 data/
  └── portfolio.json      ← ⭐ YOUR CONTENT HERE

📁 types/
  └── portfolio.ts        ← Data types

📁 lib/
  └── utils.ts           ← Helper functions

📄 tailwind.config.ts    ← Brand colors
📄 package.json          ← Dependencies
📄 README.md             ← Full documentation
```

## 🎨 Key Sections Included

1. **Hero** - Eye-catching introduction
2. **Timeline** - Filterable career journey
3. **Products** - Product portfolio with case studies
4. **Skills** - Visual proficiency dashboard
5. **Education** - Academic credentials
6. **Achievements** - Recognition & awards
7. **Impact Metrics** - Quantified outcomes
8. **Contact** - Call-to-action section
9. **Footer** - Site navigation

## 🔧 Common Customizations

### Change Brand Colors

Edit `tailwind.config.ts`:

```ts
colors: {
  servicenow: {
    600: "#YOUR_COLOR",
    // ... other shades
  }
}
```

### Add New Experience

Add to `data/portfolio.json`:

```json
{
  "id": "new-role",
  "company": "New Company",
  "role": "New Role",
  "startDate": "2024-06",
  "endDate": "present",
  ...
}
```

### Add New Product

Add to `products` array in `data/portfolio.json`:

```json
{
  "id": "product-5",
  "name": "Product Name",
  "subtitle": "What it does",
  "users": "10,000+",
  ...
}
```

## ✅ Verification Checklist

After customization:

```
□ npm run dev works without errors
□ Site opens in browser at localhost:3000
□ All sections display correctly
□ Dark mode works (system preference)
□ Mobile responsive (test on phone)
□ All links work
□ Contact info is correct
```

## 🚀 Ready to Deploy?

### Before deploying:

1. Test production build locally:
   ```bash
   npm run build
   npm start
   ```

2. No errors? Ready to deploy! 

3. See [DEPLOYMENT.md](./DEPLOYMENT.md) for detailed deployment instructions

## 📞 Quick Help

| Issue | Solution |
|-------|----------|
| Port 3000 in use | `npm run dev -- -p 3001` |
| Build error | `npm install && npm run build` |
| Styling not working | Clear cache: `rm -rf .next && npm run dev` |
| Can't find data | Check `data/portfolio.json` exists |

## 📚 Next Steps

1. Read [README.md](./README.md) for complete documentation
2. Follow [DEPLOYMENT.md](./DEPLOYMENT.md) for deployment options
3. Customize colors in `tailwind.config.ts`
4. Add your content to `data/portfolio.json`
5. Deploy to production!

## 🎯 Success!

You now have a production-ready, recruiter-focused portfolio that looks better than a traditional resume or LinkedIn profile.

Next step: Deploy it and start getting noticed! 🎉

---

**Need help?** Check the README.md or DEPLOYMENT.md files for more detailed information.

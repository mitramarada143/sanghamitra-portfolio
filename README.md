# 🚀 Production-Grade Personal Portfolio

A world-class, recruiter-focused personal portfolio website built with Next.js 15, TypeScript, Tailwind CSS, and Framer Motion. Designed to stand out among hundreds of profiles with premium executive-level aesthetics inspired by Apple, Stripe, Linear, and Vercel.

## ✨ Features

### Core Features
- **Hero Section** - Dynamic, animated introduction with role transitions
- **Career Timeline** - Interactive, expandable career journey with filtering
- **Product Portfolio** - Showcase products with case studies and metrics
- **Skills Dashboard** - Visual proficiency matrix and skill visualization
- **Education Hub** - Detailed education background with expandable sections
- **Achievements** - Recognition and awards with category grouping
- **Impact Metrics** - Quantified contributions and outcomes
- **Contact Section** - Easy-to-access contact and social links

### Technical Highlights
- ✅ **Next.js 15** - Latest Next.js with App Router
- ✅ **TypeScript** - Full type safety across the codebase
- ✅ **Tailwind CSS** - Custom brand color schemes and animations
- ✅ **Framer Motion** - Smooth, professional animations
- ✅ **Fully Responsive** - Mobile-first design, works on all devices
- ✅ **Dark Mode** - Automatic dark mode support
- ✅ **SEO Optimized** - Complete metadata, OpenGraph, and Schema.org
- ✅ **Performance** - Optimized for fast loading and Lighthouse scores
- ✅ **Scalable CMS Architecture** - JSON-based content model

## 🛠️ Tech Stack

```json
{
  "frontend": ["Next.js 15", "React 19", "TypeScript"],
  "styling": ["Tailwind CSS", "Framer Motion", "Lucide Icons"],
  "features": ["Dark Mode", "Responsive Design", "Animations"],
  "tooling": ["ESLint", "TypeScript Compiler"]
}
```

## 📁 Project Structure

```
sanghamitra-portfolio/
├── app/
│   ├── layout.tsx           # Root layout with metadata
│   ├── page.tsx             # Homepage with all sections
│   └── globals.css          # Global styles and animations
├── components/
│   ├── Hero.tsx             # Hero section
│   ├── Timeline.tsx         # Career timeline
│   ├── Products.tsx         # Products showcase
│   ├── SkillsDashboard.tsx # Skills visualization
│   ├── Education.tsx        # Education section
│   ├── Achievements.tsx     # Achievements section
│   └── Button.tsx           # Reusable button component
├── data/
│   └── portfolio.json       # Central data source
├── lib/
│   └── utils.ts            # Utility functions
├── types/
│   └── portfolio.ts        # TypeScript type definitions
├── public/
│   ├── resume.pdf          # Download link
│   └── og-image.png        # Social sharing image
├── tailwind.config.ts      # Tailwind configuration
├── tsconfig.json           # TypeScript configuration
├── package.json            # Dependencies
└── README.md               # This file
```

## 🚀 Getting Started

### Prerequisites
- Node.js 18+ and npm/yarn
- Git (for version control)

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/sanghamitra/portfolio.git
   cd portfolio
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   ```

3. **Update portfolio content**
   - Edit `data/portfolio.json` with your information
   - Update profile, experience, products, education, etc.
   - No component changes needed for content updates

4. **Run development server**
   ```bash
   npm run dev
   ```
   
   Open [http://localhost:3000](http://localhost:3000) in your browser.

5. **Build for production**
   ```bash
   npm run build
   npm start
   ```

## 📝 Customization

### Updating Content

All content is centralized in `data/portfolio.json`. To add/update information:

```json
{
  "profile": {
    "name": "Your Name",
    "headline": "Your Professional Headline",
    "title": "Your tagline",
    ...
  },
  "experience": [
    {
      "id": "unique-id",
      "company": "Company Name",
      "role": "Your Role",
      ...
    }
  ]
}
```

### Customizing Brand Colors

Edit `tailwind.config.ts` to update brand colors:

```ts
colors: {
  servicenow: { /* Custom color scale */ },
  isb: { /* Custom color scale */ },
  iim: { /* Custom color scale */ },
  iiit: { /* Custom color scale */ }
}
```

### Adding New Sections

1. Create new component in `components/`
2. Add TypeScript types to `types/portfolio.ts`
3. Import and add to `app/page.tsx`

## 🎨 Design System

### Color Themes
- **ServiceNow** - Primary brand color (blue)
- **ISB** - Secondary accent (burgundy/maroon)
- **IIM** - Tertiary accent (tan/gold)
- **IIIT** - Quaternary accent (tech blue)

### Responsive Breakpoints
- Mobile: < 640px (sm)
- Tablet: 640px - 1024px (md, lg)
- Desktop: > 1024px (xl)

### Animation Standards
- **Entrance**: 0.6s duration, ease-out timing
- **Interaction**: 0.3s duration, ease-in-out timing
- **Continuous**: 2-3s loops with ease-in-out

## 🔍 SEO Optimization

The portfolio includes:
- ✅ Meta tags for search engines
- ✅ OpenGraph tags for social sharing
- ✅ Twitter Card configuration
- ✅ Schema.org structured data
- ✅ Sitemap and robots.txt ready
- ✅ Mobile-first meta viewport

## 🚀 Deployment

### Deploy to Vercel (Recommended)

```bash
npm install -g vercel
vercel
```

### Deploy to Netlify

```bash
npm run build
# Connect your GitHub repo to Netlify for auto-deployment
```

### Deploy to GitHub Pages

Update `next.config.js`:
```js
const nextConfig = {
  output: 'export',
  basePath: '/portfolio',
};
```

## 📊 Performance Metrics

Target metrics for optimal performance:

- **Lighthouse Score**: 95+
- **Core Web Vitals**: All green
- **Page Load Time**: < 2s
- **Time to Interactive**: < 3.5s

## 🔐 Security

- ✅ HTTPS by default
- ✅ Security headers configured
- ✅ No sensitive data in public files
- ✅ XSS protection enabled

## 📞 Contact & Links

Update these in `data/portfolio.json`:
- Email for contact form
- LinkedIn profile URL
- GitHub profile URL
- Twitter/X profile URL
- Resume PDF URL

## 🐛 Troubleshooting

### Port 3000 already in use
```bash
npm run dev -- -p 3001
```

### Build errors
```bash
rm -rf node_modules .next
npm install
npm run build
```

### Type errors
```bash
npm run type-check
```

## 📈 Future Enhancements

- [ ] Blog/Articles section
- [ ] Dark mode toggle button
- [ ] Analytics integration
- [ ] Newsletter signup
- [ ] Project showcase with GitHub integration
- [ ] Speaking engagements section
- [ ] Testimonials/Recommendations
- [ ] Dynamic project filtering

## 📄 License

This portfolio template is open source and available under the MIT License.

## 🙏 Credits

Built with:
- [Next.js](https://nextjs.org/)
- [React](https://react.dev/)
- [TypeScript](https://www.typescriptlang.org/)
- [Tailwind CSS](https://tailwindcss.com/)
- [Framer Motion](https://www.framer.com/motion/)
- [Lucide Icons](https://lucide.dev/)

---

**Made with ❤️ by Marada Sanghamitra**

For questions or support, reach out via email or LinkedIn.

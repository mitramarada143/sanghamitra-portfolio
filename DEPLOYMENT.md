# 🚀 Deployment Guide

This guide covers deploying your portfolio to various platforms.

## 📌 Pre-Deployment Checklist

- [ ] Update all content in `data/portfolio.json`
- [ ] Update `app/layout.tsx` metadata (site name, description, URLs)
- [ ] Add custom domain name
- [ ] Test all links and sections
- [ ] Check dark mode functionality
- [ ] Verify mobile responsiveness
- [ ] Test form submissions
- [ ] Optimize images (if added)

## 🔧 Environment Setup

1. Create `.env.local` from `.env.example`:
   ```bash
   cp .env.example .env.local
   ```

2. Fill in your environment variables:
   ```env
   NEXT_PUBLIC_SITE_URL=https://yourdomain.com
   NEXT_PUBLIC_CONTACT_EMAIL=your-email@example.com
   ```

3. Build locally to verify:
   ```bash
   npm run build
   npm start
   ```

## ✨ Vercel (Recommended)

Vercel is the official Next.js hosting platform and offers the best experience.

### Option 1: Git Integration (Recommended)

1. Push your code to GitHub
   ```bash
   git init
   git add .
   git commit -m "Initial commit: Personal portfolio"
   git push -u origin main
   ```

2. Go to [vercel.com](https://vercel.com)
3. Click "New Project"
4. Select your GitHub repository
5. Configure project:
   - Framework: Next.js
   - Root Directory: ./
   - Environment Variables: Add from `.env.local`
6. Click "Deploy"

Auto-deployment: Every push to main branch automatically deploys!

### Option 2: CLI Deployment

```bash
npm install -g vercel
vercel

# Follow the prompts to:
# - Create or select your team
# - Select the project directory
# - Override settings if needed
# - Confirm deployment
```

### Custom Domain on Vercel

1. Go to your project settings on Vercel
2. Navigate to "Domains"
3. Add your custom domain
4. Follow DNS configuration steps
5. Wait for SSL certificate (usually instant)

## 🌐 Netlify

### Option 1: GitHub Integration

1. Push to GitHub (see Vercel instructions)
2. Go to [netlify.com](https://netlify.com)
3. Click "New site from Git"
4. Select your GitHub repository
5. Configure build:
   - Build command: `npm run build`
   - Publish directory: `.next`
6. Click "Deploy site"

### Option 2: Manual Deployment

```bash
npm install -g netlify-cli
npm run build
netlify deploy --prod --dir=.next
```

### Environment Variables on Netlify

1. Site settings > Build & deploy > Environment
2. Add your environment variables
3. Redeploy the site

### Custom Domain on Netlify

1. Site settings > Domain management
2. Add custom domain
3. Configure DNS records
4. Wait for SSL certificate

## 🔐 GitHub Pages (Free Static Hosting)

⚠️ Note: Requires static export. Some dynamic features may not work.

### Setup

1. Update `next.config.js`:
   ```js
   const nextConfig = {
     output: 'export',
     basePath: '/portfolio', // if not on root
   };
   ```

2. Create GitHub repository (if not already)

3. Add GitHub Actions workflow (`.github/workflows/deploy.yml`):
   ```yaml
   name: Deploy Portfolio

   on:
     push:
       branches: [main]

   jobs:
     build:
       runs-on: ubuntu-latest

       steps:
         - uses: actions/checkout@v3
         - uses: actions/setup-node@v3
           with:
             node-version: 18
             cache: npm

         - run: npm ci
         - run: npm run build
         - run: npm run export # if needed

         - uses: peaceiris/actions-gh-pages@v3
           with:
             github_token: ${{ secrets.GITHUB_TOKEN }}
             publish_dir: ./out
   ```

4. Enable GitHub Pages:
   - Repository > Settings > Pages
   - Source: Deploy from a branch
   - Branch: gh-pages
   - Folder: / (root)

## 🎯 Self-Hosted (VPS/Dedicated Server)

### Option 1: Using PM2 (Node.js Process Manager)

```bash
# SSH into your server
ssh user@your-server.com

# Install Node.js and npm
curl -fsSL https://deb.nodesource.com/setup_18.x | sudo -E bash -
sudo apt-get install -y nodejs

# Clone repository
git clone https://github.com/yourusername/portfolio.git
cd portfolio

# Install dependencies
npm install --production

# Build the project
npm run build

# Install PM2 globally
sudo npm install -g pm2

# Start the application
pm2 start npm --name "portfolio" -- start

# Setup PM2 to run on startup
pm2 startup
pm2 save
```

### Option 2: Using Docker

Create `Dockerfile`:
```dockerfile
FROM node:18-alpine

WORKDIR /app

COPY package*.json ./
RUN npm ci --production

COPY . .
RUN npm run build

EXPOSE 3000
CMD ["npm", "start"]
```

Build and run:
```bash
docker build -t portfolio .
docker run -p 3000:80 portfolio
```

### Option 3: Using Nginx Reverse Proxy

```nginx
upstream portfolio {
  server 127.0.0.1:3000;
}

server {
  listen 80;
  server_name yourdomain.com www.yourdomain.com;

  location / {
    proxy_pass http://portfolio;
    proxy_http_version 1.1;
    proxy_set_header Upgrade $http_upgrade;
    proxy_set_header Connection 'upgrade';
    proxy_set_header Host $host;
    proxy_cache_bypass $http_upgrade;
  }

  # SSL configuration (add via Let's Encrypt)
  listen 443 ssl;
  ssl_certificate /etc/letsencrypt/live/yourdomain.com/fullchain.pem;
  ssl_certificate_key /etc/letsencrypt/live/yourdomain.com/privkey.pem;
}
```

## 🏢 Enterprise Platforms

### AWS (Amplify / ECS / EC2)

#### Amplify (Easiest)
```bash
npm install -g @aws-amplify/cli
amplify init
amplify add hosting
amplify publish
```

#### ECS
1. Create Docker image
2. Push to ECR
3. Create ECS task definition
4. Create ECS service
5. Configure load balancer
6. Set up CloudFront CDN

### Google Cloud (Cloud Run / App Engine)

#### Cloud Run
```bash
gcloud run deploy portfolio \
  --source . \
  --platform managed \
  --region us-central1
```

#### App Engine
```bash
gcloud app deploy
```

### Azure (App Service)

1. Create App Service Plan
2. Create App Service
3. Connect GitHub repository
4. Configure deployment settings
5. Deploy

## 📊 Post-Deployment Checklist

After deployment:

- [ ] Test on multiple devices (mobile, tablet, desktop)
- [ ] Verify all links work
- [ ] Check dark mode toggle
- [ ] Test contact form
- [ ] Verify analytics tracking
- [ ] Check SEO meta tags (use lighthouse)
- [ ] Test page speed (PageSpeed Insights)
- [ ] Verify domain SSL certificate
- [ ] Set up monitoring/alerts
- [ ] Create sitemap.xml
- [ ] Submit to Google Search Console
- [ ] Set up 404 handling

## 🔍 SEO After Deployment

1. **Google Search Console**
   - Go to [search.google.com/search-console](https://search.google.com/search-console)
   - Add property (your domain)
   - Submit sitemap: `yourdomain.com/sitemap.xml`
   - Request indexing

2. **Bing Webmaster Tools**
   - Go to [www.bing.com/webmasters](https://www.bing.com/webmasters)
   - Add site
   - Submit sitemap

3. **Create robots.txt** (optional, in public/)
   ```
   User-agent: *
   Allow: /
   Disallow: /admin/
   Sitemap: https://yourdomain.com/sitemap.xml
   ```

4. **Analytics Setup**
   - Add Google Analytics
   - Add Google Tag Manager
   - Set up conversion tracking

## 🚨 Monitoring & Maintenance

### Health Checks
- Set up uptime monitoring (Pingdom, UptimeRobot)
- Configure error tracking (Sentry)
- Enable performance monitoring

### Updates
- Keep dependencies updated: `npm update`
- Check for vulnerabilities: `npm audit`
- Test new versions before deploying

### Backups
- Daily backups of `data/portfolio.json`
- GitHub as version control backup

## 🆘 Troubleshooting

### Build Fails
```bash
# Clear cache and reinstall
rm -rf node_modules package-lock.json .next
npm install
npm run build
```

### Deployment Timeout
- Increase build timeout in platform settings
- Check for large dependencies
- Enable edge caching

### SSL Certificate Issues
- Check domain DNS settings
- Renew certificate if expired
- Verify certificate chain

### Performance Issues
- Enable image optimization
- Reduce bundle size
- Implement caching strategies
- Use CDN for static assets

---

For additional help, refer to:
- [Next.js Deployment Docs](https://nextjs.org/docs/deployment)
- [Vercel Documentation](https://vercel.com/docs)
- [Netlify Documentation](https://docs.netlify.com)

Good luck with your deployment! 🚀

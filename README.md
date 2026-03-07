# Internet Of Tsiken - APK Download Portal

Static HTML landing page for distributing the Internet Of Tsiken Android APK (IoT-Based Smart Brooder System with Predator Alert).

## Project Structure

```
Internet of Tsiken/
├── index.html          # Main landing page (Tailwind CSS via CDN)
├── script.js           # Download tracking & analytics
└── README.md           # This file
```

## Technology Stack

- **HTML5** - Semantic markup
- **Tailwind CSS** - Styling via CDN (no build step)
- **Vanilla JavaScript** - Event tracking and download management

## Quick Start (Local Development)

1. Open `index.html` directly in a browser, or
2. Serve with a local HTTP server:

```bash
# Python 3
python -m http.server 8000

# Node.js (npx)
npx serve .

# PHP
php -S localhost:8000
```

Navigate to `http://localhost:8000`

## Deployment

### Option 1: Vercel (Recommended)

1. **Install Vercel CLI** (optional):

   ```bash
   npm i -g vercel
   ```

2. **Deploy via CLI**:

   ```bash
   cd "c:\xampp\htdocs\Internet of Tsiken"
   vercel
   ```

   Follow prompts. First deployment is always preview; run `vercel --prod` for production.

3. **Deploy via Git**:
   - Push code to GitHub repository
   - Visit [vercel.com](https://vercel.com)
   - Click "Import Project"
   - Select your GitHub repo
   - Click "Deploy" (no configuration needed)

### Option 2: Netlify

1. **Via Netlify CLI**:

   ```bash
   npm i -g netlify-cli
   netlify deploy --prod
   ```

2. **Via Netlify UI**:
   - Visit [app.netlify.com](https://app.netlify.com)
   - Drag and drop the folder
   - Or connect GitHub repo for continuous deployment

### Option 3: GitHub Pages

1. Create a repository named `[username].github.io` or any repo name
2. Push files to `main` branch or `gh-pages` branch
3. Enable GitHub Pages in repo Settings → Pages
4. Select branch and `/` (root) folder
5. Access at `https://[username].github.io/[repo-name]/`

## APK Distribution Setup

### Step 1: Upload APK to GitHub Releases

1. Navigate to your GitHub repository
2. Go to **Releases** → **Draft a new release**
3. Create tag: `v1.0.0`
4. Upload your APK file: `internet-of-tsiken-v1.0.0.apk`
5. Publish release

### Step 2: Update Download Link

In `script.js`, line 8-10:

```javascript
const CONFIG = {
  apkUrl:
    "https://github.com/[YourUsername]/[YourRepo]/releases/download/v1.0.0/internet-of-tsiken-v1.0.0.apk",
  version: "1.0.0",
  // ...
};
```

Replace `[YourUsername]` and `[YourRepo]` with your actual values.

### Step 3: Generate SHA-256 Checksum

**Windows (PowerShell)**:

```powershell
Get-FileHash internet-of-tsiken-v1.0.0.apk -Algorithm SHA256
```

**Linux/macOS**:

```bash
shasum -a 256 internet-of-tsiken-v1.0.0.apk
```

Update the checksum in `index.html` (line ~112):

```html
<span class="font-mono text-xs break-all ml-2">YOUR_ACTUAL_SHA256_HERE</span>
```

### Step 4: Update File Size

Check APK size, then update in `index.html` (line ~109):

```html
<span class="font-mono">45.2 MB</span>
<!-- Update this -->
```

## Customization

### Update Team Information

Edit `index.html`, section starting at line ~558:

```html
<div>
  <h4 class="text-lg font-bold mb-2 text-blue-100">
    Systems Analyst & Project Lead
  </h4>
  <p class="text-white">[Team Lead Name]</p>
  <!-- Replace bracketed text -->
  ...
</div>
```

### Update University Context

Edit `index.html`, section around line ~592:

```html
<div class="border-t border-blue-400 pt-6">
  <h4 class="text-lg font-bold mb-2 text-blue-100">University Context</h4>
  <p class="text-white font-semibold">[University Name]</p>
  <p class="text-blue-200">[Department/College Name]</p>
  ...
</div>
```

### Enable Analytics

To track download events to your analytics platform:

1. Open `script.js`
2. Update line 10:

   ```javascript
   analyticsEndpoint: "https://your-analytics-endpoint.com/track";
   ```

3. Or use the global config:
   ```javascript
   // Add to bottom of index.html before </body>
   <script>
     IoTConfig.setAnalyticsEndpoint('https://your-endpoint.com/track');
   </script>
   ```

## Custom Domain Setup

### Vercel

1. Go to Project Settings → Domains
2. Add your custom domain
3. Update DNS records as instructed

### Netlify

1. Domain Settings → Add custom domain
2. Configure DNS (A record or CNAME)

### GitHub Pages

1. Settings → Pages → Custom domain
2. Add CNAME record to your DNS:
   ```
   CNAME: [subdomain] → [username].github.io
   ```

## Browser Compatibility

- Chrome/Edge: ✅ Full support
- Firefox: ✅ Full support
- Safari: ✅ Full support
- Opera: ✅ Full support

## File Size & Performance

- **HTML**: ~20KB (uncompressed)
- **JavaScript**: ~5KB (uncompressed)
- **External Dependencies**: Tailwind CSS CDN (~80KB gzipped)
- **Total Load Time**: <1 second on 3G

## SEO Optimization

Basic SEO included:

- Meta descriptions ✅
- Semantic HTML5 ✅
- Mobile-responsive ✅
- Fast load time ✅

To enhance:

1. Add `sitemap.xml`
2. Add `robots.txt`
3. Submit to Google Search Console

## Security Notes

- Always distribute APK via HTTPS
- Display SHA-256 checksum for verification
- Use GitHub Releases or trusted CDN for file hosting
- Never embed credentials in client-side code

## Troubleshooting

### Download button does nothing

- Check JavaScript console for errors
- Verify `apkUrl` in `script.js` is correct
- Ensure APK file is publicly accessible

### Styling looks broken

- Verify internet connection (Tailwind loads from CDN)
- Check browser console for CSP errors

### Analytics not working

- Confirm `analyticsEndpoint` is set in `script.js`
- Check CORS headers on analytics endpoint
- View console logs for tracking events

## License

Academic Capstone Project - 2026

---

**Developed for:** Academic evaluation and APK distribution  
**Contact:** [Your Email]  
**Repository:** [Your GitHub Repo URL]

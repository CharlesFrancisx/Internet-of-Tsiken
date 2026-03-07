# Deployment Guide - Internet Of Tsiken Landing Page

Step-by-step instructions for deploying your APK download website.

## Prerequisites

- [ ] APK file ready
- [ ] GitHub account created
- [ ] Git installed on your computer

---

## Method 1: Vercel (Recommended - Free & Fast)

### Step 1: Prepare Your APK

1. Build your React Native APK
2. Calculate SHA-256 checksum:

   **Windows PowerShell:**

   ```powershell
   Get-FileHash .\internet-of-tsiken-v1.0.0.apk -Algorithm SHA256
   ```

   **Result example:** `a3b5c7d9e1f2a4b6c8d0e2f4a6b8c0d2e4f6a8b0c2d4e6f8a0b2c4d6e8f0a2b4`

3. Note the file size (right-click APK → Properties)

### Step 2: Upload APK to GitHub Releases

1. Create a new repository on GitHub (e.g., `internet-of-tsiken`)
2. Push your landing page code:

   ```bash
   cd "c:\xampp\htdocs\Internet of Tsiken"
   git init
   git add .
   git commit -m "Initial commit - APK landing page"
   git branch -M main
   git remote add origin https://github.com/YOUR_USERNAME/internet-of-tsiken.git
   git push -u origin main
   ```

3. Go to your GitHub repository → **Releases** → **Create a new release**
4. Tag version: `v1.0.0`
5. Release title: `Internet Of Tsiken v1.0.0`
6. Upload your APK file
7. Click **Publish release**
8. **Copy the download URL** (right-click APK → Copy link address)
   - Format: `https://github.com/YOUR_USERNAME/internet-of-tsiken/releases/download/v1.0.0/internet-of-tsiken-v1.0.0.apk`

### Step 3: Update Landing Page

1. Open `script.js`
2. Line 8: Replace with your APK URL:

   ```javascript
   apkUrl: 'https://github.com/YOUR_USERNAME/internet-of-tsiken/releases/download/v1.0.0/internet-of-tsiken-v1.0.0.apk',
   ```

3. Open `index.html`
4. Line ~109: Update file size:

   ```html
   <span class="font-mono">45.2 MB</span>
   <!-- Change to your actual size -->
   ```

5. Line ~112: Update SHA-256:

   ```html
   <span class="font-mono text-xs break-all ml-2"
     >YOUR_SHA256_CHECKSUM_HERE</span
   >
   ```

6. Save and commit changes:
   ```bash
   git add .
   git commit -m "Update APK download link and checksums"
   git push
   ```

### Step 4: Deploy to Vercel

**Option A: Via Vercel Website (Easiest)**

1. Visit [vercel.com](https://vercel.com) and sign up with GitHub
2. Click **"Add New..." → Project**
3. Import your `internet-of-tsiken` repository
4. Project settings (use defaults):
   - Framework Preset: **Other**
   - Root Directory: `./`
   - Build Command: Leave empty
   - Output Directory: Leave empty
5. Click **Deploy**
6. Wait 30-60 seconds
7. Your site is live! Copy the URL: `https://internet-of-tsiken.vercel.app`

**Option B: Via Vercel CLI**

1. Install Vercel CLI:

   ```bash
   npm install -g vercel
   ```

2. Deploy:

   ```bash
   cd "c:\xampp\htdocs\Internet of Tsiken"
   vercel login
   vercel
   ```

3. Follow prompts:
   - Set up and deploy? **Y**
   - Scope: Select your account
   - Link to existing project? **N**
   - Project name: `internet-of-tsiken`
   - Directory: `./` (press Enter)
   - Override settings? **N**

4. Deploy to production:
   ```bash
   vercel --prod
   ```

### Step 5: Test Your Website

1. Visit your Vercel URL
2. Test download button functionality
3. Verify APK downloads correctly
4. Check mobile responsiveness

---

## Method 2: Netlify (Alternative Free Option)

### Via Netlify Website

1. Visit [netlify.com](https://www.netlify.com) and sign up
2. Click **"Add new site" → Import an existing project**
3. Connect to GitHub and select your repository
4. Build settings:
   - Build command: Leave empty
   - Publish directory: `./`
5. Click **Deploy site**
6. Your site is live at: `https://random-name-123.netlify.app`

### Via Netlify CLI

1. Install CLI:

   ```bash
   npm install -g netlify-cli
   ```

2. Deploy:
   ```bash
   cd "c:\xampp\htdocs\Internet of Tsiken"
   netlify login
   netlify init
   netlify deploy --prod
   ```

---

## Method 3: GitHub Pages (Free, No Build Required)

### Step 1: Enable GitHub Pages

1. Push your code to GitHub (see Vercel Step 2 if needed)
2. Go to repository **Settings** → **Pages**
3. Source: Select **Deploy from a branch**
4. Branch: Select `main` and `/ (root)`
5. Click **Save**
6. Wait 2-3 minutes for deployment

### Step 2: Access Your Site

Your site will be available at:

- `https://YOUR_USERNAME.github.io/internet-of-tsiken/`

**Note:** For GitHub Pages, if your site doesn't load resources correctly, you may need to adjust paths to be relative or absolute.

---

## Custom Domain Setup

### For Vercel

1. Buy domain from Namecheap, GoDaddy, or Cloudflare
2. In Vercel project: **Settings → Domains**
3. Add your domain (e.g., `tsiken.com`)
4. Update DNS records at your registrar:

   **Option A: CNAME (subdomain)**

   ```
   Type: CNAME
   Name: www
   Value: cname.vercel-dns.com
   ```

   **Option B: A Record (apex domain)**

   ```
   Type: A
   Name: @
   Value: 76.76.21.21
   ```

5. Wait 10-60 minutes for DNS propagation

### For Netlify

1. **Domains** → **Add custom domain**
2. Enter your domain
3. Update DNS records:

   ```
   Type: CNAME (for www)
   Name: www
   Value: [your-site].netlify.app

   Type: A (for apex)
   Name: @
   Value: 75.2.60.5
   ```

---

## SSL Certificate (HTTPS)

Both Vercel and Netlify provide **free automatic SSL certificates** via Let's Encrypt. No configuration needed!

- Your site will be served over HTTPS by default
- Certificate auto-renews every 90 days

---

## Post-Deployment Checklist

- [ ] Visit deployed URL and test download button
- [ ] Verify APK downloads correctly
- [ ] Check SHA-256 checksum matches
- [ ] Test on mobile device
- [ ] Verify all team information is updated
- [ ] Check all links work correctly
- [ ] Test on multiple browsers (Chrome, Firefox, Safari)
- [ ] Share URL with team for review

---

## Updating Your APK (Future Releases)

1. Build new APK version (e.g., v1.1.0)
2. Create new GitHub Release with new tag
3. Upload new APK file
4. Update `script.js` with new URL and version
5. Update `index.html` with new file size and SHA-256
6. Commit and push changes
7. Vercel/Netlify will auto-deploy (if connected to Git)
8. Or manually redeploy via CLI

---

## Troubleshooting

### Download button doesn't work

- Open browser console (F12)
- Click download button
- Check for errors in Console tab
- Verify `apkUrl` in `script.js` is correct and accessible

### 404 Error on APK download

- Verify GitHub Release is **public** (not draft)
- Check APK filename matches exactly in `script.js`
- Test the direct GitHub Release URL in browser

### Website doesn't display correctly

- Clear browser cache (Ctrl+Shift+Delete)
- Verify internet connection (Tailwind loads from CDN)
- Check browser console for errors

### Changes not showing after deployment

- Vercel/Netlify: Wait 30-60 seconds for build
- GitHub Pages: Wait 2-5 minutes
- Clear browser cache and hard refresh (Ctrl+F5)

---

## Cost Summary

| Service          | Cost            | What's Included                             |
| ---------------- | --------------- | ------------------------------------------- |
| **Vercel**       | **$0/month**    | Free hosting, SSL, CDN, unlimited bandwidth |
| **Netlify**      | **$0/month**    | 100GB bandwidth/month, SSL, CDN             |
| **GitHub Pages** | **$0/month**    | 1GB storage, 100GB bandwidth/month, SSL     |
| **Domain**       | **$10-15/year** | Custom domain name (optional)               |

**Recommended:** Vercel (free tier) + Namecheap domain ($10/year) = **$10/year total**

---

## Support

- **Vercel Docs:** https://vercel.com/docs
- **Netlify Docs:** https://docs.netlify.com
- **GitHub Pages:** https://docs.github.com/pages

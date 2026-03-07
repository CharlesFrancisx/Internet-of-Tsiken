# Customization Guide - Internet Of Tsiken Landing Page

Quick reference for customizing content without touching the core structure.

---

## Quick Updates Checklist

Before deploying, update these placeholders:

### 1. APK Download Configuration

**File:** `script.js` (Line 8-10)

```javascript
const CONFIG = {
  apkUrl:
    "https://github.com/[YourUsername]/[YourRepo]/releases/download/v1.0.0/internet-of-tsiken-v1.0.0.apk",
  version: "1.0.0",
  analyticsEndpoint: null,
};
```

**Replace:**

- `[YourUsername]` → Your GitHub username
- `[YourRepo]` → Your repository name
- Update version if different

---

### 2. File Size & Checksum

**File:** `index.html` (Lines ~109-112)

```html
<div
  class="text-left space-y-2 text-sm text-gray-600 bg-gray-50 rounded-lg p-4"
>
  <div class="flex justify-between">
    <span class="font-medium">File Size:</span>
    <span class="font-mono">45.2 MB</span>
    <!-- UPDATE THIS -->
  </div>
  <div class="flex justify-between items-start">
    <span class="font-medium">SHA-256:</span>
    <span class="font-mono text-xs break-all ml-2"
      >a3b5c7d9e1f2a4b6c8d0e2f4a6b8c0d2e4f6a8b0c2d4e6f8a0b2c4d6e8f0a2b4</span
    >
    <!-- UPDATE THIS -->
  </div>
</div>
```

**How to get SHA-256:**

```powershell
# Windows PowerShell
Get-FileHash .\your-apk-file.apk -Algorithm SHA256
```

---

### 3. Team Information

**File:** `index.html` (Lines ~558-590)

#### Systems Analyst / Project Lead

```html
<div>
  <h4 class="text-lg font-bold mb-2 text-blue-100">
    Systems Analyst & Project Lead
  </h4>
  <p class="text-white">[Team Lead Name]</p>
  <!-- CHANGE THIS -->
  <p class="text-blue-200 text-sm">
    Systems Architecture • Requirements Analysis • Project Management
  </p>
</div>
```

#### Development Team Members

```html
<div class="grid md:grid-cols-2 gap-4">
  <div>
    <p class="font-semibold">[Developer 1 Name]</p>
    <!-- CHANGE THIS -->
    <p class="text-blue-200 text-sm">Mobile Application Development</p>
  </div>
  <div>
    <p class="font-semibold">[Developer 2 Name]</p>
    <!-- CHANGE THIS -->
    <p class="text-blue-200 text-sm">IoT Hardware Integration</p>
  </div>
  <div>
    <p class="font-semibold">[Developer 3 Name]</p>
    <!-- CHANGE THIS -->
    <p class="text-blue-200 text-sm">Computer Vision & ML</p>
  </div>
  <div>
    <p class="font-semibold">[Developer 4 Name]</p>
    <!-- CHANGE THIS -->
    <p class="text-blue-200 text-sm">Backend & System Testing</p>
  </div>
</div>
```

#### University Context

```html
<div class="border-t border-blue-400 pt-6">
  <h4 class="text-lg font-bold mb-2 text-blue-100">University Context</h4>
  <p class="text-white font-semibold">[University Name]</p>
  <!-- CHANGE THIS -->
  <p class="text-blue-200">[Department/College Name]</p>
  <!-- CHANGE THIS -->
  <p class="text-blue-200 text-sm">Academic Year 2025-2026</p>
</div>
```

---

## Optional Customizations

### Add Your Logo

Replace the placeholder logo with an actual image:

**Current (Line ~15 in index.html):**

```html
<div
  class="w-10 h-10 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-lg flex items-center justify-center"
>
  <span class="text-white font-bold text-xl">IoT</span>
</div>
```

**Replace with image:**

```html
<img
  src="images/logo.png"
  alt="Internet Of Tsiken Logo"
  class="w-10 h-10 rounded-lg"
/>
```

**Then:**

1. Create `images/` folder
2. Add `logo.png` (size: 40x40px or larger)
3. Update paths in both header and footer

---

### Add App Screenshots

**Location:** Below the download button (insert after line ~130)

```html
<!-- App Screenshots -->
<section class="container mx-auto px-4 py-16">
  <h2 class="text-3xl font-bold text-center text-gray-900 mb-10">
    App Screenshots
  </h2>
  <div class="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
    <img
      src="images/screenshot1.png"
      alt="Dashboard"
      class="rounded-xl shadow-lg"
    />
    <img
      src="images/screenshot2.png"
      alt="Monitoring"
      class="rounded-xl shadow-lg"
    />
    <img
      src="images/screenshot3.png"
      alt="Alerts"
      class="rounded-xl shadow-lg"
    />
  </div>
</section>
```

**Requirements:**

- Screenshot size: 1080x1920px (mobile portrait)
- Format: PNG or WebP
- Max file size: 500KB each

---

### Change Color Scheme

Current theme uses blue/indigo gradient. To change:

**Find and replace in `index.html`:**

| Current Color                 | Replace With                    | Result       |
| ----------------------------- | ------------------------------- | ------------ |
| `from-blue-500 to-indigo-600` | `from-green-500 to-emerald-600` | Green theme  |
| `from-blue-500 to-indigo-600` | `from-purple-500 to-pink-600`   | Purple theme |
| `from-blue-500 to-indigo-600` | `from-orange-500 to-red-600`    | Orange theme |

**Tip:** Use find-and-replace (Ctrl+H) to change all instances at once.

---

### Modify Minimum Android Version

**File:** `index.html` (Line ~126)

```html
<p class="text-sm text-gray-500">
  For Android 8.0 (API 26) and above
  <!-- CHANGE IF DIFFERENT -->
</p>
```

**Also update in System Requirements section (Line ~378):**

```html
<li class="flex items-start">
  <span class="text-blue-600 mr-2">•</span>
  <span><strong>Minimum OS:</strong> Android 8.0 (Oreo, API 26)</span>
  <!-- UPDATE THIS -->
</li>
```

---

### Enable Analytics Tracking

To track download button clicks:

**Option 1: Google Analytics 4**

Add before `</head>` in `index.html`:

```html
<!-- Google tag (gtag.js) -->
<script
  async
  src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX"
></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag() {
    dataLayer.push(arguments);
  }
  gtag("js", new Date());
  gtag("config", "G-XXXXXXXXXX");
</script>
```

Replace `G-XXXXXXXXXX` with your GA4 measurement ID.

**Option 2: Custom Analytics Endpoint**

In `script.js` (line 10):

```javascript
analyticsEndpoint: "https://your-backend.com/api/track";
```

Or via inline script in `index.html` before `</body>`:

```html
<script>
  IoTConfig.setAnalyticsEndpoint("https://your-backend.com/api/track");
</script>
```

---

### Add Social Media Links

Insert in footer section (line ~620):

```html
<div class="flex justify-center space-x-6 mb-6">
  <a
    href="https://facebook.com/yourpage"
    class="text-gray-400 hover:text-white transition"
  >
    <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
      <path
        d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"
      />
    </svg>
  </a>
  <a
    href="https://github.com/yourusername/yourrepo"
    class="text-gray-400 hover:text-white transition"
  >
    <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
      <path
        d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"
      />
    </svg>
  </a>
</div>
```

---

### Add FAQ Section

Insert before footer (after line ~605):

```html
<!-- FAQ Section -->
<section class="container mx-auto px-4 py-16 bg-white">
  <div class="max-w-3xl mx-auto">
    <h2 class="text-3xl font-bold text-center text-gray-900 mb-10">
      Frequently Asked Questions
    </h2>

    <div class="space-y-6">
      <div class="border-l-4 border-blue-600 pl-4">
        <h3 class="text-lg font-bold text-gray-900 mb-2">Is this app free?</h3>
        <p class="text-gray-700">
          Yes, Internet Of Tsiken is completely free to download and use as part
          of our academic project.
        </p>
      </div>

      <div class="border-l-4 border-blue-600 pl-4">
        <h3 class="text-lg font-bold text-gray-900 mb-2">
          Do I need special hardware?
        </h3>
        <p class="text-gray-700">
          Yes, the app requires a Raspberry Pi 5 with camera and ESP32
          microcontroller with sensors to function. The mobile app is used for
          monitoring and control.
        </p>
      </div>

      <div class="border-l-4 border-blue-600 pl-4">
        <h3 class="text-lg font-bold text-gray-900 mb-2">Is my data secure?</h3>
        <p class="text-gray-700">
          All data processing happens on your local network. No data is
          transmitted to external servers unless you explicitly enable cloud
          features.
        </p>
      </div>
    </div>
  </div>
</section>
```

---

## Advanced Customizations

### Change Font

Replace Inter font with another Google Font:

**Current (Line 11-14 in index.html):**

```html
<link
  href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;600;700;800&display=swap"
  rel="stylesheet"
/>
<style>
  body {
    font-family: "Inter", sans-serif;
  }
</style>
```

**Example - Poppins:**

```html
<link
  href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;600;700;800&display=swap"
  rel="stylesheet"
/>
<style>
  body {
    font-family: "Poppins", sans-serif;
  }
</style>
```

---

### Add Download Counter

Insert after download button (line ~130):

```html
<p class="text-center text-sm text-gray-500 mt-4">
  <span id="downloadCount">Loading...</span> downloads
</p>

<script>
  // Simple download counter using localStorage
  document.addEventListener("DOMContentLoaded", function () {
    let count = parseInt(localStorage.getItem("dlCount") || "1247");
    document.getElementById("downloadCount").textContent =
      count.toLocaleString();

    document
      .getElementById("downloadBtn")
      .addEventListener("click", function () {
        count++;
        localStorage.setItem("dlCount", count);
      });
  });
</script>
```

**Note:** This is client-side only. For real tracking, use server-side analytics.

---

## Testing Your Changes

After making changes:

1. **Local Test:**

   ```bash
   # Serve locally
   npx serve . -p 8000
   # Visit http://localhost:8000
   ```

2. **Check responsiveness:**
   - Press F12 → Toggle device toolbar
   - Test on: Mobile (375px), Tablet (768px), Desktop (1920px)

3. **Validate HTML:**
   - Visit https://validator.w3.org/
   - Upload or paste your HTML

4. **Test download button:**
   - Click download button
   - Check browser console (F12) for errors
   - Verify APK downloads

---

## Common Mistakes to Avoid

❌ **Don't** remove `<function_calls>` or `<invoke>` tags (they're not in the actual files)  
❌ **Don't** forget to update BOTH file size AND checksum  
❌ **Don't** use spaces in APK filename (use hyphens: `app-v1.0.0.apk`)  
❌ **Don't** link to private GitHub repos for APK hosting  
✅ **Do** test the direct APK download URL before deploying  
✅ **Do** update version numbers consistently across all files  
✅ **Do** commit and push changes to GitHub before redeploying

---

## Need Help?

- Check `DEPLOYMENT_GUIDE.md` for deployment issues
- Check `README.md` for technical documentation
- Open browser console (F12) to see JavaScript errors

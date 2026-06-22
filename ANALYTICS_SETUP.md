# Google Analytics & Search Console Setup

## Step 1: Google Analytics 4 Setup

Add this code to the `<head>` section of all your HTML files (after the `<title>` tag):

```html
<!-- Google Analytics -->
<script async src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'G-XXXXXXXXXX');
</script>
```

**Note:** Replace `G-XXXXXXXXXX` with your actual Google Analytics 4 Measurement ID

---

## Step 2: Google Search Console Setup

### Add Property:
1. Go to Google Search Console (https://search.google.com/search-console)
2. Click "Add property"
3. Enter your domain: `zafarhomeopathic.com`
4. Choose verification method (Recommended: HTML tag)
5. Add the verification meta tag to your homepage `<head>`

### Submit Sitemap:
1. After verification, go to "Sitemaps" in Search Console
2. Enter the URL: `https://zafarhomeopathic.com/sitemap.xml`
3. Click "Submit"

### Monitor:
- Performance (clicks, impressions, CTR)
- Coverage (indexing status)
- Enhancements (rich results)
- Core Web Vitals

---

## Step 3: Google My Business Setup

### Create Listings for Both Locations:

**Location 1:**
- Name: Zafar Homeopathic Clinic
- Address: Ali Town, Raiwind Road, Lahore, Punjab 54000, Pakistan
- Phone: +92-315-6555848
- Category: Medical/Healthcare

**Location 2:**
- Name: Zafar Homeopathic Store & Clinic
- Address: Boharwala Chowk, Near Orange Line Metro Station, Lahore, Pakistan
- Phone: +92-315-6555848
- Category: Homeopathy/Alternative Medicine

### Add Information:
- Business hours
- Services offered
- Photos (10+ per location)
- Business description with keywords
- Service areas
- Website link

---

## Step 4: Additional Meta Tags to Add

For better conversion tracking, add these to your `<head>`:

```html
<!-- Conversion Tracking -->
<meta name="google-site-verification" content="XXXXXXXXXXXXX">

<!-- Mobile Web App -->
<meta name="apple-mobile-web-app-capable" content="yes">
<meta name="apple-mobile-web-app-status-bar-style" content="default">
<meta name="apple-mobile-web-app-title" content="Zafar Homeopathic">

<!-- Format Detection -->
<meta name="format-detection" content="telephone=+92-315-6555848">

<!-- Theme Color -->
<meta name="theme-color" content="#1a1a2e">
```

---

## Step 5: Verify Implementation

Use these free tools to verify your SEO setup:

1. **Google's Structured Data Testing Tool:**
   - https://search.google.com/structured-data/testing-tool
   - Test your JSON-LD schema markup

2. **Mobile-Friendly Test:**
   - https://search.google.com/test/mobile-friendly
   - Verify mobile optimization

3. **PageSpeed Insights:**
   - https://pagespeed.web.dev/
   - Check page performance

4. **Schema.org Validator:**
   - https://validator.schema.org/
   - Validate your structured data

---

## Important URLs to Reference

- **Google Search Console:** https://search.google.com/search-console
- **Google My Business:** https://business.google.com
- **Google Analytics:** https://analytics.google.com
- **Google Ads:** https://ads.google.com
- **Bing Webmaster Tools:** https://www.bing.com/webmasters

---

**Next Steps After Setup:**
1. Monitor Search Console for indexing errors
2. Track conversion actions in Analytics
3. Optimize based on user behavior data
4. Respond to all GMB reviews
5. Update content regularly

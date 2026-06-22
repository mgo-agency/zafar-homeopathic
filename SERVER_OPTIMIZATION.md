# .htaccess Optimization Guide for SEO

## For Apache Server Hosting

If your hosting uses Apache server, add this to your `.htaccess` file in the root directory.
If you're on different hosting (cPanel, Plesk), many of these settings are available in the control panel.

---

## BASIC SEO .htaccess CONFIGURATION

```apache
# Enable Rewrite Engine
<IfModule mod_rewrite.c>
    RewriteEngine On
    RewriteBase /

    # Remove .html extension from URLs
    RewriteCond %{REQUEST_FILENAME} !-f
    RewriteCond %{REQUEST_FILENAME} !-d
    RewriteRule ^([^\.]+)$ $1.html [NC,L]

    # Redirect www to non-www (or vice versa)
    RewriteCond %{HTTP_HOST} ^www\.(.*)$ [NC]
    RewriteRule ^(.*)$ https://%1/$1 [R=301,L]

    # HTTPS redirect (force HTTPS)
    RewriteCond %{HTTPS} off
    RewriteRule ^(.*)$ https://%{HTTP_HOST}%{REQUEST_URI} [L,R=301]
</IfModule>

# Enable GZIP Compression
<IfModule mod_deflate.c>
    AddOutputFilterByType DEFLATE text/html
    AddOutputFilterByType DEFLATE text/plain
    AddOutputFilterByType DEFLATE text/xml
    AddOutputFilterByType DEFLATE text/css
    AddOutputFilterByType DEFLATE text/javascript
    AddOutputFilterByType DEFLATE application/xml
    AddOutputFilterByType DEFLATE application/xhtml+xml
    AddOutputFilterByType DEFLATE application/rss+xml
    AddOutputFilterByType DEFLATE application/javascript
    AddOutputFilterByType DEFLATE application/x-javascript
</IfModule>

# Browser Caching
<IfModule mod_expires.c>
    ExpiresActive On
    
    # Cache images for 2 months
    ExpiresByType image/jpeg "access plus 2 months"
    ExpiresByType image/gif "access plus 2 months"
    ExpiresByType image/png "access plus 2 months"
    ExpiresByType image/webp "access plus 2 months"
    ExpiresByType image/svg+xml "access plus 2 months"
    ExpiresByType image/x-icon "access plus 1 year"
    ExpiresByType image/x-ms-bmp "access plus 1 year"
    
    # Cache CSS and JavaScript for 1 month
    ExpiresByType text/css "access plus 1 month"
    ExpiresByType application/javascript "access plus 1 month"
    ExpiresByType text/javascript "access plus 1 month"
    
    # Cache HTML for 1 week
    ExpiresByType text/html "access plus 1 week"
    
    # Default cache for 24 hours
    ExpiresDefault "access plus 24 hours"
</IfModule>

# 404 Error Handling
ErrorDocument 404 /404.html

# Disable Directory Browsing
<IfModule mod_autoindex.c>
    Options -Indexes
</IfModule>

# Prevent Access to Sensitive Files
<FilesMatch "^\.">
    Order allow,deny
    Deny from all
</FilesMatch>

<FilesMatch "\.env$">
    Order allow,deny
    Deny from all
</FilesMatch>

# Set Cache Control Headers
<IfModule mod_headers.c>
    Header set Cache-Control "max-age=31536000, public"
    <FilesMatch "\.(jpg|jpeg|png|gif|ico|css|js)$">
        Header set Cache-Control "max-age=31536000, public"
    </FilesMatch>
    <FilesMatch "\.(html|htm)$">
        Header set Cache-Control "max-age=604800, public"
    </FilesMatch>
</IfModule>
```

---

## Additional Nginx Configuration (If Using Nginx)

If your server uses Nginx instead of Apache, use this configuration:

```nginx
# GZIP Compression
gzip on;
gzip_types text/plain text/css text/xml text/javascript 
    application/x-javascript application/xml+rss 
    application/rss+xml application/javascript;
gzip_min_length 1000;
gzip_disable "msie6";

# Browser Caching
location ~* \.(jpg|jpeg|png|gif|ico|css|js)$ {
    expires 1y;
    add_header Cache-Control "public, immutable";
}

location ~* \.(html|htm)$ {
    expires 7d;
    add_header Cache-Control "public";
}

# HTTPS Redirect
server {
    listen 80;
    server_name zafarhomeopathic.com www.zafarhomeopathic.com;
    return 301 https://$server_name$request_uri;
}

server {
    listen 443 ssl http2;
    server_name zafarhomeopathic.com;
    
    # SSL Certificate Configuration (adjust paths)
    ssl_certificate /path/to/certificate.crt;
    ssl_certificate_key /path/to/private.key;
}
```

---

## Using cPanel (Recommended for Most Users)

If your hosting provides **cPanel**:

1. **Enable GZIP Compression:**
   - Go to: cPanel > Software > Optimize Website
   - Enable GZIP Compression

2. **Set Caching Headers:**
   - Go to: cPanel > Software > eAccelerator
   - Enable caching if available

3. **Force HTTPS:**
   - Go to: cPanel > Domains
   - Click on domain > Auto HTTPS Redirect: Enable

4. **Enable HTTP/2:**
   - Go to: cPanel > Domains
   - Select domain > HTTP/2: Enable

---

## Important Settings to Verify

### 1. SSL/HTTPS Status:
- [ ] Check that HTTPS is enabled
- [ ] Verify SSL certificate is valid
- [ ] Test at: https://www.ssllabs.com/ssltest

### 2. Gzip Compression:
- [ ] Verify at: https://checkgzip.com
- [ ] Should show "Gzip is enabled"

### 3. Browser Caching:
- [ ] Verify at: https://gtmetrix.com
- [ ] Check cache headers are set

### 4. Redirect Configuration:
- [ ] www redirects to non-www
- [ ] HTTP redirects to HTTPS
- [ ] Old pages redirect to new URLs

---

## Performance Optimization Tips

1. **Minify CSS & JavaScript:**
   ```
   Use online minifiers or build tools:
   - CSS Minifier: https://cssminifier.com
   - JS Minifier: https://jsminifier.com
   ```

2. **Optimize Images:**
   ```
   - Use free tools: TinyPNG.com, Optimizilla.com
   - Target: < 100KB per image
   - Use WebP format when possible
   ```

3. **Enable Lazy Loading:**
   ```html
   <!-- Add loading="lazy" to images -->
   <img src="image.jpg" loading="lazy" alt="description">
   ```

4. **Use Content Delivery Network (CDN):**
   ```
   Recommended free/cheap options:
   - Cloudflare (free tier): https://www.cloudflare.com
   - BunnyCDN: https://www.bunnycdn.com
   ```

---

## Common Issues & Solutions

### Issue: .html extension showing in URLs
**Solution:** Use URL rewrite rules above to hide .html extension

### Issue: Mixed content warning (HTTPS/HTTP)
**Solution:** Force all content to load over HTTPS

### Issue: Slow page loading
**Solution:** Enable GZIP compression and browser caching

### Issue: Duplicate content (www vs non-www)
**Solution:** Redirect one version to the other (use 301 redirect)

---

## Testing Your Configuration

Use these free tools to verify:

1. **Google PageSpeed Insights:**
   - https://pagespeed.web.dev
   - Check mobile and desktop scores

2. **GTmetrix:**
   - https://gtmetrix.com
   - Analyze page speed and caching

3. **SSL Labs:**
   - https://www.ssllabs.com/ssltest
   - Verify SSL certificate configuration

4. **Gzip Compression Test:**
   - https://checkgzip.com
   - Verify gzip is enabled

---

## Questions for Your Hosting Provider

If you're unsure about your server setup, ask your hosting provider:

1. Are you using Apache or Nginx?
2. Do you support .htaccess?
3. Is HTTPS/SSL available?
4. Is Gzip compression enabled?
5. Can I enable browser caching?
6. Do you offer Cloudflare integration?
7. Can I set up HTTP/2?

---

## Security Recommendations (Bonus)

Add these for better security:

```apache
# Prevent PHP execution in upload directories
<Directory /path/to/uploads>
    php_flag engine off
    AddHandler cgi-script .php .html
    <FilesMatch "\.php$">
        Deny from all
    </FilesMatch>
</Directory>

# Prevent SQL Injection
<IfModule mod_rewrite.c>
    RewriteCond %{QUERY_STRING} (\<|%3C).*script.*(\>|%3E) [NC,OR]
    RewriteCond %{QUERY_STRING} UNION.*SELECT [NC,OR]
    RewriteCond %{QUERY_STRING} union.*select [NC]
    RewriteRule ^(.*)$ - [F,L]
</IfModule>

# Remove Server Signature
ServerTokens Prod
ServerSignature Off
```

---

**Note:** These configurations require technical knowledge. If unsure, contact your hosting provider or a server administrator.

**Recommended:** Use Cloudflare (free) as your CDN for additional performance and security benefits.

---

**Last Updated:** June 22, 2026

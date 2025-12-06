# How to Add a Client with Logo Image

## 📋 Complete Step-by-Step Guide

### Example: Adding "Tech Solutions Inc" to the Trading sector with a logo

---

## Step 1: Prepare the Logo Image 🖼️

1. Get the company logo (PNG, JPG, or JPEG format)
2. Rename it using lowercase and hyphens (no spaces)
   - ✅ Good: `tech-solutions.png`
   - ❌ Bad: `Tech Solutions.png` or `tech_solutions.PNG`

3. Place the logo in the `/public/logos/` folder

**Your file structure should look like:**
```
public/
  logos/
    qnb.png
    egbank.png
    tech-solutions.png  ← Your new logo here
    ...
```

---

## Step 2: Add Client to JSON File 📝

1. Open `src/data/clients.json`

2. Find the appropriate sector (in this example: `trading`)

3. Add a new entry at the end of the array:

```json
{
  "trading": [
    {
      "name": "FMCG company for trading and distribution",
      "sector": "Trading"
    },
    {
      "name": "National Fresh Food Co.",
      "sector": "Trading"
    },
    {
      "name": "Abdulaha Balsharaf Est.",
      "sector": "Trading"
    },
    {
      "name": "Yessayan Jewelry Co.",
      "sector": "Trading"
    },
    {
      "name": "Get Palma",
      "sector": "Trading"
    },
    {
      "name": "Tech Solutions Inc",
      "sector": "Trading"
    }
  ]
}
```

**Important:** 
- Add a comma after the previous entry
- Use the exact company name (you'll need this exact name in the next step)
- Save the file

---

## Step 3: Map Logo to Company Name 🔗

1. Open `src/data/logos.ts`

2. Find the `localLogos` object

3. Add a new line matching the **exact** company name to the logo path:

```typescript
export const localLogos: Record<string, string> = {
  // ...existing entries...
  
  // Trading & Distribution
  'Abdulaha Balsharaf Est.': '/logos/balsharaf.png',
  'Yessayan Jewelry Co.': '/logos/yessayan.png',
  'Get Palma': '/logos/getpalma.png',
  'Tech Solutions Inc': '/logos/tech-solutions.png',  // ← Add this line
  
  // ...rest of entries...
};
```

**Important:**
- The company name must **exactly** match what you put in `clients.json`
- The path starts with `/logos/`
- Add a comma at the end
- Save the file

---

## Step 4: Verify ✅

1. Check your browser at `http://localhost:5173/clients`
2. Scroll to the Trading section
3. You should see "Tech Solutions Inc" with its logo!

---

## 🎯 Quick Reference: All Sectors

Add clients to these sectors in `clients.json`:

| Sector Key | Display Name |
|------------|-------------|
| `banks` | Banking & Financial Services |
| `industrial` | Industrial & Manufacturing |
| `tourismHotels` | Tourism & Hotels |
| `constructionHousing` | Construction & Housing |
| `trading` | Trading & Distribution |
| `educationTelecom` | Education & Telecommunications |
| `agriculture` | Agriculture |
| `investment` | Investment & Securities |

---

## 📐 Logo Image Best Practices

### Recommended Specifications:
- **Format:** PNG (with transparent background) or JPG
- **Size:** 200x200px to 500x500px
- **Aspect Ratio:** Square or close to square works best
- **Background:** Transparent (PNG) or white background
- **File Size:** Under 200KB for fast loading

### Good Logo Examples:
- Company logo on transparent background
- Simple, clear design
- Good contrast

### Tips:
- Square logos display best
- High resolution looks professional
- Transparent backgrounds blend nicely

---

## 🔄 Complete Example Workflow

Let's add "Global Finance Corp" to the Banking sector:

### 1. Prepare the file:
```bash
# Save logo as: global-finance.png
# Copy to: /public/logos/global-finance.png
```

### 2. Edit `clients.json`:
```json
{
  "banks": [
    {
      "name": "QNB",
      "sector": "Banking & Finance"
    },
    {
      "name": "Global Finance Corp",
      "sector": "Banking & Finance"
    }
  ]
}
```

### 3. Edit `logos.ts`:
```typescript
export const localLogos: Record<string, string> = {
  // Banking & Financial Services
  'QNB': '/logos/qnb.png',
  'Global Finance Corp': '/logos/global-finance.png',
  // ...
};
```

### 4. Save both files and refresh your browser! 🎉

---

## ❓ What if I Don't Have a Logo?

**No problem!** If you don't add the company to `logos.ts`, the website will automatically show:

1. **Placeholder with initials**: A colored box with the company's initials
   - Example: "Tech Solutions Inc" → Shows "TSI"

This looks professional and maintains consistency!

---

## 🐛 Troubleshooting

### Logo Not Showing?

**Check these:**

1. ✅ Logo file is in `/public/logos/`
2. ✅ File name in `logos.ts` matches the actual file name
3. ✅ Company name in `logos.ts` **exactly** matches name in `clients.json`
4. ✅ Path starts with `/logos/` (with leading slash)
5. ✅ No typos in the file extension (.png vs .PNG)

### Still Not Working?

**Common Fixes:**
- Hard refresh the browser: `Cmd+Shift+R` (Mac) or `Ctrl+Shift+R` (Windows)
- Check browser console for errors: Right-click → Inspect → Console
- Verify the image opens directly: `http://localhost:5173/logos/your-logo.png`

### Wrong Initials Showing?

This means the logo path is incorrect. Double-check:
- Company name spelling in both files
- File path in `logos.ts`

---

## 📝 Checklist Template

Use this checklist every time you add a client with a logo:

```markdown
Adding: [Company Name] to [Sector]

- [ ] Logo saved in /public/logos/ as [filename]
- [ ] Entry added to clients.json
- [ ] Company name is exact in both files
- [ ] Entry added to logos.ts
- [ ] Path matches: /logos/[filename]
- [ ] Commas are correct (no syntax errors)
- [ ] Files saved
- [ ] Browser refreshed
- [ ] Logo displays correctly
```

---

## 💡 Pro Tips

1. **Batch Adding**: You can add multiple clients at once, then add all logos together
2. **Logo Location**: Keep logos organized in `/public/logos/` - don't create subfolders
3. **File Naming**: Consistent naming makes it easier (always lowercase, hyphens)
4. **Testing**: Always check the Clients page after adding entries
5. **Backup**: Keep a backup of `clients.json` and `logos.ts` before major changes

---

## 🎨 Advanced: Logo Display

Logos are displayed in the `SectorList` component with:
- **Size**: 80x80px containers
- **Hover effect**: Scales up slightly on hover
- **Fallback**: Shows company initials if logo fails to load
- **Responsive**: Adapts to mobile/tablet/desktop

The component automatically handles:
- Loading states
- Error handling (shows initials if logo fails)
- Responsive sizing
- Hover animations

---

## 📞 Need Help?

If you're stuck:
1. Check the browser console for errors
2. Verify JSON syntax at [jsonlint.com](https://jsonlint.com/)
3. Review the existing entries as examples
4. Make sure file paths use forward slashes `/`

---

**You're all set!** 🚀 Adding clients with logos is now a simple 3-step process.

# 🚀 Quick Guide: Add Client with Logo

## 3 Simple Steps

```
┌─────────────────────────────────────────────────────────────┐
│                    STEP 1: ADD LOGO FILE                    │
└─────────────────────────────────────────────────────────────┘

Save logo as: tech-solutions.png
Location:     /public/logos/tech-solutions.png

Example:
  public/
    logos/
      qnb.png
      egbank.png
      tech-solutions.png  ← Your new logo here!


┌─────────────────────────────────────────────────────────────┐
│              STEP 2: ADD TO clients.json                    │
└─────────────────────────────────────────────────────────────┘

File: src/data/clients.json

{
  "trading": [
    {
      "name": "Get Palma",
      "sector": "Trading"
    },
    {
      "name": "Tech Solutions Inc",    ← Add this
      "sector": "Trading"              ← Add this
    }
  ]
}


┌─────────────────────────────────────────────────────────────┐
│              STEP 3: MAP LOGO IN logos.ts                   │
└─────────────────────────────────────────────────────────────┘

File: src/data/logos.ts

export const localLogos: Record<string, string> = {
  'Get Palma': '/logos/getpalma.png',
  'Tech Solutions Inc': '/logos/tech-solutions.png',  ← Add this line
};


┌─────────────────────────────────────────────────────────────┐
│                    ✅ DONE! SAVE & REFRESH                  │
└─────────────────────────────────────────────────────────────┘
```

---

## ⚠️ Important Rules

1. **Company name must match EXACTLY** in both files:
   - `clients.json`: "Tech Solutions Inc"
   - `logos.ts`: 'Tech Solutions Inc'

2. **File naming convention:**
   - ✅ `tech-solutions.png` (lowercase, hyphens)
   - ❌ `Tech Solutions.png` (spaces, capitals)

3. **Logo path must start with `/logos/`**
   - ✅ `'/logos/tech-solutions.png'`
   - ❌ `'logos/tech-solutions.png'` (missing slash)

---

## 📂 Available Sectors

Choose the correct sector key in `clients.json`:

- `banks` → Banking & Financial Services
- `industrial` → Industrial & Manufacturing  
- `tourismHotels` → Tourism & Hotels
- `constructionHousing` → Construction & Housing
- `trading` → Trading & Distribution
- `educationTelecom` → Education & Telecommunications
- `agriculture` → Agriculture
- `investment` → Investment & Securities

---

## 💡 What if I don't have a logo?

**Just skip Step 3!** 

The website will automatically show the company's initials in a colored box:
- "Tech Solutions Inc" → Shows "TSI"

---

## 🎯 Real Example

Adding "Nile Bank" to Banking sector:

### Step 1: Save logo
```
/public/logos/nile-bank.png
```

### Step 2: Edit clients.json
```json
{
  "banks": [
    {
      "name": "Nile Bank",
      "sector": "Banking & Finance"
    }
  ]
}
```

### Step 3: Edit logos.ts
```typescript
'Nile Bank': '/logos/nile-bank.png',
```

### Result: ✨
Visit http://localhost:5173/clients → See Nile Bank with logo!

---

## 🔗 More Help

- **Full Guide**: See `HOW_TO_ADD_CLIENT_WITH_LOGO.md`
- **Data Management**: See `src/data/README.md`
- **Quick Start**: See `TEAM_CLIENTS_GUIDE.md`

---

**Pro Tip:** Add multiple clients first in `clients.json`, then batch-add all logos in `logos.ts` at once!

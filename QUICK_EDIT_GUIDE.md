# Quick Content Editing Guide

## 🎯 What Can You Edit?

**EVERYTHING!** All text, team members, clients, services, and values can be edited by simply modifying JSON files.

---

## 📁 Where to Find Content

| What You Want to Edit | File to Open |
|----------------------|--------------|
| **Team members** | `src/data/team.json` |
| **Clients/logos** | `src/data/clients.json` |
| **Services** | `src/data/services.json` |
| **Core values** | `src/data/values.json` |
| **Company name, contact info** | `src/data/company-info.json` |
| **Mission & vision** | `src/data/about.json` |
| **Home page text** | `src/data/content-home.json` |
| **Team page text** | `src/data/content-team.json` |
| **Clients page text** | `src/data/content-clients.json` |
| **Services page text** | `src/data/content-services.json` |
| **About page text** | `src/data/content-about.json` |
| **Contact page text** | `src/data/content-contact.json` |

---

## ✏️ Common Editing Tasks

### 1. Add a New Team Member

Open `src/data/team.json` and add:

```json
{
  "name": "Jane Smith",
  "role": "Senior Consultant",
  "credentials": ["CPA", "MBA"],
  "bio": "Jane has over 15 years of experience...",
  "image": "/team/jane-smith.jpg"
}
```

**Remember**: Add the photo to `/public/team/` folder first!

---

### 2. Add a New Client

Open `src/data/clients.json` and add:

```json
{
  "name": "ABC Corporation",
  "sector": "Banking & Finance",
  "logo": "/logos/abc-corp.png"
}
```

**Available Sectors**:
- Banking & Finance
- Industrial & Construction
- Tourism & Hospitality
- Food & Beverage
- Technology
- Education
- Real Estate
- Agriculture

**Remember**: Add the logo to `/public/logos/` folder first!

---

### 3. Edit Page Titles

Find the page in the table above, then edit the `hero.title` field:

```json
{
  "hero": {
    "title": "Your New Title Here"
  }
}
```

---

### 4. Edit Home Page Hero Section

Open `src/data/content-home.json`:

```json
{
  "hero": {
    "headline": "Your main headline",
    "subheadline": "Your subheadline",
    "primaryCTA": "Button Text",
    "secondaryCTA": "Other Button Text"
  }
}
```

---

### 5. Edit Services

Open `src/data/services.json`:

```json
{
  "id": "audit-assurance",
  "title": "Audit & Assurance",
  "description": "Why choose our service...",
  "items": [
    "Service detail 1",
    "Service detail 2",
    "Service detail 3"
  ]
}
```

---

### 6. Edit Contact Information

Open `src/data/company-info.json`:

```json
{
  "contact": {
    "phone": "+20 123 456 7890",
    "email": "info@example.com",
    "website": "www.example.com"
  }
}
```

---

### 7. Edit Business Hours

Open `src/data/content-contact.json`:

```json
{
  "businessHours": {
    "schedule": [
      {
        "days": "Monday - Thursday",
        "hours": "9:00 AM - 6:00 PM"
      }
    ]
  }
}
```

---

### 8. Edit Core Values

Open `src/data/values.json`:

```json
{
  "title": "Integrity",
  "description": "We maintain the highest standards..."
}
```

---

## ⚠️ Important Rules

### DO:
- ✅ Edit text inside quotation marks
- ✅ Keep the structure intact (brackets, braces, commas)
- ✅ Save files after editing
- ✅ Use proper JSON formatting

### DON'T:
- ❌ Remove brackets `[]` or braces `{}`
- ❌ Remove commas between items
- ❌ Remove quotation marks
- ❌ Change field names (like `"title"`, `"description"`)
- ❌ Break the JSON structure

---

## 🔧 Testing Your Changes

1. **Save the JSON file**
2. **Refresh your browser** (Ctrl+R or Cmd+R)
3. **Check if the content updated**

If something goes wrong:
- Use Ctrl+Z (Cmd+Z on Mac) to undo
- Check for missing commas or quotation marks
- Compare with other similar entries

---

## 🆘 JSON Validation

If you're not sure your JSON is valid:
1. Copy the entire file content
2. Go to https://jsonlint.com/
3. Paste and click "Validate JSON"
4. Fix any errors it shows

---

## 📸 Adding Images

### For Team Members:
1. Place image in `/public/team/`
2. Reference as: `"/team/filename.jpg"`

### For Client Logos:
1. Place logo in `/public/logos/`
2. Reference as: `"/logos/filename.png"`

**Supported formats**: `.jpg`, `.jpeg`, `.png`, `.svg`

---

## 💡 Quick Tips

1. **Copy existing entries** when adding new ones - it's easier!
2. **Don't forget commas** between array items
3. **Check quotation marks** - they should match: `"text"`
4. **Indentation doesn't matter** functionally, but it makes reading easier
5. **Keep backups** of files before major changes

---

## 🎨 Special Characters

If you need special characters, use them directly:
- ✅ `"We're the best"` 
- ✅ `"5,000+ clients"`
- ✅ `"Expert & Professional"`

---

## 📞 Need Help?

1. Check the full documentation: `CONTENT_MANAGEMENT_SYSTEM.md`
2. Look at similar existing entries for examples
3. Use JSONLint (jsonlint.com) to validate your changes
4. Keep a backup before making big changes!

---

**Last Updated**: December 6, 2025

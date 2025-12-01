# Managing Team Members and Clients

This directory contains JSON files that make it easy to add, remove, or edit team members and clients without touching the codebase.

## 📋 Table of Contents

- [Team Members](#team-members)
- [Clients](#clients)
- [How to Add/Remove Entries](#how-to-addremove-entries)

---

## 👥 Team Members

### File: `team.json`

This file contains an array of team member objects. Each team member has the following structure:

```json
{
  "name": "John Doe",
  "role": "Executive Partner",
  "credentials": ["ACCA", "CPA"],
  "image": "/team/john-doe.jpeg",
  "imagePosition": "50% 20%",
  "bio": "John has 20+ years of experience..."
}
```

### Fields:

- **name** (required): Full name of the team member
- **role** (required): Their position/title
- **credentials** (required): Array of certifications/qualifications
- **image** (required): Path to their photo (place in `/public/team/`)
- **imagePosition** (optional): CSS object-position value for photo cropping (default: "50% 20%")
- **bio** (required): Professional biography

### Adding a New Team Member:

1. Add the team member's photo to `/public/team/` (e.g., `john-doe.jpeg`)
2. Open `team.json`
3. Add a new object to the array:

```json
{
  "name": "John Doe",
  "role": "Senior Consultant",
  "credentials": ["MBA", "CPA"],
  "image": "/team/john-doe.jpeg",
  "imagePosition": "50% 18%",
  "bio": "John brings extensive experience in financial consulting..."
}
```

4. Save the file - changes will appear automatically!

### Removing a Team Member:

1. Open `team.json`
2. Find and delete the entire object for that team member
3. Remember to remove any trailing commas
4. Save the file

### Editing a Team Member:

1. Open `team.json`
2. Find the team member's object
3. Edit any field (name, role, bio, etc.)
4. Save the file

---

## 🏢 Clients

### File: `clients.json`

This file organizes clients by sector. Each sector contains an array of client objects:

```json
{
  "banks": [
    {
      "name": "QNB",
      "sector": "Banking & Finance"
    }
  ],
  "industrial": [...],
  "tourismHotels": [...],
  "constructionHousing": [...],
  "trading": [...],
  "educationTelecom": [...],
  "agriculture": [...],
  "investment": [...]
}
```

### Sectors Available:

- **banks**: Banking & Finance
- **industrial**: Manufacturing & Industrial
- **tourismHotels**: Tourism & Hotels
- **constructionHousing**: Construction & Housing
- **trading**: Trading & Distribution
- **educationTelecom**: Education & Telecommunications
- **agriculture**: Agriculture
- **investment**: Investment & Securities

### Fields:

- **name** (required): Company name
- **sector** (required): Display name of the sector

### Adding a New Client:

1. Decide which sector the client belongs to
2. Open `clients.json`
3. Find the appropriate sector array
4. Add a new client object:

```json
{
  "name": "New Company Name",
  "sector": "Banking & Finance"
}
```

5. **(Optional)** Add the company logo to `/public/logos/` and update `src/data/logos.ts`
6. Save the file

### Removing a Client:

1. Open `clients.json`
2. Find the sector containing the client
3. Delete the client object
4. Remove any trailing commas
5. Save the file

### Editing a Client:

1. Open `clients.json`
2. Find the client object
3. Edit the name or sector
4. Save the file

### Moving a Client to a Different Sector:

1. Copy the client object from the current sector
2. Paste it into the new sector's array
3. Delete it from the original sector
4. Save the file

---

## 🎨 Adding Client Logos (Optional)

If you want to display company logos on the Clients page:

1. Add the logo image to `/public/logos/` (use lowercase, no spaces)
   - Example: `new-company.png`

2. Open `/src/data/logos.ts`

3. Add an entry to the `localLogos` object:

```typescript
export const localLogos: Record<string, string> = {
  // ...existing logos...
  "New Company Name": "/logos/new-company.png",
};
```

4. The logo will automatically display on the Clients page!

---

## ✅ Quick Reference

### Adding Team Member Checklist:
- [ ] Add photo to `/public/team/`
- [ ] Add entry to `team.json`
- [ ] Save file

### Adding Client Checklist:
- [ ] Add entry to appropriate sector in `clients.json`
- [ ] (Optional) Add logo to `/public/logos/`
- [ ] (Optional) Add logo path to `logos.ts`
- [ ] Save files

### Tips:
- Always validate JSON syntax (use a JSON validator if unsure)
- Keep consistent formatting for readability
- Use meaningful file names for images (lowercase, hyphens instead of spaces)
- Test changes locally before deploying

---

## 🚨 Common Issues

**Issue**: Page shows error after editing JSON
**Solution**: Check for JSON syntax errors (missing commas, extra commas, unclosed brackets)

**Issue**: Team member photo not showing
**Solution**: Verify the image path is correct and the file exists in `/public/team/`

**Issue**: Client logo shows initials instead of logo
**Solution**: Either the logo file is missing, or the path in `logos.ts` is incorrect

**Issue**: Changes not appearing
**Solution**: Try refreshing the browser with hard reload (Cmd+Shift+R on Mac, Ctrl+Shift+R on Windows)

---

## 📝 Example: Complete Workflow

### Adding a new team member "Sarah Johnson":

1. Save her photo as `/public/team/sarah-johnson.jpeg`

2. Edit `team.json`:
```json
[
  ...existing entries...,
  {
    "name": "Sarah Johnson",
    "role": "Tax Director",
    "credentials": ["CPA", "MSc Taxation"],
    "image": "/team/sarah-johnson.jpeg",
    "imagePosition": "50% 22%",
    "bio": "Sarah has 15 years of experience in international tax planning and compliance..."
  }
]
```

3. Save and refresh - done! 🎉

### Adding a new client "Tech Solutions Inc" in the Trading sector:

1. Edit `clients.json`:
```json
{
  "trading": [
    ...existing entries...,
    {
      "name": "Tech Solutions Inc",
      "sector": "Trading"
    }
  ]
}
```

2. (Optional) Add logo at `/public/logos/tech-solutions.png`

3. (Optional) Edit `logos.ts`:
```typescript
"Tech Solutions Inc": "/logos/tech-solutions.png",
```

4. Save and refresh - done! 🎉

---

For any questions or issues, contact the development team.

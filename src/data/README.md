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

This file contains an array of client objects (just like `team.json`). Each client has the following structure:

```json
{
  "name": "QNB",
  "sector": "Banking & Finance",
  "logo": "/logos/qnb.png"
}
```

### Fields:

- **name** (required): Company name
- **sector** (required): Display name of the sector
- **logo** (optional): Path to company logo (place in `/public/logos/`)

### Available Sectors:

- Banking & Finance
- Manufacturing & Industrial
- Tourism & Hotels
- Construction & Housing
- Trading
- Education & Telecom
- Agriculture
- Investment

### Adding a New Client:

1. Add the company logo to `/public/logos/` (e.g., `company-name.png`)
2. Open `clients.json`
3. Add a new object to the array:

```json
{
  "name": "New Company Name",
  "sector": "Banking & Finance",
  "logo": "/logos/company-name.png"
}
```

4. Save the file - changes will appear automatically!

### Removing a Client:

1. Open `clients.json`
2. Find and delete the entire object for that client
3. Remember to remove any trailing commas
4. Save the file

### Editing a Client:

1. Open `clients.json`
2. Find the client object
3. Edit any field (name, sector, logo path, etc.)
4. Save the file

### Changing Client Sector:

1. Open `clients.json`
2. Find the client object
3. Change the `"sector"` value to a different sector
4. Save the file

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

### Adding a new client "Nile Bank" to Banking sector:

1. Save logo as `/public/logos/nile-bank.png`

2. Edit `clients.json`:
```json
[
  ...existing entries...,
  {
    "name": "Nile Bank",
    "sector": "Banking & Finance",
    "logo": "/logos/nile-bank.png"
  }
]
```

3. Save and refresh - done! 🎉

---

For any questions or issues, contact the development team.

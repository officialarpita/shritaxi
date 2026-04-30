# Editing Site Content — Shri Taxi

This guide is for the business owner. It walks through how to change the content on **shritaxi.com** without needing a developer. You only need a web browser and your GitHub login — nothing to install.

---

## Table of contents

1. [How this works (read first)](#1-how-this-works-read-first)
2. [Before you start: get access](#2-before-you-start-get-access)
3. [The basic editing workflow](#3-the-basic-editing-workflow)
4. [What lives where (quick map)](#4-what-lives-where-quick-map)
5. [Editing the fleet (vehicles)](#5-editing-the-fleet-vehicles)
6. [Editing tour packages](#6-editing-tour-packages)
7. [Editing popular routes](#7-editing-popular-routes)
8. [Editing services](#8-editing-services)
9. [Editing FAQs](#9-editing-faqs)
10. [Editing pickup/drop locations (booking form suggestions)](#10-editing-pickupdrop-locations-booking-form-suggestions)
11. [Editing testimonials](#11-editing-testimonials)
12. [Adding or replacing an image](#12-adding-or-replacing-an-image)
13. [Changing phone number / WhatsApp number](#13-changing-phone-number--whatsapp-number)
14. [Undoing a mistake](#14-undoing-a-mistake)
15. [Rules of thumb (avoid these mistakes)](#15-rules-of-thumb-avoid-these-mistakes)
16. [What NOT to touch](#16-what-not-to-touch)
17. [When to call the developer](#17-when-to-call-the-developer)

---

## 1. How this works (read first)

The website's content lives in a few small text files inside a GitHub repository (a folder hosted on github.com). When you save a change to any of these files, the website automatically rebuilds itself and the new content appears on shritaxi.com **within 1–2 minutes**. There is no separate "publish" button.

You will be editing through **github.com in your browser** — the same way you'd edit a Google Doc. You do not need to install anything.

The website you'll be updating is the live one at https://shritaxi.com.

---

## 2. Before you start

The repository sits under your own GitHub account (it's a private repo you own), so access is already sorted. You just need to:

1. **Log in to https://github.com** with your usual account.
2. **Bookmark the repository URL** — find it under "Your repositories" on github.com. It'll look like `https://github.com/officialarpita/shritaxi`. Save the link.
3. **(Optional) install the GitHub mobile app** if you'd like to make small edits from your phone — search "GitHub" on the App Store or Play Store. The web version on a laptop is usually easier for anything beyond a one-line tweak.

Once you can open the repo URL and see a list of files (`src`, `public`, `package.json`, etc.), you're ready.

---

## 3. The basic editing workflow

Every content change follows the same five steps. Memorise this — the rest of the guide is just *what* to type, not *how* to save.

1. **Open the file.** From the repo home page, click into folders (e.g. `src` → `data`) and then click the file name.
2. **Click the pencil icon** (✏️) at the top-right of the file viewer. This opens the editor.
3. **Make your change** in the editor.
4. **Scroll to the bottom.** In the "Commit changes" box, type a short note describing what you did (e.g. "Updated Innova price"). Leave "Commit directly to the main branch" selected. Click **Commit changes**.
5. **Wait 1–2 minutes**, then refresh shritaxi.com. Your change is live.

> **Tip — preview before going live:** If you're nervous about a change, in step 4 select **"Create a new branch for this commit"** instead. This generates a private preview link (Cloudflare will post it as a comment on the "Pull Request" page). You can review it, then click "Merge pull request" to push it live, or close the request to throw it away.

---

## 4. What lives where (quick map)

All editable content sits in **`src/data/`**. Each file controls one section of the site:

| File | Controls | Section on the site |
|---|---|---|
| `src/data/fleet.ts` | Vehicles you offer | "Our Fleet" + the booking form's vehicle dropdown |
| `src/data/packages.ts` | Tour packages | "Tour Packages" |
| `src/data/routes.ts` | Popular routes with distance/time | "Popular Routes" |
| `src/data/services.ts` | Services you offer | "Our Services" grid |
| `src/data/faqs.ts` | Frequently asked questions | "FAQ" |
| `src/data/locations.ts` | Pickup/drop suggestions | The booking form's location autocomplete |
| `src/data/testimonials.ts` | Customer reviews | "What Customers Say" |

Images live in **`src/assets/images/`** (covered in [section 12](#12-adding-or-replacing-an-image)).

Phone number, WhatsApp number, and similar contact info are *not* in these files — they're set in Cloudflare (covered in [section 13](#13-changing-phone-number--whatsapp-number)).

---

## 5. Editing the fleet (vehicles)

**File:** `src/data/fleet.ts`

Each vehicle is a block that looks like this:

```ts
  {
    id: 'sedan',
    name: 'Maruti Dzire',
    segment: 'Sedan',
    seats: 4,
    luggage: '2 large bags',
    bestFor: 'City rides and short airport transfers',
    image: dzireImg,
  },
```

### What each field means

| Field | What to put | Example |
|---|---|---|
| `id` | A short internal nickname, lowercase, no spaces. **Must be unique.** Used by the booking form. | `'sedan'` |
| `name` | Vehicle name shown to customers | `'Maruti Dzire'` |
| `segment` | Vehicle type/category | `'Sedan'`, `'SUV'`, `'Hatchback'` |
| `seats` | Number of passenger seats (a number, no quotes) | `4` |
| `luggage` | Luggage capacity, in plain words | `'2 large bags'` |
| `bestFor` | One-line summary of when to use this vehicle | `'Family trips, Char Dham'` |
| `image` | The image variable for the photo | `dzireImg` |

### To change an existing vehicle

Just edit the text inside the quotes. Example: change `'Maruti Dzire'` to `'Maruti Dzire 2024'`. Save (commit). Done.

### To add a new vehicle

1. First, add the image (see [section 12](#12-adding-or-replacing-an-image)). Note the image's filename.
2. At the **top** of `fleet.ts`, add an import line for your new image:
   ```ts
   import ertigaImg from '../assets/images/Ertiga.png';
   ```
   (`ertigaImg` is your nickname for it — pick anything camelCase. The path on the right must match the actual image filename exactly, including capitalisation and extension.)
3. Inside the `fleet = [` list, copy one of the existing blocks (the `{ ... },` chunk, including the trailing comma) and paste it **above** the closing `]`.
4. Update the values. Make sure `id` is unique (not used by another vehicle).
5. Save (commit).

### To remove a vehicle

Delete the entire block from `{` through the `},` line. Leave the rest of the list alone.

---

## 6. Editing tour packages

**File:** `src/data/packages.ts`

Each package looks like:

```ts
  {
    title: 'Mussoorie Day Trip',
    nights: 0,
    highlights: ['Kempty Falls', 'Mall Road', 'Gun Hill', 'Camel\'s Back Road'],
    image: mussoorieImg,
  },
```

| Field | What to put |
|---|---|
| `title` | Package name |
| `nights` | Number of nights (use `0` for day trips) |
| `highlights` | A list of bullet points. Each item in single quotes, separated by commas, all inside `[ ]`. |
| `image` | Optional. The image variable. Remove the whole line if you don't have a photo. |

**Apostrophe trick:** if a highlight contains a `'` (apostrophe), put a backslash before it: `'Camel\'s Back Road'`. Otherwise the file will break.

### To add a new package

1. Add the image (section 12) and add an `import` line at the top, same pattern as for vehicles.
2. Copy an existing block, paste it above the closing `]`, edit the values.

---

## 7. Editing popular routes

**File:** `src/data/routes.ts`

Each route is a single line:

```ts
  { from: 'Dehradun', to: 'Mussoorie', distanceKm: 35, approxDuration: '1 hr 30 min', image: mussoorieImg },
```

| Field | What to put |
|---|---|
| `from` | Pickup city |
| `to` | Destination |
| `distanceKm` | Distance in km, as a number (no quotes, no `km` text) |
| `approxDuration` | Travel time in plain words, in quotes |
| `image` | The image variable |

### To add a new route

Same pattern as packages: add the image import at the top of the file, then copy a route line, paste it above the `]`, edit the values.

---

## 8. Editing services

**File:** `src/data/services.ts`

Each service:

```ts
  {
    title: 'Airport Transfer',
    blurb: 'Jolly Grant Airport (DED) pickups and drops, 24/7 with flight tracking.',
    image: airportImg,
  },
```

| Field | What to put |
|---|---|
| `title` | Service name (keep it short — 3–5 words) |
| `blurb` | One-sentence description |
| `image` | Image variable |

The services are displayed in the order you list them. To reorder, cut a whole block (including the trailing `,`) and paste it where you want.

---

## 9. Editing FAQs

**File:** `src/data/faqs.ts`

This is the simplest file. Each FAQ:

```ts
  {
    q: 'Is hill driving with your drivers safe?',
    a: 'Our drivers are locals with years of experience...',
  },
```

| Field | What to put |
|---|---|
| `q` | The question, in single quotes |
| `a` | The answer, in single quotes |

**Long answers:** if your answer is long, you can keep it as one line — quotes can hold a whole paragraph. Just remember to escape any `'` inside as `\'`.

### To add an FAQ

Copy a block, paste it above the closing `]`, change the question and answer. Order matters — top of the list = first FAQ shown.

### To delete an FAQ

Delete the entire `{ ... },` block.

---

## 10. Editing pickup/drop locations (booking form suggestions)

**File:** `src/data/locations.ts`

This controls the autocomplete list that appears under the "Pickup" and "Drop" inputs in the booking form. It's just a long list of place names:

```ts
export const locations: string[] = [
  'Dehradun',
  'Clock Tower, Dehradun',
  'Rajpur Road, Dehradun',
  // ...
];
```

### To add a location

Add a new line in the right section, with the place name in single quotes and a comma at the end:

```ts
  'New Place Name',
```

Customers can still type any free-text location even if it's not in this list — this is only a suggestion list, not a restriction.

---

## 11. Editing testimonials

**File:** `src/data/testimonials.ts`

```ts
  {
    quote: 'Booked an Innova for our Char Dham yatra...',
    author: 'Priya S.',
    context: 'Char Dham — 10 days, family of 6',
  },
```

| Field | What to put |
|---|---|
| `quote` | The customer's words, in single quotes |
| `author` | Name (use first name + last initial, e.g. `'Priya S.'`, for privacy) |
| `context` | One-line context — what trip, when, group size |

> **Important:** only post real testimonials with the customer's permission. Ask over WhatsApp before adding.

---

## 12. Adding or replacing an image

Images live in **`src/assets/images/`**. Filenames can have capitals, but they're case-sensitive — `Dzire.png` and `dzire.png` are different files.

### Image guidelines

- **Format:** `.jpg`, `.jpeg`, `.png`, or `.webp`. Prefer `.jpg` for photos and `.png` for logos.
- **Size:** keep each image under **300 KB**. Resize/compress before uploading — try https://squoosh.app (free, in-browser).
- **Dimensions:** 1200×800 pixels is plenty for any section. Anything larger just slows the site down.
- **Filename:** no spaces, no special characters. Use simple names: `Auli.jpg`, `Ertiga.png`. Stick to the same style as existing files.

### To upload a new image

1. Open the repo on github.com.
2. Click into `src` → `assets` → `images`.
3. Click **Add file → Upload files**.
4. Drag your image in (or pick from your computer).
5. Scroll down, write a short note like "Added Ertiga photo," click **Commit changes**.

### To use the image somewhere

After uploading, you need to **reference** it in the relevant data file. Example for fleet:

1. Open `src/data/fleet.ts`.
2. At the top, near the other `import` lines, add:
   ```ts
   import ertigaImg from '../assets/images/Ertiga.png';
   ```
3. In the vehicle block where you want this image, write `image: ertigaImg,`.
4. Commit.

### To replace an existing image without renaming

If you just want to swap the photo of, say, the Innova:
1. Upload your new photo with **exactly the same filename** (`Crysta.png`) — GitHub will overwrite.
2. No code change needed. Site rebuilds and the new image shows up.

---

## 13. Changing phone number / WhatsApp number

These are **not** in the GitHub files. They're set in **Cloudflare Pages** so we can change them without rebuilding the site's content.

### Steps

1. Log in to https://dash.cloudflare.com.
2. Left sidebar → **Workers & Pages** → click the **shritaxi** project.
3. Top tabs → **Settings** → **Environment variables**.
4. Under **Production**, you'll see entries for:
   - `PUBLIC_BUSINESS_PHONE` — the "Call Now" number, format `+919999999999` (country code, no spaces, no dashes).
   - `PUBLIC_WHATSAPP_NUMBER` — same format. Usually the same as the business phone.
5. Click **Edit** next to the variable, change the value, **Save**.
6. Cloudflare won't apply env var changes until the next deploy. Trigger one:
   - Go to the **Deployments** tab → on the latest production deployment, click **⋯** → **Retry deployment**.
   - Or push any small content change via GitHub.
7. Wait 1–2 minutes, refresh the site, click "Call Now" — should dial the new number.

> **Format strictly:** always include the `+` and country code (`+91` for India), no spaces or dashes. Wrong: `9999999999`, `+91 99999 99999`. Right: `+919999999999`.

---

## 14. Undoing a mistake

If a change broke something on the site, you don't need a developer to roll back.

1. On the repo home page, click **Commits** (above the file list, near the green "Code" button).
2. Find your bad commit in the list.
3. Click the commit message to open it.
4. Top-right of the commit page → click **⋯** → **Revert**.
5. GitHub will create a "revert PR." Click **Merge pull request** → **Confirm merge**.
6. Wait 1–2 minutes — the site is back to how it was before that change.

If the site is fully broken (loads with errors), revert immediately and *then* call the developer to investigate.

---

## 15. Rules of thumb (avoid these mistakes)

These are the small things that quietly break the build. None are dangerous — Cloudflare will simply refuse to publish a broken file, so the **old version stays live** while you fix the new one. But it's faster to avoid them in the first place.

1. **Keep every comma.** Almost every line in these files ends with a comma `,`. If you delete one, the file breaks. When in doubt, more commas is better than fewer.
2. **Match every quote.** Every `'` opens and must be closed with another `'`. If your text contains an apostrophe, write it as `\'`. Example: `'Camel\'s Back Road'`.
3. **Match every bracket.** Every `{` has a matching `}`, every `[` has a matching `]`. If you delete a block, delete its `{ ... },` together — never just the middle.
4. **Numbers don't need quotes; text does.** `seats: 4` (no quotes) but `name: 'Dzire'` (with quotes).
5. **Don't translate field names.** Change the *value* (`'Maruti Dzire'`), never the field name on the left (`name:`). Field names are part of the code.
6. **Image filenames are case-sensitive.** `Crysta.png` ≠ `crysta.png`. Match exactly.
7. **One change at a time when possible.** If you edit five files in one commit and something breaks, it's harder to find which change caused it.

If you're unsure whether your edit is valid before committing, use the **"Create a new branch"** option in step 4 — Cloudflare will build a preview and tell you (in the pull request comments) if anything failed.

---

## 16. What NOT to touch

These files run the site's machinery. Editing them can take the site down.

- Anything outside `src/data/` and `src/assets/images/`
- `src/components/*.astro` — the page layout & styling
- `src/pages/index.astro` — the homepage structure
- `functions/api/book.ts` — the booking form's server code
- `astro.config.mjs`, `package.json`, `package-lock.json`, `tsconfig.json` — the build config
- `.env` files (if you ever see them) — secrets

If you need a layout or wording change on the homepage itself (the headline, the trust bar, the "Why choose us" boxes), that's a developer change — see next section.

---

## 17. When to call the developer

You can handle on your own:
- ✅ Adding/removing/editing vehicles, packages, routes, services, FAQs, locations, testimonials
- ✅ Replacing photos
- ✅ Changing phone & WhatsApp numbers in Cloudflare
- ✅ Reverting a bad change

Call the developer for:
- Changing the homepage headline, "Why choose us," or hero copy
- Adding a brand-new section to the homepage
- Anything to do with the booking form's fields or the Telegram notification
- Domain/SSL/Cloudflare account issues
- A build that keeps failing even after you revert
- Adding a new page (e.g. a separate `/about` or `/blog`)

**Developer contact:** _(fill in name + WhatsApp + email here)_

---

## Quick reference card (print this)

| I want to… | Open this file |
|---|---|
| Add/remove a car | `src/data/fleet.ts` |
| Edit a tour package | `src/data/packages.ts` |
| Update a popular route | `src/data/routes.ts` |
| Change a service blurb | `src/data/services.ts` |
| Add an FAQ | `src/data/faqs.ts` |
| Add a pickup location to autocomplete | `src/data/locations.ts` |
| Add a customer review | `src/data/testimonials.ts` |
| Replace a photo | Upload to `src/assets/images/` |
| Change phone / WhatsApp | Cloudflare → Pages → shritaxi → Settings → Environment variables |
| Undo a change | GitHub → Commits → ⋯ → Revert |

**Save → wait 1–2 minutes → refresh shritaxi.com.** That's the whole loop.

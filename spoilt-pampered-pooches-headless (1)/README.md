# Spoilt ’n Pampered Pooches — Headless (WordPress + Next.js)

A lightweight, SEO‑ready headless setup. Edit content in **WordPress**; the site renders via **Next.js** on **Vercel**.

## 1) WordPress (CMS)
Install on `cms.spoiltnpamperedpooches.com` (any managed WP host).

### Required Plugins
- Custom Post Type UI (create **Service**, **Location**, **Review**)
- Advanced Custom Fields (ACF)
- WPGraphQL
- WPGraphQL for ACF
- RankMath (optional but recommended)
- Optimole/ShortPixel (image)

### CPT & Fields (ACF)
**Service**
- priceFrom (text)
- includes (repeater: item)
- faqs (repeater: q, a)
- gallery (gallery)
- relatedServices (repeater or text[] of slugs)

**Location**
- areasServed (repeater or text[])
- landmarks (repeater or text[])
- faqs (repeater: q, a)
- primaryServices (text[] of service slugs)
- nearbyLocations (text[] of location slugs)

**Options (ACF Options page)**
- businessName, phone, address fields, GBP URL, WhatsApp URL, hours

> Ensure “Service” has slug `/services/{slug}` and “Location” has `/locations/{slug}`.

## 2) Next.js (Frontend)
- Create a new Vercel project from this repo.
- Add environment variables (Settings → Environment Variables):
  - `WP_GRAPHQL_ENDPOINT=https://cms.spoiltnpamperedpooches.com/graphql`
  - `SITE_URL=https://www.spoiltnpamperedpooches.com`
  - `BUSINESS_*` values from your NAP/GBP

### Development
```
npm i
npm run dev
```

### Build
```
npm run build && npm start
```

## 3) DNS
- **www + apex** → Vercel (A 76.76.21.21, CNAME cname.vercel-dns.com)
- **cms** → your WP host

## 4) Content Plan
**Locations (Essex):** Chelmsford, Billericay, Braintree, Rayleigh, Basildon, Loughton  
Create Location posts with deep local info: parks, parking, transport, local landmarks, common breeds, seasonal coat issues, FAQs.

**Services (high‑intent):**
- bath-and-brush
- full-groom
- puppy-groom-introduction
- de-shedding
- nail-trim
- teeth-cleaning
- hand-stripping (if applicable)
- cat-grooming (if applicable)

## 5) Internal Linking Rules
- Each Service links to 2–3 related services.
- Each Location links to 3 nearby locations + top services in that area.
- Sitewide footer: primary services + main locations.

## 6) SEO / JSON‑LD
- LocalBusiness/PetGrooming on home (components/JsonLd.jsx).
- Service schema on service pages.
- Canonicals, sitemap, robots preconfigured.

## 7) PageSpeed Loop
1. Launch on Vercel.
2. Run PageSpeed Insights (mobile & desktop).
3. Paste issues into your AI to generate specific fixes (font loading, image props, preload).
4. Commit changes → Vercel auto‑deploy.

## 8) Revalidation
ISR set to 60s globally. If you need instant updates after WP edits, add a Vercel webhook that hits a revalidate route or bump `revalidate` as needed.

---

### Slug Map (Initial)
Locations: `chelmsford`, `billericay`, `braintree`, `rayleigh`, `basildon`, `loughton`
Services: `bath-and-brush`, `full-groom`, `puppy-groom-introduction`, `de-shedding`, `nail-trim`, `teeth-cleaning`

Populate WP with those slugs to match the frontend routes.

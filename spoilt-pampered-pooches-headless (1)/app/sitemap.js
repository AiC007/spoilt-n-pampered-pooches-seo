export default async function sitemap() {
  const base = process.env.SITE_URL || "https://www.spoiltnpamperedpooches.com";
  return [
    { url: base, lastModified: new Date() },
    { url: `${base}/services`, lastModified: new Date() },
    { url: `${base}/locations`, lastModified: new Date() },
  ];
}

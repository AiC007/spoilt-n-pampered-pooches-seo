export default function robots() {
  const base = process.env.SITE_URL || "https://www.spoiltnpamperedpooches.com";
  return {
    rules: [
      { userAgent: '*', allow: '/' }
    ],
    sitemap: `${base}/sitemap.xml`,
    host: base
  };
}

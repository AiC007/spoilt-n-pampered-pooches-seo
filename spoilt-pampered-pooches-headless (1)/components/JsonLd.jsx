export default function JsonLd({ data }) {
  const json = JSON.stringify(data);
  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: json }} />;
}

export function localBusinessSchema({ name, phone, address, url, sameAs }) {
  return {
    "@context": "https://schema.org",
    "@type": "PetGrooming",
    "name": name,
    "telephone": phone,
    "url": url,
    "address": {
      "@type": "PostalAddress",
      "streetAddress": address?.line1,
      "addressLocality": address?.locality,
      "addressRegion": address?.region,
      "postalCode": address?.postcode,
      "addressCountry": address?.country || "GB"
    },
    "sameAs": sameAs || []
  };
}

export function serviceSchema({ name, description, url, image }) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    "serviceType": name,
    "name": name,
    "description": description,
    "provider": { "@type": "Organization", "name": "Spoilt ’n Pampered Pooches" },
    "areaServed": "Essex",
    "url": url,
    ...(image ? { "image": image } : {})
  }
}

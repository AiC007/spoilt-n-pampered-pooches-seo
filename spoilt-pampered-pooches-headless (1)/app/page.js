import SEO from '@/components/SEO';
import JsonLd, { localBusinessSchema } from '@/components/JsonLd';

export default function Home() {
  const url = process.env.SITE_URL || "https://www.spoiltnpamperedpooches.com";
  const schema = localBusinessSchema({
    name: process.env.BUSINESS_NAME || "Spoilt ’n Pampered Pooches",
    phone: process.env.BUSINESS_PHONE || "",
    url,
    address: {
      line1: process.env.BUSINESS_ADDRESS_LINE1 || "",
      locality: process.env.BUSINESS_ADDRESS_LOCALITY || "Chelmsford",
      region: process.env.BUSINESS_ADDRESS_REGION || "Essex",
      postcode: process.env.BUSINESS_POSTCODE || "",
      country: process.env.BUSINESS_COUNTRY || "GB"
    }
  });

  return (
    <>
      <SEO title="Dog Grooming in Essex" description="Friendly, professional dog grooming covering Chelmsford, Billericay, Braintree, Rayleigh, Basildon, and Loughton." canonical={url} />
      <JsonLd data={schema} />
      <section className="hero">
        <h1>Dog Grooming in Essex</h1>
        <p>Trusted, gentle grooming — book online or call today.</p>
        <div className="grid" style={{gridTemplateColumns:'repeat(auto-fit,minmax(220px,1fr))'}}>
          {[
            'Bath & Brush','Full Groom','Puppy Introduction','De-shedding','Teeth Cleaning','Nail Trim'
          ].map(x => <div className="card" key={x}><strong>{x}</strong><p>Learn more →</p></div>)}
        </div>
      </section>
    </>
  )
}

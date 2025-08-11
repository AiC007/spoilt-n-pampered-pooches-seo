import { wpQuery, QUERY_SERVICES } from '@/lib/wp';
import Link from 'next/link';
import SEO from '@/components/SEO';

export const revalidate = 60;

export default async function ServicesPage() {
  const data = await wpQuery(QUERY_SERVICES);
  const services = data?.services?.nodes || [];
  return (
    <>
      <SEO title="Grooming Services" description="Dog grooming services in Essex — detailed service pages and pricing." />
      <h1>Grooming Services</h1>
      <div className="grid" style={{gridTemplateColumns:'repeat(auto-fit,minmax(240px,1fr))'}}>
        {services.map(s => (
          <div className="card" key={s.slug}>
            <h3>{s.title}</h3>
            <p dangerouslySetInnerHTML={{__html: s.excerpt}}/>
            <Link href={`/services/${s.slug}`}>View service →</Link>
          </div>
        ))}
      </div>
    </>
  )
}

import { wpQuery, QUERY_LOCATION } from '@/lib/wp';
import SEO from '@/components/SEO';
import Link from 'next/link';

export const revalidate = 60;

export default async function LocationPage({ params }) {
  const { slug } = params;
  const data = await wpQuery(QUERY_LOCATION, { slug });
  const loc = data?.location;
  if (!loc) return <div>Not found</div>;

  const nearby = loc.acf?.nearbyLocations || [];
  const services = loc.acf?.primaryServices || [];

  return (
    <>
      <SEO title={`${loc.title} Dog Grooming`} description={`Professional dog grooming in ${loc.title}, Essex.`} canonical={`${process.env.SITE_URL}/locations/${slug}`} />
      <article>
        <h1>{loc.title} Dog Grooming</h1>
        <div dangerouslySetInnerHTML={{__html: loc.content}} />
        {!!services.length && (
          <section style={{marginTop:32}}>
            <h3>Popular services in {loc.title}</h3>
            <ul>{services.map(s => <li key={s}><Link href={`/services/${s}`}>{s.replace(/-/g,' ')}</Link></li>)}</ul>
          </section>
        )}
        {!!nearby.length && (
          <section style={{marginTop:32}}>
            <h3>Nearby areas</h3>
            <ul>{nearby.map(n => <li key={n}><Link href={`/locations/${n}`}>{n.replace(/-/g,' ')}</Link></li>)}</ul>
          </section>
        )}
      </article>
    </>
  );
}

import { wpQuery, QUERY_LOCATIONS } from '@/lib/wp';
import Link from 'next/link';
import SEO from '@/components/SEO';

export const revalidate = 60;

export default async function LocationsPage() {
  const data = await wpQuery(QUERY_LOCATIONS);
  const locations = data?.locations?.nodes || [];
  return (
    <>
      <SEO title="Locations in Essex" description="We cover Chelmsford, Billericay, Braintree, Rayleigh, Basildon, Loughton and nearby areas." />
      <h1>Locations We Cover</h1>
      <ul>{locations.map(l => <li key={l.slug}><Link href={`/locations/${l.slug}`}>{l.title}</Link></li>)}</ul>
    </>
  );
}

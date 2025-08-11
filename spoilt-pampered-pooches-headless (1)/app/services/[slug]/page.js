import { wpQuery, QUERY_SERVICE } from '@/lib/wp';
import SEO from '@/components/SEO';
import JsonLd, { serviceSchema } from '@/components/JsonLd';
import Link from 'next/link';

export const revalidate = 60;

export default async function ServicePage({ params }) {
  const { slug } = params;
  const data = await wpQuery(QUERY_SERVICE, { slug });
  const svc = data?.service;
  if (!svc) return <div>Not found</div>;

  const schema = serviceSchema({
    name: svc.title,
    description: svc.excerpt || "",
    url: `${process.env.SITE_URL}/services/${slug}`,
    image: svc?.featuredImage?.node?.sourceUrl
  });

  const related = (svc.acf?.relatedServices || []).map(slug => ({
    slug, title: slug.replace(/-/g,' ').replace(/\b\w/g, c=>c.toUpperCase())
  }));

  return (
    <>
      <SEO title={svc.title} description={svc.excerpt} canonical={`${process.env.SITE_URL}/services/${slug}`} />
      <JsonLd data={schema} />
      <article>
        <h1>{svc.title}</h1>
        <div dangerouslySetInnerHTML={{__html: svc.content}} />
        {!!related.length && (
          <section style={{marginTop:32}}>
            <h3>Related services</h3>
            <ul>{related.map(r => <li key={r.slug}><Link href={`/services/${r.slug}`}>{r.title}</Link></li>)}</ul>
          </section>
        )}
      </article>
    </>
  );
}

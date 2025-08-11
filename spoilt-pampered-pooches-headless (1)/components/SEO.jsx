import Head from 'next/head';

export default function SEO({ title, description, canonical }) {
  const t = title ? `${title} | Spoilt ’n Pampered Pooches` : "Spoilt ’n Pampered Pooches";
  return (
    <Head>
      <title>{t}</title>
      {description && <meta name="description" content={description} />}
      {canonical && <link rel="canonical" href={canonical} />}
      <meta name="viewport" content="width=device-width, initial-scale=1" />
    </Head>
  );
}

export async function wpQuery(query, variables = {}) {
  const endpoint = process.env.WP_GRAPHQL_ENDPOINT;
  if (!endpoint) throw new Error("Missing WP_GRAPHQL_ENDPOINT");
  const res = await fetch(endpoint, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ query, variables }),
    next: { revalidate: 60 } // ISR default
  });
  const json = await res.json();
  if (json.errors) {
    console.error(json.errors);
    throw new Error(json.errors[0]?.message || "GraphQL error");
  }
  return json.data;
}

// Queries
export const QUERY_SERVICES = `
  query Services {
    services(first: 100) {
      nodes { id slug title excerpt featuredImage { node { sourceUrl } } }
    }
  }
`;

export const QUERY_SERVICE = `
  query Service($slug: ID!) {
    service(id: $slug, idType: SLUG) {
      id slug title content excerpt
      seoTitle: seo { title metaDesc }
      acf {
        priceFrom
        includes
        faqs { q a }
        gallery { sourceUrl }
        relatedServices
      }
      featuredImage { node { sourceUrl } }
    }
  }
`;

export const QUERY_LOCATIONS = `
  query Locations {
    locations(first: 100) {
      nodes { id slug title excerpt }
    }
  }
`;

export const QUERY_LOCATION = `
  query Location($slug: ID!) {
    location(id: $slug, idType: SLUG) {
      id slug title content excerpt
      acf {
        areasServed
        landmarks
        faqs { q a }
        primaryServices
        nearbyLocations
      }
    }
  }
`;

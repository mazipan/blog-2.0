import {
  PRODUCTION_URL,
  SLUG_CATEGORY,
  SLUG_PAGE
} from '~/constants'

export function constructJsonLdBreadcrumb ({ category, title, slug }) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      {
        '@type': 'ListItem',
        position: 1,
        name: 'Home',
        item: PRODUCTION_URL
      },
      {
        '@type': 'ListItem',
        position: 2,
        name: category,
        item: SLUG_CATEGORY(category)
      },
      {
        '@type': 'ListItem',
        position: 3,
        name: title,
        item: SLUG_PAGE(slug)
      }
    ]
  }
}

export function constructJsonLdArticle ({ slug, title, cover, date, desc }) {
  return {
    '@context': 'https://schema.org',
    '@type': 'NewsArticle',
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': SLUG_PAGE(slug)
    },
    headline: title,
    image: [
      cover
    ],
    datePublished: new Date(date).toISOString(),
    dateModified: new Date(date).toISOString(),
    author: {
      '@type': 'Person',
      name: 'Irfan Maulana'
    },
    publisher: {
      '@type': 'Organization',
      name: 'mazipan',
      logo: {
        '@type': 'ImageObject',
        url: `${PRODUCTION_URL}/favicon-192x192.png`
      }
    },
    description: desc
  }
}

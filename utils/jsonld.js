import {
  PRODUCTION_URL,
  SLUG_CATEGORY,
  SLUG_PAGE
} from '~/constants'

export function constructJsonLdBreadcrumb (category, title, slug) {
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

import publisedContents from '../contents/index.js'
import categoriesContent from '../contents/categories.js'
import draftContents from '../contents/drafts/index.js'
import ghibahContents from '../contents/ghibah/index.js'

const productionUrl = process.env.FULL_DOMAIN

export const PRODUCTION_URL = productionUrl

export const ENABLE_ADS = process.env.ENABLE_ADS || false
export const ADS_CLIENT = process.env.ADS_CLIENT || ''

export const SLUG_PAGE = slug => `${productionUrl}/${slug}`
export const SLUG_CATEGORY = category => `${productionUrl}/category/${category}`

export const PREFIX_SHARE_FB = 'https://www.facebook.com/sharer/sharer.php?u='
export const PREFIX_SHARE_TW = 'https://twitter.com/intent/tweet?text='
export const PREFIX_DISCUS_TW = 'https://mobile.twitter.com/search?q='

export const META_TITLE = '@mazipan — A personal blog by Irfan Maulana'
export const META_DESC = 'A personal blog by Irfan Maulana'

export const DATA_CONTENTS = publisedContents
export const DATA_DRAFTS = draftContents
export const DATA_CATEGORIES = categoriesContent
export const DATA_GHIBAH = ghibahContents
export const DATA_OTHER = [
  '/success-subscribed',
  '/amp',
  '/about',
  '/amp/about',
  '/archives',
  '/amp/archives',
  '/now',
  '/amp/now',
  '/ebooks',
  '/interviews',
  '/talks'
]

export const ROOT_DRAFT = '/drafts'
export const ROOT_GHIBAH = '/ghibahprogrammer'
export const ROOT_CATEGORY = '/category'

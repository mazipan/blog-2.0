const productionUrl = process.env.FULL_DOMAIN

export const PRODUCTION_URL = productionUrl

export const ENABLE_ADS = process.env.ENABLE_ADS || false
export const ADS_CLIENT = process.env.ADS_CLIENT || ''

export const SLUG_PAGE = slug => `${productionUrl}/${slug}`
export const SLUG_CATEGORY = category => `${productionUrl}/category/${category}`

export const PREFIX_SHARE_FB = `https://www.facebook.com/sharer/sharer.php?u=`
export const PREFIX_SHARE_TW = `https://twitter.com/intent/tweet?text=`
export const PREFIX_DISCUS_TW = `https://mobile.twitter.com/search?q=`

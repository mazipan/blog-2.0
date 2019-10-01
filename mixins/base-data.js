
import {
  formatReadingTime,
  formatPostDate
} from '~/utils/helpers.js'

import {
  PRODUCTION_URL,
  ENABLE_ADS,
  ADS_CLIENT
} from '~/constants'

export default {
  data () {
    return {
      formatReadingTime,
      formatPostDate,
      productionUrl: PRODUCTION_URL,
      ENABLE_ADS,
      ADS_CLIENT
    }
  }
}

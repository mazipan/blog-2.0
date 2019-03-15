<template>
  <div class="meta">
    <small class="meta__date">
      🗓 {{ formatPostDate(metaDate) }}
    </small>
    <small class="dot"> • </small>
    <small class="meta__read">{{ formatReadingTime(metaMinuteToRead) }}</small>
    <small
      v-if="isShowStats"
      class="dot"> • </small>
    <small v-if="isShowStats">
      ❤️ {{ statsLikes }} likes
    </small>
    <small
      v-if="isShowStats"
      class="dot"> • </small>
    <small v-if="isShowStats">
      📖 {{ statsRead }} read
    </small>
  </div>
</template>

<script>
import { formatReadingTime, formatPostDate } from '../utils/helpers.js'

export default {
  name: 'MetaData',
  props: {
    metaDate: {
      type: String,
      default: ''
    },
    metaMinuteToRead: {
      type: Number,
      default: 0
    },
    isShowStats: {
      type: Boolean,
      default: false
    },
    statsLikes: {
      type: Number,
      default: 0
    },
    statsRead: {
      type: Number,
      default: 0
    }
  },
  data () {
    return {
      formatReadingTime,
      formatPostDate
    }
  }
}
</script>

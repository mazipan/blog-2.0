<template>
  <section class="pages">
    <div
      v-for="meta in metas"
      :key="meta.title"
      class="pages__item">
      <span
        v-if="meta.sponsored"
        class="pages__sponsored">sponsored</span>
      <nuxt-link
        :to="`/amp/${meta.slug}/?utm_source=home`"
        :title="meta.title"
        class="pages__link">
        <h2 class="pages__title">
          {{ meta.title }}
        </h2>
      </nuxt-link>
      <MetaData
        :meta-date="meta.date"
        :meta-minute-to-read="meta.minute2read" />
      <div>
        <p>
          {{ meta.description }}
        </p>
      </div>

      <div class="pages__tags">
        <div
          v-for="category in meta.categories"
          :key="category"
          class="pages__tag">
          <nuxt-link
            :to="`/amp/category/${category}?utm_source=home`"
            :title="category">
            #{{ category }}
          </nuxt-link>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import Contents from '~/contents/index.js'
import MetaData from '~/components/MetaData'
import BaseData from '~/mixins/base-data'

export default {
  name: 'HomepageAmp',
  layout: 'amp-homepage',
  components: {
    MetaData
  },
  mixins: [
    BaseData
  ],
  head () {
    const url = `${this.productionUrl}/`
    return {
      link: [
        { hid: 'canonical', rel: 'canonical', href: url }
      ]
    }
  },
  async asyncData ({ store }) {
    async function asyncImport (blogSlug) {
      const allMarkdown = await import(`~/contents/published/${blogSlug}/index.md`)
      return allMarkdown.attributes
    }

    return Promise.all(Contents.data.map(blogSlug => asyncImport(blogSlug)))
      .then((res) => {
        return {
          metas: res
        }
      })
  }
}
</script>

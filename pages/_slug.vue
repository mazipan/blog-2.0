<script>
export default {
  name: 'SlugPage',
  async asyncData ({ params, store }) {
    const fileContent = await import(`~/contents/markdown/${params.slug}/index.md`)
    const attr = fileContent.attributes
    return {
      name: params.slug,
      title: attr.title,
      slug: attr.slug,
      date: attr.date,
      description: attr.description,
      renderFunc: fileContent.vue.render,
      staticRenderFuncs: fileContent.vue.staticRenderFns,
      fileContent
    }
  },
  created: function () {
    this.templateRender = new Function(this.renderFunc)() // eslint-disable-line no-new-func
    this.$options.staticRenderFns = new Function(this.staticRenderFuncs)() // eslint-disable-line no-new-func
  },
  render: function (createElement) {
    return this.templateRender ? this.templateRender() : createElement('div', 'Rendering')
  }
}
</script>

<style lang="scss" scoped>

</style>

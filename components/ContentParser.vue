<script>
import Prism from 'prismjs'
import 'prism-themes/themes/prism-a11y-dark.css'

// import 'prismjs/plugins/line-highlight/prism-line-highlight.css'
// import 'prismjs/plugins/line-highlight/prism-line-highlight.js'

// import 'prismjs/plugins/line-numbers/prism-line-numbers.css'
// import 'prismjs/plugins/line-numbers/prism-line-numbers.js'

export default {
  name: 'ContentParser',
  props: {
    renderFn: {
      type: String,
      default: ''
    },
    staticRenderFn: {
      type: String,
      default: ''
    }
  },
  created: function () {
    this.templateRender = new Function(this.renderFn)() // eslint-disable-line no-new-func
    this.$options.staticRenderFns = new Function(this.staticRenderFn)() // eslint-disable-line no-new-func
  },
  mounted () {
    Prism.highlightAll()
  },
  render: function (createElement) {
    return this.templateRender ? this.templateRender() : createElement('div', 'Rendering')
  }
}
</script>

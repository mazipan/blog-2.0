<script>
import Prism from 'prismjs'
import 'prismjs/themes/prism-tomorrow.css'

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

<style lang="scss" scoped>
a {
  color: var(--textHighlight);
  text-decoration: underline;
}
p {
  line-height: 1.5;
}
img{
  width: 90%;
  height: auto;
  border-radius: 10px;
  box-shadow: 1px 1px 8px 5px rgba(0, 0, 0, 0.2);
}
</style>

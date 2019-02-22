import { getMatchedComponents } from '~/.nuxt/utils.js'
import Contents from '~/contents/index.js'

// Static middleware to update `asyncData/fetch` when using `nuxt generate`
export default async ({ app, route }) => {
  if (process.static) {
    const Components = getMatchedComponents(route)

    Components.forEach((Component) => {
      const cleanPath = route.path.replace('/', '')
      const isPageDetail = Contents.find(item => item === cleanPath)

      if (typeof isPageDetail !== 'undefined') {
        console.log(Component.name, route.path)
        Component.options.asyncData = async function () {
          const fileContent = await import(`~/contents/markdown${route.path}/index.md`)

          const attr = fileContent.attributes
          return {
            meta: {
              title: attr.title,
              slug: attr.slug,
              date: attr.date,
              minute2read: attr.minute2read,
              description: attr.description
            },
            renderFn: fileContent.vue.render,
            staticRenderFn: fileContent.vue.staticRenderFns
          }
        }
      }
    })
  }
}

const path = require('path')
const fileUtils = require('./file-utils');

(async function getDataMarkdown () {
  const DIR_SCOPE = fileUtils.getDirPublished()
  const res = await fileUtils.getAllMarkdown(DIR_SCOPE)

  const categoriesMap = new Map()

  for (const key in res) {
    const item = res[key]
    item.categories.map(item => categoriesMap.set(item, item))
  }
  const categoriesArray = Array.from(categoriesMap.values())
  const categoryFile = path.resolve(fileUtils.getDirContent(), 'categories.js')

  fileUtils.writeFile(
    categoryFile,
    `export default { data: ${JSON.stringify(categoriesArray)} }`
  )
})()

const path = require('path')
const fileUtils = require('./file-utils');

(async function generateScheme () {
  const RESULT_TEMPLATE = {
    claps: {},
    pageview: {}
  }

  console.log('Generating file schema for firebase')
  const res = await fileUtils.getAllPublishedPath()
  res.map(item => {
    RESULT_TEMPLATE.claps[item] = 0
    RESULT_TEMPLATE.pageview[item] = 0
    return item
  })

  fileUtils.writeFile(
    path.resolve(fileUtils.getDirRoot(), 'firebase-db-export.json'),
    JSON.stringify(RESULT_TEMPLATE)
  )
  console.log('Success create file schema for firebase')
})()

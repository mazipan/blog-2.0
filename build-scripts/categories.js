const fs = require('fs-extra')
const path = require('path')
const markdown = require('markdown-parse')
const allMarkdownContent = require('../contents/node-index.js')
const FOLDER_CONTENTS = path.resolve('./contents/')

function getDataMarkdown (data) {
  let categories = []
  let map = new Map()
  data.forEach(item => {
    const file = path.join(FOLDER_CONTENTS, `/published/${item}/index.md`)
    const fileContent = fs.readFileSync(file, 'utf8')
    markdown(fileContent, function (err, result) {
      if (err) {
        console.log(err)
        return
      }
      result.attributes.categories.map(item => map.set(item, item))
      categories = Array.from(map.values())
    })
  })

  setTimeout(function () {
    const stream = fs.createWriteStream(path.join(FOLDER_CONTENTS, `/categories.js`))
    stream.write(`export default { data: ${JSON.stringify(categories)} }`)
    stream.end()
    console.log('success generate categories file')
  }, 3000)
}

getDataMarkdown(allMarkdownContent)

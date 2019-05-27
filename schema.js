const allMarkdownContent = require('./contents/node-index.js')

const fs = require('fs-extra')
const path = require('path')

function generateData () {
  let resultObj = {}
  allMarkdownContent.map(item => {
    resultObj[item] = {
      claps: 0,
      hits: 0
    }

    return item
  })

  writeFile(JSON.stringify(resultObj))
}

function writeFile (content) {
  const stream = fs.createWriteStream(path.resolve('./firebase-db-export.json'))
  stream.write(content)
  stream.end()
}

// run in first attempt
generateData()

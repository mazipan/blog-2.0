const allMarkdownContent = require('../contents/node-index.js')

const fs = require('fs-extra')
const path = require('path')

function generateData () {
  const resultObj = {
    claps: {

    },
    pageview: {

    }
  }
  allMarkdownContent.map(item => {
    resultObj.claps[item] = 0
    resultObj.pageview[item] = 0

    return item
  })

  writeFile(JSON.stringify(resultObj))
}

function writeFile (content) {
  const stream = fs.createWriteStream(path.resolve(__dirname, './firebase-db-export.json'))
  stream.write(content)
  stream.end()
}

// run in first attempt
generateData()

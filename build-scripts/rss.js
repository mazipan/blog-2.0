const fs = require('fs-extra')
const path = require('path')
const markdown = require('markdown-parse')
const RSS = require('rss')
const pkg = require('../package')
const allMarkdownContent = require('../contents/node-index.js')

const appTitle = `@mazipan — A personal blog by Irfan Maulana`
const productionUrl = 'https://www.mazipan.xyz'
const iconUrl = `${productionUrl}/icon.png`

const FOLDER_CONTENTS = path.resolve('./contents/')
const FOLDER_DIST = path.resolve('./dist/')

let FEED_RSS = new RSS({
  title: appTitle,
  description: pkg.description,
  site_url: productionUrl,
  image_url: iconUrl
})

function generateFeedData (data) {
  data.forEach(item => {
    const file = path.join(FOLDER_CONTENTS, `/published/${item}/index.md`)
    const fileContent = fs.readFileSync(file, 'utf8')
    markdown(fileContent, function (err, result) {
      if (err) {
        console.log(err)
        return
      }
      let feed = {}
      feed.title = result.attributes.title
      feed.author = 'Irfan Maulana - @mazipan'
      feed.date = new Date(result.attributes.date).toISOString()
      feed.url = `${productionUrl}/${result.attributes.slug}` || ''
      feed.guid = `${result.attributes.slug}` || ''
      feed.description = result.attributes.description || ''
      feed['content:encoded'] = result.html || ''
      FEED_RSS.item(feed)
    })
  })
}

generateFeedData(allMarkdownContent)

var feedXml = FEED_RSS.xml({ indent: true })
const stream = fs.createWriteStream(path.join(FOLDER_DIST, `/feed.xml`))
stream.write(feedXml)
stream.end()

console.log('success generate feed.xml')

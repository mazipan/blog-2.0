const path = require('path')
const fs = require('fs-extra')
const appRootDir = require('app-root-dir')
const fm = require('front-matter')

const DIR_ROOT = path.resolve(appRootDir.get())
const DIR_CONTENT = path.resolve(appRootDir.get(), 'contents')
const DIR_PUBLISHED = path.resolve(appRootDir.get(), 'contents', 'published')

const writeFile = (pathFile, content) => {
  const stream = fs.createWriteStream(pathFile)
  stream.write(content)
  stream.end()
}

const readDirSync = async (pathDir) => {
  return fs.readdir(pathDir)
}

const getAllPublishedPath = async () => {
  const filenames = await readDirSync(DIR_PUBLISHED)
  return filenames
}

const getAllMarkdown = async (DIR_SCOPE) => {
  const filenames = await readDirSync(DIR_SCOPE)

  const attributes = {}
  for (let i = 0; i < filenames.length; i++) {
    const item = filenames[i]
    const fileMd = path.resolve(DIR_SCOPE, item, 'index.md')
    const fileContent = await fs.readFileSync(fileMd, 'utf8')
    const result = fm(fileContent)
    attributes[fileMd] = result.attributes
  }
  return attributes
}

exports.getDirRoot = () => DIR_ROOT
exports.getDirContent = () => DIR_CONTENT
exports.getDirPublished = () => DIR_PUBLISHED
exports.writeFile = writeFile
exports.readDirSync = readDirSync
exports.getAllPublishedPath = getAllPublishedPath
exports.getAllMarkdown = getAllMarkdown

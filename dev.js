import fs from 'fs'
import { exportSitemap } from './sitemap'
import sitemap from './sitemap/mock.json'

const { ENTITY, FORMAT } = process.env

const toFile = (stream) => {
  const chunks = []

  stream.on('data', (data) => {
    chunks.push(data)
  })

  stream.on('end', () => {
    const fileData = Buffer.concat(chunks)
    fs.writeFileSync(`${__dirname}/dist/${ENTITY}.${FORMAT}`, fileData)
  })
}

switch (process.env.ENTITY) {
  case 'sitemap': {
    exportSitemap(sitemap, { format: FORMAT }).then(toFile)
    break
  }
  default: {
    throw new Error(`Unknown entity for export: ${ENTITY}`)
  }
}

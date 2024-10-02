import fs from 'fs'
// @ts-ignore
import compressor from 'primitive-compressor'
import { exportSitemap } from './sitemap'
import data from './sitemap/mock.json'

data.WireframePrimitive = data.WireframePrimitive.map(compressor.decompressWireframePrimitive)

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

const dataToFile = (html) => {
  fs.writeFileSync(`${__dirname}/../dist/${ENTITY}.${FORMAT}`, html)
}

switch (process.env.ENTITY) {
  case 'sitemap': {
    exportSitemap(data, { format: FORMAT }).then(dataToFile)
    break
  }
  default: {
    throw new Error(`Unknown entity for export: ${ENTITY}`)
  }
}

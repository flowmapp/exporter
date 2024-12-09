import compressor from 'primitive-compressor'
import pdf from './SitemapPrint.tsx'

export const exportSitemap = (sitemap, { options, format } = {}) => {
  if (!sitemap) {
    throw new Error('No sitemap passed for export')
  }

  switch (format) {
    case 'pdf': {
      try {
        sitemap.WireframePrimitive = sitemap.WireframePrimitive.map(compressor.decompressWireframePrimitive)
        return pdf(sitemap, options)
      } catch (err) {
        console.error('cant export pdf', err)
      }
    }
    default: {
      throw new Error(`Unknown sitemap export format ${format}`)
    }
  }
}

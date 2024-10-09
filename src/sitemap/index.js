import pdf from './SitemapPrint.js'

export const exportSitemap = (sitemap, { options, format } = {}) => {
  if (!sitemap) {
    throw new Error('No sitemap passed for export')
  }

  switch (format) {
    case 'pdf': {
      try {
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

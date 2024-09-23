import pdf from './SitemapPrint.js'

export const exportSitemap = (sitemap, { options, format } = {}) => {
  if (!sitemap) {
    throw new Error('No sitemap passed for export')
  }

  switch (format) {
    case 'pdf': {
      return pdf(sitemap, { options })
    }
    default: {
      throw new Error(`Unknown sitemap export format ${format}`)
    }
  }
}

import pdf from './pdf.jsx'

export const exportSitemap = (sitemap, { options, format } = {}) => {
  switch (format) {
    case 'pdf': {
      return pdf(sitemap, { options })
    }
    default: {
      throw new Error(`Unknown sitemap export format ${format}`)
    }
  }
}

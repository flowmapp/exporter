import pdf from './pdf.jsx'

export const exportUserflow = (userflow, { options, format } = {}) => {
  switch (format) {
    case 'pdf': {
      return pdf(userflow, { options })
    }
    default: {
      throw new Error(`Unknown userflow export format ${format}`)
    }
  }
}

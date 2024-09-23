import pdf from './pdf.jsx'

export const exportUserflow = (userflow, { options, format } = {}) => {
  if (!userflow) {
    throw new Error('No userflow passed for export')
  }

  switch (format) {
    case 'pdf': {
      return pdf(userflow, { options })
    }
    default: {
      throw new Error(`Unknown userflow export format ${format}`)
    }
  }
}

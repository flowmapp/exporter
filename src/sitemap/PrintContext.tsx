import { createContext, PropsWithChildren, useContext } from 'react'
import { SitemapExportData, SitemapPdfExportBackendOptions } from './generalTypes'

type PrintContextData = { sitemap: SitemapExportData; options: SitemapPdfExportBackendOptions }

const PrintContext = createContext<PrintContextData | null>(null)

export const PrintContextProvider: React.FC<PropsWithChildren<PrintContextData>> = ({ sitemap, options, children }) => {
  return <PrintContext.Provider value={{ sitemap, options }}>{children}</PrintContext.Provider>
}

export const usePrintContext = () => {
  const ctx = useContext(PrintContext)
  if (!ctx) {
    throw new Error('usePrintContext must be used within a PrintContextProvider')
  }

  return ctx
}

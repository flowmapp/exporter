export type Estimate = {
  id: string
  title: string
  rate: number
  sortIndex: string
  isFixedSum: boolean
  sitemapId: string
}

export type TableEstimate = Estimate & { hours: number; amount: number }

export type SitemapPageEstimate = {
  estimateId: string
  id: string
  amount: number
  sitemapPageId: string
  estimate: Estimate | null
}

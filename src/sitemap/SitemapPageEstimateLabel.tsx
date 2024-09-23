// import { FC } from 'react'
// import { Label } from 'src/common/Label/Label'
// import { Estimate } from './estimateTypes'

// type Props = {
//   pageId: string
//   estimates: Estimate[]
// }
// export const SitemapPageEstimateLabel: FC<Props> = ({ pageId, estimates }) => {
//   const formatCurrency = useCurrencyFormatter()
//   const { hours, rate } = getPageEstimate(estimates, pageId)

//   const hoursFormatted = formatEstimateHours(hours.toString())
//   const amountFormatted = formatCurrency(rate)

//   return <Label>{`${hoursFormatted} / ${amountFormatted}`}</Label>
// }

// const getPageEstimate = (estimates: Estimate[], pageId: string) => {
//   const filteredSitemapPagesEstimates = sitemapPagesEstimates?.filter(
//     (pageEstimate) => pageEstimate.sitemapPageId === pageId && !pageEstimate.estimate?.isFixedSum,
//   )

//   const result = filteredSitemapPagesEstimates?.reduce(
//     (sum, pageEstimate) => {
//       sum.hours = sum.hours + pageEstimate.amount
//       sum.rate = sum.rate + pageEstimate.amount * (pageEstimate?.estimate?.rate || 0)

//       return sum
//     },
//     {
//       hours: 0,
//       rate: 0,
//     },
//   )

//   return result || { hours: 0, rate: 0 }
// }

import React from 'react'
import PrintChapterContainer from 'src/common/PrintChapterContainer'
import { compareIndex } from 'src/common/sortOrder'
import { usePrintContext } from './PrintContext'

const EstimatesPage: React.FC = () => {
  const { sitemap, options } = usePrintContext()
  if (!options.includes('estimates')) return null

  const estimates = sitemap.estimates.sort(compareIndex)
  const sitemapPagesEstimates = sitemap.sitemapPageEstimates
  const getSummaryEstimateHoursById = (estimateId: string) => {
    return sitemapPagesEstimates?.reduce((sum, pageEstimate) => {
      if (pageEstimate.estimateId === estimateId) {
        sum = sum + pageEstimate.amount
      }
      return sum
    }, 0)
  }

  const hourlyCosts = estimates.filter((estimate) => !estimate.isFixedSum)

  const additionalCosts = estimates.filter((estimate) => estimate.isFixedSum)

  const totalHours = sitemapPagesEstimates?.reduce((sum, pageEstimate) => {
    return sum + pageEstimate.amount
  }, 0)

  const totalSum =
    hourlyCosts.reduce((sum, estimate) => {
      const summaryEstimateHours = getSummaryEstimateHoursById(estimate.id)
      return sum + summaryEstimateHours * estimate.rate
    }, 0) + additionalCosts.reduce((sum, estimate) => sum + estimate.rate, 0)

  return (
    <PrintChapterContainer>
      <h2 className="mb-[7mm]">Estimation</h2>
      {!!hourlyCosts && (
        <table className="w-[18cm] mb-[7mm]">
          <thead>
            <tr className="text-xs text-neutral-gray-400 border-b border-b-neutral-gray-80">
              <th className="text-left py-[2mm] w-1/3">Item</th>
              <th className="text-right w-1/5">Rate</th>
              <th className="text-right w-1/5">Hours</th>
              <th className="text-right w-1/5">Amount</th>
            </tr>
          </thead>
          <tbody>
            {hourlyCosts.map((estimate) => {
              const summaryEstimateHours = getSummaryEstimateHoursById(estimate.id)
              return (
                <tr key={estimate.id} className="text-m text-gray-880 border-b border-b-neutral-gray-80">
                  <td className="tet-left py-[2mm]">{estimate.title}</td>
                  <td className="text-right">{formatCurrency(sitemap.currency, estimate.rate)}</td>
                  <td className="text-right">{formatEstimateHours(summaryEstimateHours)}</td>
                  <td className="text-right">
                    {formatCurrency(sitemap.currency, summaryEstimateHours * estimate.rate)}
                  </td>
                </tr>
              )
            })}
          </tbody>
        </table>
      )}

      {!!additionalCosts && (
        <table className="w-[18cm] mb-6">
          <thead>
            <tr className="text-xs text-neutral-gray-400 border-b border-b-neutral-gray-80">
              <th className="text-left py-[2mm]">Additional Cost</th>
              <th className="text-right">Amount</th>
            </tr>
          </thead>
          <tbody>
            {additionalCosts.map((estimate) => {
              return (
                <tr key={estimate.id} className="text-m text-gray-880 border-b border-b-neutral-gray-80">
                  <td className="tet-left py-[2mm]">{estimate.title}</td>
                  <td className="text-right">{formatCurrency(sitemap.currency, estimate.rate)}</td>
                </tr>
              )
            })}
          </tbody>
        </table>
      )}

      <table className="w-[18cm] mb-6 text-gray-880 font-bold">
        <tbody>
          <tr>
            <td className="w-1/3">&nbsp;</td>
            <td className="text-right text-m w-1/5">Total:</td>
            <td className="text-right w-1/5">{formatEstimateHours(totalHours)}</td>
            <td className="text-right w-1/5">{formatCurrency(sitemap.currency, totalSum)}</td>
          </tr>
        </tbody>
      </table>
    </PrintChapterContainer>
  )
}

export default EstimatesPage

const format = new Intl.NumberFormat().format

function formatCurrency(currency: string, value?: string | number): string {
  const preparedValue = Number(value)
  return isNaN(preparedValue) ? '0' + ' ' + currency : format(preparedValue) + ' ' + currency
}

const formatEstimateHours = (value: number) => {
  return `${value}h`
}

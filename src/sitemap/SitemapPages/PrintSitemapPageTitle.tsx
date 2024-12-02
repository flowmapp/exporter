import { LinkurlIcon, TagIcon } from 'src/common/icons/16'
import { SitemapPageType } from '../generalTypes'
import { Label } from 'src/common/Label/Label'
import { Dollar20Icon } from 'src/common/icons/20'
import { SitemapPageEstimate } from '../estimateTypes'
import { SPECIAL_COLOR } from 'src/common/colors'
import React from 'react'
import { usePrintContext } from '../PrintContext'

const PrintSitemapPageTitle: React.FC<{
  page: SitemapPageType
  subtitle: string
  insertLink?: boolean
}> = ({ page, subtitle, insertLink }) => {
  const hasLabels = !!page.labels.length

  const content = [
    <div
      style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        gap: '8px',
      }}
    >
      <Dollar20Icon size={16} />
      <SitemapPageEstimateLabel estimates={page.estimates} />
    </div>,
    hasLabels && (
      <div className="flex flex-nowrap items-center gap-2">
        <TagIcon />
        {page.labels?.map((label) => (
          <Label key={label.id} color={label.color}>
            {label.title}
          </Label>
        ))}
      </div>
    ),
    page.pageLink && (
      <div className="flex flex-nowrap items-center gap-2 w-full overflow-hidden text-ellipsis">
        <LinkurlIcon />
        <a href={page.pageLink} className="text-gray-560 no-underline text-nowrap">
          {formatPageLink(page.pageLink)}
        </a>
      </div>
    ),
  ].filter(Boolean)

  return (
    <div className="mb-4" id={insertLink ? `page/${page.id}` : undefined}>
      <h2 className="mb-1">
        {page.title} {subtitle ? '/ ' + subtitle : null}
      </h2>
      <div className="flex flex-nowrap items-center gap-2">
        {content.map((item, index) => (
          <React.Fragment key={index}>
            {item}
            {index !== content.length - 1 && <Divider />}
          </React.Fragment>
        ))}
      </div>
    </div>
  )
}

export default PrintSitemapPageTitle

const Divider: React.FC = () => <div className="bg-neutral-gray-opacity-120 w-[1px] h-6 flex-grow-0 my-0 mx-1" />

export const SitemapPageEstimateLabel: React.FC<{ estimates: SitemapPageEstimate[] }> = ({ estimates }) => {
  const {
    sitemap: { currency },
  } = usePrintContext()
  const { hours, rate } = getPageEstimate(estimates)

  const hoursFormatted = formatEstimateHours(hours.toString())
  const amountFormatted = formatCurrency(currency, rate)

  return <Label color={SPECIAL_COLOR}>{`${hoursFormatted} / ${amountFormatted}`}</Label>
}

const getPageEstimate = (estimates: SitemapPageEstimate[]) => {
  const result = estimates.reduce(
    (sum, pageEstimate) => {
      sum.hours = sum.hours + pageEstimate.amount
      sum.rate = sum.rate + pageEstimate.amount * (pageEstimate?.estimate?.rate || 0)

      return sum
    },
    {
      hours: 0,
      rate: 0,
    },
  )

  return result || { hours: 0, rate: 0 }
}

const format = new Intl.NumberFormat().format

function formatCurrency(currency: string, value?: string | number): string {
  const preparedValue = Number(value)
  return isNaN(preparedValue) ? '0' + ' ' + currency : format(preparedValue) + ' ' + currency
}

const formatEstimateHours = (value: string) => {
  return `${value}h`
}

function formatPageLink(pageLink: string) {
  if (pageLink.length <= 40) return pageLink

  return pageLink.slice(0, 40) + '...'
}

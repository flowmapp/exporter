import { LinkurlIcon, TagIcon } from 'src/common/icons/16'
import { SitemapPageType } from '../generalTypes'
import { Label } from 'src/common/Label/Label'

const PrintSitemapPageTitle: React.FC<{
  page: SitemapPageType
  subtitle: string
}> = ({ page, subtitle }) => {
  const hasLabels = !!page.labels.length

  return (
    <div className="flex items-center">
      <h2>
        {page.title} {subtitle ? '/ ' + subtitle : null}
      </h2>
      <div className="flex flex-nowrap items-center gap-2">
        {hasLabels && (
          <div className="flex flex-nowrap items-center gap-2">
            <TagIcon />
            {page.labels?.map((label) => (
              <Label key={label.id} color={label.color}>
                {label.title}
              </Label>
            ))}
          </div>
        )}
        {hasLabels && page.pageLink && (
          <div className="bg-neutral-gray-opacity-120 w-[1px] h-6 flex-grow-0 my-0 mx-1" />
        )}
        {page.pageLink && (
          <div className="flex flex-nowrap items-center gap-2">
            <LinkurlIcon />
            <a href={page.pageLink} className="text-gray-560 no-underline">
              {page.pageLink}
            </a>
          </div>
        )}
      </div>
    </div>
  )
}

export default PrintSitemapPageTitle

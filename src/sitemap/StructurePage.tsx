import React from 'react'
import PrintChapterContainer from 'src/common/PrintChapterContainer'
import { SitemapPageTreeItem, SitemapPageType } from './generalTypes'
import { Label } from 'src/common/Label/Label'
import cn from 'classnames'
import { useSiteMapStructuredPages } from './useSiteMapStructuredPages'
import { getPageChaptersToPrint } from './SitemapPages/SitemapPages'
import { usePrintContext } from './PrintContext'

const StructurePage: React.FC = () => {
  const { options } = usePrintContext()
  if (!options.structure) return null

  return (
    <PrintChapterContainer>
      <h2>Structure</h2>
      <Structure />
    </PrintChapterContainer>
  )
}

export default StructurePage

const Structure: React.FC = () => {
  const structure = useSiteMapStructuredPages()

  return (
    <div>
      {structure.rootPage && <PageTree page={structure.rootPage} />}
      {structure.headerPages.length > 0 && (
        <div>
          <div className="test-s font-semibold text-gray-560 h-9 border-b-neutral-gray-120 mt-1cm border-b border-solid">
            Separate Pages
          </div>
          {structure.headerPages.map((page) => (
            <StructureItem key={page.id} page={page} level={0} />
          ))}
        </div>
      )}
      {structure.footerPages.length > 0 && (
        <div>
          <div className="test-s font-semibold text-gray-560 h-9 border-b-neutral-gray-120 mt-1cm border-b border-solid">
            Footer Pages
          </div>
          {structure.footerPages.map((page) => (
            <StructureItem key={page.id} page={page} level={0} />
          ))}
        </div>
      )}
    </div>
  )
}

const PageTree: React.FC<{ page?: SitemapPageTreeItem }> = ({ page }) => {
  if (!page) return null

  return (
    <div>
      <PageItem page={page} level={0} />
    </div>
  )
}

const PageItem: React.FC<{ page: SitemapPageTreeItem; level: number }> = ({ page, level }) => {
  return (
    <>
      <StructureItem page={page} level={level} />
      {page.children && (
        <div>
          {page.children.map((child) => (
            <div key={child.id}>
              <PageItem page={child} level={++level} />
            </div>
          ))}
        </div>
      )}
    </>
  )
}

const StructureItem: React.FC<{ page: SitemapPageType; level: number }> = ({ page, level }) => {
  const { summary } = getPageChaptersToPrint(page)
  const { options } = usePrintContext()
  const printEmptyPages = options.includeEmptyPages

  const Tag = summary || printEmptyPages ? 'a' : 'span'
  const tagClassName = summary || printEmptyPages ? 'toc-page-link-print' : 'toc-page-link-no-print'

  return (
    <span className="flex flex-nowrap items-center gap-2 text-m font-medium leading-[20pt] text-gray] h-9">
      <Tag
        className={cn('text-gray no-underline toc-page-link', `toc-page-link-${level}`, tagClassName)}
        href={`#page/${page.id}`}
      >
        <span className="flex items-center">
          {page.title}
          <div className="ml-2 flex gap-2">
            {page.labels?.map((label) => (
              <Label key={label.id} color={label.color}>
                {label.title}
              </Label>
            ))}
          </div>
        </span>
      </Tag>
    </span>
  )
}

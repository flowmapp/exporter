import PrintChapterContainer from 'src/common/PrintChapterContainer'
import { SitemapPageBlockType, SitemapPageTreeItem, SitemapPageType } from '../generalTypes'
import { useSiteMapStructuredPages } from '../useSiteMapStructuredPages'
import { compareIndex } from 'src/common/sortOrder'
import PrintSitemapPageTitle from './PrintSitemapPageTitle'
import { ContentPreview } from './ContentPreview'
import WireFramesContent from './WireFramesContent'
import PrintSitemapPageSEO from './PrintSitemapPageSEO'
import { usePrintContext } from '../PrintContext'

const SitemapPages: React.FC = () => {
  const structure = useSiteMapStructuredPages()
  const { options } = usePrintContext()
  if (!options.includes('pages')) return null

  const { rootPage, headerPages, footerPages } = structure

  const pinnedToTopBlocks = rootPage?.blocks.filter((block) => block.pinTo === 'top').sort(compareIndex)

  const pinnedToBottomBlocks = rootPage?.blocks.filter((block) => block.pinTo === 'bottom').sort(compareIndex)

  return (
    <>
      {rootPage &&
        flatTree(rootPage).map((page) => {
          return (
            <SitemapPage
              key={page.id}
              page={page}
              pinnedToTopBlocks={pinnedToTopBlocks}
              pinnedToBottomBlocks={pinnedToBottomBlocks}
            />
          )
        })}
      {headerPages.map((page) => (
        <SitemapPage key={page.id} page={page} />
      ))}
      {footerPages.map((page) => (
        <SitemapPage key={page.id} page={page} />
      ))}
    </>
  )
}

export default SitemapPages

export function getPageChaptersToPrint(page: SitemapPageType) {
  const hasPrimitives = Boolean(page.blocks.some((block) => block.wireframePrimitives?.length))

  const hasSeo = Boolean(page.seoTitle || page.seoDescription || page.seoSlug)

  const hasBlocksContent = Boolean(page.blocks.some((block) => block.description))

  return {
    primitives: hasPrimitives,
    description: page.description,
    content: hasBlocksContent,
    seo: hasSeo,
    summary: Boolean(hasPrimitives || page.description || hasBlocksContent || hasSeo),
  }
}

const SitemapPage: React.FC<{
  page: SitemapPageType
  pinnedToTopBlocks?: SitemapPageBlockType[]
  pinnedToBottomBlocks?: SitemapPageBlockType[]
}> = ({ page, pinnedToTopBlocks = [], pinnedToBottomBlocks = [] }) => {
  const { options } = usePrintContext()
  const printWireframes = options.includes('wireframes')
  const printBlockDescriptions = options.includes('block descriptions')
  const printDescriptions = options.includes('page descriptions')
  const printSeo = options.includes('page seo')
  const printEmptyPages = options.includes('include empty pages')

  if (!getPageChaptersToPrint(page).summary) {
    if (printEmptyPages)
      return (
        <PrintChapterContainer>
          <PrintSitemapPageTitle page={page} subtitle="" />
        </PrintChapterContainer>
      )

    return null
  }

  const hasSeo = getPageChaptersToPrint(page).seo

  const blocksWithWF = page.blocks
    .filter((b) => !b.pinTo)
    .filter((b) => b.wireframePrimitives?.length)
    .sort(compareIndex)

  const blocksToRender = [
    ...pinnedToTopBlocks.filter((b) => b.wireframePrimitives?.length),
    ...blocksWithWF,
    ...pinnedToBottomBlocks.filter((b) => b.wireframePrimitives?.length),
  ]

  const contentBlocksToRender = [
    ...pinnedToTopBlocks.filter((b) => b.description),
    ...page.blocks.filter((b) => b.description && !b.pinTo),
    ...pinnedToBottomBlocks.filter((b) => b.description),
  ]

  return (
    <div>
      {printWireframes && Boolean(blocksToRender.length) && (
        <PrintChapterContainer>
          <PrintSitemapPageTitle page={page} subtitle="Wireframe" />
          <WireFramesContent blocks={blocksToRender} />
        </PrintChapterContainer>
      )}
      {printDescriptions && page.description && (
        <PrintChapterContainer>
          <PrintSitemapPageTitle page={page} subtitle="Description" />
          <p
            className="mt-1cm w-2/3 ml-1cm [&>img]:width-full"
            dangerouslySetInnerHTML={{ __html: page.description }}
          />
        </PrintChapterContainer>
      )}
      {printBlockDescriptions && Boolean(contentBlocksToRender.length) && (
        <PrintChapterContainer>
          <PrintSitemapPageTitle page={page} subtitle="Content" />
          <ContentPreview blocks={contentBlocksToRender} />
        </PrintChapterContainer>
      )}
      {printSeo && hasSeo && (
        <PrintChapterContainer>
          <PrintSitemapPageTitle page={page} subtitle="SEO" />
          <PrintSitemapPageSEO page={page} />
        </PrintChapterContainer>
      )}
    </div>
  )
}

function flatTree(tree: SitemapPageTreeItem): SitemapPageTreeItem[] {
  return [tree, ...(tree.children || []).flatMap(flatTree)]
}

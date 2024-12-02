import PrintChapterContainer from 'src/common/PrintChapterContainer'
import {
  SitemapPageBlockType,
  SitemapPageTreeItem,
  SitemapPageType,
  SitemapPdfExportBackendOptions,
} from '../generalTypes'
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
  if (!options.pages) return null

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
  const printWireframes = options.wireframes
  const printBlockDescriptions = options.content
  const printDescriptions = options.pageDescriptions
  const printSeo = options.seo
  const printEmptyPages = options.includeEmptyPages

  if (!getPageChaptersToPrint(page).summary) {
    if (printEmptyPages)
      return (
        <PrintChapterContainer>
          <PrintSitemapPageTitle page={page} subtitle="" insertLink />
        </PrintChapterContainer>
      )

    return null
  }

  const hasSeo = getPageChaptersToPrint(page).seo

  const blocksWithWFToRender = getBlocksWithWireframes(page, pinnedToTopBlocks, pinnedToBottomBlocks)

  const contentBlocksToRender = [
    ...pinnedToTopBlocks.filter((b) => b.description),
    ...page.blocks.filter((b) => b.description && !b.pinTo),
    ...pinnedToBottomBlocks.filter((b) => b.description),
  ]

  function getLinkChapter() {
    switch (true) {
      case printWireframes && Boolean(blocksWithWFToRender.length):
        return 'wireframes'
      case printDescriptions && Boolean(page.description):
        return 'description'
      case printBlockDescriptions && Boolean(contentBlocksToRender.length):
        return 'content'
      case printSeo && hasSeo:
        return 'seo'
    }
  }

  const linkChapter = getLinkChapter()

  return (
    <div>
      {printWireframes && Boolean(blocksWithWFToRender.length) && (
        <PrintChapterContainer>
          <PrintSitemapPageTitle page={page} subtitle="Wireframe" insertLink={linkChapter === 'wireframes'} />
          <WireFramesContent blocks={blocksWithWFToRender} />
        </PrintChapterContainer>
      )}
      {printDescriptions && page.description && (
        <PrintChapterContainer>
          <PrintSitemapPageTitle page={page} subtitle="Description" insertLink={linkChapter === 'description'} />
          <p
            className="mt-1cm w-2/3 ml-1cm [&>img]:width-full"
            dangerouslySetInnerHTML={{ __html: page.description }}
          />
        </PrintChapterContainer>
      )}
      {printBlockDescriptions && Boolean(contentBlocksToRender.length) && (
        <PrintChapterContainer>
          <PrintSitemapPageTitle page={page} subtitle="Content" insertLink={linkChapter === 'content'} />
          <ContentPreview blocks={contentBlocksToRender} />
        </PrintChapterContainer>
      )}
      {printSeo && hasSeo && (
        <PrintChapterContainer>
          <PrintSitemapPageTitle page={page} subtitle="SEO" insertLink={linkChapter === 'seo'} />
          <PrintSitemapPageSEO page={page} />
        </PrintChapterContainer>
      )}
    </div>
  )
}

function flatTree(tree: SitemapPageTreeItem): SitemapPageTreeItem[] {
  return [tree, ...(tree.children || []).flatMap(flatTree)]
}

function getBlocksWithWireframes(
  page: SitemapPageType,
  pinnedToTopBlocks: SitemapPageBlockType[] = [],
  pinnedToBottomBlocks: SitemapPageBlockType[] = [],
) {
  const blocksWithWF = page.blocks
    .filter((b) => !b.pinTo)
    .filter((b) => b.wireframePrimitives?.length)
    .sort(compareIndex)

  return [
    ...pinnedToTopBlocks.filter((b) => b.wireframePrimitives?.length),
    ...blocksWithWF,
    ...pinnedToBottomBlocks.filter((b) => b.wireframePrimitives?.length),
  ]
}

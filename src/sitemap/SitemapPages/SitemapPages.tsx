import PrintChapterContainer from 'src/common/PrintChapterContainer'
import { SitemapExportData, SitemapPageBlockType, SitemapPageTreeItem, SitemapPageType } from '../generalTypes'
import { useSiteMapStructuredPages } from '../useSiteMapStructuredPages'
import { compareIndex } from 'src/common/sortOrder'
import PrintSitemapPageTitle from './PrintSitemapPageTitle'
import { ContentPreview } from './ContentPreview'
import WireFramesContent from './WireFramesContent'

type Props = { sitemap: SitemapExportData }

const SitemapPages: React.FC<Props> = ({ sitemap }) => {
  const structure = useSiteMapStructuredPages(sitemap.sitemapPages)
  const rootPage = structure.rootPage

  const pinnedToTopBlocks = rootPage?.blocks.filter((block) => block.pinTo === 'top').sort(compareIndex)

  const pinnedToBottomBlocks = rootPage?.blocks.filter((block) => block.pinTo === 'bottom').sort(compareIndex)

  return (
    <>
      {structure.rootPage &&
        flatTree(structure.rootPage).map((page) => {
          return (
            <SitemapPage
              key={page.id}
              page={page}
              pinnedToTopBlocks={pinnedToTopBlocks}
              pinnedToBottomBlocks={pinnedToBottomBlocks}
            />
          )
        })}
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
  if (!getPageChaptersToPrint(page)) {
    // if (printEmptyPages)
    //   return <PrintChapterContainer title={<PrintSitemapPageTitle subtitle="" />} content={null} />

    return null
  }

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
    <div id={`page/${page.id}`}>
      {Boolean(blocksToRender.length) && (
        <PrintChapterContainer title={<PrintSitemapPageTitle page={page} subtitle="Wireframe" />}>
          <WireFramesContent blocks={blocksToRender} />
        </PrintChapterContainer>
      )}
      {page.description && (
        <PrintChapterContainer title={<PrintSitemapPageTitle page={page} subtitle="Description" />}>
          {
            <p
              className="mt-1cm w-2/3 ml-1cm [&>img]:width-full text-s"
              dangerouslySetInnerHTML={{ __html: page.description }}
            />
          }
        </PrintChapterContainer>
      )}
      {Boolean(contentBlocksToRender.length) && (
        <PrintChapterContainer title={<PrintSitemapPageTitle page={page} subtitle="Content" />}>
          {<ContentPreview blocks={contentBlocksToRender} />}
        </PrintChapterContainer>
      )}
      {/*   {hasSeo && printSeo && (
          <PrintChapterContainer
            title={<PrintSitemapPageTitle  subtitle="SEO" />}
            content={<PrintSitemapPageSEO page={pageData} />}
          />
        )} */}
    </div>
  )
}

function flatTree(tree: SitemapPageTreeItem): SitemapPageTreeItem[] {
  return [tree, ...(tree.children || []).flatMap(flatTree)]
}

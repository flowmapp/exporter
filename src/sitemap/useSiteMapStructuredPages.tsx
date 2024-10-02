import { compareIndex } from 'src/common/sortOrder'
import { SitemapPageTreeItem } from './generalTypes'
import { usePrintContext } from './PrintContext'

export const useSiteMapStructuredPages = () => {
  const { sitemap } = usePrintContext()
  const pages = sitemap.sitemapPages
  const headerPages = pages.filter((item) => item.groupName === 'header').sort(compareIndex)
  const footerPages = pages.filter((item) => item.groupName === 'footer').sort(compareIndex)
  const mainPages: SitemapPageTreeItem[] = pages
    .filter((item) => item.groupName === 'main')
    .map((page) => ({ ...page, children: [] }))

  const rootPage = mainPages.find((item) => !item.parentId)

  if (!rootPage)
    return {
      headerPages,
      footerPages,
    }

  const stack = [rootPage]

  for (let item = stack.shift(); item; item = stack.shift()) {
    item.children = pages
      .filter((p) => p.parentId === item!.id)
      .sort(compareIndex)
      .map((page) => ({ ...page, children: [] }))
    stack.push(...item.children)
  }

  return {
    headerPages,
    footerPages,
    rootPage,
  }
}

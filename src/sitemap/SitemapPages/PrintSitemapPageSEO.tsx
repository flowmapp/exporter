import React from 'react'
import { SitemapPageType } from '../generalTypes'

const PrintSitemapPageSEO: React.FC<{ page: SitemapPageType }> = ({ page }) => {
  return (
    <div className="mt-8">
      {page.seoTitle && (
        <>
          <h3 className="mt-2 text-m font-medium text-left text-gray-560">Title</h3>
          <p>{page.seoTitle}</p>
        </>
      )}

      {page.seoDescription && (
        <>
          <h3 className="mt-2 text-m font-medium text-left text-gray-560">Meta Description</h3>
          <p>{page.seoDescription}</p>
        </>
      )}

      {page.seoSlug && (
        <>
          <h3 className="mt-2 text-m font-medium text-left text-gray-560">Slug</h3>
          <p>{page.seoSlug}</p>
        </>
      )}
    </div>
  )
}

export default PrintSitemapPageSEO

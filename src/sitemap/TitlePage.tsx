import React from 'react'
import FlowMappIcon from 'src/common/FlowMappIcon'
import { ClockIcon, FolderIcon } from 'src/common/icons/16'
import PrintChapterContainer from 'src/common/PrintChapterContainer'
import { SitemapExportData } from './generalTypes'

const TitlePage: React.FC<{ sitemap: SitemapExportData }> = ({ sitemap }) => {
  const now = new Date()
  const month = now.toLocaleString('default', { month: 'long' })
  const day = now.getDate()
  const year = now.getFullYear()

  return (
    <PrintChapterContainer
      title="Some title"
      footer={
        <p className="text-gray-880">
          <FlowMappIcon className="inline mr-2" />
          flowmapp.com
        </p>
      }
    >
      <div>
        <h1>{sitemap.title}</h1>
        <p className="text-gray-560">
          <FolderIcon size={16} /> Unknown project title
        </p>
        <p className="text-gray-560">
          <ClockIcon size={16} /> {`${day} ${month} ${year}`}
        </p>
      </div>
    </PrintChapterContainer>
  )
}

export default TitlePage

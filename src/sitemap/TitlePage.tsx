import React from 'react'
import { ClockIcon, FolderIcon } from 'src/common/icons/16'
import PrintChapterContainer from 'src/common/PrintChapterContainer'
import { usePrintContext } from './PrintContext'

const TitlePage: React.FC = () => {
  const { sitemap } = usePrintContext()
  const now = new Date()
  const month = now.toLocaleString('default', { month: 'long' })
  const day = now.getDate()
  const year = now.getFullYear()

  return (
    <PrintChapterContainer
      footer={
        <p className="text-gray-880">
          <img src="flowmapp16.png" className="inline mr-2" alt="Flowmapp" width={`${16}mm`} height={`${16}mm`} />
          flowmapp.com
        </p>
      }
    >
      <div>
        <h1>{sitemap.title}</h1>
        <p className="text-gray-560">
          <FolderIcon size={16} /> {sitemap.projectTitle}
        </p>
        <p className="text-gray-560">
          <ClockIcon size={16} /> {`${day} ${month} ${year}`}
        </p>
      </div>
    </PrintChapterContainer>
  )
}

export default TitlePage

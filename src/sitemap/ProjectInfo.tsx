import React from 'react'
import PrintChapterContainer from 'src/common/PrintChapterContainer'
import { usePrintContext } from './PrintContext'

const ProjectInfo: React.FC = () => {
  const { sitemap, options } = usePrintContext()
  if (!options.projectInfo) return null

  if (!sitemap.projectDescription) return null

  return (
    <PrintChapterContainer>
      <div className="html-content">
        <h2 className="mb-4">Project Info</h2>
        <p dangerouslySetInnerHTML={{ __html: sitemap.projectDescription }} />
      </div>
    </PrintChapterContainer>
  )
}

export default ProjectInfo

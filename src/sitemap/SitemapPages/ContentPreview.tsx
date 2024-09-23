import { SitemapPageBlockType } from '../generalTypes'

type Props = { blocks: SitemapPageBlockType[] }

export const ContentPreview: React.FC<Props> = ({ blocks }) => {
  return (
    <div>
      {blocks.map((block) => (
        <div className="break-inside-avoid mb-1cm" id={block.id} key={block.id}>
          <p dangerouslySetInnerHTML={{ __html: block.description! }} />
        </div>
      ))}
    </div>
  )
}

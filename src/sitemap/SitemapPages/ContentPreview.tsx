import { Label } from 'src/common/Label/Label'
import { SitemapPageBlockType } from '../generalTypes'

type Props = { blocks: SitemapPageBlockType[] }

export const ContentPreview: React.FC<Props> = ({ blocks }) => {
  return (
    <div>
      {blocks.map((block) => {
        return (
          <div key={block.id}>
            <div className="mb-2">
              <Label color={block.color} blockLabel>
                {block.title}
              </Label>
            </div>
            <div className="break-inside-avoid mb-1cm" id={block.id} key={block.id}>
              <p dangerouslySetInnerHTML={{ __html: block.description! }} />
            </div>
          </div>
        )
      })}
    </div>
  )
}

import { getLabelColors } from './getLabelColors'
import cn from 'classnames'

type Props = {
  color?: string
  blockLabel?: boolean
  children: React.ReactNode
}

export const Label: React.FC<Props> = ({ color, blockLabel, children }) => {
  const { backgroundColor, borderColor, textColor, filter } = getLabelColors(color, blockLabel)

  return (
    <div
      className={cn(
        'flex items-center justify-center w-fit px-[2mm] py-[1mm]',
        blockLabel ? 'rounded-md' : 'rounded-xl',
      )}
      style={{
        backgroundColor: backgroundColor,
        border: `1px solid ${borderColor}`,
      }}
    >
      <span
        className="max-w-24 overflow-hidden whitespace-nowrap text-ellipsis font-bold text-xxs text-center uppercase"
        style={{
          color: textColor,
          filter,
        }}
      >
        {children || 'Empty title'}
      </span>
    </div>
  )
}

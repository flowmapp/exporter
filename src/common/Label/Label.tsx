import { SPECIAL_COLOR } from '../colors'
import { hexToRGB } from '../colors/hexToRGB'

type Props = {
  color?: string
  children: React.ReactNode
}

export const Label: React.FC<Props> = ({ color = SPECIAL_COLOR, children }) => {
  const hasExcludedColor = color === SPECIAL_COLOR

  const rgbaBackgroundColor = hasExcludedColor ? color : hexToRGB(color, 0.4)
  const borderColor = hasExcludedColor ? color : hexToRGB(color, 0.4)

  return (
    <div
      className="flex items-center justify-center w-fit px-[2mm] py-[1mm] rounded-xl"
      style={{
        backgroundColor: rgbaBackgroundColor,
        border: `1px solid ${borderColor}`,
      }}
    >
      <span
        className="max-w-24 overflow-hidden whitespace-nowrap text-ellipsis font-bold text-xxs text-center uppercase"
        style={{
          color: hasExcludedColor ? '#ffffff' : color,
          filter: hasExcludedColor ? 'none' : 'brightness(0.4) contrast(2)',
        }}
      >
        {children || 'Empty title'}
      </span>
    </div>
  )
}

import { SPECIAL_COLOR } from '../colors'
import { hexToRGB } from '../colors/hexToRGB'

export function getLabelColors(color = SPECIAL_COLOR, blockLabel = false) {
  const hasExcludedColor = color === SPECIAL_COLOR

  const rgbaBackgroundColor = hasExcludedColor ? color : hexToRGB(color, 0.4)
  const borderColor = hasExcludedColor ? color : hexToRGB(color, 0.4)

  const filter = blockLabel ? 'brightness(0.16) contrast(2)' : 'brightness(0.4) contrast(2)'

  return {
    backgroundColor: rgbaBackgroundColor,
    borderColor,
    textColor: hasExcludedColor ? '#ffffff' : color,
    filter: hasExcludedColor ? 'none' : filter,
  }
}

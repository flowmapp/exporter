import React from 'react'
import { iconList } from './fontawesome-icon-list'

type Props = {
  icon: string
  color?: string
  size?: number
  className?: string
}

export const FaIcon: React.FC<Props> = ({ icon, color, size = 18, className }) => {
  const iconNameFixed = icon.split('fa-')[1]

  const faIcon = iconList.find((icon) => icon.key === iconNameFixed)
  if (!faIcon) return null

  return (
    <svg className={className} viewBox={faIcon.value.viewBox.join(',')} height={`${size}px`}>
      <path fill={color ?? 'currentColor'} d={faIcon.value.path}></path>
    </svg>
  )
}

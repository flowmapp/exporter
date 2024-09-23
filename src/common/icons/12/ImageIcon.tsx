import { IconWrapper, IconProps } from '../../IconWrapper'

const ImageIcon = (allProps: IconProps) => {
  const { svgProps: props, ...restProps } = allProps
  return (
    <IconWrapper
      icon={
        <svg
          width="100%"
          height="100%"
          viewBox="0 0 12 12"
          fill="currentColor"
          xmlns="http://www.w3.org/2000/svg"
          {...props}
        >
          <circle cx={3} cy={2} r={2} fill="currentColor" />
          <path
            d="M8.768 5.922a1 1 0 00-1.536 0L5.04 8.55 3.78 6.976a1 1 0 00-1.562 0L.3 9.376A1 1 0 001.082 11h9.784a1 1 0 00.768-1.64L8.768 5.922z"
            fill="currentColor"
          />
        </svg>
      }
      {...restProps}
    />
  )
}
export default ImageIcon

import { IconWrapper, IconProps } from '../../IconWrapper'

const Image12Icon = (allProps: IconProps) => {
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
          <path
            d="M5 2a2 2 0 11-4 0 2 2 0 014 0zM8.768 5.922a1 1 0 00-1.536 0L5.04 8.55 3.78 6.976a1 1 0 00-1.562 0L.3 9.376A1 1 0 001.082 11h9.784a1 1 0 00.768-1.64L8.768 5.922z"
            fill="currentColor"
          />
        </svg>
      }
      {...restProps}
    />
  )
}
export default Image12Icon

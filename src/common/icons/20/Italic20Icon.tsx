import { IconWrapper, IconProps } from '../../IconWrapper'

const Italic20Icon = (allProps: IconProps) => {
  const { svgProps: props, ...restProps } = allProps
  return (
    <IconWrapper
      icon={
        <svg
          width="100%"
          height="100%"
          viewBox="0 0 20 20"
          fill="currentColor"
          xmlns="http://www.w3.org/2000/svg"
          {...props}
        >
          <path
            d="M12.523 2H16a1 1 0 110 2h-2.795L8.919 16H12a1 1 0 110 2H4a1 1 0 110-2h2.795l4.286-12H8a1 1 0 010-2H12.523z"
            fill="currentColor"
          />
        </svg>
      }
      {...restProps}
    />
  )
}
export default Italic20Icon

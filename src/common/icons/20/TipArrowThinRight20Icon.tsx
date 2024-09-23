import { IconWrapper, IconProps } from '../../IconWrapper'

const TipArrowThinRight20Icon = (allProps: IconProps) => {
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
            d="M11.793 6.207a1 1 0 011.414-1.414L17 8.586a2 2 0 010 2.828l-3.793 3.793a1 1 0 01-1.414-1.414L14.586 11H5.5a1 1 0 110-2h9.086l-2.793-2.793zM3.5 10a1 1 0 00-1-1H2a1 1 0 000 2h.5a1 1 0 001-1z"
            fill="currentColor"
          />
        </svg>
      }
      {...restProps}
    />
  )
}
export default TipArrowThinRight20Icon

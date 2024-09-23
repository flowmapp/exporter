import { IconWrapper, IconProps } from '../../IconWrapper'

const TipRight20Icon = (allProps: IconProps) => {
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
            fillRule="evenodd"
            clipRule="evenodd"
            d="M18 10a1 1 0 00-1-1H5.5a1 1 0 000 2H17a1 1 0 001-1zM3.5 10a1 1 0 00-1-1H2a1 1 0 000 2h.5a1 1 0 001-1z"
            fill="currentColor"
          />
        </svg>
      }
      {...restProps}
    />
  )
}
export default TipRight20Icon

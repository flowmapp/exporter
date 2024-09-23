import { IconWrapper, IconProps } from '../../IconWrapper'

const TipArrowThinLeft20Icon = (allProps: IconProps) => {
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
            d="M8.207 6.207a1 1 0 00-1.414-1.414L3 8.586a2 2 0 000 2.828l3.793 3.793a1 1 0 001.414-1.414L5.414 11H14.5a1 1 0 100-2H5.414l2.793-2.793zM16.5 10a1 1 0 011-1h.5a1 1 0 110 2h-.5a1 1 0 01-1-1z"
            fill="currentColor"
          />
        </svg>
      }
      {...restProps}
    />
  )
}
export default TipArrowThinLeft20Icon

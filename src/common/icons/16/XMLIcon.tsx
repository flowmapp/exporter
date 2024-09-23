import { IconWrapper, IconProps } from '../../IconWrapper'

const XMLIcon = (allProps: IconProps) => {
  const { svgProps: props, ...restProps } = allProps
  return (
    <IconWrapper
      icon={
        <svg
          width="100%"
          height="100%"
          viewBox="0 0 16 16"
          fill="currentColor"
          xmlns="http://www.w3.org/2000/svg"
          {...props}
        >
          <path
            d="M10.234 2.153a.75.75 0 10-1.468-.306l-2.5 12a.75.75 0 001.468.306l2.5-12zM4.46 2.908a.75.75 0 01.132 1.053L2.047 7.233a1.25 1.25 0 000 1.535l2.545 3.272a.75.75 0 01-1.184.92L.863 9.689a2.75 2.75 0 010-3.376L3.408 3.04a.75.75 0 011.052-.132zM11.54 2.908a.75.75 0 00-.132 1.053l2.545 3.272a1.25 1.25 0 010 1.535l-2.545 3.272a.75.75 0 001.184.92l2.545-3.272a2.75 2.75 0 000-3.376L12.592 3.04a.75.75 0 00-1.053-.132z"
            fill="currentColor"
          />
        </svg>
      }
      {...restProps}
    />
  )
}
export default XMLIcon

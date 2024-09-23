import { IconWrapper, IconProps } from '../../IconWrapper'

const BringToFrontIcon = (allProps: IconProps) => {
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
            d="M2.47 6.53a.75.75 0 010-1.06l4.293-4.293a1.75 1.75 0 012.474 0L13.53 5.47a.75.75 0 01-1.06 1.06L8.75 2.81V11a.75.75 0 01-1.5 0V2.81L3.53 6.53a.75.75 0 01-1.06 0zM2 14.75a.75.75 0 010-1.5h12a.75.75 0 010 1.5H2z"
            fill="currentColor"
          />
        </svg>
      }
      {...restProps}
    />
  )
}
export default BringToFrontIcon

import { IconWrapper, IconProps } from '../../IconWrapper'

const UpgradeIcon = (allProps: IconProps) => {
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
            d="M14.53 6.47a.75.75 0 01-1.06 1.06L8.75 2.81V10A4.75 4.75 0 014 14.75a.75.75 0 010-1.5A3.25 3.25 0 007.25 10V2.81L2.53 7.53a.75.75 0 01-1.06-1.06l5.293-5.293a1.75 1.75 0 012.474 0L14.53 6.47z"
            fill="currentColor"
          />
        </svg>
      }
      {...restProps}
    />
  )
}
export default UpgradeIcon

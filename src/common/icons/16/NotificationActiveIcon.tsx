import { IconWrapper, IconProps } from '../../IconWrapper'

const NotificationActiveIcon = (allProps: IconProps) => {
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
            d="M7.886 3.143a.75.75 0 00-.772-1.286L1.811 5.039a2.75 2.75 0 00-.53 4.303l5.377 5.377a2.75 2.75 0 004.303-.53l3.182-5.303a.75.75 0 10-1.286-.772l-3.182 5.304a1.25 1.25 0 01-1.956.24L2.342 8.281a1.25 1.25 0 01.24-1.956l5.304-3.182zM2.75 12a.75.75 0 00-1.5 0A2.75 2.75 0 004 14.75a.75.75 0 000-1.5c-.69 0-1.25-.56-1.25-1.25z"
            fill="currentColor"
          />
        </svg>
      }
      {...restProps}
    />
  )
}
export default NotificationActiveIcon

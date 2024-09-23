import { IconWrapper, IconProps } from '../../IconWrapper'

const NotificationIcon = (allProps: IconProps) => {
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
            fillRule="evenodd"
            clipRule="evenodd"
            d="M14.036 9.064a4.75 4.75 0 00-.484-5.556l.478-.478a.75.75 0 00-1.06-1.06l-.478.478a4.75 4.75 0 00-5.556-.484L1.811 5.039a2.75 2.75 0 00-.53 4.303l5.377 5.377a2.75 2.75 0 004.303-.53l3.075-5.125zm-2.358-5.325a3.25 3.25 0 00-3.97-.49L2.582 6.326a1.25 1.25 0 00-.24 1.956l5.377 5.377a1.25 1.25 0 001.956-.24l3.075-5.126a3.25 3.25 0 00-.489-3.97l-.29-.29-.001-.002-.002-.002-.29-.29z"
            fill="currentColor"
          />
          <path
            d="M2.75 12a.75.75 0 00-1.5 0A2.75 2.75 0 004 14.75a.75.75 0 000-1.5c-.69 0-1.25-.56-1.25-1.25z"
            fill="currentColor"
          />
        </svg>
      }
      {...restProps}
    />
  )
}
export default NotificationIcon

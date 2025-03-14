import { IconWrapper, IconProps } from '../../IconWrapper'

const ClockIcon = (allProps: IconProps) => {
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
          <g clipPath="url(#prefix__clip0_1402_3677)" fill="currentColor">
            <path d="M8.75 4a.75.75 0 00-1.5 0v4.31l2.22 2.22a.75.75 0 101.06-1.06L8.75 7.69V4z" />
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M8 .25a7.75 7.75 0 100 15.5A7.75 7.75 0 008 .25zM1.75 8a6.25 6.25 0 1112.5 0 6.25 6.25 0 01-12.5 0z"
            />
          </g>
          <defs>
            <clipPath id="prefix__clip0_1402_3677">
              <path fill="currentColor" d="M0 0h16v16H0z" />
            </clipPath>
          </defs>
        </svg>
      }
      {...restProps}
    />
  )
}
export default ClockIcon

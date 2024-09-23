import { IconWrapper, IconProps } from '../../IconWrapper'

const Status20Icon = (allProps: IconProps) => {
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
          <g clipPath="url(#prefix__clip0_4459_10202)">
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M0 10C0 4.477 4.477 0 10 0s10 4.477 10 10-4.477 10-10 10S0 15.523 0 10zm10-8a8 8 0 100 16 8 8 0 000-16zm4.207 5.293a1 1 0 010 1.414l-3.646 3.647a1.5 1.5 0 01-2.122 0l-1.646-1.647a1 1 0 011.414-1.414L9.5 10.586l3.293-3.293a1 1 0 011.414 0z"
              fill="currentColor"
            />
          </g>
          <defs>
            <clipPath id="prefix__clip0_4459_10202">
              <path fill="currentColor" d="M0 0h20v20H0z" />
            </clipPath>
          </defs>
        </svg>
      }
      {...restProps}
    />
  )
}
export default Status20Icon

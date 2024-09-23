import { IconWrapper, IconProps } from '../../IconWrapper'

const FacebookIcon = (allProps: IconProps) => {
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
          <g clipPath="url(#prefix__clip0_1356_2274)">
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M8 0a8 8 0 110 16A8 8 0 018 0z"
              fill="url(#prefix__paint0_linear_1356_2274)"
            />
            <path
              d="M9.04 15.933v-6.18h1.742l.23-2.174H9.04l.003-1.089c0-.567.054-.871.87-.871H11V3.444H9.258c-2.093 0-2.83 1.055-2.83 2.83v1.305H5.123v2.175h1.305v6.091a8.035 8.035 0 002.611.088z"
              fill="currentColor"
            />
          </g>
          <defs>
            <linearGradient
              id="prefix__paint0_linear_1356_2274"
              x1={8}
              y1={-0.146}
              x2={8}
              y2={16.682}
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#00B2FF" />
              <stop offset={1} stopColor="#006AFF" />
            </linearGradient>
            <clipPath id="prefix__clip0_1356_2274">
              <path fill="currentColor" d="M0 0h16v16H0z" />
            </clipPath>
          </defs>
        </svg>
      }
      {...restProps}
    />
  )
}
export default FacebookIcon

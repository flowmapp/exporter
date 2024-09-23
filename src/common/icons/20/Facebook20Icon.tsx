import { IconWrapper, IconProps } from '../../IconWrapper'

const Facebook20Icon = (allProps: IconProps) => {
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
          <g clipPath="url(#prefix__clip0_1348_2008)">
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M10 0c5.523 0 10 4.477 10 10s-4.477 10-10 10S0 15.523 0 10 4.477 0 10 0z"
              fill="url(#prefix__paint0_linear_1348_2008)"
            />
            <path
              d="M11.3 19.916v-7.724h2.177l.289-2.719h-2.467l.004-1.36c0-.71.067-1.09 1.086-1.09h1.361V4.306h-2.178c-2.616 0-3.537 1.319-3.537 3.537v1.632h-1.63v2.718h1.63v7.615a10.053 10.053 0 003.264.11z"
              fill="currentColor"
            />
          </g>
          <defs>
            <linearGradient
              id="prefix__paint0_linear_1348_2008"
              x1={10}
              y1={-0.182}
              x2={10}
              y2={20.853}
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#00B2FF" />
              <stop offset={1} stopColor="#006AFF" />
            </linearGradient>
            <clipPath id="prefix__clip0_1348_2008">
              <path fill="currentColor" d="M0 0h20v20H0z" />
            </clipPath>
          </defs>
        </svg>
      }
      {...restProps}
    />
  )
}
export default Facebook20Icon

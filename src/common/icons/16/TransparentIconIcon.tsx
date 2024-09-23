import { IconWrapper, IconProps } from '../../IconWrapper'

const TransparentIconIcon = (allProps: IconProps) => {
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
          <g clipPath="url(#prefix__clip0_2667_19869)">
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M15.5 8a7.5 7.5 0 11-15 0 7.5 7.5 0 0115 0zM14 8a6 6 0 01-6 6V2a6 6 0 016 6z"
              fill="currentColor"
            />
          </g>
          <defs>
            <clipPath id="prefix__clip0_2667_19869">
              <path fill="currentColor" d="M0 0h16v16H0z" />
            </clipPath>
          </defs>
        </svg>
      }
      {...restProps}
    />
  )
}
export default TransparentIconIcon

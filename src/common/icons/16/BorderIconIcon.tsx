import { IconWrapper, IconProps } from '../../IconWrapper'

const BorderIconIcon = (allProps: IconProps) => {
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
          <g clipPath="url(#prefix__clip0_2666_19860)">
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M8 14A6 6 0 108 2a6 6 0 000 12zm0 1.5a7.5 7.5 0 100-15 7.5 7.5 0 000 15z"
              fill="currentColor"
            />
          </g>
          <defs>
            <clipPath id="prefix__clip0_2666_19860">
              <path fill="currentColor" d="M0 0h16v16H0z" />
            </clipPath>
          </defs>
        </svg>
      }
      {...restProps}
    />
  )
}
export default BorderIconIcon

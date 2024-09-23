import { IconWrapper, IconProps } from '../../IconWrapper'

const Decision20Icon = (allProps: IconProps) => {
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
          <g clipPath="url(#prefix__clip0_505_306)">
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M7.172 1.914a4 4 0 015.656 0l5.258 5.258a4 4 0 010 5.656l-5.258 5.258a4 4 0 01-5.656 0l-5.258-5.258a4 4 0 010-5.656l5.258-5.258zm4.242 1.414a2 2 0 00-2.828 0L3.328 8.586a2 2 0 000 2.828l5.258 5.258a2 2 0 002.828 0l5.258-5.258a2 2 0 000-2.828l-5.258-5.258z"
              fill="currentColor"
            />
          </g>
          <defs>
            <clipPath id="prefix__clip0_505_306">
              <path fill="currentColor" d="M0 0h20v20H0z" />
            </clipPath>
          </defs>
        </svg>
      }
      {...restProps}
    />
  )
}
export default Decision20Icon

import { IconWrapper, IconProps } from '../../IconWrapper'

const FacebookMonoIcon = (allProps: IconProps) => {
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
          <g clipPath="url(#prefix__clip0_1356_2290)">
            <path
              d="M16 8a8 8 0 10-9.572 7.846V9.754H5.123V7.579h1.305V6.273c0-1.774.737-2.83 2.83-2.83H11V5.62H9.911c-.815 0-.869.304-.869.871L9.04 7.58h1.973l-.23 2.175H9.038v6.18A8.002 8.002 0 0016 8z"
              fill="currentColor"
            />
          </g>
          <defs>
            <clipPath id="prefix__clip0_1356_2290">
              <path fill="currentColor" d="M0 0h16v16H0z" />
            </clipPath>
          </defs>
        </svg>
      }
      {...restProps}
    />
  )
}
export default FacebookMonoIcon

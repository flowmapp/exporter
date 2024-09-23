import { IconWrapper, IconProps } from '../../IconWrapper'

const InProgressIcon = (allProps: IconProps) => {
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
          <g clipPath="url(#prefix__clip0_4464_20672)" fill="currentColor">
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M8 1.75a6.25 6.25 0 100 12.5 6.25 6.25 0 000-12.5zM.25 8a7.75 7.75 0 1115.5 0A7.75 7.75 0 01.25 8z"
            />
            <path d="M11 8a3 3 0 11-6 0 3 3 0 016 0z" />
          </g>
          <defs>
            <clipPath id="prefix__clip0_4464_20672">
              <path fill="currentColor" d="M0 0h16v16H0z" />
            </clipPath>
          </defs>
        </svg>
      }
      {...restProps}
    />
  )
}
export default InProgressIcon

import { IconWrapper, IconProps } from '../../IconWrapper'

const DoneIcon = (allProps: IconProps) => {
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
          <g clipPath="url(#prefix__clip0_4486_4505)" fill="currentColor">
            <path d="M11.53 6.03a.75.75 0 00-1.06-1.06L7 8.44l-.97-.97a.75.75 0 00-1.06 1.06l1.5 1.5a.75.75 0 001.06 0l4-4z" />
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M8 .25a7.75 7.75 0 100 15.5A7.75 7.75 0 008 .25zM1.75 8a6.25 6.25 0 1112.5 0 6.25 6.25 0 01-12.5 0z"
            />
          </g>
          <defs>
            <clipPath id="prefix__clip0_4486_4505">
              <path fill="currentColor" d="M0 0h16v16H0z" />
            </clipPath>
          </defs>
        </svg>
      }
      {...restProps}
    />
  )
}
export default DoneIcon

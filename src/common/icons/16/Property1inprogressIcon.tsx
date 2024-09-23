import { IconWrapper, IconProps } from '../../IconWrapper'

const Property1inprogressIcon = (allProps: IconProps) => {
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
          <g clipPath="url(#prefix__clip0_4523_17389)" fill="#6696FF">
            <path d="M8 10a2 2 0 100-4 2 2 0 000 4z" />
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M0 8a8 8 0 1116 0A8 8 0 010 8zm12 0a4 4 0 11-8 0 4 4 0 018 0z"
            />
          </g>
          <defs>
            <clipPath id="prefix__clip0_4523_17389">
              <path fill="currentColor" d="M0 0h16v16H0z" />
            </clipPath>
          </defs>
        </svg>
      }
      {...restProps}
    />
  )
}
export default Property1inprogressIcon

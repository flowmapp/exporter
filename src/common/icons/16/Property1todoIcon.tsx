import { IconWrapper, IconProps } from '../../IconWrapper'

const Property1todoIcon = (allProps: IconProps) => {
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
          <g clipPath="url(#prefix__clip0_4523_17391)">
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M8 0a8 8 0 100 16A8 8 0 008 0zm0 12a4 4 0 100-8 4 4 0 000 8z"
              fill="#C2C2C2"
            />
          </g>
          <defs>
            <clipPath id="prefix__clip0_4523_17391">
              <path fill="currentColor" d="M0 0h16v16H0z" />
            </clipPath>
          </defs>
        </svg>
      }
      {...restProps}
    />
  )
}
export default Property1todoIcon

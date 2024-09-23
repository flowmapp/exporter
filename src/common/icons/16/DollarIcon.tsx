import { IconWrapper, IconProps } from '../../IconWrapper'

const DollarIcon = (allProps: IconProps) => {
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
          <path
            d="M8 .25a.75.75 0 01.75.75v1.25H13a.75.75 0 010 1.5H4.5a1.75 1.75 0 100 3.5h7a3.25 3.25 0 010 6.5H8.75V15a.75.75 0 01-1.5 0v-1.25H2.5a.75.75 0 010-1.5h9a1.75 1.75 0 100-3.5h-7a3.25 3.25 0 110-6.5h2.75V1A.75.75 0 018 .25z"
            fill="currentColor"
          />
        </svg>
      }
      {...restProps}
    />
  )
}
export default DollarIcon

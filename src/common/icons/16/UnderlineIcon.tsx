import { IconWrapper, IconProps } from '../../IconWrapper'

const UnderlineIcon = (allProps: IconProps) => {
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
            d="M3.25 6.5a4.75 4.75 0 009.5 0v-4a.75.75 0 00-1.5 0v4a3.25 3.25 0 11-6.5 0v-4a.75.75 0 00-1.5 0v4zM3 13.25a.75.75 0 000 1.5h10a.75.75 0 000-1.5H3z"
            fill="currentColor"
          />
        </svg>
      }
      {...restProps}
    />
  )
}
export default UnderlineIcon

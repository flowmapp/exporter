import { IconWrapper, IconProps } from '../../IconWrapper'

const GoLinkIcon = (allProps: IconProps) => {
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
            fillRule="evenodd"
            clipRule="evenodd"
            d="M3.765 3a.75.75 0 01.75-.75H12c.966 0 1.75.784 1.75 1.75v7.485a.75.75 0 01-1.5 0V4.811l-8.72 8.72a.75.75 0 11-1.06-1.061l8.72-8.72H4.514a.75.75 0 01-.75-.75z"
            fill="currentColor"
          />
        </svg>
      }
      {...restProps}
    />
  )
}
export default GoLinkIcon

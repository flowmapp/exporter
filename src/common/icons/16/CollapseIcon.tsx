import { IconWrapper, IconProps } from '../../IconWrapper'

const CollapseIcon = (allProps: IconProps) => {
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
            d="M4.53 2.47a.75.75 0 00-1.06 1.06l2.232 2.233a3.25 3.25 0 004.596 0L12.53 3.53a.75.75 0 00-1.06-1.06L9.237 4.702a1.75 1.75 0 01-2.474 0L4.53 2.47zM4.53 13.53a.75.75 0 01-1.06-1.06l2.232-2.233a3.25 3.25 0 014.596 0l2.232 2.233a.75.75 0 11-1.06 1.06l-2.233-2.232a1.75 1.75 0 00-2.474 0L4.53 13.53z"
            fill="currentColor"
          />
        </svg>
      }
      {...restProps}
    />
  )
}
export default CollapseIcon

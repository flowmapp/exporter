import { IconWrapper, IconProps } from '../../IconWrapper'

const CollapseVerIcon = (allProps: IconProps) => {
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
            d="M4.53 7.616a.75.75 0 01-1.06-1.06L6.055 3.97a2.75 2.75 0 013.89 0l2.585 2.585a.75.75 0 01-1.06 1.061L8.884 5.03a1.25 1.25 0 00-1.768 0L4.53 7.616zM4.53 12.616a.75.75 0 01-1.06-1.06L6.055 8.97a2.75 2.75 0 013.89 0l2.585 2.585a.75.75 0 11-1.06 1.061L8.884 10.03a1.25 1.25 0 00-1.768 0L4.53 12.616z"
            fill="currentColor"
          />
        </svg>
      }
      {...restProps}
    />
  )
}
export default CollapseVerIcon

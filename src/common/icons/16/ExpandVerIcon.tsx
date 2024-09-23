import { IconWrapper, IconProps } from '../../IconWrapper'

const ExpandVerIcon = (allProps: IconProps) => {
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
            d="M4.53 8.384a.75.75 0 00-1.06 1.06l2.585 2.586a2.75 2.75 0 003.89 0l2.585-2.585a.75.75 0 00-1.06-1.061L8.884 10.97a1.25 1.25 0 01-1.768 0L4.53 8.384zM4.53 3.384a.75.75 0 10-1.06 1.06L6.055 7.03a2.75 2.75 0 003.89 0l2.585-2.585a.75.75 0 00-1.06-1.061L8.884 5.97a1.25 1.25 0 01-1.768 0L4.53 3.384z"
            fill="currentColor"
          />
        </svg>
      }
      {...restProps}
    />
  )
}
export default ExpandVerIcon

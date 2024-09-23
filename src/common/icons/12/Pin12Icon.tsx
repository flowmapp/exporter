import { IconWrapper, IconProps } from '../../IconWrapper'

const Pin12Icon = (allProps: IconProps) => {
  const { svgProps: props, ...restProps } = allProps
  return (
    <IconWrapper
      icon={
        <svg
          width="100%"
          height="100%"
          viewBox="0 0 12 12"
          fill="currentColor"
          xmlns="http://www.w3.org/2000/svg"
          {...props}
        >
          <path
            d="M9.558 1.059l1.383 1.383a1 1 0 01.145 1.23l-2.923 4.75a1 1 0 01-1.558.183L5.47 7.47l-3.707 3.294a.375.375 0 01-.53-.53L4.53 6.53 3.395 5.395a1 1 0 01.183-1.559L8.328.914a1 1 0 011.23.145z"
            fill="currentColor"
          />
        </svg>
      }
      {...restProps}
    />
  )
}
export default Pin12Icon

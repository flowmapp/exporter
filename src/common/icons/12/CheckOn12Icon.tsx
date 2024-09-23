import { IconWrapper, IconProps } from '../../IconWrapper'

const CheckOn12Icon = (allProps: IconProps) => {
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
          <path d="M12 6A6 6 0 110 6a6 6 0 0112 0z" fill="currentColor" />
        </svg>
      }
      {...restProps}
    />
  )
}
export default CheckOn12Icon

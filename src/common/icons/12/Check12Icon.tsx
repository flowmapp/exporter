import { IconWrapper, IconProps } from '../../IconWrapper'

const Check12Icon = (allProps: IconProps) => {
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
            fillRule="evenodd"
            clipRule="evenodd"
            d="M9.56 3.5a.75.75 0 010 1.06L6.269 7.855a1.75 1.75 0 01-2.475 0L2.5 6.56A.75.75 0 013.56 5.5l1.294 1.293a.25.25 0 00.353 0L8.5 3.5a.75.75 0 011.06 0z"
            fill="currentColor"
          />
        </svg>
      }
      {...restProps}
    />
  )
}
export default Check12Icon

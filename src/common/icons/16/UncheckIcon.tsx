import { IconWrapper, IconProps } from '../../IconWrapper'

const UncheckIcon = (allProps: IconProps) => {
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
            d="M2.25 8c0-.414.286-.75.639-.75H13.11c.353 0 .639.336.639.75s-.286.75-.639.75H2.89c-.353 0-.639-.336-.639-.75z"
            fill="currentColor"
          />
        </svg>
      }
      {...restProps}
    />
  )
}
export default UncheckIcon

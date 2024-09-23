import { IconWrapper, IconProps } from '../../IconWrapper'

const ArrowDownIcon = (allProps: IconProps) => {
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
            d="M8.75 13.19l4.72-4.72a.75.75 0 111.06 1.06l-5.293 5.293a1.75 1.75 0 01-2.474 0L1.47 9.53a.75.75 0 011.06-1.06l4.72 4.72V2a.75.75 0 011.5 0v11.19z"
            fill="currentColor"
          />
        </svg>
      }
      {...restProps}
    />
  )
}
export default ArrowDownIcon

import { IconWrapper, IconProps } from '../../IconWrapper'

const ArrowLeftIcon = (allProps: IconProps) => {
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
            d="M6.47 1.47a.75.75 0 011.06 1.06L2.81 7.25H14a.75.75 0 010 1.5H2.81l4.72 4.72a.75.75 0 11-1.06 1.06L1.177 9.237a1.75 1.75 0 010-2.474L6.47 1.47z"
            fill="currentColor"
          />
        </svg>
      }
      {...restProps}
    />
  )
}
export default ArrowLeftIcon

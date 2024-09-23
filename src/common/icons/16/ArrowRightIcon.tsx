import { IconWrapper, IconProps } from '../../IconWrapper'

const ArrowRightIcon = (allProps: IconProps) => {
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
            d="M9.53 1.47a.75.75 0 00-1.06 1.06l4.72 4.72H2a.75.75 0 000 1.5h11.19l-4.72 4.72a.75.75 0 101.06 1.06l5.293-5.293a1.75 1.75 0 000-2.474L9.53 1.47z"
            fill="currentColor"
          />
        </svg>
      }
      {...restProps}
    />
  )
}
export default ArrowRightIcon

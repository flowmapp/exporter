import { IconWrapper, IconProps } from '../../IconWrapper'

const ArrowTopIcon = (allProps: IconProps) => {
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
            d="M1.47 6.47a.75.75 0 001.06 1.06l4.72-4.72V14a.75.75 0 001.5 0V2.81l4.72 4.72a.75.75 0 101.06-1.06L9.237 1.177a1.75 1.75 0 00-2.474 0L1.47 6.47z"
            fill="currentColor"
          />
        </svg>
      }
      {...restProps}
    />
  )
}
export default ArrowTopIcon

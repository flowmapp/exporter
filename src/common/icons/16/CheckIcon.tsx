import { IconWrapper, IconProps } from '../../IconWrapper'

const CheckIcon = (allProps: IconProps) => {
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
            d="M13.53 4.47a.75.75 0 010 1.06l-5.293 5.293a1.75 1.75 0 01-2.474 0L3.47 8.53a.75.75 0 011.06-1.06l2.293 2.293a.25.25 0 00.354 0L12.47 4.47a.75.75 0 011.06 0z"
            fill="currentColor"
          />
        </svg>
      }
      {...restProps}
    />
  )
}
export default CheckIcon

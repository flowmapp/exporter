import { IconWrapper, IconProps } from '../../IconWrapper'

const MinusIcon = (allProps: IconProps) => {
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
            d="M1.25 8A.75.75 0 012 7.25h12a.75.75 0 010 1.5H2A.75.75 0 011.25 8z"
            fill="currentColor"
          />
        </svg>
      }
      {...restProps}
    />
  )
}
export default MinusIcon

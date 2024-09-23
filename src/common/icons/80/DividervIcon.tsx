import { IconWrapper, IconProps } from '../../IconWrapper'

const DividervIcon = (allProps: IconProps) => {
  const { svgProps: props, ...restProps } = allProps
  return (
    <IconWrapper
      icon={
        <svg
          width="100%"
          height="100%"
          viewBox="0 0 80 80"
          fill="currentColor"
          xmlns="http://www.w3.org/2000/svg"
          {...props}
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M40 65.5a1.5 1.5 0 01-1.5-1.5V16a1.5 1.5 0 013 0v48a1.5 1.5 0 01-1.5 1.5z"
            fill="currentColor"
          />
        </svg>
      }
      {...restProps}
    />
  )
}
export default DividervIcon

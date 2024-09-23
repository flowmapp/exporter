import { IconWrapper, IconProps } from '../../IconWrapper'

const Left12Icon = (allProps: IconProps) => {
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
            d="M7.532 9.53a.75.75 0 000-1.06L5.946 6.884a1.25 1.25 0 010-1.768L7.532 3.53a.75.75 0 00-1.06-1.06L4.884 4.055a2.75 2.75 0 000 3.89L6.471 9.53a.75.75 0 001.06 0z"
            fill="currentColor"
          />
        </svg>
      }
      {...restProps}
    />
  )
}
export default Left12Icon

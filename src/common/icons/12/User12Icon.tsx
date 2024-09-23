import { IconWrapper, IconProps } from '../../IconWrapper'

const User12Icon = (allProps: IconProps) => {
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
            d="M8.97 6.79a3.75 3.75 0 10-5.94 0A2.75 2.75 0 00.75 9.5v.5a.75.75 0 001.5 0v-.5c0-.69.56-1.25 1.25-1.25h5c.69 0 1.25.56 1.25 1.25v.5a.75.75 0 001.5 0v-.5a2.75 2.75 0 00-2.28-2.71zM3.75 4.5a2.25 2.25 0 114.5 0 2.25 2.25 0 01-4.5 0z"
            fill="currentColor"
          />
        </svg>
      }
      {...restProps}
    />
  )
}
export default User12Icon

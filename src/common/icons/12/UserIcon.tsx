import { IconWrapper, IconProps } from '../../IconWrapper'

const UserIcon = (allProps: IconProps) => {
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
          <circle cx={6} cy={2.5} r={2.5} fill="currentColor" />
          <path
            d="M6.141 6H5.86c-1.774 0-3.417.93-4.33 2.451C.856 9.573 1.664 11 2.972 11h6.056c1.308 0 2.116-1.427 1.443-2.549A5.049 5.049 0 006.14 6z"
            fill="currentColor"
          />
        </svg>
      }
      {...restProps}
    />
  )
}
export default UserIcon

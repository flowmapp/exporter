import { IconWrapper, IconProps } from '../../IconWrapper'

const UserIcon = (allProps: IconProps) => {
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
            d="M11.385 9.332a4.75 4.75 0 10-6.77 0A4.752 4.752 0 00.75 14v.5a.75.75 0 001.5 0V14a3.25 3.25 0 013.25-3.25h5A3.25 3.25 0 0113.75 14v.5a.75.75 0 001.5 0V14a4.752 4.752 0 00-3.865-4.668zM4.75 6a3.25 3.25 0 116.5 0 3.25 3.25 0 01-6.5 0z"
            fill="currentColor"
          />
        </svg>
      }
      {...restProps}
    />
  )
}
export default UserIcon

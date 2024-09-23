import { IconWrapper, IconProps } from '../../IconWrapper'

const User20Icon = (allProps: IconProps) => {
  const { svgProps: props, ...restProps } = allProps
  return (
    <IconWrapper
      icon={
        <svg
          width="100%"
          height="100%"
          viewBox="0 0 20 20"
          fill="currentColor"
          xmlns="http://www.w3.org/2000/svg"
          {...props}
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M14.411 11.067a6 6 0 10-8.823 0A5.446 5.446 0 001 16.444V17a1 1 0 102 0v-.556A3.444 3.444 0 016.444 13h7.112A3.444 3.444 0 0117 16.444V17a1 1 0 102 0v-.556a5.446 5.446 0 00-4.589-5.377zM6 7a4 4 0 118 0 4 4 0 01-8 0z"
            fill="currentColor"
          />
        </svg>
      }
      {...restProps}
    />
  )
}
export default User20Icon

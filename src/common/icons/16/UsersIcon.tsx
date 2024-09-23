import { IconWrapper, IconProps } from '../../IconWrapper'

const UsersIcon = (allProps: IconProps) => {
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
          <g clipPath="url(#prefix__clip0_1971_11437)" fillRule="evenodd" clipRule="evenodd" fill="currentColor">
            <path d="M13.184 5.333A3.25 3.25 0 1010.5 6.75h1.944c.998 0 1.806.808 1.806 1.806V9a.75.75 0 001.5 0v-.444a3.307 3.307 0 00-2.566-3.223zM8.75 3.5a1.75 1.75 0 113.5 0 1.75 1.75 0 01-3.5 0zM8.75 9.5c0 .68-.209 1.311-.566 1.833a3.307 3.307 0 012.566 3.223V15a.75.75 0 01-1.5 0v-.444c0-.998-.808-1.806-1.806-1.806H3.556c-.998 0-1.806.808-1.806 1.806V15a.75.75 0 01-1.5 0v-.444a3.307 3.307 0 012.566-3.223A3.25 3.25 0 118.75 9.5zm-5 0a1.75 1.75 0 113.5 0 1.75 1.75 0 01-3.5 0z" />
          </g>
          <defs>
            <clipPath id="prefix__clip0_1971_11437">
              <path fill="currentColor" d="M0 0h16v16H0z" />
            </clipPath>
          </defs>
        </svg>
      }
      {...restProps}
    />
  )
}
export default UsersIcon

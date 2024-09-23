import { IconWrapper, IconProps } from '../../IconWrapper'

const SettingIcon = (allProps: IconProps) => {
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
            d="M.75 4A2.75 2.75 0 013.5 1.25h1A2.75 2.75 0 017.25 4v1a2.75 2.75 0 01-2.5 2.739v5.511a.75.75 0 01-1.5 0V7.739A2.75 2.75 0 01.75 5V4zM4.5 6.25c.69 0 1.25-.56 1.25-1.25V4c0-.69-.56-1.25-1.25-1.25h-1c-.69 0-1.25.56-1.25 1.25v1c0 .69.56 1.25 1.25 1.25h1zM12 2a.75.75 0 01.75.75v5.511A2.75 2.75 0 0115.25 11v1a2.75 2.75 0 01-2.75 2.75h-1A2.75 2.75 0 018.75 12v-1a2.75 2.75 0 012.5-2.739V2.75A.75.75 0 0112 2zm-.5 7.75c-.69 0-1.25.56-1.25 1.25v1c0 .69.56 1.25 1.25 1.25h1c.69 0 1.25-.56 1.25-1.25v-1c0-.69-.56-1.25-1.25-1.25h-1z"
            fill="currentColor"
          />
        </svg>
      }
      {...restProps}
    />
  )
}
export default SettingIcon

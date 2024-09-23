import { IconWrapper, IconProps } from '../../IconWrapper'

const SettingsIcon = (allProps: IconProps) => {
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
            d="M1 5a3 3 0 013-3h2a3 3 0 013 3v2a3 3 0 01-3 3v7a1 1 0 11-2 0v-7a3 3 0 01-3-3V5zm5 3a1 1 0 001-1V5a1 1 0 00-1-1H4a1 1 0 00-1 1v2a1 1 0 001 1h2zm9-6a1 1 0 011 1v7a3 3 0 013 3v2a3 3 0 01-3 3h-2a3 3 0 01-3-3v-2a3 3 0 013-3V3a1 1 0 011-1zm-1 10a1 1 0 00-1 1v2a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 00-1-1h-2z"
            fill="currentColor"
          />
        </svg>
      }
      {...restProps}
    />
  )
}
export default SettingsIcon

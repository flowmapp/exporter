import { IconWrapper, IconProps } from '../../IconWrapper'

const Elements20Icon = (allProps: IconProps) => {
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
            d="M1 4a3 3 0 013-3h2a3 3 0 013 3v2a3 3 0 01-3 3H4a3 3 0 01-3-3V4zm3-1a1 1 0 00-1 1v2a1 1 0 001 1h2a1 1 0 001-1V4a1 1 0 00-1-1H4zM11 4a3 3 0 013-3h2a3 3 0 013 3v2a3 3 0 01-3 3h-2a3 3 0 01-3-3V4zm3-1a1 1 0 00-1 1v2a1 1 0 001 1h2a1 1 0 001-1V4a1 1 0 00-1-1h-2zM1 14a3 3 0 013-3h2a3 3 0 013 3v2a3 3 0 01-3 3H4a3 3 0 01-3-3v-2zm3-1a1 1 0 00-1 1v2a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 00-1-1H4z"
            fill="currentColor"
          />
          <path
            d="M15 11a1 1 0 011 1v2h2a1 1 0 110 2h-2v2a1 1 0 11-2 0v-2h-2a1 1 0 110-2h2v-2a1 1 0 011-1z"
            fill="currentColor"
          />
        </svg>
      }
      {...restProps}
    />
  )
}
export default Elements20Icon

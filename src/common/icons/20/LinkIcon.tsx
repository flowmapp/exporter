import { IconWrapper, IconProps } from '../../IconWrapper'

const LinkIcon = (allProps: IconProps) => {
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
            d="M11 4a3 3 0 013-3h2a3 3 0 013 3v2a3 3 0 01-3 3h-2c-.463 0-.902-.105-1.293-.292l-4 3.999c.188.391.293.83.293 1.293v2a3 3 0 01-3 3H4a3 3 0 01-3-3v-2a3 3 0 013-3h2c.463 0 .902.105 1.293.292l4-3.999A2.989 2.989 0 0111 6V4zm3-1a1 1 0 00-1 1v2a1 1 0 001 1h2a1 1 0 001-1V4a1 1 0 00-1-1h-2zM4 13a1 1 0 00-1 1v2a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 00-1-1H4z"
            fill="currentColor"
          />
        </svg>
      }
      {...restProps}
    />
  )
}
export default LinkIcon

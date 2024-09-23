import { IconWrapper, IconProps } from '../../IconWrapper'

const TemplateIcon = (allProps: IconProps) => {
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
            d="M1 4a3 3 0 013-3h2a3 3 0 013 3v2a3 3 0 01-3 3H4a3 3 0 01-3-3V4zm3-1a1 1 0 00-1 1v2a1 1 0 001 1h2a1 1 0 001-1V4a1 1 0 00-1-1H4zm7 1a3 3 0 013-3h2a3 3 0 013 3v2a3 3 0 01-3 3h-2a3 3 0 01-3-3V4zm3-1a1 1 0 00-1 1v2a1 1 0 001 1h2a1 1 0 001-1V4a1 1 0 00-1-1h-2zM1 14a3 3 0 013-3h2a3 3 0 013 3v2a3 3 0 01-3 3H4a3 3 0 01-3-3v-2zm3-1a1 1 0 00-1 1v2a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 00-1-1H4zm7 1a3 3 0 013-3h2a3 3 0 013 3v2a3 3 0 01-3 3h-2a3 3 0 01-3-3v-2zm3-1a1 1 0 00-1 1v2a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 00-1-1h-2z"
            fill="currentColor"
          />
        </svg>
      }
      {...restProps}
    />
  )
}
export default TemplateIcon

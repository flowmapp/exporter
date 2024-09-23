import { IconWrapper, IconProps } from '../../IconWrapper'

const DelayIcon = (allProps: IconProps) => {
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
            d="M1 6a4 4 0 014-4h7a8 8 0 110 16H5a4 4 0 01-4-4V6zm4-2a2 2 0 00-2 2v8a2 2 0 002 2h7a6 6 0 000-12H5z"
            fill="currentColor"
          />
        </svg>
      }
      {...restProps}
    />
  )
}
export default DelayIcon

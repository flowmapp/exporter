import { IconWrapper, IconProps } from '../../IconWrapper'

const MonoIcon = (allProps: IconProps) => {
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
            d="M3.31 1.274a.75.75 0 01.844.358L8 8.47l3.846-6.838A.75.75 0 0113.25 2v12a.75.75 0 01-1.5 0V4.863l-3.096 5.505a.75.75 0 01-1.308 0L4.25 4.863V14a.75.75 0 01-1.5 0V2c0-.341.23-.64.56-.726z"
            fill="currentColor"
          />
        </svg>
      }
      {...restProps}
    />
  )
}
export default MonoIcon

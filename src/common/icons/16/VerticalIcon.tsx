import { IconWrapper, IconProps } from '../../IconWrapper'

const VerticalIcon = (allProps: IconProps) => {
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
            d="M3 .25a.75.75 0 01.75.75v3.25h5.514a2.25 2.25 0 012.236-2h1a2.25 2.25 0 012.25 2.25v1a2.25 2.25 0 01-2.25 2.25h-1a2.25 2.25 0 01-2.236-2H3.75V8A3.25 3.25 0 007 11.25h2.264a2.25 2.25 0 012.236-2h1a2.25 2.25 0 012.25 2.25v1a2.25 2.25 0 01-2.25 2.25h-1a2.25 2.25 0 01-2.236-2H7A4.75 4.75 0 012.25 8V1A.75.75 0 013 .25zm7.75 12.25c0 .414.336.75.75.75h1a.75.75 0 00.75-.75v-1a.75.75 0 00-.75-.75h-1a.75.75 0 00-.75.75v1zm0-7v-1a.75.75 0 01.75-.75h1a.75.75 0 01.75.75v1a.75.75 0 01-.75.75h-1a.75.75 0 01-.75-.75z"
            fill="currentColor"
          />
        </svg>
      }
      {...restProps}
    />
  )
}
export default VerticalIcon

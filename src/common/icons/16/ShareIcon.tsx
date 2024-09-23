import { IconWrapper, IconProps } from '../../IconWrapper'

const ShareIcon = (allProps: IconProps) => {
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
            d="M10.03.97a.75.75 0 10-1.06 1.06l4.22 4.22H9.366c-1.092 0-1.958 0-2.655.057-.714.058-1.317.18-1.868.46a4.75 4.75 0 00-2.076 2.077c-.281.55-.403 1.154-.461 1.868-.057.697-.057 1.563-.057 2.655V14a.75.75 0 001.5 0v-.6c0-1.133 0-1.937.052-2.566.05-.62.147-1.005.302-1.31a3.25 3.25 0 011.42-1.42c.305-.155.69-.251 1.31-.302.63-.051 1.434-.052 2.566-.052h3.79l-4.22 4.22a.75.75 0 101.06 1.06l4.793-4.793a1.75 1.75 0 000-2.474L10.03.97z"
            fill="currentColor"
          />
        </svg>
      }
      {...restProps}
    />
  )
}
export default ShareIcon

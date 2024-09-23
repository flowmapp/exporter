import { IconWrapper, IconProps } from '../../IconWrapper'

const BackIcon = (allProps: IconProps) => {
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
            d="M5.965.97a.75.75 0 011.061 1.06l-4.22 4.22H6.63c1.092 0 1.957 0 2.655.057.713.058 1.317.18 1.868.46a4.75 4.75 0 012.076 2.077c.28.55.402 1.154.46 1.868.058.697.058 1.563.058 2.655V14a.75.75 0 01-1.5 0v-.6c0-1.133 0-1.937-.052-2.566-.05-.62-.147-1.005-.302-1.31a3.25 3.25 0 00-1.42-1.42c-.305-.155-.69-.251-1.31-.302-.63-.051-1.434-.052-2.566-.052h-3.79l4.22 4.22a.75.75 0 11-1.06 1.06L1.172 8.237a1.75 1.75 0 010-2.474L5.965.97z"
            fill="currentColor"
          />
        </svg>
      }
      {...restProps}
    />
  )
}
export default BackIcon

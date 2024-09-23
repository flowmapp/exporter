import { IconWrapper, IconProps } from '../../IconWrapper'

const PinTop20Icon = (allProps: IconProps) => {
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
          <path d="M2 2a1 1 0 011-1h14a1 1 0 110 2H3a1 1 0 01-1-1z" fill="currentColor" />
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M5.235 16.493A3 3 0 008.195 19h3.61a3 3 0 002.96-2.507l.833-5A3 3 0 0012.64 8H11V5a1 1 0 10-2 0v3H7.36a3 3 0 00-2.958 3.493l.833 5zM7.361 10a1 1 0 00-.986 1.164l.833 5a1 1 0 00.986.836h3.612a1 1 0 00.986-.836l.834-5A1 1 0 0012.639 10H7.361z"
            fill="currentColor"
          />
        </svg>
      }
      {...restProps}
    />
  )
}
export default PinTop20Icon

import { IconWrapper, IconProps } from '../../IconWrapper'

const Bround20Icon = (allProps: IconProps) => {
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
            d="M15.95 2H17a1 1 0 110 2h-1c-.944 0-1.368 0-1.72.024A11 11 0 004.025 14.28C4 14.63 4 15.056 4 16v1a1 1 0 11-2 0v-1.05c0-.881 0-1.375.028-1.8A13 13 0 0114.15 2.028C14.575 2 15.069 2 15.95 2z"
            fill="currentColor"
          />
        </svg>
      }
      {...restProps}
    />
  )
}
export default Bround20Icon

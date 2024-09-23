import { IconWrapper, IconProps } from '../../IconWrapper'

const Bsquare20Icon = (allProps: IconProps) => {
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
            d="M2 2h15a1 1 0 110 2H4v13a1 1 0 11-2 0V2z"
            fill="currentColor"
          />
        </svg>
      }
      {...restProps}
    />
  )
}
export default Bsquare20Icon

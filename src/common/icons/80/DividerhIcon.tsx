import { IconWrapper, IconProps } from '../../IconWrapper'

const DividerhIcon = (allProps: IconProps) => {
  const { svgProps: props, ...restProps } = allProps
  return (
    <IconWrapper
      icon={
        <svg
          width="100%"
          height="100%"
          viewBox="0 0 80 80"
          fill="currentColor"
          xmlns="http://www.w3.org/2000/svg"
          {...props}
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M14.5 40a1.5 1.5 0 011.5-1.5h48a1.5 1.5 0 010 3H16a1.5 1.5 0 01-1.5-1.5z"
            fill="currentColor"
          />
        </svg>
      }
      {...restProps}
    />
  )
}
export default DividerhIcon

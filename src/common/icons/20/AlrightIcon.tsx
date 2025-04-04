import { IconWrapper, IconProps } from '../../IconWrapper'

const AlrightIcon = (allProps: IconProps) => {
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
            d="M3 3a1 1 0 000 2h14a1 1 0 100-2H3zM9 7a1 1 0 000 2h8a1 1 0 100-2H9zM2 12a1 1 0 011-1h14a1 1 0 110 2H3a1 1 0 01-1-1zM9 15a1 1 0 100 2h8a1 1 0 100-2H9z"
            fill="currentColor"
          />
        </svg>
      }
      {...restProps}
    />
  )
}
export default AlrightIcon

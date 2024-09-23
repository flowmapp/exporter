import { IconWrapper, IconProps } from '../../IconWrapper'

const Size20Icon = (allProps: IconProps) => {
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
            d="M3 2a1 1 0 000 2h14a1 1 0 100-2H3zM3 16a1 1 0 100 2h14a1 1 0 100-2H3zM7.5 8.5a1.5 1.5 0 100 3h5a1.5 1.5 0 000-3h-5z"
            fill="#1F1F1F"
          />
        </svg>
      }
      {...restProps}
    />
  )
}
export default Size20Icon

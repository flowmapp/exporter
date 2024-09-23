import { IconWrapper, IconProps } from '../../IconWrapper'

const ThicknessIcon = (allProps: IconProps) => {
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
            d="M2 3.5a.5.5 0 01.5-.5h15a.5.5 0 010 1h-15a.5.5 0 01-.5-.5zM2 9a1 1 0 011-1h14a1 1 0 110 2H3a1 1 0 01-1-1zM4 14a2 2 0 100 4h12a2 2 0 100-4H4z"
            fill="currentColor"
          />
        </svg>
      }
      {...restProps}
    />
  )
}
export default ThicknessIcon

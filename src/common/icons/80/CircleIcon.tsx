import { IconWrapper, IconProps } from '../../IconWrapper'

const CircleIcon = (allProps: IconProps) => {
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
          <rect x={18} y={18} width={44} height={44} rx={22} fill="currentColor" />
        </svg>
      }
      {...restProps}
    />
  )
}
export default CircleIcon

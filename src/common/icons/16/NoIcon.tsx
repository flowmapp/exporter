import { IconWrapper, IconProps } from '../../IconWrapper'

const NoIcon = (allProps: IconProps) => {
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
          <circle cx={8} cy={8} r={3} fill="#FF476F" />
        </svg>
      }
      {...restProps}
    />
  )
}
export default NoIcon

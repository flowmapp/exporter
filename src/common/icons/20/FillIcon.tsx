import { IconWrapper, IconProps } from '../../IconWrapper'

const FillIcon = (allProps: IconProps) => {
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
          <rect x={1} y={1} width={18} height={18} rx={9} fill="#6696FF" />
        </svg>
      }
      {...restProps}
    />
  )
}
export default FillIcon

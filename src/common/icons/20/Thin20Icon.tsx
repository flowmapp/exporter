import { IconWrapper, IconProps } from '../../IconWrapper'

const Thin20Icon = (allProps: IconProps) => {
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
          <path d="M13 10a3 3 0 11-6 0 3 3 0 016 0z" fill="currentColor" />
        </svg>
      }
      {...restProps}
    />
  )
}
export default Thin20Icon

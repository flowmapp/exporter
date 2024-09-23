import { IconWrapper, IconProps } from '../../IconWrapper'

const Thick20Icon = (allProps: IconProps) => {
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
          <path d="M17 10a7 7 0 11-14 0 7 7 0 0114 0z" fill="currentColor" />
        </svg>
      }
      {...restProps}
    />
  )
}
export default Thick20Icon

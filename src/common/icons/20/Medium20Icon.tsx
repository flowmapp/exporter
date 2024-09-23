import { IconWrapper, IconProps } from '../../IconWrapper'

const Medium20Icon = (allProps: IconProps) => {
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
          <path d="M15 10a5 5 0 11-10 0 5 5 0 0110 0z" fill="currentColor" />
        </svg>
      }
      {...restProps}
    />
  )
}
export default Medium20Icon

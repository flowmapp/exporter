import { IconWrapper, IconProps } from '../../IconWrapper'

const Property1todoIcon = (allProps: IconProps) => {
  const { svgProps: props, ...restProps } = allProps
  return (
    <IconWrapper
      icon={
        <svg
          width="100%"
          height="100%"
          viewBox="0 0 12 12"
          fill="currentColor"
          xmlns="http://www.w3.org/2000/svg"
          {...props}
        >
          <path d="M10 6a4 4 0 11-8 0 4 4 0 018 0z" fill="currentColor" />
        </svg>
      }
      {...restProps}
    />
  )
}
export default Property1todoIcon

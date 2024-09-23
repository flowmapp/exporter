import { IconWrapper, IconProps } from '../../IconWrapper'

const DotGridIcon = (allProps: IconProps) => {
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
          <path
            d="M5 3.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM5 8a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM5 12.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM9.5 3.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM9.5 8a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM9.5 12.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM14 3.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM14 8a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM14 12.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0z"
            fill="currentColor"
          />
        </svg>
      }
      {...restProps}
    />
  )
}
export default DotGridIcon

import { IconWrapper, IconProps } from '../../IconWrapper'

const Drag20Icon = (allProps: IconProps) => {
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
            d="M8 4.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM15 4.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM8 10a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM15 10a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM6.5 17a1.5 1.5 0 100-3 1.5 1.5 0 000 3zM13.5 17a1.5 1.5 0 100-3 1.5 1.5 0 000 3z"
            fill="currentColor"
          />
        </svg>
      }
      {...restProps}
    />
  )
}
export default Drag20Icon

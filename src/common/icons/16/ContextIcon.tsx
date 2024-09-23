import { IconWrapper, IconProps } from '../../IconWrapper'

const ContextIcon = (allProps: IconProps) => {
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
            d="M6 3.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM13 3.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM6 8a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM13 8a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM4.5 14a1.5 1.5 0 100-3 1.5 1.5 0 000 3zM11.5 14a1.5 1.5 0 100-3 1.5 1.5 0 000 3z"
            fill="currentColor"
          />
        </svg>
      }
      {...restProps}
    />
  )
}
export default ContextIcon

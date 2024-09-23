import { IconWrapper, IconProps } from '../../IconWrapper'

const CollapseIcon = (allProps: IconProps) => {
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
            fillRule="evenodd"
            clipRule="evenodd"
            d="M11.414 14.828a2 2 0 00-2.828 0l-2.379 2.38a1 1 0 01-1.414-1.415l2.379-2.379a4 4 0 015.656 0l2.38 2.379a1 1 0 01-1.415 1.414l-2.379-2.379zM11.414 5.172a2 2 0 01-2.828 0l-2.379-2.38a1 1 0 00-1.414 1.415l2.379 2.379a4 4 0 005.656 0l2.38-2.379a1 1 0 00-1.415-1.414l-2.379 2.379z"
            fill="currentColor"
          />
        </svg>
      }
      {...restProps}
    />
  )
}
export default CollapseIcon

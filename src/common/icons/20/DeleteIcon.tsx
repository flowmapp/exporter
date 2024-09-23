import { IconWrapper, IconProps } from '../../IconWrapper'

const DeleteIcon = (allProps: IconProps) => {
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
            d="M11 1a1 1 0 10-2 0v1H2a1 1 0 000 2h16a1 1 0 100-2h-7V1zM9 8a1 1 0 00-2 0v5a1 1 0 102 0V8zM13 8a1 1 0 10-2 0v5a1 1 0 102 0V8z"
            fill="currentColor"
          />
          <path
            d="M4 7a1 1 0 10-2 0v4.643c0 1.084 0 1.958.058 2.666.06.729.185 1.369.487 1.961a5 5 0 002.185 2.185c.592.302 1.233.428 1.961.487C7.4 19 8.273 19 9.357 19h1.286c1.084 0 1.958 0 2.666-.058.729-.06 1.369-.185 1.961-.487a5 5 0 002.185-2.185c.302-.592.428-1.232.487-1.961C18 13.6 18 12.727 18 11.643V7a1 1 0 10-2 0v4.6c0 1.137 0 1.929-.051 2.546-.05.605-.142.953-.276 1.216a3 3 0 01-1.311 1.311c-.263.134-.611.226-1.216.276-.617.05-1.41.051-2.546.051H9.4c-1.137 0-1.929 0-2.546-.051-.605-.05-.953-.142-1.216-.276a3 3 0 01-1.311-1.311c-.134-.263-.226-.611-.276-1.216C4.001 13.529 4 12.736 4 11.6V7z"
            fill="currentColor"
          />
        </svg>
      }
      {...restProps}
    />
  )
}
export default DeleteIcon

import { IconWrapper, IconProps } from '../../IconWrapper'

const TriangleIcon = (allProps: IconProps) => {
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
            d="M11.693 4.073a2 2 0 00-3.386 0l-5.571 8.863C1.899 14.268 2.856 16 4.429 16h11.142c1.573 0 2.53-1.732 1.693-3.064l-5.57-8.863zm-5.08-1.064c1.569-2.495 5.205-2.495 6.773 0l5.571 8.862c1.675 2.664-.24 6.129-3.386 6.129H4.429c-3.146 0-5.06-3.465-3.386-6.129l5.57-8.862z"
            fill="currentColor"
          />
        </svg>
      }
      {...restProps}
    />
  )
}
export default TriangleIcon

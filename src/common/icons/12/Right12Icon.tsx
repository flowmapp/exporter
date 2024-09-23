import { IconWrapper, IconProps } from '../../IconWrapper'

const Right12Icon = (allProps: IconProps) => {
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
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M4.47 9.53a.75.75 0 010-1.06l1.585-1.586a1.25 1.25 0 000-1.768L4.47 3.53a.75.75 0 011.06-1.06l1.586 1.585a2.75 2.75 0 010 3.89L5.53 9.53a.75.75 0 01-1.06 0z"
            fill="currentColor"
          />
        </svg>
      }
      {...restProps}
    />
  )
}
export default Right12Icon

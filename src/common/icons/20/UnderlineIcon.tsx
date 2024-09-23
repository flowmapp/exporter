import { IconWrapper, IconProps } from '../../IconWrapper'

const UnderlineIcon = (allProps: IconProps) => {
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
            d="M4 9.116c0 .817 0 1.375.096 1.86a5 5 0 003.929 3.928C8.509 15 9.067 15 9.885 15h.23c.818 0 1.376 0 1.86-.096a5 5 0 003.929-3.928C16 10.49 16 9.933 16 9.116V3a1 1 0 10-2 0v6c0 .977-.005 1.32-.058 1.585a3 3 0 01-2.357 2.357c-.265.053-.608.058-1.585.058s-1.32-.005-1.585-.058a3 3 0 01-2.357-2.357C6.005 10.32 6 9.977 6 9V3a1 1 0 00-2 0v6.116zM4 17a1 1 0 100 2h12a1 1 0 100-2H4z"
            fill="currentColor"
          />
        </svg>
      }
      {...restProps}
    />
  )
}
export default UnderlineIcon

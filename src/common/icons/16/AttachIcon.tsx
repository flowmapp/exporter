import { IconWrapper, IconProps } from '../../IconWrapper'

const AttachIcon = (allProps: IconProps) => {
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
            d="M12.737 1.657a3.95 3.95 0 010 5.586l-2.262 2.263a.241.241 0 01-.006.006l-2.257 2.256a2.35 2.35 0 01-3.324-3.323L9.414 3.92a.75.75 0 011.06 1.06L5.95 9.506a.85.85 0 101.202 1.202l3.394-3.394a.241.241 0 01.006-.006l1.126-1.126a2.45 2.45 0 10-3.465-3.464L5.949 4.98a.78.78 0 01-.01.01L3.687 7.242a4.05 4.05 0 105.728 5.727l4.525-4.525A.75.75 0 1115 9.505l-4.525 4.526a5.55 5.55 0 11-7.848-7.849l3.96-3.96a.708.708 0 01.009-.009l.556-.556a3.95 3.95 0 015.586 0z"
            fill="currentColor"
          />
        </svg>
      }
      {...restProps}
    />
  )
}
export default AttachIcon

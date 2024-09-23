import { IconWrapper, IconProps } from '../../IconWrapper'

const ImageIcon = (allProps: IconProps) => {
  const { svgProps: props, ...restProps } = allProps
  return (
    <IconWrapper
      icon={
        <svg
          width="100%"
          height="100%"
          viewBox="0 0 80 80"
          fill="currentColor"
          xmlns="http://www.w3.org/2000/svg"
          {...props}
        >
          <path
            d="M36.667 26.667a6.667 6.667 0 11-13.334 0 6.667 6.667 0 0113.334 0zM49.227 39.74a3.333 3.333 0 00-5.121 0l-7.303 8.763-4.2-5.25a3.333 3.333 0 00-5.206 0L21 51.252c-1.746 2.183-.192 5.416 2.603 5.416h32.615c2.826 0 4.37-3.297 2.56-5.468l-9.55-11.46z"
            fill="currentColor"
          />
        </svg>
      }
      {...restProps}
    />
  )
}
export default ImageIcon

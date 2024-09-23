import { IconWrapper, IconProps } from '../../IconWrapper'

const SquareIcon = (allProps: IconProps) => {
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
            d="M20 29.6c0-3.36 0-5.04.654-6.324a6 6 0 012.622-2.622C24.56 20 26.24 20 29.6 20h20.8c3.36 0 5.04 0 6.324.654a6 6 0 012.622 2.622C60 24.56 60 26.24 60 29.6v20.8c0 3.36 0 5.04-.654 6.324a6 6 0 01-2.622 2.622C55.44 60 53.76 60 50.4 60H29.6c-3.36 0-5.04 0-6.324-.654a6 6 0 01-2.622-2.622C20 55.44 20 53.76 20 50.4V29.6z"
            fill="currentColor"
          />
        </svg>
      }
      {...restProps}
    />
  )
}
export default SquareIcon

import { IconWrapper, IconProps } from '../../IconWrapper'

const ProductHuntIcon = (allProps: IconProps) => {
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
          <g clipPath="url(#prefix__clip0_4864_20)">
            <path d="M8 16A8 8 0 108 0a8 8 0 000 16z" fill="currentColor" />
            <path
              d="M9.067 4H5.2v8h1.6V9.6h2.267a2.8 2.8 0 100-5.6zm0 4H6.8V5.6h2.267a1.2 1.2 0 010 2.4z"
              fill="currentColor"
            />
          </g>
          <defs>
            <clipPath id="prefix__clip0_4864_20">
              <path fill="currentColor" d="M0 0h16v16H0z" />
            </clipPath>
          </defs>
        </svg>
      }
      {...restProps}
    />
  )
}
export default ProductHuntIcon

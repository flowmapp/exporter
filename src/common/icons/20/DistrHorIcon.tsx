import { IconWrapper, IconProps } from '../../IconWrapper'

const DistrHor = (allProps: IconProps) => {
  const { svgProps: props, ...restProps } = allProps
  return (
    <IconWrapper
      icon={
        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
          <path
            d="M3 2C2.44772 2 2 2.44772 2 3V17C2 17.5523 2.44772 18 3 18C3.55228 18 4 17.5523 4 17V3C4 2.44772 3.55228 2 3 2Z"
            fill="#1F1F1F"
          />
          <path
            d="M17 2C16.4477 2 16 2.44772 16 3V17C16 17.5523 16.4477 18 17 18C17.5523 18 18 17.5523 18 17V3C18 2.44772 17.5523 2 17 2Z"
            fill="#1F1F1F"
          />
          <path
            d="M10 6C9.17157 6 8.5 6.67157 8.5 7.5V12.5C8.5 13.3284 9.17157 14 10 14C10.8284 14 11.5 13.3284 11.5 12.5V7.5C11.5 6.67157 10.8284 6 10 6Z"
            fill="#1F1F1F"
          />
        </svg>
      }
      {...restProps}
    />
  )
}
export default DistrHor

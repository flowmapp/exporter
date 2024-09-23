import { IconWrapper, IconProps } from '../../IconWrapper'

const DistrVer = (allProps: IconProps) => {
  const { svgProps: props, ...restProps } = allProps
  return (
    <IconWrapper
      icon={
        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
          <path
            d="M3 2C2.44772 2 2 2.44772 2 3C2 3.55228 2.44772 4 3 4H17C17.5523 4 18 3.55228 18 3C18 2.44772 17.5523 2 17 2H3Z"
            fill="#1F1F1F"
          />
          <path
            d="M3 16C2.44772 16 2 16.4477 2 17C2 17.5523 2.44772 18 3 18H17C17.5523 18 18 17.5523 18 17C18 16.4477 17.5523 16 17 16H3Z"
            fill="#1F1F1F"
          />
          <path
            d="M7.5 8.5C6.67157 8.5 6 9.17157 6 10C6 10.8284 6.67157 11.5 7.5 11.5H12.5C13.3284 11.5 14 10.8284 14 10C14 9.17157 13.3284 8.5 12.5 8.5H7.5Z"
            fill="#1F1F1F"
          />
        </svg>
      }
      {...restProps}
    />
  )
}
export default DistrVer

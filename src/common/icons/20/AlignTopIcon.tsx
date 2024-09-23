import { IconWrapper, IconProps } from '../../IconWrapper'

const AlignTop = (allProps: IconProps) => {
  const { svgProps: props, ...restProps } = allProps
  return (
    <IconWrapper
      icon={
        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
          <path
            d="M1 3C1 2.44772 1.44772 2 2 2H18C18.5523 2 19 2.44772 19 3C19 3.55228 18.5523 4 18 4H2C1.44772 4 1 3.55228 1 3Z"
            fill="#1F1F1F"
          />
          <path
            d="M6 7.5C6 6.67157 6.67157 6 7.5 6C8.32843 6 9 6.67157 9 7.5V16.5C9 17.3284 8.32843 18 7.5 18C6.67157 18 6 17.3284 6 16.5V7.5Z"
            fill="#1F1F1F"
          />
          <path
            d="M12.5 6C11.6716 6 11 6.67157 11 7.5V12.5C11 13.3284 11.6716 14 12.5 14C13.3284 14 14 13.3284 14 12.5V7.5C14 6.67157 13.3284 6 12.5 6Z"
            fill="#1F1F1F"
          />
        </svg>
      }
      {...restProps}
    />
  )
}
export default AlignTop

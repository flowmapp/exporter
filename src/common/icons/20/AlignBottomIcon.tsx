import { IconWrapper, IconProps } from '../../IconWrapper'

const AlignBottom = (allProps: IconProps) => {
  const { svgProps: props, ...restProps } = allProps
  return (
    <IconWrapper
      icon={
        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
          <path
            d="M6 3.5C6 2.67157 6.67157 2 7.5 2C8.32843 2 9 2.67157 9 3.5V12.5C9 13.3284 8.32843 14 7.5 14C6.67157 14 6 13.3284 6 12.5V3.5Z"
            fill="#1F1F1F"
          />
          <path
            d="M1 17C1 16.4477 1.44772 16 2 16H18C18.5523 16 19 16.4477 19 17C19 17.5523 18.5523 18 18 18H2C1.44772 18 1 17.5523 1 17Z"
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
export default AlignBottom

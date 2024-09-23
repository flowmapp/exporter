import { IconWrapper, IconProps } from '../../IconWrapper'

const AlignRight = (allProps: IconProps) => {
  const { svgProps: props, ...restProps } = allProps
  return (
    <IconWrapper
      icon={
        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
          <path
            d="M16 2C16 1.44772 16.4477 1 17 1C17.5523 1 18 1.44772 18 2V18C18 18.5523 17.5523 19 17 19C16.4477 19 16 18.5523 16 18V2Z"
            fill="#1F1F1F"
          />
          <path
            d="M2 7.5C2 6.67157 2.67157 6 3.5 6H12.5C13.3284 6 14 6.67157 14 7.5C14 8.32843 13.3284 9 12.5 9H3.5C2.67157 9 2 8.32843 2 7.5Z"
            fill="#1F1F1F"
          />
          <path
            d="M7.5 11C6.67157 11 6 11.6716 6 12.5C6 13.3284 6.67157 14 7.5 14H12.5C13.3284 14 14 13.3284 14 12.5C14 11.6716 13.3284 11 12.5 11H7.5Z"
            fill="#1F1F1F"
          />
        </svg>
      }
      {...restProps}
    />
  )
}
export default AlignRight

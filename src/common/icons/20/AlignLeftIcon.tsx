import { IconWrapper, IconProps } from '../../IconWrapper'

const AlignLeft = (allProps: IconProps) => {
  const { svgProps: props, ...restProps } = allProps
  return (
    <IconWrapper
      icon={
        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
          <path
            d="M2 2C2 1.44772 2.44772 1 3 1C3.55228 1 4 1.44772 4 2V18C4 18.5523 3.55228 19 3 19C2.44772 19 2 18.5523 2 18V2Z"
            fill="#1F1F1F"
          />
          <path
            d="M6 7.5C6 6.67157 6.67157 6 7.5 6H16.5C17.3284 6 18 6.67157 18 7.5C18 8.32843 17.3284 9 16.5 9H7.5C6.67157 9 6 8.32843 6 7.5Z"
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
export default AlignLeft

import { IconWrapper, IconProps } from '../../IconWrapper'

const AlignVertCenter = (allProps: IconProps) => {
  const { svgProps: props, ...restProps } = allProps
  return (
    <IconWrapper
      icon={
        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
          <path
            d="M6 4.5C6 3.67157 6.67157 3 7.5 3C8.32843 3 9 3.67157 9 4.5V9H11V6.5C11 5.67157 11.6716 5 12.5 5C13.3284 5 14 5.67157 14 6.5V9H18C18.5523 9 19 9.44772 19 10C19 10.5523 18.5523 11 18 11H14V13.5C14 14.3284 13.3284 15 12.5 15C11.6716 15 11 14.3284 11 13.5V11H9V15.5C9 16.3284 8.32843 17 7.5 17C6.67157 17 6 16.3284 6 15.5V11H2C1.44772 11 1 10.5523 1 10C1 9.44772 1.44772 9 2 9H6V4.5Z"
            fill="#1F1F1F"
          />
        </svg>
      }
      {...restProps}
    />
  )
}
export default AlignVertCenter

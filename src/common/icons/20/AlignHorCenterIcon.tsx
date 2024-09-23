import { IconWrapper, IconProps } from '../../IconWrapper'

const AlignHorCenter = (allProps: IconProps) => {
  const { svgProps: props, ...restProps } = allProps
  return (
    <IconWrapper
      icon={
        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
          <path
            d="M9 2C9 1.44772 9.44772 1 10 1C10.5523 1 11 1.44772 11 2V6H16.5C17.3284 6 18 6.67157 18 7.5C18 8.32843 17.3284 9 16.5 9H11V11H13.5C14.3284 11 15 11.6716 15 12.5C15 13.3284 14.3284 14 13.5 14H11V18C11 18.5523 10.5523 19 10 19C9.44772 19 9 18.5523 9 18V14H6.5C5.67157 14 5 13.3284 5 12.5C5 11.6716 5.67157 11 6.5 11H9V9H3.5C2.67157 9 2 8.32843 2 7.5C2 6.67157 2.67157 6 3.5 6H9V2Z"
            fill="#1F1F1F"
          />
        </svg>
      }
      {...restProps}
    />
  )
}
export default AlignHorCenter

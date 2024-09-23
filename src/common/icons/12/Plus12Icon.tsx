import { IconWrapper, IconProps } from '../../IconWrapper'

const Plus12Icon = (allProps: IconProps) => {
  const { svgProps: props, ...restProps } = allProps
  return (
    <IconWrapper
      icon={
        <svg
          width="100%"
          height="100%"
          viewBox="0 0 12 12"
          fill="currentColor"
          xmlns="http://www.w3.org/2000/svg"
          {...props}
        >
          <path
            d="M6.75 2a.75.75 0 00-1.5 0v3.25H2a.75.75 0 000 1.5h3.25V10a.75.75 0 001.5 0V6.75H10a.75.75 0 000-1.5H6.75V2z"
            fill="currentColor"
          />
        </svg>
      }
      {...restProps}
    />
  )
}
export default Plus12Icon

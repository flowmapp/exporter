import { IconWrapper, IconProps } from '../../IconWrapper'

const CloseIcon = (allProps: IconProps) => {
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
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M2.44 2.44a.75.75 0 011.06 0L8 6.94l4.44-4.5A.75.75 0 0113.5 3.5L9.06 8l4.5 4.44a.75.75 0 01-1.06 1.06L8 9.06 3.5 13.5a.75.75 0 11-1.06-1.06L6.94 8l-4.5-4.5a.75.75 0 010-1.06z"
            fill="currentColor"
          />
        </svg>
      }
      {...restProps}
    />
  )
}
export default CloseIcon

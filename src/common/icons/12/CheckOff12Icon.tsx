import { IconWrapper, IconProps } from '../../IconWrapper'

const CheckOff12Icon = (allProps: IconProps) => {
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
            fillRule="evenodd"
            clipRule="evenodd"
            d="M6 10.5a4.5 4.5 0 100-9 4.5 4.5 0 000 9zM6 12A6 6 0 106 0a6 6 0 000 12z"
            fill="currentColor"
          />
        </svg>
      }
      {...restProps}
    />
  )
}
export default CheckOff12Icon

import { IconWrapper, IconProps } from '../../IconWrapper'

const PlansIcon = (allProps: IconProps) => {
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
            d="M8 14.75a.75.75 0 00.75-.75V2a.75.75 0 00-1.5 0v12c0 .414.336.75.75.75zM13 14.75a.75.75 0 00.75-.75V6a.75.75 0 00-1.5 0v8c0 .414.336.75.75.75zM3.75 14a.75.75 0 01-1.5 0v-4a.75.75 0 011.5 0v4z"
            fill="currentColor"
          />
        </svg>
      }
      {...restProps}
    />
  )
}
export default PlansIcon

import { IconWrapper, IconProps } from '../../IconWrapper'

const SendToBackIcon = (allProps: IconProps) => {
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
            d="M2 2.75a.75.75 0 010-1.5h12a.75.75 0 010 1.5H2zM12.47 9.47l-3.72 3.72V5a.75.75 0 00-1.5 0v8.19L3.53 9.47a.75.75 0 00-1.06 1.06l4.293 4.293a1.75 1.75 0 002.474 0l4.293-4.293a.75.75 0 10-1.06-1.06z"
            fill="currentColor"
          />
        </svg>
      }
      {...restProps}
    />
  )
}
export default SendToBackIcon

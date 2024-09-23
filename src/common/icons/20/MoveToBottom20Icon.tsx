import { IconWrapper, IconProps } from '../../IconWrapper'

const MoveToBottom20Icon = (allProps: IconProps) => {
  const { svgProps: props, ...restProps } = allProps
  return (
    <IconWrapper
      icon={
        <svg
          width="100%"
          height="100%"
          viewBox="0 0 20 20"
          fill="currentColor"
          xmlns="http://www.w3.org/2000/svg"
          {...props}
        >
          <path
            d="M11 2a1 1 0 10-2 0v9.586L4.707 7.293a1 1 0 10-1.414 1.414L8.586 14a2 2 0 002.828 0l5.293-5.293a1 1 0 00-1.414-1.414L11 11.586V2zM2 17a1 1 0 100 2h16a1 1 0 100-2H2z"
            fill="currentColor"
          />
        </svg>
      }
      {...restProps}
    />
  )
}
export default MoveToBottom20Icon

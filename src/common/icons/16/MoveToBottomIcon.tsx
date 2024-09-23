import { IconWrapper, IconProps } from '../../IconWrapper'

const MoveToBottomIcon = (allProps: IconProps) => {
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
            d="M12.47 5.47L8.75 9.19V1a.75.75 0 00-1.5 0v8.19L3.53 5.47a.75.75 0 00-1.06 1.06l4.293 4.293a1.75 1.75 0 002.474 0L13.53 6.53a.75.75 0 00-1.06-1.06zM1.5 14.75a.75.75 0 010-1.5h13a.75.75 0 010 1.5h-13z"
            fill="currentColor"
          />
        </svg>
      }
      {...restProps}
    />
  )
}
export default MoveToBottomIcon

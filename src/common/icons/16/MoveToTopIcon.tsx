import { IconWrapper, IconProps } from '../../IconWrapper'

const MoveToTopIcon = (allProps: IconProps) => {
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
            d="M1.5 2.75a.75.75 0 010-1.5h13a.75.75 0 010 1.5h-13zM2.47 10.53a.75.75 0 010-1.06l4.293-4.293a1.75 1.75 0 012.474 0L13.53 9.47a.75.75 0 11-1.06 1.06L8.75 6.81V15a.75.75 0 01-1.5 0V6.81l-3.72 3.72a.75.75 0 01-1.06 0z"
            fill="currentColor"
          />
        </svg>
      }
      {...restProps}
    />
  )
}
export default MoveToTopIcon

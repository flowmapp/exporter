import { IconWrapper, IconProps } from '../../IconWrapper'

const RedoIcon = (allProps: IconProps) => {
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
            d="M11.53 1.47a.75.75 0 10-1.06 1.06l2.72 2.72H6a4.75 4.75 0 000 9.5h2a.75.75 0 000-1.5H6a3.25 3.25 0 010-6.5h7.19l-2.72 2.72a.75.75 0 101.06 1.06l2.888-2.887c.182-.182.349-.35.477-.5.139-.163.275-.356.355-.602a1.75 1.75 0 000-1.082 1.773 1.773 0 00-.355-.602 9.06 9.06 0 00-.477-.5L11.53 1.47z"
            fill="currentColor"
          />
        </svg>
      }
      {...restProps}
    />
  )
}
export default RedoIcon

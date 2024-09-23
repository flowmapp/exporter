import { IconWrapper, IconProps } from '../../IconWrapper'

const UndoIcon = (allProps: IconProps) => {
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
            d="M5.53 2.53a.75.75 0 10-1.06-1.06L1.177 4.763a1.75 1.75 0 000 2.474L4.47 10.53a.75.75 0 101.06-1.06L2.81 6.75H10a3.25 3.25 0 010 6.5H8a.75.75 0 000 1.5h2a4.75 4.75 0 100-9.5H2.81l2.72-2.72z"
            fill="currentColor"
          />
        </svg>
      }
      {...restProps}
    />
  )
}
export default UndoIcon

import { IconWrapper, IconProps } from '../../IconWrapper'

const ReplaceIcon = (allProps: IconProps) => {
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
            d="M4.97 8.47a.75.75 0 011.06 1.06l-1.72 1.72H10A2.25 2.25 0 0012.25 9a.75.75 0 011.5 0A3.75 3.75 0 0110 12.75H4.31l1.72 1.72a.75.75 0 11-1.06 1.06l-2.293-2.293a1.75 1.75 0 010-2.474L4.97 8.47zM6 3.25A3.75 3.75 0 002.25 7a.75.75 0 001.5 0A2.25 2.25 0 016 4.75h5.69L9.97 6.47a.75.75 0 001.06 1.06l2.293-2.293a1.75 1.75 0 000-2.474L11.03.47a.75.75 0 10-1.06 1.06l1.72 1.72H6z"
            fill="currentColor"
          />
        </svg>
      }
      {...restProps}
    />
  )
}
export default ReplaceIcon

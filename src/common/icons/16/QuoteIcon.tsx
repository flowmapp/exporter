import { IconWrapper, IconProps } from '../../IconWrapper'

const QuoteIcon = (allProps: IconProps) => {
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
            d="M3.75 2a.75.75 0 00-1.5 0v12a.75.75 0 001.5 0V2zM7 3.25a.75.75 0 000 1.5h7a.75.75 0 000-1.5H7zM7 11.25a.75.75 0 000 1.5h4a.75.75 0 000-1.5H7zM6.25 8A.75.75 0 017 7.25h7a.75.75 0 010 1.5H7A.75.75 0 016.25 8z"
            fill="currentColor"
          />
        </svg>
      }
      {...restProps}
    />
  )
}
export default QuoteIcon

import { IconWrapper, IconProps } from '../../IconWrapper'

const CommentIcon = (allProps: IconProps) => {
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
            fillRule="evenodd"
            clipRule="evenodd"
            d="M1 6a5 5 0 015-5h8a5 5 0 015 5v6a5 5 0 01-5 5h-.539a1 1 0 00-.78.375l-1.088 1.36a2.04 2.04 0 01-3.186 0l-1.087-1.36A1 1 0 006.539 17H6a5 5 0 01-5-5V6zm5-3a3 3 0 00-3 3v6a3 3 0 003 3h.539a3 3 0 012.342 1.126l1.088 1.359a.04.04 0 00.063 0l1.087-1.36A3 3 0 0113.46 15H14a3 3 0 003-3V6a3 3 0 00-3-3H6zm0 4a1 1 0 011-1h6a1 1 0 110 2H7a1 1 0 01-1-1zm0 4a1 1 0 011-1h6a1 1 0 110 2H7a1 1 0 01-1-1z"
            fill="currentColor"
          />
        </svg>
      }
      {...restProps}
    />
  )
}
export default CommentIcon

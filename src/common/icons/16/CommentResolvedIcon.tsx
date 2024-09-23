import { IconWrapper, IconProps } from '../../IconWrapper'

const CommentResolvedIcon = (allProps: IconProps) => {
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
          <g clipPath="url(#prefix__clip0_4116_6192)" fill="currentColor">
            <path d="M11.03 6.53a.75.75 0 10-1.06-1.06L7.677 7.763a.25.25 0 01-.354 0L6.53 6.97a.75.75 0 00-1.06 1.06l.793.793a1.75 1.75 0 002.474 0L11.03 6.53z" />
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M5.5.75A4.75 4.75 0 00.75 5.5v3.9a4.35 4.35 0 004.35 4.35c.33 0 .642.156.84.42l.66.88a1.75 1.75 0 002.8 0l.66-.88c.198-.264.51-.42.84-.42a4.35 4.35 0 004.35-4.35V5.5A4.75 4.75 0 0010.5.75h-5zM2.25 5.5A3.25 3.25 0 015.5 2.25h5a3.25 3.25 0 013.25 3.25v3.9a2.85 2.85 0 01-2.85 2.85 2.55 2.55 0 00-2.04 1.02l-.66.88a.25.25 0 01-.4 0l-.66-.88a2.55 2.55 0 00-2.04-1.02A2.85 2.85 0 012.25 9.4V5.5z"
            />
          </g>
          <defs>
            <clipPath id="prefix__clip0_4116_6192">
              <path fill="currentColor" d="M0 0h16v16H0z" />
            </clipPath>
          </defs>
        </svg>
      }
      {...restProps}
    />
  )
}
export default CommentResolvedIcon

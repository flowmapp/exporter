import { IconWrapper, IconProps } from '../../IconWrapper'

const AddCommentIcon = (allProps: IconProps) => {
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
          <g clipPath="url(#prefix__clip0_3321_3300)" fill="currentColor">
            <path d="M13.25 1a.75.75 0 00-1.5 0v1.75H10a.75.75 0 000 1.5h1.75V6a.75.75 0 001.5 0V4.25H15a.75.75 0 000-1.5h-1.75V1z" />
            <path d="M5.5.75A4.75 4.75 0 00.75 5.5v3.9a4.35 4.35 0 004.35 4.35c.33 0 .642.156.84.42l.66.88a1.75 1.75 0 002.8 0l.66-.88c.198-.264.51-.42.84-.42a4.35 4.35 0 004.35-4.35.75.75 0 00-1.5 0 2.85 2.85 0 01-2.85 2.85 2.55 2.55 0 00-2.04 1.02l-.66.88a.25.25 0 01-.4 0l-.66-.88a2.55 2.55 0 00-2.04-1.02A2.85 2.85 0 012.25 9.4V5.5A3.25 3.25 0 015.5 2.25H7a.75.75 0 000-1.5H5.5z" />
            <path d="M5.5 5.25a.75.75 0 100 1.5h2a.75.75 0 000-1.5h-2zM5.5 8.25a.75.75 0 100 1.5h5a.75.75 0 000-1.5h-5z" />
          </g>
          <defs>
            <clipPath id="prefix__clip0_3321_3300">
              <path fill="currentColor" d="M0 0h16v16H0z" />
            </clipPath>
          </defs>
        </svg>
      }
      {...restProps}
    />
  )
}
export default AddCommentIcon

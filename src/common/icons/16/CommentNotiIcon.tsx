import { IconWrapper, IconProps } from '../../IconWrapper'

const CommentNotiIcon = (allProps: IconProps) => {
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
            fillRule="evenodd"
            clipRule="evenodd"
            d="M.75 5.5A4.75 4.75 0 015.5.75H9a.75.75 0 010 1.5H5.5A3.25 3.25 0 002.25 5.5v3.9a2.85 2.85 0 002.85 2.85 2.55 2.55 0 012.04 1.02l.66.88a.25.25 0 00.4 0l.66-.88a2.55 2.55 0 012.04-1.02 2.85 2.85 0 002.85-2.85V7a.75.75 0 011.5 0v2.4a4.35 4.35 0 01-4.35 4.35c-.33 0-.642.156-.84.42l-.66.88a1.75 1.75 0 01-2.8 0l-.66-.88a1.05 1.05 0 00-.84-.42A4.35 4.35 0 01.75 9.4V5.5zm4 .5a.75.75 0 01.75-.75h5a.75.75 0 010 1.5h-5A.75.75 0 014.75 6zm0 3a.75.75 0 01.75-.75h5a.75.75 0 010 1.5h-5A.75.75 0 014.75 9z"
            fill="currentColor"
          />
        </svg>
      }
      {...restProps}
    />
  )
}
export default CommentNotiIcon

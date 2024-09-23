import { IconWrapper, IconProps } from '../../IconWrapper'

const NumericIcon = (allProps: IconProps) => {
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
            d="M1.25 1.5A.75.75 0 012 .75h.5c.966 0 1.75.784 1.75 1.75v3.25H5a.75.75 0 010 1.5H2a.75.75 0 010-1.5h.75V2.5a.25.25 0 00-.25-.25H2a.75.75 0 01-.75-.75zM2.5 8.75a.75.75 0 100 1.5H4a.25.25 0 01.25.25v.5a.25.25 0 01-.25.25H3A1.75 1.75 0 001.25 13v.5c0 .966.784 1.75 1.75 1.75h2a.75.75 0 000-1.5H3a.25.25 0 01-.25-.25V13a.25.25 0 01.25-.25h1A1.75 1.75 0 005.75 11v-.5A1.75 1.75 0 004 8.75H2.5zM7.25 4A.75.75 0 018 3.25h6a.75.75 0 010 1.5H8A.75.75 0 017.25 4zM8 11.25a.75.75 0 000 1.5h6a.75.75 0 000-1.5H8z"
            fill="currentColor"
          />
        </svg>
      }
      {...restProps}
    />
  )
}
export default NumericIcon

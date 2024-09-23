import { IconWrapper, IconProps } from '../../IconWrapper'

const Zoom100Icon = (allProps: IconProps) => {
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
            d="M6 4.25A1.75 1.75 0 004.25 6v2c0 .966.784 1.75 1.75 1.75h2A1.75 1.75 0 009.75 8V6A1.75 1.75 0 008 4.25H6zM5.75 6A.25.25 0 016 5.75h2a.25.25 0 01.25.25v2a.25.25 0 01-.25.25H6A.25.25 0 015.75 8V6z"
            fill="currentColor"
          />
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M.75 7a6.25 6.25 0 1111.168 3.857l2.612 2.613a.75.75 0 11-1.06 1.06l-2.613-2.612A6.25 6.25 0 01.75 7zM7 2.25a4.75 4.75 0 100 9.5 4.75 4.75 0 000-9.5z"
            fill="currentColor"
          />
        </svg>
      }
      {...restProps}
    />
  )
}
export default Zoom100Icon

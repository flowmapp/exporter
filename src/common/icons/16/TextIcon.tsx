import { IconWrapper, IconProps } from '../../IconWrapper'

const TextIcon = (allProps: IconProps) => {
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
            d="M4 2.75c-.69 0-1.25.56-1.25 1.25v1a.75.75 0 01-1.5 0V4A2.75 2.75 0 014 1.25h8A2.75 2.75 0 0114.75 4v1a.75.75 0 01-1.5 0V4c0-.69-.56-1.25-1.25-1.25H8.75v10.5H11a.75.75 0 010 1.5H5a.75.75 0 010-1.5h2.25V2.75H4z"
            fill="currentColor"
          />
        </svg>
      }
      {...restProps}
    />
  )
}
export default TextIcon

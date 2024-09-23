import { IconWrapper, IconProps } from '../../IconWrapper'

const PreviewIcon = (allProps: IconProps) => {
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
            d="M1.25 3.5A2.75 2.75 0 014 .75h8a2.75 2.75 0 012.75 2.75V6A2.75 2.75 0 0112 8.75H4A2.75 2.75 0 011.25 6V3.5zM4 2.25c-.69 0-1.25.56-1.25 1.25V6c0 .69.56 1.25 1.25 1.25h8c.69 0 1.25-.56 1.25-1.25V3.5c0-.69-.56-1.25-1.25-1.25H4zM1.75 11a.75.75 0 01.75-.75h11a.75.75 0 010 1.5h-11a.75.75 0 01-.75-.75zm0 3a.75.75 0 01.75-.75H8a.75.75 0 010 1.5H2.5a.75.75 0 01-.75-.75z"
            fill="currentColor"
          />
        </svg>
      }
      {...restProps}
    />
  )
}
export default PreviewIcon

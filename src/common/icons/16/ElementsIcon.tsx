import { IconWrapper, IconProps } from '../../IconWrapper'

const ElementsIcon = (allProps: IconProps) => {
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
            d="M4 1.75A2.25 2.25 0 001.75 4v1A2.25 2.25 0 004 7.25h1A2.25 2.25 0 007.25 5V4A2.25 2.25 0 005 1.75H4zM3.25 4A.75.75 0 014 3.25h1a.75.75 0 01.75.75v1a.75.75 0 01-.75.75H4A.75.75 0 013.25 5V4zM4 8.75A2.25 2.25 0 001.75 11v1A2.25 2.25 0 004 14.25h1A2.25 2.25 0 007.25 12v-1A2.25 2.25 0 005 8.75H4zM3.25 11a.75.75 0 01.75-.75h1a.75.75 0 01.75.75v1a.75.75 0 01-.75.75H4a.75.75 0 01-.75-.75v-1zM11 1.75A2.25 2.25 0 008.75 4v1A2.25 2.25 0 0011 7.25h1A2.25 2.25 0 0014.25 5V4A2.25 2.25 0 0012 1.75h-1zM10.25 4a.75.75 0 01.75-.75h1a.75.75 0 01.75.75v1a.75.75 0 01-.75.75h-1a.75.75 0 01-.75-.75V4z"
            fill="currentColor"
          />
          <path
            d="M11.5 8.5a.75.75 0 01.75.75v1.5h1.5a.75.75 0 010 1.5h-1.5v1.5a.75.75 0 01-1.5 0v-1.5h-1.5a.75.75 0 010-1.5h1.5v-1.5a.75.75 0 01.75-.75z"
            fill="currentColor"
          />
        </svg>
      }
      {...restProps}
    />
  )
}
export default ElementsIcon

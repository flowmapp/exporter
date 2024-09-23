import { IconWrapper, IconProps } from '../../IconWrapper'

const Heading2Icon = (allProps: IconProps) => {
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
            d="M2.75 2.5a.75.75 0 00-1.5 0v11a.75.75 0 001.5 0V8.75h5.5v4.75a.75.75 0 001.5 0v-11a.75.75 0 00-1.5 0v4.75h-5.5V2.5zM12.5 6.75a.75.75 0 000 1.5H14a.25.25 0 01.25.25v1a.25.25 0 01-.25.25h-1a1.75 1.75 0 00-1.75 1.75v1c0 .966.784 1.75 1.75 1.75h2a.75.75 0 000-1.5h-2a.25.25 0 01-.25-.25v-1a.25.25 0 01.25-.25h1a1.75 1.75 0 001.75-1.75v-1A1.75 1.75 0 0014 6.75h-1.5z"
            fill="currentColor"
          />
        </svg>
      }
      {...restProps}
    />
  )
}
export default Heading2Icon

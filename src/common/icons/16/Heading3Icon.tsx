import { IconWrapper, IconProps } from '../../IconWrapper'

const Heading3Icon = (allProps: IconProps) => {
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
            d="M2 1.75a.75.75 0 01.75.75v4.75h5.5V2.5a.75.75 0 011.5 0v11a.75.75 0 01-1.5 0V8.75h-5.5v4.75a.75.75 0 01-1.5 0v-11A.75.75 0 012 1.75zM11.75 7.5a.75.75 0 01.75-.75H14c.966 0 1.75.784 1.75 1.75v4A1.75 1.75 0 0114 14.25h-1.5a.75.75 0 010-1.5H14a.25.25 0 00.25-.25v-1.25H12.5a.75.75 0 010-1.5h1.75V8.5a.25.25 0 00-.25-.25h-1.5a.75.75 0 01-.75-.75z"
            fill="currentColor"
          />
        </svg>
      }
      {...restProps}
    />
  )
}
export default Heading3Icon

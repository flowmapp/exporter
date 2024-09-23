import { IconWrapper, IconProps } from '../../IconWrapper'

const ListIcon = (allProps: IconProps) => {
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
            d="M1.25 2.5A.75.75 0 012 1.75h12a.75.75 0 010 1.5H4.75V5A2.25 2.25 0 007 7.25h7a.75.75 0 010 1.5H8.75v1.75A2.25 2.25 0 0011 12.75h3a.75.75 0 010 1.5h-3a3.75 3.75 0 01-3.75-3.75V8.75H7A3.75 3.75 0 013.25 5V3.25H2a.75.75 0 01-.75-.75z"
            fill="currentColor"
          />
        </svg>
      }
      {...restProps}
    />
  )
}
export default ListIcon

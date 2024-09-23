import { IconWrapper, IconProps } from '../../IconWrapper'

const ListViewIcon = (allProps: IconProps) => {
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
            d="M1.25 4A.75.75 0 012 3.25h12a.75.75 0 010 1.5H2A.75.75 0 011.25 4zM1.25 8A.75.75 0 012 7.25h12a.75.75 0 010 1.5H2A.75.75 0 011.25 8zM2 11.25a.75.75 0 000 1.5h12a.75.75 0 000-1.5H2z"
            fill="currentColor"
          />
        </svg>
      }
      {...restProps}
    />
  )
}
export default ListViewIcon

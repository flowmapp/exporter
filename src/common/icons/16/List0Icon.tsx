import { IconWrapper, IconProps } from '../../IconWrapper'

const List0Icon = (allProps: IconProps) => {
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
            d="M2.25 2.5A.75.75 0 013 1.75h10a.75.75 0 010 1.5H5.75v4H13a.75.75 0 010 1.5H5.75v1.75A2.25 2.25 0 008 12.75h5a.75.75 0 010 1.5H8a3.75 3.75 0 01-3.75-3.75V3.25H3a.75.75 0 01-.75-.75z"
            fill="currentColor"
          />
        </svg>
      }
      {...restProps}
    />
  )
}
export default List0Icon

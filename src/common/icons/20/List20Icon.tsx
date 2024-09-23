import { IconWrapper, IconProps } from '../../IconWrapper'

const List20Icon = (allProps: IconProps) => {
  const { svgProps: props, ...restProps } = allProps
  return (
    <IconWrapper
      icon={
        <svg
          width="100%"
          height="100%"
          viewBox="0 0 20 20"
          fill="currentColor"
          xmlns="http://www.w3.org/2000/svg"
          {...props}
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M1.5 3a1 1 0 011-1h15a1 1 0 110 2H6v3a2 2 0 002 2h9.5a1 1 0 110 2H10v3a2 2 0 002 2h5.5a1 1 0 110 2H12a4 4 0 01-4-4v-3a4 4 0 01-4-4V4H2.5a1 1 0 01-1-1z"
            fill="currentColor"
          />
        </svg>
      }
      {...restProps}
    />
  )
}
export default List20Icon

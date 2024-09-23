import { IconWrapper, IconProps } from '../../IconWrapper'

const FilterDown12Icon = (allProps: IconProps) => {
  const { svgProps: props, ...restProps } = allProps
  return (
    <IconWrapper
      icon={
        <svg
          width="100%"
          height="100%"
          viewBox="0 0 12 12"
          fill="currentColor"
          xmlns="http://www.w3.org/2000/svg"
          {...props}
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M1.25 3A.75.75 0 012 2.25h8a.75.75 0 010 1.5H2A.75.75 0 011.25 3zM1.25 6A.75.75 0 012 5.25h5a.75.75 0 010 1.5H2A.75.75 0 011.25 6zM1.25 9A.75.75 0 012 8.25h2a.75.75 0 010 1.5H2A.75.75 0 011.25 9z"
            fill="currentColor"
          />
        </svg>
      }
      {...restProps}
    />
  )
}
export default FilterDown12Icon

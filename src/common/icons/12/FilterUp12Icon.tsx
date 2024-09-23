import { IconWrapper, IconProps } from '../../IconWrapper'

const FilterUp12Icon = (allProps: IconProps) => {
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
            d="M1.25 9c0 .414.336.75.75.75h8a.75.75 0 000-1.5H2a.75.75 0 00-.75.75zM1.25 6c0 .414.336.75.75.75h5a.75.75 0 000-1.5H2a.75.75 0 00-.75.75zM1.25 3c0 .414.336.75.75.75h2a.75.75 0 000-1.5H2a.75.75 0 00-.75.75z"
            fill="currentColor"
          />
        </svg>
      }
      {...restProps}
    />
  )
}
export default FilterUp12Icon

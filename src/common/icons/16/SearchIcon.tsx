import { IconWrapper, IconProps } from '../../IconWrapper'

const SearchIcon = (allProps: IconProps) => {
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
            d="M6.5.75a5.75 5.75 0 103.501 10.312l3.469 3.468a.75.75 0 101.06-1.06L11.062 10A5.75 5.75 0 006.5.75zM2.25 6.5a4.25 4.25 0 118.5 0 4.25 4.25 0 01-8.5 0z"
            fill="currentColor"
          />
        </svg>
      }
      {...restProps}
    />
  )
}
export default SearchIcon

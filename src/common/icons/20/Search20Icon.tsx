import { IconWrapper, IconProps } from '../../IconWrapper'

const Search20Icon = (allProps: IconProps) => {
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
            d="M8 3a5 5 0 100 10A5 5 0 008 3zM1 8a7 7 0 1112.606 4.192l4.101 4.1a1 1 0 01-1.414 1.415l-4.1-4.1A7 7 0 011 8z"
            fill="currentColor"
          />
        </svg>
      }
      {...restProps}
    />
  )
}
export default Search20Icon

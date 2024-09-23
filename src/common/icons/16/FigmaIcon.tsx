import { IconWrapper, IconProps } from '../../IconWrapper'

const FigmaIcon = (allProps: IconProps) => {
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
            d="M2.75 3.75a3 3 0 013-3h4.5A3 3 0 0112.234 6a3 3 0 01-3.484 4.849v1.901a3 3 0 11-4.984-2.25A2.993 2.993 0 012.75 8.25c0-.896.393-1.7 1.016-2.25A2.993 2.993 0 012.75 3.75zm3 6h1.5v-3h-1.5a1.5 1.5 0 100 3zm1.5 1.5h-1.5a1.5 1.5 0 101.5 1.5v-1.5zm3-1.5a1.5 1.5 0 110-3 1.5 1.5 0 010 3zm-3-4.5h-1.5a1.5 1.5 0 110-3h1.5v3zm3 0a1.5 1.5 0 000-3h-1.5v3h1.5z"
            fill="currentColor"
          />
        </svg>
      }
      {...restProps}
    />
  )
}
export default FigmaIcon

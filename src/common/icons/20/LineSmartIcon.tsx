import { IconWrapper, IconProps } from '../../IconWrapper'

const LineSmartIcon = (allProps: IconProps) => {
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
            d="M14.954 4H17a1 1 0 110 2h-2c-.953 0-1.6.001-2.1.046-.485.044-.73.124-.9.222a2 2 0 00-.732.732c-.099.17-.178.415-.222.9C11.001 8.4 11 9.047 11 10v.046c0 .896 0 1.635-.054 2.234-.057.624-.178 1.194-.482 1.72A4 4 0 019 15.464c-.526.304-1.096.425-1.72.482C6.68 16 5.942 16 5.046 16H3a1 1 0 110-2h2c.953 0 1.6-.001 2.1-.046.485-.044.73-.123.9-.222A2 2 0 008.732 13c.098-.17.178-.415.222-.9.045-.5.046-1.147.046-2.1v-.046c0-.896 0-1.634.054-2.234.057-.624.178-1.194.482-1.72A4 4 0 0111 4.536c.526-.304 1.096-.425 1.72-.482C13.32 4 14.058 4 14.954 4z"
            fill="currentColor"
          />
        </svg>
      }
      {...restProps}
    />
  )
}
export default LineSmartIcon

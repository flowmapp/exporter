import { IconWrapper, IconProps } from '../../IconWrapper'

const ImportIcon = (allProps: IconProps) => {
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
            d="M10 .414a1 1 0 011 1V9l2.293-2.293a1 1 0 111.414 1.414l-3.293 3.293a2 2 0 01-2.828 0L5.293 8.121a1 1 0 011.414-1.414L9 9V1.414a1 1 0 011-1zM2 12.4a1 1 0 011 1v1a3 3 0 003 3h8a3 3 0 003-3v-1a1 1 0 112 0v1a5 5 0 01-5 5H6a5 5 0 01-5-5v-1a1 1 0 011-1z"
            fill="currentColor"
          />
        </svg>
      }
      {...restProps}
    />
  )
}
export default ImportIcon

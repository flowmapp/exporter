import { IconWrapper, IconProps } from '../../IconWrapper'

const ExportIcon = (allProps: IconProps) => {
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
            d="M8.586 2a2 2 0 012.828 0l3.293 3.293a1 1 0 01-1.414 1.414L11 4.414V12a1 1 0 11-2 0V4.414L6.707 6.707a1 1 0 11-1.414-1.414L8.586 2zM2 12.4a1 1 0 011 1v1a3 3 0 003 3h8a3 3 0 003-3v-1a1 1 0 112 0v1a5 5 0 01-5 5H6a5 5 0 01-5-5v-1a1 1 0 011-1z"
            fill="currentColor"
          />
        </svg>
      }
      {...restProps}
    />
  )
}
export default ExportIcon

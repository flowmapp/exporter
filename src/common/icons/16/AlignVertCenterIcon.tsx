import { IconWrapper, IconProps } from '../../IconWrapper'

const AlignVertCenterIcon = (allProps: IconProps) => {
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
            d="M4 3.5a1.5 1.5 0 113 0v3.75h2V5.5a1.5 1.5 0 113 0v1.75h2.5a.75.75 0 010 1.5H12v1.75a1.5 1.5 0 01-3 0V8.75H7v3.75a1.5 1.5 0 01-3 0V8.75H1.5a.75.75 0 010-1.5H4V3.5z"
            fill="currentColor"
          />
        </svg>
      }
      {...restProps}
    />
  )
}
export default AlignVertCenterIcon

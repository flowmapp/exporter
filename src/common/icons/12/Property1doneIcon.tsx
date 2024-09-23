import { IconWrapper, IconProps } from '../../IconWrapper'

const Property1doneIcon = (allProps: IconProps) => {
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
            d="M9.707 2.793a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0l-1.5-1.5a1 1 0 011.414-1.414L5 6.086l3.293-3.293a1 1 0 011.414 0z"
            fill="currentColor"
          />
        </svg>
      }
      {...restProps}
    />
  )
}
export default Property1doneIcon

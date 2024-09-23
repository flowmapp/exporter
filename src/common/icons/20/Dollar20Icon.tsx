import { IconWrapper, IconProps } from '../../IconWrapper'

const Dollar20Icon = (allProps: IconProps) => {
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
            d="M10 .5a1 1 0 011 1V3h4.5a1 1 0 110 2H6a2 2 0 100 4h8a4 4 0 010 8h-3v1.5a1 1 0 11-2 0V17H4a1 1 0 110-2h10a2 2 0 100-4H6a4 4 0 110-8h3V1.5a1 1 0 011-1z"
            fill="currentColor"
          />
        </svg>
      }
      {...restProps}
    />
  )
}
export default Dollar20Icon

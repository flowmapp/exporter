import { IconWrapper, IconProps } from '../../IconWrapper'

const Process20Icon = (allProps: IconProps) => {
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
            d="M1 6a4 4 0 014-4h10a4 4 0 014 4v8a4 4 0 01-4 4H5a4 4 0 01-4-4V6zm4-2a2 2 0 00-2 2v8a2 2 0 002 2h10a2 2 0 002-2V6a2 2 0 00-2-2H5z"
            fill="currentColor"
          />
        </svg>
      }
      {...restProps}
    />
  )
}
export default Process20Icon

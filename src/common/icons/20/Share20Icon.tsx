import { IconWrapper, IconProps } from '../../IconWrapper'

const Share20Icon = (allProps: IconProps) => {
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
            d="M11.293 3.293a1 1 0 011.414 0L18 8.586a2 2 0 010 2.828l-5.293 5.293a1 1 0 01-1.414-1.414L15.586 11H8a3 3 0 00-3 3v4a1 1 0 11-2 0v-4a5 5 0 015-5h7.586l-4.293-4.293a1 1 0 010-1.414z"
            fill="currentColor"
          />
        </svg>
      }
      {...restProps}
    />
  )
}
export default Share20Icon

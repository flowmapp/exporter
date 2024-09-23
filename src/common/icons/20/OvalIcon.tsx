import { IconWrapper, IconProps } from '../../IconWrapper'

const OvalIcon = (allProps: IconProps) => {
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
            d="M0 10a7 7 0 017-7h6a7 7 0 110 14H7a7 7 0 01-7-7zm7-5a5 5 0 000 10h6a5 5 0 000-10H7z"
            fill="currentColor"
          />
        </svg>
      }
      {...restProps}
    />
  )
}
export default OvalIcon

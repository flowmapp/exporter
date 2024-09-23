import { IconWrapper, IconProps } from '../../IconWrapper'

const Property1reviewIcon = (allProps: IconProps) => {
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
            d="M6 9.5c4 0 5.5-3.5 5.5-3.5S10 2.5 6 2.5.5 6 .5 6 2 9.5 6 9.5zM6 8a2 2 0 100-4 2 2 0 000 4z"
            fill="currentColor"
          />
        </svg>
      }
      {...restProps}
    />
  )
}
export default Property1reviewIcon

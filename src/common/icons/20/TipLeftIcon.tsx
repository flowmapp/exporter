import { IconWrapper, IconProps } from '../../IconWrapper'

const TipLeftIcon = (allProps: IconProps) => {
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
            d="M2 10a1 1 0 011-1h11.5a1 1 0 110 2H3a1 1 0 01-1-1zM16.5 10a1 1 0 011-1h.5a1 1 0 110 2h-.5a1 1 0 01-1-1z"
            fill="currentColor"
          />
        </svg>
      }
      {...restProps}
    />
  )
}
export default TipLeftIcon

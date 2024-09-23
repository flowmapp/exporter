import { IconWrapper, IconProps } from '../../IconWrapper'

const TipRoundRight20Icon = (allProps: IconProps) => {
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
          <path d="M10.126 11A4.002 4.002 0 0018 10a4 4 0 00-7.874-1H5.5a1 1 0 100 2h4.626z" fill="currentColor" />
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M3.5 10a1 1 0 00-1-1H2a1 1 0 000 2h.5a1 1 0 001-1z"
            fill="currentColor"
          />
        </svg>
      }
      {...restProps}
    />
  )
}
export default TipRoundRight20Icon

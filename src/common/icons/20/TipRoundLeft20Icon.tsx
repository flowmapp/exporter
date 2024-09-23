import { IconWrapper, IconProps } from '../../IconWrapper'

const TipRoundLeft20Icon = (allProps: IconProps) => {
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
          <path d="M9.874 11A4.002 4.002 0 012 10a4 4 0 017.874-1H14.5a1 1 0 110 2H9.874z" fill="currentColor" />
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M16.5 10a1 1 0 011-1h.5a1 1 0 110 2h-.5a1 1 0 01-1-1z"
            fill="currentColor"
          />
        </svg>
      }
      {...restProps}
    />
  )
}
export default TipRoundLeft20Icon

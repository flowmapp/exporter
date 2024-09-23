import { IconWrapper, IconProps } from '../../IconWrapper'

const Help20Icon = (allProps: IconProps) => {
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
            d="M12.261 5.017C12.148 5.002 11.996 5 11.5 5H9a2 2 0 00-2 2v.5a1 1 0 01-2 0V7a4 4 0 014-4h2.569c.397 0 .692 0 .953.034a4 4 0 013.444 3.444c.034.261.034.556.034.953V8a4 4 0 01-4 4 1 1 0 00-1 1v.5a1 1 0 11-2 0V13a3 3 0 013-3 2 2 0 002-2v-.5c0-.496-.002-.647-.017-.761a2 2 0 00-1.722-1.722z"
            fill="currentColor"
          />
          <path d="M11.5 17a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0z" fill="currentColor" />
        </svg>
      }
      {...restProps}
    />
  )
}
export default Help20Icon

import { IconWrapper, IconProps } from '../../IconWrapper'

const UnpinIcon = (allProps: IconProps) => {
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
            d="M12.052 1.143a3 3 0 013.842.336l2.627 2.627a3 3 0 01.336 3.842l-2.038 2.911a1 1 0 11-1.638-1.147l2.037-2.91a1 1 0 00-.112-1.281L14.48 2.894a1 1 0 00-1.28-.113L10.288 4.82A1 1 0 119.14 3.181l2.91-2.038zM3.293 9.293a1 1 0 011.414 0l6 6a1 1 0 01-1.414 1.414L7 14.414l-3.793 3.793a1 1 0 01-1.414-1.414L5.586 13l-2.293-2.293a1 1 0 010-1.414zM3.707 2.293a1 1 0 00-1.414 1.414l14 14a1 1 0 001.414-1.414l-14-14z"
            fill="currentColor"
          />
        </svg>
      }
      {...restProps}
    />
  )
}
export default UnpinIcon

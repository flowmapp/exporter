import { IconWrapper, IconProps } from '../../IconWrapper'

const FillColorIcon = (allProps: IconProps) => {
  const { svgProps: props, ...restProps } = allProps
  return (
    <IconWrapper
      icon={
        <svg
          width="100%"
          height="100%"
          viewBox="0 0 16 16"
          fill="currentColor"
          xmlns="http://www.w3.org/2000/svg"
          {...props}
        >
          <g clipPath="url(#prefix__clip0_1173_2177)">
            <circle cx={8} cy={8} r={7.5} fill="#6696FF" />
          </g>
          <defs>
            <clipPath id="prefix__clip0_1173_2177">
              <path fill="currentColor" d="M0 0h16v16H0z" />
            </clipPath>
          </defs>
        </svg>
      }
      {...restProps}
    />
  )
}
export default FillColorIcon

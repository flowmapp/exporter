import { IconWrapper, IconProps } from '../../IconWrapper'

const Insert20Icon = (allProps: IconProps) => {
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
          <g clipPath="url(#prefix__clip0_2439_12075)">
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M.393 4.688C0 5.811 0 7.208 0 10c0 2.793 0 4.19.393 5.312a7 7 0 004.295 4.295C5.811 20 7.208 20 10 20c2.793 0 4.19 0 5.312-.393a7 7 0 004.295-4.295C20 14.189 20 12.792 20 10c0-2.793 0-4.19-.393-5.312A7 7 0 0015.312.393C14.189 0 12.792 0 10 0 7.207 0 5.81 0 4.688.393A7 7 0 00.393 4.688zM11 6a1 1 0 10-2 0v3H6a1 1 0 000 2h3v3a1 1 0 102 0v-3h3a1 1 0 100-2h-3V6z"
              fill="currentColor"
            />
          </g>
          <defs>
            <clipPath id="prefix__clip0_2439_12075">
              <path fill="currentColor" d="M0 0h20v20H0z" />
            </clipPath>
          </defs>
        </svg>
      }
      {...restProps}
    />
  )
}
export default Insert20Icon

import { IconWrapper, IconProps } from '../../IconWrapper'

const Done12Icon = (allProps: IconProps) => {
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
          <g clipPath="url(#prefix__clip0_4460_12888)">
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M6 12A6 6 0 106 0a6 6 0 000 12zm3.03-6.97a.75.75 0 00-1.06-1.06L5.5 6.44l-.97-.97a.75.75 0 00-1.06 1.06l1.146 1.147a1.25 1.25 0 001.768 0L9.03 5.03z"
              fill="currentColor"
            />
          </g>
          <defs>
            <clipPath id="prefix__clip0_4460_12888">
              <path fill="currentColor" d="M0 0h12v12H0z" />
            </clipPath>
          </defs>
        </svg>
      }
      {...restProps}
    />
  )
}
export default Done12Icon

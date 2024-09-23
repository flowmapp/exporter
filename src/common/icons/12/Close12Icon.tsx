import { IconWrapper, IconProps } from '../../IconWrapper'

const Close12Icon = (allProps: IconProps) => {
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
            d="M1.47 1.47a.75.75 0 011.06 0L6 4.94l3.47-3.47a.75.75 0 111.06 1.06L7.06 6l3.47 3.47a.75.75 0 11-1.06 1.06L6 7.06l-3.47 3.47a.75.75 0 11-1.06-1.06L4.94 6 1.47 2.53a.75.75 0 010-1.06z"
            fill="currentColor"
          />
        </svg>
      }
      {...restProps}
    />
  )
}
export default Close12Icon

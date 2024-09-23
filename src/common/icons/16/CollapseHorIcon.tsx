import { IconWrapper, IconProps } from '../../IconWrapper'

const CollapseHorIcon = (allProps: IconProps) => {
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
          <path
            d="M3.47 11.47a.75.75 0 101.06 1.06l2.586-2.585a2.75 2.75 0 000-3.89L4.53 3.47a.75.75 0 00-1.06 1.06l2.585 2.586a1.25 1.25 0 010 1.768L3.47 11.47zM8.47 11.47a.75.75 0 101.06 1.06l2.586-2.585a2.75 2.75 0 000-3.89L9.53 3.47a.75.75 0 00-1.06 1.06l2.585 2.586a1.25 1.25 0 010 1.768L8.47 11.47z"
            fill="currentColor"
          />
        </svg>
      }
      {...restProps}
    />
  )
}
export default CollapseHorIcon

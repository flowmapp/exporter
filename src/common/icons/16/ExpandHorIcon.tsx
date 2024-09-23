import { IconWrapper, IconProps } from '../../IconWrapper'

const ExpandHorIcon = (allProps: IconProps) => {
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
            d="M7.53 11.47a.75.75 0 11-1.06 1.06L3.884 9.945a2.75 2.75 0 010-3.89L6.47 3.47a.75.75 0 011.06 1.06L4.945 7.116a1.25 1.25 0 000 1.768L7.53 11.47zM12.53 11.47a.75.75 0 11-1.06 1.06L8.884 9.945a2.75 2.75 0 010-3.89L11.47 3.47a.75.75 0 111.06 1.06L9.945 7.116a1.25 1.25 0 000 1.768l2.585 2.586z"
            fill="currentColor"
          />
        </svg>
      }
      {...restProps}
    />
  )
}
export default ExpandHorIcon

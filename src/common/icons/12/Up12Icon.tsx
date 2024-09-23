import { IconWrapper, IconProps } from '../../IconWrapper'

const Up12Icon = (allProps: IconProps) => {
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
            d="M2.47 7.53a.75.75 0 001.06 0l1.586-1.585a1.25 1.25 0 011.768 0L8.47 7.53a.75.75 0 001.06-1.06L7.945 4.884a2.75 2.75 0 00-3.89 0L2.47 6.47a.75.75 0 000 1.06z"
            fill="currentColor"
          />
        </svg>
      }
      {...restProps}
    />
  )
}
export default Up12Icon

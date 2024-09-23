import { IconWrapper, IconProps } from '../../IconWrapper'

const Down12Icon = (allProps: IconProps) => {
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
            d="M2.47 4.47a.75.75 0 011.06 0l1.586 1.585a1.25 1.25 0 001.768 0L8.47 4.47a.75.75 0 011.06 1.06L7.945 7.116a2.75 2.75 0 01-3.89 0L2.47 5.53a.75.75 0 010-1.06z"
            fill="currentColor"
          />
        </svg>
      }
      {...restProps}
    />
  )
}
export default Down12Icon

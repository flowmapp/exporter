import { IconWrapper, IconProps } from '../../IconWrapper'

const DownIcon = (allProps: IconProps) => {
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
            fillRule="evenodd"
            clipRule="evenodd"
            d="M3.47 6.47a.75.75 0 011.06 0l2.586 2.585a1.25 1.25 0 001.768 0L11.47 6.47a.75.75 0 111.06 1.06l-2.585 2.586a2.75 2.75 0 01-3.89 0L3.47 7.53a.75.75 0 010-1.06z"
            fill="currentColor"
          />
        </svg>
      }
      {...restProps}
    />
  )
}
export default DownIcon

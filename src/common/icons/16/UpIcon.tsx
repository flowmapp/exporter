import { IconWrapper, IconProps } from '../../IconWrapper'

const UpIcon = (allProps: IconProps) => {
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
            d="M3.47 9.53a.75.75 0 001.06 0l2.586-2.585a1.25 1.25 0 011.768 0L11.47 9.53a.75.75 0 101.06-1.06L9.945 5.884a2.75 2.75 0 00-3.89 0L3.47 8.47a.75.75 0 000 1.06z"
            fill="currentColor"
          />
        </svg>
      }
      {...restProps}
    />
  )
}
export default UpIcon

import { IconWrapper, IconProps } from '../../IconWrapper'

const Done2Icon = (allProps: IconProps) => {
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
            d="M8 16A8 8 0 108 0a8 8 0 000 16zm4.03-9.97a.75.75 0 00-1.06-1.06L7 8.94 5.53 7.47a.75.75 0 00-1.06 1.06L7 11.06l5.03-5.03z"
            fill="currentColor"
          />
        </svg>
      }
      {...restProps}
    />
  )
}
export default Done2Icon

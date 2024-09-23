import { IconWrapper, IconProps } from '../../IconWrapper'

const CircleIcon = (allProps: IconProps) => {
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
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M1 10a9 9 0 1118 0 9 9 0 01-18 0zm9-7a7 7 0 100 14 7 7 0 000-14z"
            fill="currentColor"
          />
        </svg>
      }
      {...restProps}
    />
  )
}
export default CircleIcon

import { IconWrapper, IconProps } from '../../IconWrapper'

const BorderLineIcon = (allProps: IconProps) => {
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
            d="M2.343 17.657a1 1 0 010-1.414l13.9-13.9a1 1 0 111.414 1.414l-13.9 13.9a1 1 0 01-1.414 0z"
            fill="currentColor"
          />
        </svg>
      }
      {...restProps}
    />
  )
}
export default BorderLineIcon

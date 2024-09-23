import { IconWrapper, IconProps } from '../../IconWrapper'

const BorderDashed120Icon = (allProps: IconProps) => {
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
            d="M10.707 9.293a1 1 0 010-1.414l5.536-5.536a1 1 0 111.414 1.414L12.12 9.293a1 1 0 01-1.414 0zM2.343 17.657a1 1 0 010-1.414l5.536-5.536a1 1 0 011.414 1.414l-5.536 5.536a1 1 0 01-1.414 0z"
            fill="currentColor"
          />
        </svg>
      }
      {...restProps}
    />
  )
}
export default BorderDashed120Icon

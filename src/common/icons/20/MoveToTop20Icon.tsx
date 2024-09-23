import { IconWrapper, IconProps } from '../../IconWrapper'

const MoveToTop20Icon = (allProps: IconProps) => {
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
            d="M11 18a1 1 0 11-2 0V8.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 6a2 2 0 012.828 0l5.293 5.293a1 1 0 01-1.414 1.414L11 8.414V18zM2 3a1 1 0 010-2h16a1 1 0 110 2H2z"
            fill="currentColor"
          />
        </svg>
      }
      {...restProps}
    />
  )
}
export default MoveToTop20Icon

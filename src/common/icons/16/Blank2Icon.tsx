import { IconWrapper, IconProps } from '../../IconWrapper'

const Blank2Icon = (allProps: IconProps) => {
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
            d="M1.245 4.455C1 5.208 1 6.139 1 8s0 2.792.245 3.545a5 5 0 003.21 3.21C5.208 15 6.139 15 8 15s2.792 0 3.545-.245a5 5 0 003.21-3.21C15 10.792 15 9.861 15 8s0-2.792-.245-3.545a5 5 0 00-3.21-3.21C10.792 1 9.861 1 8 1s-2.792 0-3.545.245a5 5 0 00-3.21 3.21zM8 4.75a.75.75 0 01.75.75v1.75h1.75a.75.75 0 010 1.5H8.75v1.75a.75.75 0 01-1.5 0V8.75H5.5a.75.75 0 010-1.5h1.75V5.5A.75.75 0 018 4.75z"
            fill="currentColor"
          />
        </svg>
      }
      {...restProps}
    />
  )
}
export default Blank2Icon

import { IconWrapper, IconProps } from '../../IconWrapper'

const CodeIcon = (allProps: IconProps) => {
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
            d="M6.08 2.975a.75.75 0 10-1.16-.95L1.456 6.26a2.75 2.75 0 000 3.482l3.464 4.234a.75.75 0 101.16-.95L2.617 8.792a1.25 1.25 0 010-1.583L6.08 2.975zM9.92 2.975a.75.75 0 111.16-.95l3.464 4.234a2.75 2.75 0 010 3.482l-3.463 4.234a.75.75 0 11-1.161-.95l3.463-4.233a1.25 1.25 0 000-1.583L9.92 2.975z"
            fill="currentColor"
          />
        </svg>
      }
      {...restProps}
    />
  )
}
export default CodeIcon

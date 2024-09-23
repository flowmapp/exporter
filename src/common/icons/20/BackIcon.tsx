import { IconWrapper, IconProps } from '../../IconWrapper'

const BackIcon = (allProps: IconProps) => {
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
            d="M6.707 2.293a1 1 0 010 1.414L4.414 6H12.5a5.5 5.5 0 110 11H10a1 1 0 110-2h2.5a3.5 3.5 0 100-7H4.414l2.293 2.293a1 1 0 11-1.414 1.414L2 8.414a2 2 0 010-2.828l.261.26L2 5.587l3.293-3.293a1 1 0 011.414 0z"
            fill="currentColor"
          />
        </svg>
      }
      {...restProps}
    />
  )
}
export default BackIcon

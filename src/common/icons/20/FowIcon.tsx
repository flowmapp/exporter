import { IconWrapper, IconProps } from '../../IconWrapper'

const FowIcon = (allProps: IconProps) => {
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
            d="M13.293 2.293a1 1 0 011.414 0L18 5.586a2 2 0 010 2.828l-3.293 3.293a1 1 0 01-1.414-1.414L15.586 8H7.5a3.5 3.5 0 100 7H10a1 1 0 110 2H7.5a5.5 5.5 0 110-11h8.086l-2.293-2.293a1 1 0 010-1.414z"
            fill="currentColor"
          />
        </svg>
      }
      {...restProps}
    />
  )
}
export default FowIcon

import { IconWrapper, IconProps } from '../../IconWrapper'

const LineStraighIcon = (allProps: IconProps) => {
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
            d="M17.814 4.419a1 1 0 01-.233 1.395l-14 10a1 1 0 11-1.162-1.628l14-10a1 1 0 011.395.233z"
            fill="currentColor"
          />
        </svg>
      }
      {...restProps}
    />
  )
}
export default LineStraighIcon

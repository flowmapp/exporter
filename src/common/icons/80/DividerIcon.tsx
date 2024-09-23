import { IconWrapper, IconProps } from '../../IconWrapper'

const DividerIcon = (allProps: IconProps) => {
  const { svgProps: props, ...restProps } = allProps
  return (
    <IconWrapper
      icon={
        <svg
          width="100%"
          height="100%"
          viewBox="0 0 80 80"
          fill="currentColor"
          xmlns="http://www.w3.org/2000/svg"
          {...props}
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M61.06 18.94a1.5 1.5 0 010 2.12l-40 40a1.5 1.5 0 01-2.12-2.12l40-40a1.5 1.5 0 012.12 0z"
            fill="currentColor"
          />
        </svg>
      }
      {...restProps}
    />
  )
}
export default DividerIcon

import { IconWrapper, IconProps } from '../../IconWrapper'

const HexagonIcon = (allProps: IconProps) => {
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
            d="M8.039.956a4 4 0 013.922 0l5 2.812A4 4 0 0119 7.255v5.49a4 4 0 01-2.039 3.487l-5 2.812a4 4 0 01-3.922 0l-5-2.812A4 4 0 011 12.746V7.255a4 4 0 012.039-3.487l5-2.812zm2.941 1.743a2 2 0 00-1.96 0l-5 2.812A2 2 0 003 7.255v5.49a2 2 0 001.02 1.744l5 2.812a2 2 0 001.96 0l5-2.812A2 2 0 0017 12.745v-5.49a2 2 0 00-1.02-1.744l-5-2.812z"
            fill="currentColor"
          />
        </svg>
      }
      {...restProps}
    />
  )
}
export default HexagonIcon

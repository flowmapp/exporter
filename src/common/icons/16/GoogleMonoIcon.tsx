import { IconWrapper, IconProps } from '../../IconWrapper'

const GoogleMonoIcon = (allProps: IconProps) => {
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
            d="M14.523 6.727H8v2.705h3.755C11.405 11.15 9.94 12.136 8 12.136A4.128 4.128 0 013.864 8 4.128 4.128 0 018 3.864c.986 0 1.877.35 2.577.922l2.037-2.036C11.373 1.668 9.782 1 8 1a6.98 6.98 0 00-7 7c0 3.882 3.118 7 7 7 3.5 0 6.682-2.546 6.682-7 0-.414-.064-.86-.16-1.273z"
            fill="currentColor"
          />
        </svg>
      }
      {...restProps}
    />
  )
}
export default GoogleMonoIcon

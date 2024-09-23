import { IconWrapper, IconProps } from '../../IconWrapper'

const LinkurlIcon = (allProps: IconProps) => {
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
            d="M16.182 2.768a4.5 4.5 0 00-6.364 0l-.025.025a1 1 0 001.414 1.414l.025-.025a2.5 2.5 0 013.536 0l1.05 1.05a2.5 2.5 0 010 3.536l-2.55 2.55a2.5 2.5 0 01-3.536 0l-.525-.525a1 1 0 00-1.414 1.414l.525.525a4.5 4.5 0 006.364 0l2.55-2.55a4.5 4.5 0 000-6.364l-1.05-1.05z"
            fill="currentColor"
          />
          <path
            d="M6.732 8.682a2.5 2.5 0 013.536 0l.525.525a1 1 0 101.414-1.414l-.525-.525a4.5 4.5 0 00-6.364 0l-2.55 2.55a4.5 4.5 0 000 6.364l1.05 1.05a4.5 4.5 0 006.364 0l.025-.025a1 1 0 00-1.414-1.414l-.025.025a2.5 2.5 0 01-3.536 0l-1.05-1.05a2.5 2.5 0 010-3.536l2.55-2.55z"
            fill="currentColor"
          />
        </svg>
      }
      {...restProps}
    />
  )
}
export default LinkurlIcon
